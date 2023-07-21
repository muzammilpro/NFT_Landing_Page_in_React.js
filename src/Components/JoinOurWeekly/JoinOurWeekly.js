import Img from '../../Images/Photo.png'

export default function JoinOurWeekly() {
    return (

        <div className='container bg-secondary text-white'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={Img} alt="" />
                    </div>
                    <div className="col">
<br/>
<br/>
<br/>
                        <div className=''><h4>Join Our Weekly Digest</h4>
                            <p>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
                            <div className="input-group">

                                <input type="text" className="form-control" placeholder="Type something..." />
                                <button className="btn btn-primary"><i class="bi bi-envelope"> </i>Subscribe</button>
                            </div></div>
                    </div>

                </div>
            </div>
        </div>


    )
}
