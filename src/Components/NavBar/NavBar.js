import React from 'react'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
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
                        <button className="btn btn-outline-success text-white" type="submit">Search</button>
                        </li>
                       
                        
                    </ul>
                    {/* <form className="d-flex">
                        
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}
