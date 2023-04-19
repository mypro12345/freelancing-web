import './style.css';
import Navigation from './Navigation';
import Footer from './Footer';
import {Carousel, CarouselItem} from 'react-bootstrap'
function Work()
{
    return(
        <>
        <Navigation/>
        <div className="back-image d-none d-sm-none d-md-block" style={{height:"600px"}}>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mt-5">
                    <div>
                  <h1  style={{"font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",color:"#f7f7f7",fontSize:"37",lineHeight:"1.37",fontWeight:"700",marginTop:"100px"}}>How can freelancers help your business?</h1>
                  <p className="mt-5" style={{fontSize:"20px",lineHeight:"1.4",color:"#f7f7f7",fontFamily:"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif"}}>The possibilities are endless. We have expert freelancers who work in every technical, professional, and creative field imaginable.</p>
                  <a href="#" className="btn mt-5 " style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold"}}>Post a Job</a>
                    </div>
             </div>
            </div>
        </div>
        </div>
        <div className="back-image d-block d-sm-block d-md-none " style={{height:"350px"}}></div>
        <div className="container-fluid" style={{backgroundColor:"#0e1724"}}>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 mt-3  d-md-none  mx-2">
                    <div classMame="">
                  <h1 style={{"font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",color:"#f7f7f7",fontSize:"37",lineHeight:"1.37",fontWeight:"700"}}>I want to hire a freelancer.</h1>
                  <p className="mt-4" style={{fontSize:"20px",lineHeight:"1.4",color:"#f7f7f7",fontFamily:"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif"}}>The possibilities are endless. We have expert freelancers who work in every technical, professional, and creative field imaginable.</p>
                  <a href="#" className="btn mt-4 " style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold",marginBottom:"15px"}}>Post a Job</a>
                    </div>
             </div>
            </div>
        </div>
          {/*container1*/}
        <div className="container mt-5">
            <h1 style={{fontWeight:"700",fontSize:"32px", lineHeight:"1.37","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif"}}>Choose from endless possibilities</h1>
            <p className="mt-3"  style={{fontSize:"20px",lineHeight:"1.4",fontFamily:"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif"}}>Get anything done, exactly how you want it. Turn that spark of an idea into reality.</p>
        </div>
        <div className="container mt-5">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="d-flex">
          <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/project/post-a-project.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>Post a job</b></h4>
        </div>
        <div className="mx-3">
          <p>It's free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</p>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="d-flex">
          <img src="	https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/make-money.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>Choose freelancers</b></h4>
        </div> 
        <div className="mx-3">
          <p>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="d-flex">
          <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/skills/skills.svg" height="80px" width="80px" />
          <h4 className="mt-4"><b>Pay safely</b></h4>
        </div>
        <div className="mx-3">
          <p>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p> 
        </div>
      </div>
    </div>
  </div>
    {/*container2*/}
  <div className="container mt-5" style={{borderBottom:"2px solid rgb(219, 214, 214"}}>
    <div className="row">
    <div className=" col-sm-12 col-md-12 col-lg-6">
        <div className="d-none d-sm-block d-md-block">
          <div className="text-center">
            <img  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/how-it-works.jpg?image-optimizer=force&format=webply&width=1296" width="450px" height="450px" />
          </div>
        </div>
        <div className=" col-12">
        <div className="d-block d-sm-none">
          <div className="text-center">
            <img  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/how-it-works.jpg?image-optimizer=force&format=webply&width=1296" width="380px" height="380px" />
          </div>
        </div>
      </div>
      </div>
    <div className="col-12 col-lg-6 mt-5">
        <h1>How does it work?</h1>
        <div className="mt-3">
            <h5><b>1. Post a project or contest</b></h5>
            <p>Simply post a project or contest for what you need done and receive competitive bids from freelancers within minutes.</p>
        </div>
        <div className="mt-3">
            <h5><b>2. Choose the perfect freelancer</b></h5>
            <p>Simply post a project or contest for what you need done and receive competitive bids from freelancers within minutes.</p>
        </div>
        <div className="mt-3">
            <h5><b>3.  Pay when you’re satisfied</b></h5>
            <p>Simply post a project or contest for what you need done and receive competitive bids from freelancers within minutes.</p>
        </div>
        <a href="#" className="btn mt-4 " style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold",marginBottom:"15px"}}>Post a Job</a>
    </div>
    </div>
  </div>
    {/*container3*/}
  <div className="container mt-5" style={{borderBottom:"2px solid rgb(219, 214, 214"}}>
    <div className="row ">
    <div className=" col-sm-12 col-md-12 col-lg-6">
        <div className="d-none d-sm-block d-md-block">
          <div className="text-center">
            <img  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/be-in-control.jpg?image-optimizer=force&format=webply&width=1296" width="450px" height="450px" />
          </div>
        </div>
        <div className=" col-12">
        <div className="d-block d-sm-none">
          <div className="text-center">
            <img  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/be-in-control.jpg?image-optimizer=force&format=webply&width=1296" width="380px" height="380px" />
          </div>
        </div>
      </div>
      </div>
    <div className="col-12 col-lg-6 mt-5">
        
        <h1>Be in control. Keep in contact.</h1>
        <p>Use our collaboration tools to work efficiently with your freelancer. Share files, chat in real-time, monitor progress, and so much more.</p>
        <div className="row">
        <div className="col-12 col-md-6">
        <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/comms/live-chat.svg" height="80px" width="80px" />
        <h5><b>Live chat</b></h5>
        <p>You can live chat with your freelancers to ask questions, share feedback and get constant updates on the progress of your work.</p>
        </div>
        <div className="col-12 col-md-6">
        <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/mobile/mobile-verify.svg" height="80px" width="80px" />   
        <h5><b>Mobile app</b></h5>
        <p>Manage your project at the touch of your fingertips. The mobile app makes on-the-go collaboration a breeze.</p>
            </div>
        </div>
        </div>
   </div>
  </div>
    {/*container4*/}
  <div className="container mt-5">
    <div className="row">
    <div className=" col-sm-12 col-md-12 col-lg-6">
        <div className="d-none d-sm-block d-md-block">
          <div className="text-center">
            <img  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/safety.jpg?image-optimizer=force&format=webply&width=1296" width="450px" height="450px" />
          </div>
        </div>
        <div className=" col-12">
        <div className="d-block d-sm-none">
          <div className="text-center">
            <img  src="https://www.f-cdn.com/assets/main/en/assets/how-it-works/safety.jpg?image-optimizer=force&format=webply&width=1296" width="380px" height="380px" />
          </div>
        </div>
      </div>
      </div>
    <div className="col-12 col-lg-6 mt-5">
        <h1>Safe and secure</h1>
       <p>Freelancer.Hub is a community that values your trust and safety as our number one priority. Our representatives are available 24/7 to assist you with any issues.</p>
       <div className="row">
        <div className="col-12 col-md-6">
        <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/payment/pay-safely.svg" height="80px" width="80px" />
        <h5><b>Pay with confidence</b></h5>
        <p>Pay safely and securely in over 39 currencies through the Milestone Payments system. Only release payments when you are satisfied with the work.</p>
        </div>
        <div className="col-12 col-md-6">
        <img src="https://www.f-cdn.com/assets/main/en/assets/illustrations/comms/support.svg" height="80px" width="80px" />   
        <h5><b>24/7 support</b></h5>
        <p>We're always here to help. Our representatives are available 24/7 to assist you with any issues.</p>
            </div>
        </div>
    </div>
    </div>
  </div>
  <div className="container-fluid mt-5" style={{backgroundColor:"#161e2c"}}>
    <div className="container p-5">
    <h1 style={{fontWeight:"700",fontSize:"32px", lineHeight:"1.37","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",color:"#f7f7f7"}}>Choose from endless possibilities</h1>
    <p style={{color:"#f7f7f7",fontSize:"20px",lineHeight:"1.5"}}>Post a project today and get bids from talented freelancers.</p>
    <a href="#" className="btn mt-4 " style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold",marginBottom:"15px"}}>Post a Job</a>
    </div>
 </div>
 <div className="container">
    <h2 className="mt-5">Freelancers help to your task</h2>
  </div>
 <div className=" container mt-4">
 <Carousel>
  <CarouselItem>
  <div class="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card">
      <img className="card-img-top" src="https://kesara-hansajith.github.io/images/pic1.jpg" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Graphic Desinger</b></p>
      </div>
    </div>
    <br />
  </div>
  <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card">
      <img className="card-img-top" src="https://media.licdn.com/dms/image/D4D03AQEi8qNLxCnPVg/profile-displayphoto-shrink_800_800/0/1646842312877?e=2147483647&v=beta&t=W9e85Jy6fZiMk8KDMm95alJ8igpEa9Heq7dJm6SZhkQ" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Logo Desinger</b></p>
      </div>
    </div>
    <br />
  </div>
  <div className="col-6 col-sm-6 col-md-6 col-lg-3 ">
    <div className="card">
      <img className="card-img-top" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/277776749_509495453898405_1889325250998884546_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QLhN664nhgEAX_lmD0B&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfAaLvrhtEi1lBQHrb5QdrF0e5nwORXvFWUah7wDG4TrtA&oe=643FB368" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Web Desinger</b></p>
      </div>
    </div>
    <br />
  </div>
  <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card">
      <img className="card-img-top" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/340317575_940390183974862_9055443130108196510_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=245XKfkXnoAAX_uswVA&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfBub84D69dZjNhMUR6VmVH9gBEbWPE3x5t6dkf0NdWZ5A&oe=64449E76" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Video Editor</b></p>
      </div>
    </div>
    <br />
  </div>
      </div>
  </CarouselItem>
  <CarouselItem>
  <div class="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card">
      <img className="card-img-top" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/277768310_3093055097629180_2847006927303602149_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=LJQfCf2oZAMAX-qFmVy&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDMFw2SIH4bdRGY-oa3DsNpYGwLXYqQRMQwFApwj0mMtg&oe=6443D39E" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Graphic Desinger</b></p>
      </div>
    </div>
    <br />
  </div>
  <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card">
      <img className="card-img-top" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/339125877_935142917525495_5407323456159624475_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YiUmZSvjRQUAX8zWm5O&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfA634GOuGptNffjrhmD_-clQ4c5qy8hBs_M6halXE3tRQ&oe=64446D56" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Logo Desinger</b></p>
      </div>
    </div>
    <br />
  </div>
  <div className="col-6 col-sm-6 col-md-6 col-lg-3 ">
    <div className="card">
      <img className="card-img-top" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/321206080_710783180338127_7404919693043037816_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=9WfiU2tXfEMAX_sqAIl&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfCCjq5WhuC_Hu4Vk8jv87w4EWUwE0B9WfnX3oydfyZ6Zg&oe=6442D795" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Content Writer</b></p>
      </div>
    </div>
    <br />
  </div>
  <div className="col-6 col-sm-6 col-md-6 col-lg-3">
    <div className="card">
      <img className="card-img-top" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-1/313400316_3326982544257591_2583653649342232902_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zmCsReXuB18AX9RtHUU&_nc_ht=scontent.fcmb1-2.fna&oh=00_AfDbpa2U07kp5Ir81fSCu3gqowYBAbvW75HGU7qn18f_gA&oe=6443899D" />
      <div className="card-body text-center">
        <p><b>Hi! I'am Video Editor</b></p>
      </div>
    </div>
    <br />
  </div>
      </div>
  </CarouselItem>
 </Carousel>
 </div>
  {/*Footer*/}
  <Footer/>

        </>
    )
}
export default Work;