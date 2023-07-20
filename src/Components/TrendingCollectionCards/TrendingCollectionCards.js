import React from 'react'

export default function TrendingCollectionCards(props) {
    return (
        <div>

            <div className="card bg-dark" style={{ width: "18rem" }}>
                <img src={props.scr} className="card-img-top" alt="..." style={{ width: "18rem" }} />
                <div className="card-body">
                    <div className='d-flex'>
                        <img src={props.scr1} className="card-img-top" alt="..." style={{ width: "30%", borderRadius: "29%" }} />
                        <img src={props.scr2} className="card-img-top" alt="..." style={{ width: "30%", borderRadius: "29%" }} />
                        <img src={props.scr3} className="card-img-top" alt="..." style={{ width: "30%", borderRadius: "29%" }} />

                    </div>

                    <h4 className='text-white'>DSGN Animals</h4>
                    <div className='d-flex'>
                        <img src={props.scr4} className="card-img-top" alt="..." style={{ width: "9%", height: "2%" }} />
                        <p className='text-white'>{props.botTxt}</p>



                    </div>


                </div>
            </div>

        </div>
    )
}
