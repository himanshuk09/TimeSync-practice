import TextField from '@mui/material/TextField';
import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React from 'react'

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
           {/* <TextField id="outlined-basic" size='medium' className='text-field' label="Discription" rows={4} multiline={true} variant="outlined" /> */}
        </div>
      </div>
      <div className='profile-right-block'>
        <div>Details</div>
      </div>
    </div>
  )
}
export default Profile;
