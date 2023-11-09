import './index.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


import Nav from './components/Nav';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
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