import React from 'react';
import { Link } from 'react-router-dom';


function Navigation(){
    return(
        <div>
           <Link to='/Home' class ='link'>Home</Link>
           <Link to='/Publications' class ='link'>Publications</Link>
           <Link to='/Services' class ='link'>Services</Link>
           <Link to='/Contact' class ='link'>Contact</Link>
           <Link to='/Biography' class ='link'>Biography</Link>
        </div>
    );
}

export default Navigation;