import { IconButton } from '@mui/material'
import React from 'react'
import Badge from '@mui/material/Badge';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { useNavigate } from "react-router-dom";
export const ChatButton = () => {
    const navigate = useNavigate();

    const handelGotoChat = () => {
        navigate("/Chat/Messanger", { replace: true });
    }
    return (
        <IconButton onClick={handelGotoChat}>
           
            <Badge badgeContent={2} color="primary"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}>

                <ForumRoundedIcon color="secondary" fontSize="medium" />
            </Badge>
        </IconButton>
    )
}
