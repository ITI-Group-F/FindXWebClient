import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Avatar, { avatarClasses } from '@mui/material/Avatar';
import { UserInfo } from "./userInfo";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function DropDown() {
    return (
        <>
            <PopupState variant="popover" popupId="hamburger">
                {(popupState) => (
                    <React.Fragment>
                        <IconButton {...bindTrigger(popupState)}>

                           <Avatar src={"img/av.png"}/>
                        </IconButton>
                        <Menu  {...bindMenu(popupState)}>

                             <UserInfo></UserInfo>
                            <ul className="MobilMenuItems">
                                <li>
                                    <ManageAccountsIcon color="primary" fontSize="large" userIcon />
                                    <Link
                                        onClick={popupState.close}
                                        className="link"
                                        to="/profile"
                                        data-item="Profile"
                                    >
                                        Profile
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
                        <div className="search"></div>
                    </React.Fragment>
                )}
            </PopupState>

        </>)
}