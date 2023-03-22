import proj_8_1 from "../../assets/proj_8/proj_8_1.png"
import proj_8_2 from "../../assets/proj_8/proj_8_2.png"
import proj_8_3 from "../../assets/proj_8/proj_8_3.png"
import proj_8_4 from "../../assets/proj_8/proj_8_4.png"
import proj_8_5 from "../../assets/proj_8/proj_8_5.png"
import proj_8_6 from "../../assets/proj_8/proj_8_6.png"

const Porject_8 = () => {
    return (
        <div>
        <div className="py-3 py-md-5" style={{overflow:"hidden"}}>
            <hr className="ms-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="300" style={{padding: '0.1rem'}}/>
            <div className="mx-auto col-10 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <span className="d-flex justify-content-center display-2 m-0" style={{}}>
                    Kitchen Ideas
                </span>
            </div>
            <hr className="col-10 col-md-6" data-aos="fade-up" data-aos-delay="600" style={{padding: '0.1rem'}}/>
        </div>
        <div>
            <div className="py-3 py-md-5">
            <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_8_1} alt="Luxurious Brown"/>
                                </div>
                                </div>
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_8_6} alt="Luxurious Brown"/>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_8_5} alt="Luxurious Brown"/>
                                </div>
                                </div>
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_8_4} alt="Luxurious Brown"/>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_8_2} alt="Luxurious Brown"/>
                                </div>
                                </div>
                            <div className="card text-white border-0 rounded-lg m-1 m-md-3">
                                <div className="shadow" data-aos="fade-up" data-aos-anchor-placement="top-center">
                                    <img className="card-img" src={proj_8_3} alt="Luxurious Brown"/>
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

export default Porject_8