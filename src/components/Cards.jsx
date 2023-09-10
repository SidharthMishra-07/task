import React from 'react'
import "./main.css"
import img from "../assets/iconImg.png";

const Cards = ({name,time,location,gender}) => {
  return (
    <div className="cardmain">       
        <h3>{name}</h3>
        <div className='imgclass2'><img src={img} class="imgclass" /> <p>{time}</p> </div>
        <div className='imgclass2'> <img src={img} class="imgclass" /> <p>{location}</p></div>
        <div className='imgclass2'> <img src={img} class="imgclass" /> <p>{gender}</p>  </div>
    </div>
  )
}

export default Cards