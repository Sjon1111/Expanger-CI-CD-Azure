import React from 'react'
import { Link } from "react-router-dom";
import "./menu.scss"
import { menuData } from './MenuData';

export default function Menu() {
  return (
    <div className='menu'>
      <div className='item'>
        <span className="title">MAIN</span>

        <Link to="/" className='listItem'>
          <img src='/home.svg'></img>
          <span className='listItemTitle'>Home</span>

        </Link>

        <Link to="/" className='listItem'>
          <img src='/profile.svg'></img>
          <span className='listItemTitle'>Profile</span>

        </Link>
      </div>
      <div className='item'>
        <span className="title">MAIN</span>
        <Link to="/" className='listItem'>
          <img src='/billing.png'></img>
          <span className='listItemTitle'>Billing</span>

        </Link>
        <Link to="/" className='listItem'>
          <img src='/report.svg'></img>
          <span className='listItemTitle'>Reports</span>

        </Link>
        <Link to="/" className='listItem'>
          <img src='/analytics.svg'></img>
          <span className='listItemTitle'>Analytics</span>

        </Link>

      </div>
    </div>
  )
}

{/* <div className='menu'>
  {menuData.map((item) => {

    <div className='item' key={item.id}>
      <span className="title">{item.title}</span>

      {item.listItems.map((listitem) => {

        <Link to="/" className='listItem' key={listitem.id}>
          <img src={listitem.icon}></img>
          <span className='listItemTitle'>{listitem.title}</span>

        </Link>

      })}

    </div>

  })}


</div> */}