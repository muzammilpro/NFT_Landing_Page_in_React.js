import NavBar from '../Components/NavBar/NavBar'
import MainHeader from '../Components/MainHeader/MainHeader'
import TrendingCollection from '../Components/TrendingCollection/TrendingCollection'
import TopCreators from '../Components/TopCreators/TopCreators'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <MainHeader />
            <br /> <br /> <br />
            <TrendingCollection />
            <br /> <br /> <br />
            <TopCreators />
        </div>
    )
}
