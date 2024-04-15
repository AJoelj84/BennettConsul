// Services Page when Services clicked on main Nav Bar,  brings up the sub Nav Bar in the page Below

import React from 'react';
import '../assets/styling/style.css';
import { Link } from 'react-router-dom';

function Services(){
    return(
       
        <div class="servnav sedan-regular">
           <Link to='/BusDev' class ='btn btn-outline-dark'>Business Development</Link>
           <Link to='/ToxSD' class ='btn btn-outline-dark'>Toxicology Study Design</Link>
           <Link to='/ExpDesInt' class ='btn btn-outline-dark'>Experimental Design and Interpretation</Link>
           <Link to='/LifeScSaaS' class ='btn btn-outline-dark'>Life Science and SaaS Marketing</Link>
           <Link to='/ContROIS' class ='btn btn-outline-dark'>Contract Research Organization<br></br>Identification and Sourcing</Link>
        </div>
        
    );
}

export default Services;