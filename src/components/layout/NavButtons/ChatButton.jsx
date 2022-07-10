import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import Badge from '@mui/material/Badge';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { useNavigate } from "react-router-dom";
import ChatContext from '../../../Contexts/ChatContext';
export const ChatButton = () => {
    const navigate = useNavigate();
    let {numberOfNotifications} = useContext(ChatContext);

    const handelGotoChat = () => {
        navigate("/Chat/Messanger", { replace: true });
    }
    return (
        <IconButton onClick={handelGotoChat}>
           
            <Badge badgeContent={numberOfNotifications} color="primary"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}>

                <ForumRoundedIcon color="secondary" fontSize="medium" />
            </Badge>
        </IconButton>
    )
}
