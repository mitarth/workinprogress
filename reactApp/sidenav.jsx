import React from 'react';
import ReactDOM from 'react-dom';



function Sidenav {
    
     function closeNav(){
         console.log('closing Nav');
     }
        
      return (
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

         );
    
    
}


export default Sidenav;