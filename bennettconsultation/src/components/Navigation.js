// All Navigation Bar buttons

import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styling/style.css';

function Navigation(){
    return(

        
        <div class="nav sedan-regular">
           <Link to='/Home' class ='btn custombtn'>&#127960; Home</Link>
           <Link to='/Publications' class ='btn custombtn'>&#128366; Publications</Link>
           <Link to='/Services' class ='btn custombtn'>&#128394; Services</Link>
           <Link to='/Contact' class ='btn custombtn'>&#128386; Contact</Link>
           <Link to='/Biography' class ='btn custombtn'>&#127966; Biography</Link>
        </div>
    );
}

export default Navigation;