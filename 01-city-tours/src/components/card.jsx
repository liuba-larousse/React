import React from "react" 
import '../style.css'

function Card (props) {



    return (
      <div className="tour col-sm-12 col-md-6 col-lg-4 my-4">
  <div className="card" >
  <button className="btn-close" onClick={()=>{
      props.remove(props.id)
  }}>Close</button>
  <img src={props.src} className="card-img-top" alt={props.name}/>
  <div className="card-body">
    <h5 className="card-title text-uppercase text-info">{props.name}</h5>
    <p className="card-text ">{props.tour}</p>
    <button className="btn btn-info" type="button" data-toggle="collapse" data-target={"#"+ props.name} aria-expanded="false" aria-controls={props.name}>
    More
  </button>
  <div className="collapse" id={props.name}>
  <div className="card card-body my-2">
   {props.description}
  </div>
  </div>
</div>
</div>
</div>
    )
}

export default Card

