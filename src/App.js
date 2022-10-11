import React from 'react';
import './Styles/Bootstrap.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Styles/Main.css';
import './Styles/Responsive.css';
import Dashboard from './Pages/Dashboards';
import Login from './Pages/Login';

function App() {
  return (
      <>
           <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
      </>
  );
}

export default App;
