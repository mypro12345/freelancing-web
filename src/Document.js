import './style.css';
import Navigation from './Navigation';
import Video from './Videos';
import Footer from './Footer';
import Home from './Home';


function Document()
{
    return(
        <>
         <Navigation/>
         <div className="container">
            
            <div className="title mx-3 d-none d-md-block" style={{marginTop:"150px"}}>
            <h1 style={{fontSize:"48px",color:"#0e1724",fontWeight:"700",lineHeight:"1.17"}}>Logo Design</h1>
            <p className="d-none d-md-block" style={{fontSize:"34px",color:"#0e1724",fontWeight:"400px",display:"inline",lineHeight:"1.33"}}> Logo design is one of the most important aspects of branding.</p>
            <p  className="d-block d-md-none" style={{fontSize:"24px",color:"#0e1724",fontWeight:"400px",display:"inline",lineHeight:"1.33"}}> Logo design is one of the most important aspects of branding.</p>
            <a href="#" className="btn mt-3" style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold"}}>Post a Job</a>
        </div>
        <div className="title mx-5 d-block d-md-none" style={{marginTop:"100px"}}>
            <h1 style={{fontSize:"48px",color:"#0e1724",fontWeight:"700",lineHeight:"1.17"}}>Logo Design</h1>
            <p className="d-none d-md-block" style={{fontSize:"34px",color:"#0e1724",fontWeight:"400px",display:"inline",lineHeight:"1.33"}}> Logo design is one of the most important aspects of branding.</p>
            <p  className="d-block d-md-none" style={{fontSize:"24px",color:"#0e1724",fontWeight:"400px",display:"inline",lineHeight:"1.33"}}> Logo design is one of the most important aspects of branding.</p>
            <a href="#" className="btn mt-3 " style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold"}}>Post a Job</a>
        
            </div>
        
         </div>
        
        <div className="container mt-4">
    <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card">
          <img className="card-img-top" src="https://cdn2.f-cdn.com/files/download/167950793/alexander-.jpg?image-optimizer=force&format=webply&width=967" height={"400px"} />
         </div>
        <br />
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card">
          <img className="card-img-top" src="https://cdn5.f-cdn.com/files/download/144513978/logo-creat.jpg" height={"400px"} />
          </div>  
        <br />
      </div>
      </div>
      </div>

      <div className="container mt-5">
        <div className="mx-3">
            <h1>What is a Logo?</h1>
            <p  style={{fontSize:"17px"}}>A logo is the face of a brand. It may appear to be simply an image or a piece of text, but it identifies a business and helps build brand recognition. Logos are made up of images and texts that convey something about your business and appear on:</p>
            <div className="">
                <ul>
                    <li>Your website</li>
                    <li>Social media profiles</li>
                    <li>Business cards</li>
                    <li>Marketing materials</li>
                    <li>Email signatures</li>
                    <li>Letterheads</li>
                    <li>Store fronts</li>
                    <li>Banners</li>
                    <li>Anywhere else you want your brand to be recognised</li>
                </ul>
            </div>
            <p className="mt-3" style={{fontSize:"15px"}}>A logo is the face of a brand. It may appear to be simply an image or a piece of text, but it identifies a business and helps build brand recognition. Logos are made up of images and texts that convey something about your business and appear on:</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h1>What is the purpose of a logo?</h1>
            <p  style={{fontSize:"18px"}}>A logo exists to promote and define your brand. It establishes credibility and professionalism by meeting a basic consumer demand to know what product or service you offer, what makes your brand different and what it stands for.</p>
            <p className="mt-3" style={{fontSize:"17px"}}>The art of logo design is to find the right blend that gives your brand its own identity and makes it stand out from your competitors. Your logo should reflect something of your USP and brand values with a distinctive style that still makes it clear what you sell. Ultimately, it should form a strong visual association of your brand and create an emotional connection with your target market.</p>
            <p className="mt-3" style={{fontSize:"17px"}}>Yes, there are some massive brands (Apple and McDonalds are great examples) that have logos that don’t necessarily reflect what they do, but they have earned the right to do that as they are already global brands. Go back to 1948 and McDonalds even had to explain their offering by including the words "Famous Hamburgers".</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h1>Different logo types</h1>
            <p  style={{fontSize:"18px"}}>Logo designers tend to talk about seven different types of design:</p>
            <p className="mt-3" style={{fontSize:"17px"}}><b>Wordmarks</b> – Using your name as your logo. Google and Disney are two obvious examples. This is a good choice if you have a memorable name for your business. The success of a wordmark logo is dependent on getting the typography and color palette right.</p>
            <p className="mt-3" style={{fontSize:"17px"}}><b>Lettermarks</b> – Similar to wordmarks but uses just letters. Often used when the full name of the business is too long for a logo or as part of a rebranding process to shorten the name and make it roll off the tongue. Examples include HBO and HP. Lettermarks have increased in popularity with the advent of apps. When designing a lettermark logo, how it would appear on an app menu on your user’ phone is a major consideration.</p>
            <p className="mt-3" style={{fontSize:"17px"}}><b>Pictorial marks</b> – Usually a single image that represents a brand. The Nike tick is an example. Although it is sometimes seen with the name or tagline next to it, the logo is a universal symbol of the brand even when seen on its own. Those with an artistic eye can condense an entire brand image and mission into a single symbol.</p>
            <p className="mt-3" style={{fontSize:"17px"}}><b>Combination mark </b>– Combination marks combine symbols with words or letters. Burger King placed the words of their name between two cartoon burger buns to create a memorable logo that clearly displays the brand name and tells you what the business does.</p>            
            <p className="mt-3" style={{fontSize:"17px"}}><b>Abstract logo marks</b> – These are logos that use unique, often bespoke designed, symbols. Spotify is a prime illustration of a successful abstract logo mark. It’s simple, memorable and distinctive. The three lines clearly display that this is an innovative company at the forefront of the digital revolution. An abstract logo mark is a great way to generate a feeling that your brand is unique and something to be a part of. This can be a head start in building brand loyalty.</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h1>Elements of logo design</h1>
            <p  style={{fontSize:"18px"}}>There are three main elements of good logo design and these must come together to complement and enhance one another. </p>
            <ul>
                <li>Typography</li>
                <li>Imagery</li>
                <li>Color</li>
            </ul>
            <p className="mt-3" style={{fontSize:"17px"}}>When designing a logo for your brand, remember that old adage that it should be more than the sum of its parts. It’s not essential that every one of these is used, but you should explore each of them and think about what they can bring to your logo.</p>
            <p className="mt-3" style={{fontSize:"17px"}}>Ultimately, whether you incorporate text, images or both, and the color palette you choose, you should be able to explain your design decisions.</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h3>Typography</h3>
            <p  style={{fontSize:"17px"}}>When you start looking at how to get started with logo design, you’ll hear the word ‘typography’ a lot. It basically means ‘font’ and refers to the style of lettering you choose. </p>
            <p className="mt-3" style={{fontSize:"17px"}}>This is a major decision and is heavily influenced by how you want your brand to be perceived. The font you choose should match your USP and complement the other areas of your logo design.</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h3>Imagery</h3>
            <p  style={{fontSize:"17px"}}>This can be pretty much anything and getting it right often requires an artistic eye. Choosing an image that clearly displays what you do, like a car for a garage, can make it difficult for your logo to stand out. But equally, going for something too abstract might fail to clearly show what you do or to resonate with your target market. </p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h3>Color</h3>
            <p  style={{fontSize:"17px"}}>Color psychology plays a significant part in branding and logo design and is a complete topic in its own right. One of the great things about color psychology is that it is something that we can all understand if we take a moment to consider the impact color has on our own mood so you don’t always need to rely on experts when it comes to choosing the right color palette for your brand.</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="mx-3">
            <h1>Getting started with logo design</h1>
            <p  style={{fontSize:"18px"}}>Before you start getting creative with color, design, typography and images, you need to go right back to basics and decide what you want your logo to be. Questions you need to ask include:</p>
            <ul>
                <li>Why are you creating a logo?</li>
                <li>What is your brand identity?</li>
                <li>What is your vision or mission statement and how can that be conveyed in a logo?</li>
                <li>Why did you initially go into business?</li>
                <li>What makes your brand different?</li>
                <li>What are your brand values?</li>
                <li>What will grab the attention of your target consumers?</li>
                <li>If you’re redesigning a logo, what do you like about your current one?</li>
            </ul>
            <p className="mt-3" style={{fontSize:"17px"}}>Oftentimes, a good old-fashioned brainstorming session is the best way to get ideas down on paper. Involving the whole team will provide a diverse set of suggestions while helping get your team onboard with the logo design.
If you’re a one-man band, invite a few friends around to make sure you get some different perspectives and design ideas. </p>
        </div>
      </div>
      <div className="mt-4">
        <Video/>
      </div>

      <div className="container mt-5">
        <div className="mx-3">
            <h1>How to design a logo for free</h1>
            <p  style={{fontSize:"18px"}}>It’s quite common for start-ups and entrepreneurs to ask, ‘Can I design a logo for free?’</p>
            <p className="mt-3" style={{fontSize:"17px"}}>The answer is that there are countless websites that will allow you to create your own logo design completely without charge. For some, this might be the best decision. For others, it is a false economy.</p>
            <p className="mt-3" style={{fontSize:"17px"}}>If you only want to use your logo on business cards, your website and our social media profile pictures, using free software can provide you with an adequate logo. At least then you can start getting it out there to let your target market know you exist.</p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="mx-3">
            <h1>Where can I find a logo designer?</h1>
            <p  style={{fontSize:"18px"}}>Finding freelance logo designers online is easy. Finding one you know you can trust is slightly more challenging. Naturally, every designer describes themselves using words such as ‘innovative’, ‘professional’, ‘reliable’. </p>
            <p className="mt-3" style={{fontSize:"17px"}}>Only with independent reviews can you work out which ones have a body of work that reinforces their claims. </p>
            <p className="mt-3" style={{fontSize:"17px"}}>Freelancer.Hub is the world’s biggest freelance marketplace. You can find top logo designers from right across the globe and check out their portfolios and reviews for peace of mind and confidence.</p>
        </div>
      </div>
      <div className="container mt-5" style={{"background-color":"#ebeced","height":"auto"}}>
    <h2 className="text-center" style={{"padding":"20px 0px"}}>Recommended Articles Just for You</h2>
    <div className="row ">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{"padding":"0px 30px"}}>
        <div className="card" style={{"background-color":"#fff","height":"auto"}}>
          <img className="mx-3 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/1200px-Cquote1_black.svg.png" height="20px" width="20px" />
          <p style={{"padding":"30px 30px"}}> If you've ever worked with a designer professionally, you'll know that they never just present one option. Try a couple of different logos and ...</p>
          <div className="text-center">
            <img src="https://venngage.com/blog/wp-content/themes/venngage_v3/img/v3/venngage-logo.svg" style={{"clip-path":"circle()","width":"50px","height":"50px"}} />
            <br/>
            <a href="https://venngage.com/blog/logo-design-tips/" className="btn mb-2" style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold"}}>Read More</a>
          </div>
        </div>
        <br />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{"padding":"0px 30px"}}>
        <div className="card" style={{"background-color":"#fff","height":"auto"}}>
          <img className="mx-3 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/1200px-Cquote1_black.svg.png" height="20px" width="20px" />
          <p style={{"padding":"30px 30px"}}>From ideation to execution, learn how to design a logo for your business, side hustle, or passion project with this in-depth 5-step design guide.....</p>  
          <div className="text-center">
            <img src="https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg" style={{"clip-path":"circle()","width":"50px","height":"50px"}} />
            <br/>
            <a href="https://looka.com/blog/how-to-design-a-logo/" className="btn mb-2" style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold"}}>Read More</a>
          </div>
        </div>
        <br />
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{"padding":"0px 30px"}}>
        <div className="card" style={{"background-color":"#fff","height":"auto"}}>
          <img className="mx-3 mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/1200px-Cquote1_black.svg.png" height="20px" width="20px" />
          <p style={{"padding":"30px 30px"}}>Creating a logo is slightly different than creating other branding elements such as a business card. Unlike other brand design elements, logos ...</p> 
          <div className="text-center">
            <img src="https://blog.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Blog%202021/Images/Logos/HubSpot%20Logo.svg" style={{"clip-path":"circle()","width":"50px","height":"50px"}} />
            <br/>
            <a href="https://learn.g2.com/creating-a-logo" className="btn mb-2" style={{backgroundColor:"#f20091",color:"#f7f7f7","font-family":"Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",fontWeight:"bold"}}>Read More</a>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>  
   

      <Footer/>

        </>
       
        

    )
}

export default Document;