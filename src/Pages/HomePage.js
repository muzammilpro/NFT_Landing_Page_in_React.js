import NavBar from '../Components/NavBar/NavBar'
import MainHeader from '../Components/MainHeader/MainHeader'
import TrendingCollection from '../Components/TrendingCollection/TrendingCollection'
import TopCreators from '../Components/TopCreators/TopCreators'
import DiscoverMore from '../Components/DiscoverMore/DiscoverMore'
import BrowseCategory from '../Components/BrowseCategory/BrowseCategory'
import HowItWork from '../Components/HowItWork/HowItWork'
import MagicMashrooms from '../Components/MagicMashrooms/MagicMashrooms'
import JoinOurWeekly from '../Components/JoinOurWeekly/JoinOurWeekly'
import Footer from '../Components/Footer/Footer'

export default function HomePage() {
    return (
        <div>
            <NavBar />
            <MainHeader />
            <br /> <br /> <br />
            <TrendingCollection />
            <br /> <br /> <br />
            <TopCreators />
            <br /> <br /> <br />
            <DiscoverMore />
            <br /> <br /> <br />
            <BrowseCategory />
            <br /> <br /> <br />
            <HowItWork/>
            <br /> <br /> <br />
            <MagicMashrooms />
            <br /> <br /> <br />
            <JoinOurWeekly />
            <br /> <br /> <br />
            <Footer />
        </div>
    )
}
