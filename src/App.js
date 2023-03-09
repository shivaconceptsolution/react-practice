import './App.css';
import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Hello from './Hello.js'
import Login from './Login.js'
import Layout from './Layout';
import { FetchExample } from './FetchExample';
import EditCust from './EditCust';
import DeleteCust from './DeleteCust';
import FetchPostAPI from './FetchPostAPI';
import { Logout } from './Logout';
import Admin from './Admin';
import Layoutadmin from './Layoutadmin';



function App() {
  return (
   
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hello />} />
          <Route path="hello" element={<Hello />} />
          <Route path="login" element={<Login />} />
          <Route path="customerdashboard" element={<FetchExample />} />
          <Route path="edit"  element={<EditCust />} />
          <Route path="logout"  element={<Logout />} />
          <Route path="delete"  element={<DeleteCust />} />
          <Route path="addcust"  element={<FetchPostAPI />} />
          </Route>
          <Route path="/admin" element={<Layoutadmin />}>
          <Route index element={<Admin />} />
         
          </Route>
      </Routes>
    </BrowserRouter>
  
  );
}


export default App;
