import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Navbar() {
  return (
    <>
      <div className=".xnav">
        <section>
          <nav>
            <img src="img/logo.png" alt="" />
            <ul className="menuItems">
              <li>
                <Link className="link" to="/" data-item="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/login" data-item="Login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/register" data-item="Register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="link" to="#" data-item="Contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="HammButton">
              <PopupState variant="popover" popupId="hamburger">
                {(popupState) => (
                  <React.Fragment>
                    <IconButton
               
                      {...bindTrigger(popupState)}
                    >
                      <MenuRoundedIcon fontSize="large" />
                    </IconButton>

                    <Menu {...bindMenu(popupState)}>
                      <ul className="MobilMenuItems">
                        <li>
                          <Link
                            onClick={popupState.close}
                            className="link"
                            to="/"
                            data-item="Home"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={popupState.close}
                            className="link"
                            to="/login"
                            data-item="Login"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={popupState.close}
                            className="link"
                            to="/register"
                            data-item="Register"
                          >
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={popupState.close}
                            className="link"
                            to="#"
                            data-item="Contact"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}
