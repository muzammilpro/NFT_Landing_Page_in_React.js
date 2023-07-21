import TopCreatorsCards from "../TopCreatorsCards/TopCreatorsCards"
// User Images
import Img1 from '../../Images/Avatar .png'
import Img2 from '../../Images/Avatar Placeholder-2.png'
import Img3 from '../../Images/Avatar Placeholder-3.png'
import Img4 from '../../Images/Avatar Placeholder-4.png'
import Img5 from '../../Images/Avatar Placeholder-5.png'
import Img6 from '../../Images/Avatar Placeholder-6.png'
import Img7 from '../../Images/Avatar Placeholder-7.png'
import Img8 from '../../Images/Avatar Placeholder-8.png'
import Img9 from '../../Images/Avatar Placeholder-9.png'
import Img10 from '../../Images/Avatar Placeholder-10.png'
import Img11 from '../../Images/Avatar Placeholder-11.png'
import Img12 from '../../Images/Avatar Placeholder-12.png'


export default function TopCreators() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-8">
                    <h4 className='text-white'> Top Creators</h4>
                    <p className='text-white'>Checkout Top Rated Creators On The NFT Marketplace</p>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary"><i className="far fa-rocket"></i>View Rankings</button> <br />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img1} title="Keeoitral" />
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img2} title="DigiLab" />
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img3} title="GravityOne"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img4} title="Junie" />
                    </div>
                    
                </div>
            </div>
            
             <br />
            
            <div className="container">
                <div className="row">
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img5} title="BlueWhale"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img6} title="Mr Fox"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img7} title="Shroomie"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img8} title="Robotica"/>
                    </div>
                    
                </div>
            </div>

            <br />

            <div className="container">
                <div className="row">
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img9} title="RustyrRobot"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img10} title="AnimaKid"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img11} title="Dotgu"/>
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards scr={Img12} title="Ghiblier"/>
                    </div>
                    
                </div>
            </div>

            

        </div>

    )
}
