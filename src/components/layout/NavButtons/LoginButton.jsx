import React from "react";
import IconButton from "@mui/material/IconButton";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import Login from "../../auth/Login";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function LoginButton() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (


        <>
            <IconButton onClick={handleClickOpen}>
                <LoginRoundedIcon color="" fontSize="large" />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >

                <DialogContent>

                    <Login />

                </DialogContent>

            </Dialog>
        </>
    )
}