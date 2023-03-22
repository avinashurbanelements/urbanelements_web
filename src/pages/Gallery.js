import Footer from "../components/Footer"
import { Link, Outlet } from "react-router-dom"
import { Collapse } from '@mui/material';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Gallery = () => {

    const [isOpen, setIsOpen] = useState(true)
    const routePath = useLocation();

    // useEffect(() => {
    //     setIsOpen(true)
    // }, [routePath])

    return (
        <div className="" id="gallery">
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body_gallery" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>Gallery</b></span>
                        <div className="d-flex justify-content-end" data-aos="fade-right" data-aos-delay="500">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
            <Collapse in={!isOpen}>
                <div className="mx-auto col-sm-4 py-1 col-10">
                    <button 
                        onClick={() => setIsOpen(true)}
                        className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                        Show More
                    </button>
                </div>
            </Collapse>
            <Collapse in={isOpen}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="luxurious-brown">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                                Luxurious Brown
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="office-essentials">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Office Essentials
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="aesthetic-decor">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Aesthetic Decor
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="honeysuckle-decor">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Honeysuckle
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="woodland">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Woodland
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="living-rooms-ideas-1">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Living Room Ideas - 1
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="living-rooms-ideas-2">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Living Room Ideas - 2
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="kitchen-ideas">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Kitchen Ideas
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="bedroom-ideas-1">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Bedroom Ideas
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="children-bedroom-ideas">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Children Bedroom Ideas
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-4 py-1 col-10">
                        <Link style={{textDecoration: "none"}} to="bathroom-ideas">
                            <button 
                            onClick={() => setIsOpen(false)}
                            className='ue_btn col-12 btn btn-sm animated-button thar-three px-3 px-lg-4 py-2 fs-5' style={{color: '#664229', margin:0}}>
                            Bathroom Ideas
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </Collapse>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Gallery