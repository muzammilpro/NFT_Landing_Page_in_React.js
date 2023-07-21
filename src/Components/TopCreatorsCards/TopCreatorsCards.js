import Img from '../../Images/Avatar .png'

export default function TopCreatorsCards() {
    return (
        <div className="card bg-secondary bg-gradient" style={{width: "12rem" , height: "10rem"}}>
           <center>
           <img src={Img} className="card-img-top" alt="..." style={{width: "4rem"}} />
                <div className="card-body topCardBody">
                    <h5 className=" text-white">Keepitreal</h5>
                    <div className='d-flex'>
                    <p className="card-text text-white-50">Total Sales: </p>
                    <p className="card-text text-white"> 34.53 ETH</p>
                    </div>
                </div>
           </center>
        </div>
    )
}
