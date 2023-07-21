import NavBar from '../Components/NavBar/NavBar'
import MainHeader from '../Components/MainHeader/MainHeader'
import TrendingCollection from '../Components/TrendingCollection/TrendingCollection'
import TopCreators from '../Components/TopCreators/TopCreators'
import DiscoverMore from '../Components/DiscoverMore/DiscoverMore'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <MainHeader />
            <br/> <br/> <br/>
            <TrendingCollection />
            <br/> <br/> <br/>
            <TopCreators />
            <br/> <br/> <br/>
            <DiscoverMore />
        </div>
    )
}
