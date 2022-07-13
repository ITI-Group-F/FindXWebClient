import React from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';


function MakePostButton(props) {
    let navigate = useNavigate()
    return (
        <>
        <IconButton onClick={()=>{navigate("/post")}}>
        <Tooltip title="Make A Post">
         <AddCircleRoundedIcon sx={{color:"#2E7D32"}}/>   
</Tooltip>

        </IconButton>
        </>

    )
    };

export default MakePostButton;