import React from 'react'
import "./topbox.scss";
import { topboxData } from './Topdata'


const Topbox = () => {
  return (

    <div className='topbox'>
      <h2>Recent Transaction</h2>
      <div className='list'>
        {topboxData.map(data => (
          <div className='listitem' key={data.id}>
            <div className="company">
              <img src={data.img} alt="" />
              <div className='companyTexts'>
                <span className='companyName'>{data.companyName} </span>
                <span className='companyemail'>{data.email} </span>
              </div>
            </div>
            <span className="amount">{data.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Topbox;
