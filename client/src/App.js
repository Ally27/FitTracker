import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
// import Login from "./pages/Login";
// import Calendar from "./pages/Calendar";
// import NotFound from "./pages/NotFound";


const client = new ApolloClient({
  uri: "graphql",
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
            {/* <Route path="/login" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
