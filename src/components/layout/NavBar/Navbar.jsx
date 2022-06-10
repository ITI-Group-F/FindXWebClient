import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <>
      {/* <p data-item='FindX'>FindX</p> */}
      <img src="img/logo.png" alt="" />
      <section>
        <nav>
          <ul class="menuItems">
            <li>
              <Link className="link" to="/" data-item="Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="#" data-item="Login">
                Login
              </Link>
            </li>
            <li>
              <Link className="link" to="#" data-item="About">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="#" data-item="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
