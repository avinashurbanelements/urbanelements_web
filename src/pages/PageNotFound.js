import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <div className="">
                <div className="d-flex justify-content-center align-items-center py-2 py-md-5 bg_body" data-aos="fade-down" data-aos-delay="200">
                    <div className="text-center" data-aos="fade-down" data-aos-delay="400" data-aos-duration="200" >
                        <span className="display-1"><b>!! 404</b></span><br/>
                        <span className="display-1"><b>Page Not Found</b></span>
                        <div className="py-5 d-flex justify-content-center">
                            <div data-aos="fade-up" data-aos-delay="500">
                                <Link style={{textDecoration: 'none'}} to="/">
                                    <div className='ue_btn btn btn-sm animated-button thar-three px-3 px-lg-5 py-2' style={{color: '#664229', margin:0, textTransform: "uppercase"}}>
                                        <strong className="fs-4">Back to Home</strong>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound