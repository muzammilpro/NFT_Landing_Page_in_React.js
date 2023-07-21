import HowItWorkCards from "../HowItWorkCards/HowItWorkCards"
// Cards Images
import Img1 from '../../Images/Icon.png'
import Img2 from '../../Images/Icon (1).png'
import Img3 from '../../Images/Icon (2).png'

export default function HowItWork() {
    return (
        <div>
            <div className="container">
                <h3 className='text-white'>How It Works</h3> <br />
                <p className='text-white'>Find Out How TO Get Started</p>
                <div className="row">
                    <div className="col">
                        <HowItWorkCards  scr={Img1} title="Setup Your Wallet"  paragraph="Set up your wallet of choice.Connect it to the Animarket by clicking the wallet icon in the top right corner"/>
                    </div>
                    <div className="col">
                        <HowItWorkCards scr={Img2} title="Create Collection" paragraph="Upload your work and setup your collection. Add a description, social links and floor price."/>
                    </div>
                    <div className="col">
                        <HowItWorkCards scr={Img3} title="Start Earning" paragraph="Choose between auctions and fixed-price listing. Start earning by selling your NFTs or trading others "/>
                    </div>
                </div>
            </div>

        </div>
    )
}
