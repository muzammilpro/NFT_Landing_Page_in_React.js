import TrendingCollectionCards from '../TrendingCollectionCards/TrendingCollectionCards'
import Img1 from '../../Images/Primary Photo Placeholder.jpg'
import Img2 from '../../Images/Image Placeholder (1).png'
import Img3 from '../../Images/Primary Photo Placeholder-2.png'

export default function TrendingCollection() {
    return (
        <div>
            <div className='container'>
            <h2 className='text-white'>Trending Collection</h2>
            <p className='text-white'>Check Out Our Weekly Updated Trending Collection</p>
            <div className='d-flex'>
                <TrendingCollectionCards scr={Img1} />
                <TrendingCollectionCards scr={Img2}  />
                <TrendingCollectionCards scr={Img3}  />

            </div>

            </div>
        </div>
    )
}
