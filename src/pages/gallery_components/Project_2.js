import proj_2_1 from "../../assets/proj_2/proj_2_1.jpg"
import proj_2_2 from "../../assets/proj_2/proj_2_2.jpg"
import proj_2_3 from "../../assets/proj_2/proj_2_3.jpg"
import proj_2_4 from "../../assets/proj_2/proj_2_4.jpg"

const Porject_2 = () => {
    return (
        <div>
        <div className="py-3 py-md-5" style={{overflow:"hidden"}}>
            <hr className="ms-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="300" style={{padding: '0.1rem'}}/>
            <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <span className="d-flex justify-content-center display-2 m-0" style={{}}>
                    Office-
                    <div className="d-flex">
                        <span className="" data-aos="fade-left" data-aos-delay="300"> E </span>
                        <span data-aos="fade-left" data-aos-delay="350"> s </span>
                        <span data-aos="fade-left" data-aos-delay="400"> s </span>
                        <span data-aos="fade-left" data-aos-delay="450"> e </span>
                        <span data-aos="fade-left" data-aos-delay="500"> n </span>
                        <span data-aos="fade-left" data-aos-delay="500"> t </span>
                        <span data-aos="fade-left" data-aos-delay="500"> i </span>
                        <span data-aos="fade-left" data-aos-delay="500"> a </span>
                        <span data-aos="fade-left" data-aos-delay="500"> l </span>
                    </div>
                </span>
            </div>
            <hr className="col-10 col-md-6" data-aos="fade-up" data-aos-delay="600" style={{padding: '0.1rem'}}/>
        </div>
        <div>
            <div className="py-3 py-md-5">
            <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_2_1} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_2_3} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_2_2} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_2_4} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Porject_2