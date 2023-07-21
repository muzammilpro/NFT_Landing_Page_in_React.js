import LogoImg from '../../Images/Storefront.png'

export default function Footer() {
    return (
        <div className='container'>
            <footer>
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
                        </div>
                        <div className="col">
                            <p>marketplace</p> <br />
                            <p>Rankings</p> <br />
                            <p>Connect a wallet</p>
                        </div>
                        <div className="col">
                            <p>get exclusive promations & updates straight to your inbox.</p>
                        </div>
                    </div>
                </div>
            </div>
            <center><hr  style={{color: "white" , height: "3rem" , width:"90%"}} /></center>
            <br/> <br/>
            
        </footer>
        </div>
    )
}
