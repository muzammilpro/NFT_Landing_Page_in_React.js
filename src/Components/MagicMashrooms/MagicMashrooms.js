import Timer from "../Timer/Timer";
import Img from '../../Images/Asset 12 2.png'


export default function MagicMashrooms() {
  return (
    <div className="background-image-container">
      <div className="container">
  <div className="row">
    <div class="col" style={{padding: "4rem"}}>
        <div className="d-flex text-white" >
            <img src={Img} alt="#" style={{ width: "1rem" , height: "1rem"}} /> 
            <p>Shroomie</p>
        </div>
      <h4 className="text-white">Magic Mashrooms</h4>
      <button type="button" class="btn btn-light"> <i class="bi bi-eye"> </i>See NFT</button>
    </div>
    <div className="col">
      <Timer />
    </div>
    
  </div>
</div>
    </div>
  );
}
