import Footer from "../components/Footer"
import home_banner_logo from "../assets/ue_logo_sm.png"

const About = () => {
    return (
        <div className="">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>ABOUT US</b></span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                            <p className="m-0">- Designing spaces that tell your story.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-3 py-md-5">
                    <hr className="ms-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="300" style={{padding: '0.1rem'}}/>
                    <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <p className="fs-4">
                            Our goal is to achieve the sub par standard of living and making our home as beautiful 
                            as our soul. We ensure that you get all the things that you ask for starting from your 
                            wall paint till your furniture. We expertise in designing modern residents, commercial 
                            sites and hospitality. 
                        </p>
                    </div>
                    <hr className="col-10 col-md-6" data-aos="fade-up" data-aos-delay="600" style={{padding: '0.1rem'}}/>
                </div>
            </div>
            <div>
              <div id="carouselExampleIndicators" className="carousel slide my-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner" data-aos="fade-up"data-aos-delay="200" >
                  <div className="carousel-item about_slide_div1 active">
                    {/* <img src={proj_1_3} className="d-block w-100" alt="..."/> */}
                  </div>
                  <div className="carousel-item about_slide_div2">
                    {/* <img src={proj_1_4} className="d-block w-100" alt="..."/> */}
                  </div>
                  <div className="carousel-item about_slide_div3">
                    {/* <img src={proj_1_6} className="d-block w-100" alt="..."/> */}
                  </div>
                  <div className="carousel-item about_slide_div4">
                    {/* <img src={proj_1_10} className="d-block w-100" alt="..."/> */}
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div data-aos="flip-left" className="container-fluid">
              <hr className="mx-auto col-md-8 col-10" style={{padding: '0.1rem'}}/>
            </div>
            <div>
              <div className="" data-aos="fade-up" data-aos-delay="300">
                  <p className="display-4 text-center">OUR TEAM</p>
              </div>
                <div className="container-fluid py-3 py-md-5">
                  <div className="d-flex justify-content-center row row-cols-1 row-cols-md-3 g-4">
                    <div className="col" data-aos="fade-up" data-aos-delay="400">
                      <div className="card h-100 border-0 rounded-lg p-2" style={{boxShadow: '0px 10px 20px #664229'}}>
                        <div className="card-body">
                          <h3 className="card-title fs-2 text-center"><b>Avinash Dhavan</b></h3>
                          <hr />
                          <span className="card-text fs-4">Starting up as an interior designer has it own perks. 
                          You get to meet various people with their creativity and which helps us with the 
                          growth, we believe in quality over quantity so that our customer satisfaction 
                          is 100% this way we know how we manage our projects and help our clients transform 
                          their houses to beautiful homes. </span>
                        </div>
                      </div>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="500">
                      <div className="card h-100 border-0 rounded-lg p-2" style={{boxShadow: '0px 10px 20px #664229'}}>
                        <div className="card-body">
                          <h3 className="card-title fs-2 text-center"><b>Khyati Shah</b></h3>
                          <hr />
                          <span className="card-text fs-4 text-justify">Managing and handling project is a part of work which eventually 
                          leads to getting in clients and more references. Our office environment is such that no 
                          employee has to worry about their leaves, any emergencies and their problems because we 
                          are here to help them all.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-left" className="container-fluid">
                <hr className="mx-auto col-md-8 col-10" style={{padding: '0.1rem'}}/>
              </div>
              <div>
                <div className="text-center py-5" data-aos="fade-up" >
                    <span className="display-3"><b>Testimonals</b></span>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <div className="d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-5 col-md-8 col-10 container">
                          <p className="text-center fs-1"><b>Bhavna Shah</b></p>
                          <p className="text-center fs-4">The experience was amazing as you can clearly vision what you want for your house. 
                          Save my time and gave me more clarity and customer service is amazing.</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <div className="d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-5 col-md-8 col-10 container">
                          <p className="text-center fs-1"><b>Gayatri Ahuja</b></p>
                          <p className="text-center fs-4">From creating the perfect layout to finding pieces I absolutely loved, 
                          my designer really took my space to the next level. I never dreamed my home could look – and feel – this good!</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-5 col-md-8 col-10 container">
                          <p className="text-center fs-1"><b>Vineeta Patel</b></p>
                          <p className="text-center fs-4">This was super fun and easy! They were so helpful every step of the way. 
                          I can’t wait to redo my room!</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-5 col-md-8 col-10 container">
                          <p className="text-center fs-1"><b>Nitin Gupta</b></p>
                          <p className="text-center fs-4">We were certain about some pieces going in and not about others so it was 
                          great to trouble shoot with someone. Great design came out and we are ready to go!</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
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
    )
}

export default About