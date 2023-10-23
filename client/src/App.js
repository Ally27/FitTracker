import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav"
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Login from "./pages/Login";
// import Calendar from "./pages/Calendar";
// import NotFound from "./pages/NotFound";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//page routes using react-router-dom & @apollo/client
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
