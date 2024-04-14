import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styling/style.css';

function Navigation(){
    return(

        
        <div class="nav sedan-regular">
           <Link to='/Home' class ='btn btn-outline-dark'>Home</Link>
           <Link to='/Publications' class ='btn btn-outline-dark'>Publications</Link>
           <Link to='/Services' class ='btn btn-outline-dark'>Services</Link>
           <Link to='/Contact' class ='btn btn-outline-dark'>Contact</Link>
           <Link to='/Biography' class ='btn btn-outline-dark'>Biography</Link>
        </div>
    );
}

export default Navigation;