const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const stripe = require("stripe")('sk_test_51OAihTD1GkU15UzrSpwxgytOD0yZ4HB5YXd3XppGLWcIwG3gLCIBMSlYdQdeb0Gpi1G2vuMNga83fs348PEu7qkJ00YYReH2Et');


const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const buildLineItem = (item) => {
  return {
    amount: item.amount, // Amount in cents
    reference: item.id, // Unique reference for the item in the scope of the calculation
  };
};

// Securely calculate the order amount, including tax
const calculateOrderAmount = (items, taxCalculation) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total with any exclusive taxes on the server to prevent
  // people from directly manipulating the amount on the client
  let orderAmount = 1400;
  orderAmount += taxCalculation.tax_amount_exclusive;
  return orderAmount;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a Tax Calculation for the items being sold
  const taxCalculation = await calculateTax(items, 'usd');
  const amount = await calculateOrderAmount(items, taxCalculation);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Invoke this method in your webhook handler when `payment_intent.succeeded` webhook is received
const handlePaymentIntentSucceeded = async (paymentIntent) => {
  // Create a Tax Transaction for the successful payment
  stripe.tax.transactions.createFromCalculation({
    reference: 'myOrder_123', // Replace with a unique reference from your checkout/order system
  });
};

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
