import React from 'react'

export default function HowItWorkCards(props) {
  return (
    <div className="card bg-secondary bg-gradient" style={{width: "20rem"}}>
      <img src={props.scr} className="card-img-top" alt="..." />
      <div className="card-body">
        <center>
        <h5 className='text-white'>{props.title}</h5>
        <p className="card-text text-white">{props.paragraph}</p>
        </center>
      </div>
    </div>
  )
}
