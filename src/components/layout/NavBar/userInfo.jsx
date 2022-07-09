import { Avatar } from '@mui/material'
import React from 'react'
import useClaims from '../../../hooks/useClaims'

export const UserInfo = () => {
  const claims = useClaims();
    return (
<>
{/* <Avatar src='img/av.png' /> */}
<div className="userInfo">{claims.fullName}</div>
</>
    
  )
}
