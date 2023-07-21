

export default function TopCreatorsCards(props) {
    return (
        <div className="card bg-secondary bg-gradient" style={{width: "12rem" , height: "10rem"}}>
           <center>
           <img src={props.scr} className="card-img-top" alt="..." style={{width: "4rem"}} />
                <div className="card-body topCardBody">
                    <h5 className=" text-white">{props.title}</h5>
                    <div className='d-flex'>
                    <p className="card-text text-white-50">Total Sales: </p>
                    <p className="card-text text-white"> 34.53 ETH</p>
                    </div>
                </div>
           </center>
        </div>
    )
}
