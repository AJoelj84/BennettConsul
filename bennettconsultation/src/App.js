import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Biography from './components/pages/Biography';
import Contact from './components/pages/Contact';
import Publications from './components/pages/Publications';
import Services from './components/pages/Services';


function App() {
  return (
    <Router>
      <div>
        <h1 class ='topbar'>Dr. Allen Bennett Ph.D.<br></br>Consultation Services<Navigation/></h1>
        <Routes>
          <Route path = "/Home" element={<Home/>} exact />
          <Route path = "/Biography" element={<Biography/>} />
          <Route path = "/Contact" element={<Contact/>} />
          <Route path = "/Publications" element={<Publications/>} />
          <Route path = "/Services" element={<Services/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
