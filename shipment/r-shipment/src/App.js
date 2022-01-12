import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Addshipment from './Addshipment';
import Update from './updateshipment';
import Protected from './Prodected';
import Shipinglist from './Shipinglist';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


function App() {
  // </ApolloProvider>
  return (

    <div className="App">
  


      <BrowserRouter>

        <Routes>

          <Route path="/login" element={<Login />} >  </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/updateshipment/:id" element={<Protected Cmp={Update} />} />
          <Route path="/addshipment" element={<Protected Cmp={Addshipment} />} />
          <Route path="/" element={<Protected Cmp={Shipinglist} />} />


        </Routes>

      </BrowserRouter>
     
    </div>


  );
}

export default App;
