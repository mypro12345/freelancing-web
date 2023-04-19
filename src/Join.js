import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Join()
{
    return(
<div>
  <div className="d-lg-block d-md-none d-sm-none d-none">
    <div className="container mt-5" style={{"width":"25%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Do you join as a Client or Freelancer</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Freelancer
              </label>
            </div>
            <div className="form-check mx-4">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Client
              </label>
            </div>
          </div>
          <button style={{width:"100%"}}  type="button" className="btn btn-primary mt-3 text-center"><Link className="btn-text" to="/Sign">Continue</Link></button>
        </div>
      </div>
    </div>
  </div>
  <div className="d-block d-sm-none">
    <div className="container mt-5" style={{"width":"80%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Do you join as a Client or Freelancer</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Freelancer
              </label>
            </div>
            <div className="form-check mx-3">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Client
              </label>
            </div>
          </div>
          <button style={{width:"100%"}}  type="button" className="btn btn-primary mt-3 text-center"><b><Link className="btn-text" to="/Sign">Continue</Link></b></button>
        </div>
      </div>
    </div>
  </div>
  <div className=" d-sm-block d-none d-md-none d-lg-none">
    <div className="container mt-5" style={{"width":"50%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Do you join as a Client or Freelancer</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Freelancer
              </label>
            </div>
            <div className="form-check mx-4">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Client
              </label>
            </div>
          </div>
           <button style={{width:"100%"}}  type="button" className="btn btn-primary mt-3 text-center"><b><Link className="btn-text" to="/Sign">Continue</Link></b></button> 
        </div>
      </div>
    </div>
  </div>
  <div className="d-md-block d-sm-none d-none d-lg-none">
    <div className="container mt-5" style={{"width":"40%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Do you join as a Client or Freelancer</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Freelancer
              </label>
            </div>
            <div className="form-check mx-4">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Client
              </label>
            </div>
          </div>
          <button style={{width:"100%"}}  type="button" className="btn btn-primary mt-3 text-center"><b><Link className="btn-text" to="/Sign">Continue</Link></b></button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
    )
}

export default Join;