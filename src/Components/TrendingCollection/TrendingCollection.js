import TrendingCollectionCards from '../TrendingCollectionCards/TrendingCollectionCards'
import Img1 from '../../Images/Primary Photo Placeholder.jpg'
import Img2 from '../../Images/Image Placeholder (1).png'
import Img3 from '../../Images/Primary Photo Placeholder-2.png'
// Repeated Image
import Img1025 from '../../Images/Number of additional NFTs.png'
// Card 01 Bottom Images
import Img4 from '../../Images/Secondary Photo Placeholder.jpg'
import Img5 from '../../Images/Secondary Photo Placeholder (1).jpg'
// Card 02 Bottom Images
import Img6 from '../../Images/Secondary Photo Placeholder.jpg'
import Img7 from '../../Images/Secondary Photo Placeholder (1).jpg'
// Card 03 Bottom Images
import Img8 from '../../Images/Secondary Photo Placeholder.jpg'
import Img9 from '../../Images/Secondary Photo Placeholder (1).jpg'
// Cards Bottom Mini Pic
import img10 from '../../Images/Avatar Placeholder.png'
import img11 from '../../Images/Asset 12 2.png'
import img12 from '../../Images/Avatar Placeholder-1.png'



export default function TrendingCollection() {
    return (
        <div>
            <div className='container'>
            <h2 className='text-white'>Trending Collection</h2>
            <p className='text-white'>Check Out Our Weekly Updated Trending Collection</p>
            <div className='d-flex justify-content-between'>
                <TrendingCollectionCards scr={Img1} scr1={Img4} scr2={Img5} scr3={Img1025} scr4={img10} botTxt="MrFox" />
                <TrendingCollectionCards scr={Img2} scr1={Img6} scr2={Img7} scr3={Img1025} scr4={img11} botTxt="Shroomie" />
                <TrendingCollectionCards scr={Img3} scr1={Img8} scr2={Img9} scr3={Img1025} scr4={img12} botTxt="BeKind2Robots" />

            </div>

            </div>
        </div>
    )
}
