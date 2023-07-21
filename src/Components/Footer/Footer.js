import LogoImg from '../../Images/Storefront.png'

export default function Footer() {
    return (
        
            <footer className=' bg-gradient '>  <br/>
                <div className="container text-white">
                    <div class="row">
                        <div class="col">
                            <div className='d-flex'>
                                <img src={LogoImg} alt="#" />
                                <h5>NFTs Market Place</h5>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Explore</h5>
                        </div>
                        <div className="col">
                            <h5>Join Our Weekly Digest</h5>
                        </div>
                    </div>

                    <br />

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>NFT marketplace UI created with Anima for Figma.</p> <br />
                                <p>Join our community</p>
                                <div className='d-flex justify-content-around'>
                                <i class="bi bi-youtube"></i>
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-instagram"></i>
                                </div>
                            </div>
                            <div className="col">
                                <p>marketplace</p> <br />
                                <p>Rankings</p> <br />
                                <p>Connect a wallet</p>
                            </div>
                            <div className="col">
                                <p>Get exclusive promations & updates straight to your inbox.</p> <br />
                                <div className="container mt-4">
                                    <div className="input-group">

                                        <input type="text" className="form-control" placeholder="Type something..." />
                                        <button className="btn btn-primary"><i class="bi bi-envelope"> </i>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <center><hr style={{ color: "white", width: "90%" }} /></center>

                <p className='text-white'>&copy;NFT Market. Use this template freely And All rights reserved by <b> Muzammil Husnain</b> </p>
                <br />
            </footer>
        
    )
}
