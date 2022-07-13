import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Menu from "@mui/material/Menu";
import  { bindTrigger, bindMenu,usePopupState } from "material-ui-popup-state/hooks";
import IconButton from "@mui/material/IconButton";
import Avatar, { avatarClasses } from '@mui/material/Avatar';
import { UserInfo } from "./userInfo";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import authenticationContext from "../../../Contexts/AuthContext";
import AdUnitsIcon from '@mui/icons-material/AdUnits';

export default function DropDown() {
    let logout = useContext(authenticationContext)[2];
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
    return (
        <>
              
                    <React.Fragment>
                        <IconButton {...bindTrigger(popupState)}>

                            <Avatar src={"img/av.png"} />
                        </IconButton>
                        <Menu  {...bindMenu(popupState)}>

                            <UserInfo></UserInfo>
                            <ul className="MobilMenuItems">
                                <li>
                                    <ManageAccountsIcon color="primary" fontSize="large"  />
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
                                        data-item="MyAds"
                                    >
                                        MyAds
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
                
     

        </>)
}