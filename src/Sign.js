import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Sign()
{
    return(
<div>
  <div className="d-lg-block d-md-none d-sm-none d-none">
    <div className="container mt-5" style={{"width":"25%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="InputUsername1">Username</label>
              <input type="username" className="form-control" id="InputUsername1" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Password</label>
              <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="Check2" />
              <label className="form-check-label" htmlFor="Check2">Remember me</label>
            </div>
            <div className="mt-3 text-center">
              <button style={{width:"100%"}}  type="sign" className="btn btn-primary">Sign-in</button>
              </div>
              <div className="mt-3 text-center">
              <button  type="google" className="btn  mx-3"><img src="https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg" height="25px" width="25px"/>Sign in with Google</button>
            </div>
           <div className="footer mt-3">
            <p>Not a member yet? <Link to="/Join">Join</Link></p>
              <p>Forget your password? <a href="#" style={{"-webkit-text-decoration":"none","text-decoration":"none"}}>Forget</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 
  <div className="d-block d-sm-none">
    <div className="container mt-5" style={{"width":"80%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="InputUsername1">Username</label>
              <input type="username" className="form-control" id="InputUsername1" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Password</label>
              <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="Check2" />
              <label className="form-check-label" htmlFor="Check2">Remember me</label>
            </div>
            <div className="mt-3">
              <button style={{width:"100%"}} type="sign" className="btn btn-primary">Sign-in</button>
            </div>
            <div className="mt-3 text-center">
              <button  type="google" className="btn  mx-3"><img src="https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg" height="25px" width="25px"/>Sign in with Google</button>
            </div>
            <div className="footer mt-3">
            <p>Not a member yet? <Link to="/Join">Join</Link></p>
              <p>Forget your password? <a href="#" style={{"-webkit-text-decoration":"none","text-decoration":"none"}}>Forget</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 
  <div className="d-sm-block d-none  d-md-none d-lg-none">
    <div className="container mt-5" style={{"width":"50%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="InputUsername1">Username</label>
              <input type="Username" className="form-control" id="InputUsename1" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="leInputPassword1">Password</label>
              <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="Check2" />
              <label className="form-check-label" htmlFor="Check2">Remember me</label>
            </div>
            <div className="mt-3">
              <button style={{width:"100%"}} type="sign" className="btn btn-primary">Sign-in</button>
            </div>
            <div className="mt-3 text-center">
              <button  type="google" className="btn  mx-3"><img src="https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg" height="25px" width="25px"/>Sign in with Google</button>
            </div>
            <div className="footer mt-3">
              <p>Not a member yet? <Link to="/Join">Join</Link></p>
              <p>Forget your password? <a href="#" style={{"-webkit-text-decoration":"none","text-decoration":"none"}}>Forget</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="d-md-block d-none d-sm-none d-lg-none">
    <div className="container mt-5" style={{"width":"40%"}}>
      <div className="card" style={{"width":"auto"}}>
        <img className="card-img-top" src="https://www.f-cdn.com/assets/main/en/assets/home/api-enterprise/api-upsell-v3.jpg?image-optimizer=force&format=webply&width=1158" alt="Card image cap" />
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="InputUsername1">Username</label>
              <input type="username" className="form-control" id="InputUsername1" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword1">Password</label>
              <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="Check2" />
              <label className="form-check-label" htmlFor="Check2">Remember me</label>
            </div>
            <div className="mt-3">
              <button style={{width:"100%"}} type="sign" className="btn btn-primary">Sign-in</button>
            </div>
            <div className="mt-3 text-center">
              <button  type="google" className="btn  mx-3"><img src="https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg" height="25px" width="25px"/>Sign in with Google</button>
            </div>
            <div className="footer mt-3">
            <p>Not a member yet? <Link to="/Join">Join</Link></p>
              <p>Forget your password? <a href="#" style={{"-webkit-text-decoration":"none","text-decoration":"none"}}>Forget</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
    )
}
export default Sign;