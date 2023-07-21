import BrowseCategoryCards from "../BrowseCategoryCards/BrowseCategoryCards"
// Cards Images
import Img1 from '../../Images/Category Icon.png'
import Img2 from '../../Images//Category Icon-1.png'
import Img3 from '../../Images/Category Icon-2.png'
import Img4 from '../../Images/Category Icon-3.png'
import Img5 from '../../Images/Category Icon-4.png'
import Img6 from '../../Images/Category Icon-5.png'
import Img7 from '../../Images/Category Icon-6.png'
import Img8 from '../../Images/Category Icon-7.png'

export default function BrowseCategory() {
    return (

        <div class="container">
            <h3 className="text-white"> Browse Categories</h3> <br /><br />
            <div class="row">
                <div class="col">
                    <BrowseCategoryCards scr={Img1} text="Art" /> <br/>
                </div>
                <div class="col">
                    <BrowseCategoryCards scr={Img2} text="Collectibles" /> <br/>
                </div>
                <div class="col">
                    <BrowseCategoryCards scr={Img3} text="Music" /> <br/>
                </div>
                <div class="col">
                    <BrowseCategoryCards scr={Img4} text="Photography" /> <br/>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <BrowseCategoryCards scr={Img5} text="Video" /> <br/>
                </div>
                <div class="col">
                    <BrowseCategoryCards scr={Img6} text="Utility" /> <br/>
                </div>
                <div class="col">
                    <BrowseCategoryCards scr={Img7} text="Sport" /> <br/>
                </div>
                <div class="col">
                    <BrowseCategoryCards scr={Img8} text="Virtual Words" /> <br/>
                </div>
            </div>
        </div>
    )
}
