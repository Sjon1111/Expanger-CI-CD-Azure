import React, { useState } from 'react'
import "./navbar.scss"

import 'primeicons/primeicons.css';
import Switch from '@mui/material/Switch';


export default function Navbar({ onStateChange }) {
  const [checked, setchecked] = useState(false)
  const togglemode = (event) => {
    const value = event.target.checked;
    setchecked(value)
    onStateChange(value)
  }
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='profile.svg' alt='logo' />
        <span>Hello User</span>

      </div>
      <div className='icons'>

        <img src='/search.svg' alt='search' className='icon' />
        <img src='/add.svg' alt='app' className='icon' />
        <div className='notification'>
          <span>1</span>
          <img src='/notification.svg' />

        </div>
        <img src='/support.svg' alt='support' className='icon' />
        <Switch
          checked={checked}
          onChange={togglemode}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <div className='user'>
          <img src='https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/' alt='user' />
          <span>Admin</span>
        </div>
        <img src='/settings.svg' alt='app'></img>
      </div>
    </div>


  )
}
