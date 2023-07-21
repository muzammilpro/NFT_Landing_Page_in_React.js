import DiscoverMoreCards from "../DiscoverMoreCards/DiscoverMoreCards"
// Discover more cards images
import Img1 from '../../Images/Image Placeholder.png'
import Img2 from '../../Images/Image Placeholder (1).png'
import Img3 from '../../Images/Image Placeholder-2.png'
// Cards User Pics
import img4 from '../../Images/DiscoverMore-1.png'
import img5 from '../../Images/DiscoverMore-2.png'
import img6 from '../../Images/DiscoverMore-3.png'

export default function DiscoverMore() {
    return (

        <div class="container">
            <div class="row">
                <div class="col col-9">
                    <h2 className='text-white'>Discover More NFTs</h2>
                    <p className='text-white'> Explore New Trending NFTs</p>
                </div>

                <div class="col ">
                    <button type="button" className="btn btn-outline-primary"><i className="bi bi-eye"> </i>See All</button>
                </div>
            </div>
            <div className="row">

                <div className="col">
                    <DiscoverMoreCards scr={Img1} title="Distant Galaxy" userName="MoonDancer"  userImg={img4}/>
                </div>
                <div className="col">
                    <DiscoverMoreCards scr={Img2} title="Life On Edena" userName="NebulaKid" userImg={img5}/>
                </div>
                <div className="col">
                    <DiscoverMoreCards scr={Img3} title="AstroFiction" userName="Spaceone" userImg={img6}/>
                </div>

            </div>
        </div>
    )
}
