import home_banner_logo from "../assets/ue_logo_sm.png"
import home_banner_1 from "../assets/UE_12.jpg"
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      <div className="home_banner_div" data-aos="fade-in" data-aos-delay="">
        <div className="home_banner_text">
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <img className="rounded-circle" src={home_banner_logo} alt="Urban Elements Logo" style={{ height: '25vh'}} />
          <h1 className="display-1 text-center py-3 py-md-5" data-aos="fade-up" data-aos-delay="1000">
            <strong style={{color: '#d7b38c',  textShadow: '0px 2px 20px black'}}>Urban Elements</strong>
          </h1>
          </div>
        </div>
      </div>
      <div className="py-3 py-md-5">
        <div className="mx-auto col-10 text-center">
          <span className="display-2">
            <span data-aos="fade-in" data-aos-delay="300">Your </span>
            <span data-aos="fade-in" data-aos-delay="500">vision, </span>
            <span data-aos="fade-in" data-aos-delay="700">our </span>
            <span data-aos="fade-in" data-aos-delay="900">design </span><br/>
            </span><span className="display-4 text-thin" data-aos="fade-up" data-aos-delay="1200">- a perfect match.</span>
        </div>
      </div>
      <div data-aos="flip-left">
              <hr className="mx-auto col-md-6 col-10" style={{padding: '0.1rem'}}/>
      </div>
      <div className="py-3 py-md-5">
        <div className="" data-aos="fade-up" data-aos-delay="500">
          <h1 className="display-2 text-center">
            Picture of One Design
          </h1>
        </div>
        <div className="mx-auto d-flex justify-content-center align-items-center">
          <div className="p-md-5 p-3 row container-fluid d-flex justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="floating" data-aos="fade-up" data-aos-delay="700">
                <img className="img-fluid img_ani p-2 shadow" src={home_banner_1} alt="Urban Elements Logo" style={{ border: '2px solid #d7b38c',  height: '50vh'}} />
              </div>
            </div>
            <div className="col-md-4 py-5" data-aos="fade-right" data-aos-delay="300">
              <h4 className="">
                Urban elements comes from urbanisation of your home with better quality and better standard of living. 
                To Recreate the art and shaping cities and towns by giving them form and character. 
                We are a simple unit and we look forward to be combined into more complex whole o an urban quarter or city. 
                We make sure to give the best cost with the best quality of furniture, beautiful designs that are breathetaking to look at and the best premium lifestyle. 
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center py-5" data-aos="fade-up" >
            <span className="display-3"><b>Testimonals</b></span>
        </div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-aos="fade-up">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Bhavna Shah</b></p>
                  <p className="text-center fs-4">The experience was amazing as you can clearly vision what you want for your house. 
                  Save my time and gave me more clarity and customer service is amazing.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Gayatri Ahuja</b></p>
                  <p className="text-center fs-4">From creating the perfect layout to finding pieces I absolutely loved, 
                  my designer really took my space to the next level. I never dreamed my home could look – and feel – this good!</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Vineeta Patel</b></p>
                  <p className="text-center fs-4">This was super fun and easy! They were so helpful every step of the way. 
                  I can’t wait to redo my room!</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Nitin Gupta</b></p>
                  <p className="text-center fs-4">We were certain about some pieces going in and not about others so it was 
                  great to trouble shoot with someone. Great design came out and we are ready to go!</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center align-items-center">
                <div className="p-5 col-md-8 col-10 container">
                  <p className="text-center fs-1"><b>Dheeraj Patil</b></p>
                  <p className="text-center fs-4">Overall great experience. Thank you for the help!</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;