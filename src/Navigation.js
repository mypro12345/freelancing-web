import './style.css';
function Navigation()
{
    return(
<>
    <nav className="navbar navbar-expand-md bg-black fixed-top">
      <div className="container">
        <div className="d-flex">
        <p href="#" className="navbar-brand d-sm-block d-none"><span className="text-light"><b>freelancer</b></span><span style={{"font-size":"25px",color:"#f7f7f7"}} ><b>.Hub</b></span></p> 
        <img className="navbar-brand d-sm-block d-none" src="./logo.jfif" style={{height:"50px",width:"80px"}} />
        <p href="#" className="navbar-brand d-block d-sm-none"><span className="text-light"><b>freelancer</b></span><span  style={{"font-size":"20px",color:"#f7f7f7"}}><b>.Hub</b></span></p>
        <img className="navbar-brand d-block d-sm-none" src="./logo.jfif" style={{height:"45px",width:"70px"}} />
        
        </div>
       
        <button id="nav-toggle-button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#micon">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="micon">
          <ul className="navbar-nav  ms-auto">
          <li className="nav-item mx-1">
            <b><a href="/" style={{color:"white"}} className="nav-link" >Home</a></b> 
            </li>
            <li className="nav-item mx-1">
            <b><a href="" style={{color:"white"}} className="nav-link" >Become a seller</a></b> 
            </li>
            <li className="nav-item mx-1">
            <b><a href="" style={{color:"white"}} className="nav-link" to="/Sign">Sign</a></b> 
            </li>
            <li className="nav-item mx-1 d-none d-md-block">
           <b><a href="/Join" style={{color:"white"}} className="nav-link" >Join</a></b>    
            </li>
            <li className="nav-item mx-1 d-block d-md-none">
            <b><a href="/Join" style={{color:"white"}} className="nav-link" >Join</a></b>
            </li>
            <li className="nav-item mx-1 d-none d-md-block">
            <b><a href="/Work"  style={{color:"white",border:"1px solid white"}} className="nav-link"  >Post a job</a></b>
            </li>
            <li className="nav-item mx-1 d-block d-md-none">
            <b><a href="/Work" style={{color:"white"}} className="nav-link">Post a job</a></b>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
    
}

export default Navigation;