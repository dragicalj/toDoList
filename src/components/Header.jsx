import React from 'react'
import {MdDoneAll} from 'react-icons/md';
import {Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
        <div className='cart-items'><p className='cart-num' >{props.doneNum}</p></div>
        
        <Link className='todo' to='/'>To do list</Link>
        <Link to='/done' className='cart-items'>
        <MdDoneAll />
        </Link>
    </div>
    
  )
}

export default Header;