import Footer from "../components/Footer"
import { Link, Outlet } from "react-router-dom"

const Gallery = () => {
    return (
        <div className="" id="gallery">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>Gallery</b></span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="luxurious-brown">
                            <div className='ue_btn btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                                Luxurious Brown
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="office-essentials">
                            <div className='ue_btn btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Office Essentials
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="aesthetic-decor">
                            <div className='ue_btn btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Aesthetic Decor
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
            {/* <div id="proj_1">
                <Porject_1/>
            </div>
            <div id="proj_2">
                <Porject_2/>
            </div>
            <div id="proj_3">
                <Porject_3/>
            </div> */}
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Gallery