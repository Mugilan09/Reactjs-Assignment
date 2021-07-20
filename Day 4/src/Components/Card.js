import react from "react";
function Card({Cardtitle,Carddescription,buttontext}){
    return(
        <div class="col-4">
        <div class="card" style={{width:"18rem"}}>
          <img
            src="https://image.api.playstation.com/vulcan/img/rnd/202103/1818/MbkBQFkSTs7fHCShDAF5Hmvz.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{Cardtitle}</h5>
            <p class="card-text">{Carddescription}</p>
            <a href="#" class="btn btn-success">{buttontext}</a>
          </div>
        </div>
      </div>
    )
}
export default Card