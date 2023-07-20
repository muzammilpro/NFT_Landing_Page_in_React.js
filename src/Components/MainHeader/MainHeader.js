import img from '../../Images/Image Placeholder.jpg'
import img1 from '../../Images/Avatar Placeholder-9.png'


export default function MainHeader() {
    return (

        <div className="container">
            <div className="row">

                <div className="col">
                    <h1 className='text-white' >
                        Discover Digital Arts & Collect NFTs
                    </h1>
                    <p className='text-white'>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <button type="button" className="btn btn-primary"><i className="far fa-rocket"></i>Get Started</button> <br />
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4 className='text-white'>240k+</h4>
                            <p className='text-white'>Total Sale</p>
                        </div>
                        <div>
                            <h4 className='text-white'>1000k+</h4>
                            <p className='text-white'>Auctions</p>
                        </div>
                        <div>
                            <h4 className='text-white'>240k+</h4>
                            <p className='text-white'>Artists</p>
                        </div>

                    </div>

                </div>


                <div className="col">
                    <div>


                        <div className="card bg-secondary bg-gradient" style={{ width: "18rem" }}>
                            <img src={img} alt="#" id="HeaderCardImg" style={{ borderRadius: "9%" }} />
                            <div className="card-body ">
                                <p className="card-text  text-light">Space Walking</p>
                                <div className='d-flex'>
                                    <img src={img1} alt="#" style={{ width: "10%" }} />
                                    <p className="card-text  text-light">AnimaKid</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}
