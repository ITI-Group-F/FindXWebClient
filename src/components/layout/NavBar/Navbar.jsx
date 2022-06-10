import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  return (
<>

<div className=".xnav">
<section>
  <nav>
    <ul class="menuItems">
    <img src="img/logo.png" alt="" />
      <li><Link className="link" to='/' data-item='Home'>Home</Link></li>
      <li><Link className="link" to='/login' data-item='Login'>Login</Link></li>
      <li><Link className="link" to='/register' data-item='Register'>Register</Link></li>
      <li><Link className="link" to='#' data-item='Contact'>Contact</Link></li>
    </ul>
  </nav>

</section>
</div>


</>

   
  );
}
