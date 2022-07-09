import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Search from "../../Search/Search";
import LoginButton from "../NavButtons/LoginButton";
import CameraButton from "../NavButtons/CameraButton";
import DropDown from "./dropdown";
import { useContext } from 'react';
import { authenticationContext } from '../../../Contexts/AuthContext';

export default function Navbar() {
  const [isloggedIn] = useContext(authenticationContext);
  return (
    <>
      <div className=".xnav">
        <section>
          <nav>
            <Link to="/">
              <img className="logo" src="img/logo.png" alt="" />
            </Link>
            <Search></Search>


            {/* <ul className="menuItems">
              <li>
                <Link className="link" to="/" data-item="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/auth/login" data-item="Login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/auth/register" data-item="Register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact" data-item="Contact">
                  Contact
                </Link>
              </li>
             
            </ul> */}

            < div className="HammButton">
              <CameraButton />

              {isloggedIn ? <DropDown /> : <LoginButton />}


            </div>

          </nav>
        </section>
      </div>
    </>
  );
}
