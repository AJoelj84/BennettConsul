// Services Page when Services clicked on main Nav Bar,  brings up the sub Nav Bar in the page Below

import React from 'react';
import '../assets/styling/style.css';
import { Link } from 'react-router-dom';

function Services(){
    return(
       
        <div class="servnav sedan-regular">
           
           <Link to='/BusDev' class ='button'>&#9204; Business Development &#9205;</Link>
           <Link to='/ToxSD' class ='button'>&#9204; Toxicology Study Design &#9205;</Link>
           <Link to='/ExpDesInt' class ='button'>&#9204; Experimental Design and Interpretation &#9205;</Link>
           <Link to='/LifeScSaaS' class ='button'>&#9204;Life Science and SaaS Marketing &#9205;</Link>
           <Link to='/ContROIS' class ='button'><span>&#9204; Contract Research Organization Identification and Sourcing &#9205;</span></Link>
        </div>
        
    );
}

export default Services;