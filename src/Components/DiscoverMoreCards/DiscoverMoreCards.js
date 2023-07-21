import React from 'react'

export default function DiscoverMoreCards(props) {
    return (

        <div className="card bg-secondary bg-gradient" style={{ width: "18rem" }}>
            <img src={props.scr} className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className=" text-white">{props.title}</h4>
                <div className='d-flex'>
                    <img src={props.userImg} className="" alt="..." style={{ width: "27px", height: "26px" }} />
                    <p className=" text-white">{props.userName}</p>
                </div>
                <div className='d-flex'>
                    <div className='p-2'>
                        <p className=" text-white-50">Price</p>
                        <h5 className=" text-white"> 1.63 ETH</h5>
                    </div>
                    <div className='ml-auto p-2'>
                        <p className="text-white-50">Highest Bid</p>
                        <h5 className=" text-white"> 0.33 wETH</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}
