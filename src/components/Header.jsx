import React from 'react'
import {MdDoneAll} from 'react-icons/md';

function Header(props) {
  return (
    <div className="header">
        <h3>To do list</h3>
        <div className='cart-items'>
        <MdDoneAll />
        <p className='cart-num'>{props.doneNum}</p>
        </div>
    </div>
    
  )
}

export default Header;