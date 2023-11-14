import './index.css';
import React, { useState, useEffect } from "react";

import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import Nav from './components/Nav';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const stripePromise = loadStripe('pk_test_51OAihTD1GkU15UzrYp8ODlptgZDDuQiJw35F4XnnkrN6yoS70VjyIYpBY56F8FcIZwoLiYiFLPYnapM4jXbhbI6J00qwYrPlle');

function App() {

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  
  return (
    <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Outlet />
          </div>
          {/* <Footer /> */}
        </div>
    </ApolloProvider>
  );
}

export default App;