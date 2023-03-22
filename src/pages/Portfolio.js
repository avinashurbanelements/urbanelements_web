import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import proj_1_1 from "../assets/proj_1/proj_1_1.jpg"
import proj_2_1 from "../assets/proj_2/proj_2_1.jpg"
import proj_3_1 from "../assets/proj_3/proj_3_1.jpg"
import proj_4_1 from "../assets/proj_4/proj_4_1.jpg"
import proj_5_1 from "../assets/proj_5/proj_5_1.jpg"
import proj_6_1 from "../assets/proj_6/proj_6_1.png"
import proj_7_1 from "../assets/proj_7/proj_7_1.png"
import proj_8_1 from "../assets/proj_8/proj_8_1.png"
import proj_9_1 from "../assets/proj_9/proj_9_1.png"
import proj_10_1 from "../assets/proj_10/proj_10_1.png"
import proj_11_1 from "../assets/proj_11/proj_11_1.png"

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
            <div className="container py-5">
                <section className="row d-flex justify-content-center">
                <div className="col-md-4 col-10 proj-card-grid-space d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">01</div>
                    <Link className="proj-card shadow" to="/gallery/luxurious-brown" 
                    style={{backgroundImage: `url(${proj_1_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head">Luxurious Brown</h1>
                        <p></p>
                        <div className="proj-tags">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">02</div>
                    <Link className="proj-card2 shadow" to="/gallery/office-essentials" 
                    style={{backgroundImage: `url(${proj_2_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head2">Office Essentials</h1>
                        <p></p>
                        <div className="proj-tags2">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">03</div>
                    <Link className="proj-card3 shadow" to="/gallery/aesthetic-decor" 
                    style={{backgroundImage: `url(${proj_3_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Aesthetic Decor</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">04</div>
                    <Link className="proj-card4 shadow" to="/gallery/honeysuckle-decor" 
                    style={{backgroundImage: `url(${proj_4_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Honeysuckle Decor</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">05</div>
                    <Link className="proj-card5 shadow" to="/gallery/woodland" 
                    style={{backgroundImage: `url(${proj_5_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">WoodLand</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">06</div>
                    <Link className="proj-card6 shadow" to="/gallery/living-rooms-ideas-1" 
                    style={{backgroundImage: `url(${proj_6_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Living Room Ideas-1</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">07</div>
                    <Link className="proj-card8 shadow" to="/gallery/living-rooms-ideas-2" 
                    style={{backgroundImage: `url(${proj_7_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Living Room Ideas-2</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">08</div>
                    <Link className="proj-card8 shadow" to="/gallery/kitchen-ideas" 
                    style={{backgroundImage: `url(${proj_8_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Kitchen Ideas</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">09</div>
                    <Link className="proj-card9 shadow" to="/gallery/bedroom-ideas-1" 
                    style={{backgroundImage: `url(${proj_9_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Bedroom Ideas-1</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">10</div>
                    <Link className="proj-card11 shadow" to="/gallery/children-bedroom-ideas" 
                    style={{backgroundImage: `url(${proj_10_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Children Bedroom Ideas</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="col-md-4 col-10 proj-card-grid-space  d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <div>
                    <div className="num">11</div>
                    <Link className="proj-card10 shadow" to="/gallery/bathroom-ideas" 
                    style={{backgroundImage: `url(${proj_11_1})`, width: '100%'}}>
                    <div>
                        <h1 className="project_head3">Bathroom Ideas</h1>
                        <p></p>
                        <div className="proj-tags3">
                        {/* <div className="proj-tag">HTML</div> */}
                        </div>
                    </div>
                    </Link>
                    </div>
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