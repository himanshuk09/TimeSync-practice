
import Button from '@mui/material/Button';

import React, { useState } from 'react'
import ProfileDeatilsView from './ProfileDeatilsView';
import { Outlet } from 'react-router-dom';
import { TextField } from '@mui/material';

const Profile = () => {
  

  return (
    <div className='profile-main-block'>
      <div className='profile-left-block'>
        <div className='profile-block'>
          <img className='profile-logo' src="/user-icon.jpg" alt="" srcSet="" />
        </div>
        <div className='profile-des'>
          <h3>Full Name</h3>
          <h4>username</h4>
          <TextField id="outlined-basic" size='medium' className='bio-block' label="Bio..." rows={3}  variant="outlined" value={"Bio.."}  />
        </div>
      </div>
      <div className='profile-right-block'> 
        <Outlet />
      </div>
    </div>
  )
}
export default Profile;
