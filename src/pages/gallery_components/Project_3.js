import proj_3_1 from "../../assets/proj_3/proj_3_1.jpg"
import proj_3_2 from "../../assets/proj_3/proj_3_2.jpg"
import proj_3_3 from "../../assets/proj_3/proj_3_3.jpg"
import proj_3_4 from "../../assets/proj_3/proj_3_4.jpeg"

const Porject_3 = () => {
    return (
        <div>
        <div className="py-3 py-md-5" style={{overflow:"hidden"}}>
            <hr className="ms-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="300" style={{padding: '0.1rem'}}/>
            <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <span className="d-flex justify-content-center display-2 m-0" style={{}}>
                Aesthetic-
                    <div className="d-flex">
                        <span className="" data-aos="fade-left" data-aos-delay="300"> D </span>
                        <span data-aos="fade-left" data-aos-delay="350"> e </span>
                        <span data-aos="fade-left" data-aos-delay="400"> c </span>
                        <span data-aos="fade-left" data-aos-delay="450"> o </span>
                        <span data-aos="fade-left" data-aos-delay="500"> r </span>
                    </div>
                </span>
            </div>
            <hr className="col-10 col-md-6" data-aos="fade-up" data-aos-delay="600" style={{padding: '0.1rem'}}/>
        </div>
        <div>
            <div className="py-3 py-md-5">
            <div className="container-fluid py-md-5">
                    <div className="row" >
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_3_3} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_3_2} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_3_4} alt="Luxurious Brown"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_3_1} alt="Luxurious Brown"/>
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

export default Porject_3