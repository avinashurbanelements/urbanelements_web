import Footer from "../components/Footer"

import Porject_1 from "./gallery_components/Project_1"
import Porject_2 from "./gallery_components/Project_2"
import Porject_3 from "./gallery_components/Project_3"

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
            <div id="proj_1">
                <Porject_1/>
            </div>
            <div id="proj_2">
                <Porject_2/>
            </div>
            <div id="proj_3">
                <Porject_3/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Gallery