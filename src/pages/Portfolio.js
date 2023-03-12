import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import proj_1_1 from "../assets/proj_1/proj_1_1.jpg"
import proj_2_1 from "../assets/proj_2/proj_2_1.jpg"
import proj_3_1 from "../assets/proj_3/proj_3_1.jpg"

const Portfolio = () => {
    return (
        <div id="portfolio" className="">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>Portfolio</b></span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-3 py-md-5">
                    <hr className="ms-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="300" style={{padding: '0.1rem'}}/>
                    <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <p className="fs-4">
                        We transform grids and lines into a artform of urbanisation which is cities. 
                        We include modern technologies and new innovations 
                        into our artform which is a 100% satisfaction to the customer. 
                        </p>
                    </div>
                    <hr className="col-10 col-md-6" data-aos="fade-up" data-aos-delay="600" style={{padding: '0.1rem'}}/>
                </div>
            </div>
            <div>
                <section className="proj-cards-wrapper">
                <div className="proj-card-grid-space" data-aos="fade-up" data-aos-delay="300">
                    <div className="num">01</div>
                    <Link className="proj-card shadow" to="/gallery#proj_1" 
                    style={{backgroundImage: `url(${proj_1_1})`}}>
                    <div>
                        <h1 className="project_head">Luxurious Brown</h1>
                        <p></p>
                        <div className="proj-tags">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="proj-card-grid-space" data-aos="fade-up" data-aos-delay="300">
                    <div className="num">02</div>
                    <Link className="proj-card2 shadow" to="/gallery#proj_2" 
                    style={{backgroundImage: `url(${proj_2_1})`}}>
                    <div>
                        <h1 className="project_head2">Office Essentials</h1>
                        <p></p>
                        <div className="proj-tags2">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="proj-card-grid-space" data-aos="fade-up" data-aos-delay="300">
                    <div className="num">03</div>
                    <Link className="proj-card3 shadow" to="/gallery#proj_3" 
                    style={{backgroundImage: `url(${proj_3_1})`}}>
                    <div>
                        <h1 className="project_head3">Aesthetic Decor</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                </div>
                </section>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Portfolio