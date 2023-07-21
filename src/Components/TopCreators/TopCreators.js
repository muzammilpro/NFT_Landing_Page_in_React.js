import TopCreatorsCards from "../TopCreatorsCards/TopCreatorsCards"

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
                    <TopCreatorsCards />
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards />
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards />
                    </div>
                    <div className="col col-3">
                    <TopCreatorsCards />
                    </div>
                    
                </div>
            </div>
        </div>

    )
}
