import './style.css';
import Card  from './Card'
import { Link } from 'react-router-dom';
import Navigation from './Navigation'
import Footer from './Footer';

function Home() {
  return (
  <>
  <div className="body">
  {/*backimage*/}

  <Navigation/>


  <div className="bg-image d-none d-sm-none d-md-block" style={{height:"600px"}}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-9 col-lg-7 mt-5 text-light">
                    <div>
                    <h2 style={{"font-size":"45px",marginTop:"100px"}}>Become a <span className="text-warning"><b>freelancer</b></span></h2>
        <h2 className="mt-3" style={{"font-size":"35px"}}>Find the perfect <i style={{"font-family":"domaine"}} className="text-warning"><b>freelance services</b></i>  for your business</h2>
        <p style={{"font-size":"17px","font-family":"Arial, Helvetica, sans-serif"}} className="mt-2 d-md-none d-lg-block ">When we think about logos, we often imagine huge corporations and big-name brands. But logos are just as important for freelancers like you as well. 
          A logo is a visual reference that invites prospective clients to explore your offerings.</p>
          <p style={{"font-size":"17px","font-family":"Arial, Helvetica, sans-serif"}} className="mt-2 d-md-block d-lg-none ">When we think about logos, we often imagine huge corporations and big-name brands. But logos are just as important for freelancers like you as well. </p>
        <button style={{"font-size":"17px","background-color":"aliceblue","color":"black"}} type="button" className="btn mt-5"><b><Link to="/Work">How it work</Link></b></button> 
                    </div>
             </div>
            </div>
        </div>
        </div>
        <div className="bg-image d-block d-sm-block d-md-none" style={{height:"350px"}}></div>
        <div className="container-fluid" style={{backgroundColor:"#0e1724"}}>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 p-3  d-md-none  mx-2 text-light">
                    <div className="">
                    <h2 style={{"font-size":"32px"}}>Become a<span className="text-warning"><b> freelancer</b></span></h2>
        <h2 className="mt-3" style={{"font-size":"24px"}}>Find the perfect <i style={{"font-family":"domaine"}} className="text-warning"><b>freelance services</b></i>  for your business</h2>
        <p style={{"font-size":"15px","font-family":"Arial, Helvetica, sans-serif"}} className="mt-2 d-none d-md-block ">When we think about logos, we often imagine huge corporations and big-name brands. But logos are just as important for <br className="d-lg-block d-md-block d-sm-none d-xs-none" />freelancers like you as well. 
          A logo is a visual reference that invites prospective clients to explore your offerings.
        </p>
        <button style={{"font-size":"15px","background-color":"aliceblue","color":"black"}} type="button" className="btn mt-3 "><b><Link to="/Work">How it work</Link></b></button>  
             </div>
            </div>
        </div>
        </div>

        
  {/*cards*/}      
  <div className="container">
    <h2 className="mt-4">Popular professional services</h2>
  </div>
  <div className="container mt-4">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img className="card-img-top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" />
          <div className="card-body">
            <h5 className="card-title"> Photo Editing</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/Document" style={{"color":"white"}} className="btn btn-primary ">Read More About</a>
          </div>
        </div>
        <br />
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img className="card-img-top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" />
          <div className="card-body">
            <h5 className="card-title">Logo Design</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/Document" style={{"color":"white"}} className="btn btn-primary ">Read More About</a>
          </div>
        </div>  
        <br />
      </div>
      <div className=" col-12 col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img className="card-img-top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" />
          <div className="card-body">
            <h5 className="card-title ">Documantation</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/Document" style={{"color":"white"}} className="btn btn-primary ">Read More About</a>
          </div>
        </div>  
        <br /> 
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img className="card-img-top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_305,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" />
          <div className="card-body">
            <h5 className="card-title">Graphic Design</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/Document" style={{"color":"white"}} className="btn btn-primary ">Read More About</a>
          </div>
        </div> 
        <br />
      </div>
    </div>
  </div>
  {/*paragraph*/}
  <div className="container mt-5 text-light" style={{"background-color":"#191919"}}>
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-4 text-justify ">
        <h2>A whole world of freelance talent at your fingertips</h2><br />
        <h4>The best for every budget</h4>
        <p style={{"-webkit-text-align":"left","text-align":"left"}}>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
        <h4>Quality work done quickly</h4>
        <p style={{"-webkit-text-align":"left","text-align":"left"}}>Find the right freelancer to begin working on your project within minutes.</p>
        <h4>Protected payments, every time</h4>
        <p style={{"-webkit-text-align":"left","text-align":"left"}}>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
        <h4>24/7 support</h4>
        <p style={{"-webkit-text-align":"left","text-align":"left"}}>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
      </div>
      <div className=" col-sm-12 col-md-12 col-lg-6">
        <div className="d-none d-sm-block d-md-block">
          <div className="text-center">
            <img className="mt-5" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" width="450px" height="450px" />
          </div>
        </div>
      </div>
      <div className=" col-12">
        <div className="d-block d-sm-none">
          <div className="text-center">
            <img className="mt-5" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" width="320px" height="340px" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Services*/}
  <div className="container mt-4">
    <h2>Explore the marketplace</h2>
    <div className="row">
      <div className="d-lg-flex p-5">
        <div className="col col-lg-3 text-center">
          <a href="#">
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" height="50px" width="50px" /><br />
            Graphic &amp; Design
          </a> 
        </div>
        <div className="col col-lg-3 text-center">
          <a href="#">
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" height="50px" width="50px" /><br />
            Writing &amp; Translation
          </a>
        </div>
        <div className="col col-lg-3 text-center">
          <a href="#">
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" height="50px" width="50px" /><br />
            Video &amp; Animation
          </a>
        </div>
        <div className="col col-lg-3 text-center">
          <a href="#">
            <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" height="50px" width="50px" /><br />
            Music &amp; Audio
          </a>
        </div>
      </div>
    </div>
  </div>
  {/*banner1*/}
  <div className="container">
    <div className="row" style={{"background-color":"#446ee7","background-image":"url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_852,dpr_1.0/v1/attachments/generic_asset/asset/8610b9c7c90c338adc976e96051cbd6c-1608034070829/logo-maker-banner-tablet-852-2x.png')","background-repeat":"no-repeat","background-size":"cover","background-position":"center","height":"400px"}}>
      <div className="  text-light p-5 mt-4 d-none d-sm-block">
        <h1><b>Make an incredible logo-</b>
           in <i style={{"font-family":"domaine"}}>minutes</i></h1>
           <a href="/Document"style={{"color":"#446ee7"}}  className="btn btn-light "><b>Documentation</b></a>
      </div>
      <div className=" text-light p-3 mt-4 d-block d-sm-none">
        <h1><b>Make an incredible logo-</b>
          in <i style={{"font-family":"domaine"}}>minutes</i></h1>
        <div className="mt-3">
          <a href="/Document"style={{"color":"#446ee7"}}  className="btn btn-light "><b>Documentation</b></a>
        </div>
      </div>
    </div>
  </div>
  {/*Ideas about freelancing*/}
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-5 ">
        <div className="text-center d-block d-sm-none">
          <img src="https://png.pngtree.com/png-vector/20200505/ourmid/pngtree-freelance-online-job-artist-soho-vector-png-image_2198792.jpg" width="300px" />
        </div>
        <div className="text-center d-none d-sm-block">
          <img src="https://png.pngtree.com/png-vector/20200505/ourmid/pngtree-freelance-online-job-artist-soho-vector-png-image_2198792.jpg" />
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-7 mt-5 d-none d-sm-block ">
        <div className="mt-4 ">
          <p style={{"font-weight":"bold"}}>Caitlin Tormey, Chief Commercial Officer</p>
          <p>It's extremely exciting that Freelancer.Hub has freelancers from all over the world — it broadens the talent pool. One of the best things about  is that while we're sleeping, someone's working.</p>
          <p>When you want to create a business bigger than yourself, you need a lot of help. That's what Freelancer.Hub does. Working with freelancer.Hub makes my job a little easier every day.</p>
        </div>
        <div className="mt-5">
          <a href="#" className="btn btn-primary ">Go somewhere</a>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6 mt-3 d-block d-sm-none">
        <div className="mx-3" />
        <p className="text-center" style={{"font-weight":"bold"}}>Caitlin Tormey, Chief Commercial Officer</p>
        <div className="mx-3">
          <p>It's extremely exciting that Freelancer.Hub has freelancers from all over the world — it broadens the talent pool. One of the best things about  is that while we're sleeping, someone's working.</p>
          <p>When you want to create a business bigger than yourself, you need a lot of help. That's what Freelancer.Hub does. Working with freelancer.Hub makes my job a little easier every day.</p>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="btn btn-primary ">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  {/*video*/}
  <div className="container mt-5">
    <h2>Get a idea about freelancing</h2>
  </div>
  <div className="container mt-4" style={{"background-color":"#191919"}}>
  <div className="row">
    <div className="col-12 col-sm-12 col-md-12 col-lg-6  mt-5 text-justify text-light " style={{"padding-left":"30px"}}>
      <p style={{"font-size":"30px"}} className="d-none d-sm-block"><b>Here are a few essential things to keep in mind while starting as a freelancer:</b></p>
      <p style={{"font-size":"23px"}} className="d-block d-sm-none"><b>Here are a few essential things to keep in mind while starting as a freelancer:</b></p>
      <div className="mt-4">
        <h6 style={{"line-height":"25px"}}>Identify your skills and discover what you can do better than others.</h6>
        <h6 style={{"line-height":"25px"}}>Take a bit of time and find your niche.</h6>
        <h6 style={{"line-height":"25px"}}>Analyse what other freelancers are charging for similar services and get your price right.</h6>
        <h6 style={{"line-height":"25px"}}>Create a stunning portfolio.</h6>
        <h6 style={{"line-height":"25px"}}>Reach out to your first clients, don't be shy.</h6>
      </div>
    </div>
    <div className=" col-sm-12 col-md-12 col-lg-6">
      <div className="d-none d-sm-block">
        <div className="text-center">
          <video width="450px" height="450px" autoPlay muted loop>
            <source src="./video.mp4" type="video/mp4" />
          </video> 
        </div>
      </div>
    </div>
    <div className="col-12 ">
      <div className="d-block d-sm-none">
        <div className="text-center">
          <video width="300px" height="340px" autoPlay muted loop>
            <source src="./video.mp4" type="video/mp4" />
          </video> 
        </div>
      </div>
    </div>
  </div>  
</div>
  {/*need something*/}
  <div className="container mt-5">
    <h2 className="mt-3">Need someting done?</h2>
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className="d-flex">
          <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/project/post-a-project.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>Post a job</b></h4>
        </div>
        <div className="mx-3">
          <p>It's free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className="d-flex">
          <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/work.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>Choose freelancers</b></h4>
        </div> 
        <div className="mx-3">
          <p>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className="d-flex">
          <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/pay-safely.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>Pay safely</b></h4>
        </div>
        <div className="mx-3">
          <p>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p> 
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className="d-flex">
          <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/freelancer/about-me.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>We're here to help</b></h4>
        </div>
        <div className="mx-3">
          <p>Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.</p>  
        </div>
      </div>
    </div>
  </div>
  {/*Get Started*/}
  <div className="container mt-5 text-light d-none d-sm-block">
    <div className="row">
      <div className="bg-image" style={{"height":"350px","width":"100%","background-image":"url('https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png')"}}>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h1 className="p-5">Find the <i style={{"font-family":"domaine","-webkit-text-align":"justify","text-align":"justify"}}>talent</i> needed to get your business <i style={{"font-family":"domaine"}}>growing.</i> </h1>
        </div>
        <button type="button" className="btn btn-success text-white mt-4 mx-5 mt-2"><b>Get Stared</b></button> 
      </div>
    </div>
  </div>
  <div className="container mt-5">
    <h2>Get inspired with projects made by our freelancers</h2>
  </div>
  {/*product Items*/}
 <Card/>
  {/*clients comment*/}      
  <div className="container mt-5" style={{"background-color":"#ebeced","height":"auto"}}>
    <h2 className="text-center" style={{"padding":"20px 0px"}}>Hear From Our Clients</h2>
    <div className="row ">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{"padding":"0px 30px"}}>
        <div className="card" style={{"background-color":"#fff","height":"auto"}}>
          <img className="mx-3 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/1200px-Cquote1_black.svg.png" height="20px" width="20px" />
          <p style={{"padding":"30px 30px"}}>With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, freelancer.Hub delivered the talent and expertise needed to launch a brand new fan engagement platform.</p>
          <div className="text-center mt-5">
            <img src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/1131174/cavaliers-36068385bab82125272dc5cee7bb7f7e.jpg" style={{"clip-path":"circle()","width":"50px","height":"50px"}} />
            <p><b>Conor Kenney</b></p>
          </div>
        </div>
        <br />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{"padding":"0px 30px"}}>
        <div className="card" style={{"background-color":"#fff","height":"auto"}}>
          <img className="mx-3 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/1200px-Cquote1_black.svg.png" height="20px" width="20px" />
          <p style={{"padding":"30px 30px"}}>With freelancer.Hub, we are able to find talented developers in a matter of weeks instead of months. The quality of talent they supply is extremely high as the developers are able to immediately.</p>  
          <div className="text-center mt-5">
            <img src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57759/consumer-114437f211219bb2cb4120a99bce2cca.jpg" style={{"clip-path":"circle()","width":"50px","height":"50px"}} />
            <p><b>Zac Carman</b></p>
          </div>
        </div>
        <br />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{"padding":"0px 30px"}}>
        <div className="card" style={{"background-color":"#fff","height":"auto"}}>
          <img className="mx-3 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/1200px-Cquote1_black.svg.png" height="20px" width="20px" />
          <p style={{"padding":"30px 30px"}}>We've been very pleased with our experience working with freelancer.Hub. Their team was incredibly helpful in helping us find the perfect developer for our project. The work was stellar, the communication was excellent.</p> 
          <div className="text-center mt-5">
            <img src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/image/content/file_file/file/57769/randmcnally-9d298989e09b1b0b4986c9713a462759.jpg" style={{"clip-path":"circle()","width":"50px","height":"50px"}} />
            <p><b>Ryan Walker</b></p>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>    
  {/*Footer*/}
 <Footer/>
</div>
  </>
  );
}

export default Home;
