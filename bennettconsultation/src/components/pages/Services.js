// Services Page, Functions as a Navigation Page for the Links to Each Type of Service Offered

import React from 'react';
import '../assets/styling/style.css';
import { Link } from 'react-router-dom';

function Services(){
    return(
        <div class="servnav sedan-regular">
           <Link to='/BusDev' class ='button-30 btnfont'>Business Development</Link>
           <Link to='/ToxSD' class ='button-30 btnfont'> Toxicology Study Design</Link>
           <Link to='/ExpDesInt' class ='button-30 btnfont'> Experimental Design and Interpretation</Link>
           <Link to='/LifeScSaaS' class ='button-30 btnfont'>Life Science and SaaS Marketing</Link>
           <Link to='/ContROIS' class ='button-30 btnfont'> Contract Research Organization Identification and Sourcing</Link>
        </div>
    );
}

export default Services;