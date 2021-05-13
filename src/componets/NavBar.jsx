import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
           <nav>
               <ul>
                  <Link to='/main'>
                  <li>Main</li>
                  </Link> 
                  {/* <Link to='results'>
                  <li>Results</li>
                  </Link>  */}
                  <Link to ='/contact'>
                  <li>Contact</li>
                  </Link>
                  
               </ul>
               </nav> 
        </div>
    );
}

export default NavBar;