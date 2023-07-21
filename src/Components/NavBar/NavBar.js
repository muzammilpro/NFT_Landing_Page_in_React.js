import img from '../../Images/Storefront.png'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">

                <a className="navbar-brand text-white" href="#">  <img src={img} alt="#" />  NFT Marketplace</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto">


                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#">Marketplace</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Rankings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Connect a wallet</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary btn-outline-primary text-white" type="submit"><i className="bi bi-search"></i>Search</button>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}
