import React from "react";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import Login from "../../auth/Login";
import useToken from "../../../hooks/useToken";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import useClaims from '../../../hooks/useClaims';


export default function LoginButton() {

    const { token, setToken } = useToken();
    const { claims } = useClaims();
    const [open, setOpen] = React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleisLoggedin = () => {

        setOpen(false);
    }


    return (


        <>
            <IconButton onClick={handleClickOpen}>
                <LoginRoundedIcon color="primary" fontSize="large" />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >

                <DialogContent>

                    <Login onClick={handleisLoggedin} setToken={setToken} loginfromNavbar={handleisLoggedin} />

                </DialogContent>

            </Dialog>
        </>
    )
}