// Navigation Bar Controls

import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styling/style.css';

function Navigation(){
    return(
        <div class="nav sedan-regular">
           <Link to='/Home' class ='button-30 btn'>&#127960; Home</Link>
           <Link to='/Services' class ='button-30 btn'>&#128393; Services</Link>
           <Link to='/Publications' class ='button-30 btn'>&#128366; Publications</Link>
           <Link to='/Biography' class ='button-30 btn'>&#127966; Biography</Link>
           <Link to='/Contact' class ='button-30 btn'>&#128386; Contact</Link>
        </div>
    );
}

export default Navigation;