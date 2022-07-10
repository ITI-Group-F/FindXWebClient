import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Avatar, { avatarClasses } from '@mui/material/Avatar';
import { UserInfo } from "./userInfo";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import authenticationContext from "../../../Contexts/AuthContext";
import AdUnitsIcon from '@mui/icons-material/AdUnits';

export default function DropDown() {
    let logout = useContext(authenticationContext)[2];
    return (
        <>
            <PopupState variant="popover" popupId="hamburger">
                {(popupState) => (
                    <React.Fragment>
                        <IconButton {...bindTrigger(popupState)}>

                            <Avatar src={"img/av.png"} />
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
                                    <AdUnitsIcon sx={{color:"green"}}></AdUnitsIcon>
                                    <Link
                                        onClick={popupState.close}
                                        className="link"
                                        to="/myads"
                                        data-item="My Ads"
                                    >
                                        My Ads
                                    </Link>
                                </li>
                                <li>

                                    <LogoutRoundedIcon color="primary" fontSize="large" />
                                    <Link
                                        onClick={() => {
                                            popupState.close();
                                            logout();
                                        }}
                                        className="link"
                                        to="/"
                                        data-item="Logout"
                                    >
                                        Logout
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