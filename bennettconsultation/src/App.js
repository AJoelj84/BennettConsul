import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// All Main Page and Subsection of Pages Import
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Biography from './components/pages/Biography';
import Contact from './components/pages/Contact';
import Publications from './components/pages/Publications';
import Services from './components/pages/Services';
import BusDev from './components/pages/ServPages/BusDev';
import ContROIS from './components/pages/ServPages/ContROIS';
import ExpDesInt from './components/pages/ServPages/ExpDesInt';
import LifeScSaaS from './components/pages/ServPages/LifeScSaaS';
import ToxSD from './components/pages/ServPages/ToxSD';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div> 
        <h1 className='sedan-regular topbar'>Dr. Allen Bennett Ph.D. <br></br>Consultation Services<Navigation/></h1>

        <section className='background container'>

        <Routes>
          <Route path = "/" element={<Home/>} exact />
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/Biography" element={<Biography/>} />
          <Route path = "/Contact" element={<Contact/>} />
          <Route path = "/Publications" element={<Publications/>} />
          <Route path = "/Services" element={<Services/>} />

          {/*All Subpages*/}
          <Route path = "/BusDev" element ={<BusDev/>}/>
          <Route path = "/ContROIS" element ={<ContROIS/>}/>
          <Route path = "/ExpDesInt" element ={<ExpDesInt/>}/>
          <Route path = "/LifeScSaaS" element ={<LifeScSaaS/>}/>
          <Route path = "/ToxSD" element ={<ToxSD/>}/>
        </Routes>

        <Footer/>

        </section>

      </div>
    </Router>
  );
}

export default App;