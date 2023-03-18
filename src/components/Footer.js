import {
    AiFillInstagram,
    AiFillFacebook
  } from "react-icons/ai";

const Footer = () => {

  let date = new Date();
//   let year = date.getFullYear()

    return (
        <div style={{backgroundColor: '#d7b38c', textAlign: "center"}}  className="p-3 p-md-5">
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div className="row py-3 py-md-4">
                <div className="col-sm text-center py-3">
                    <u className="fs-3">Location</u>
                    <div className="text-center fs-4">
                        5th floor, Office no. 502,
                        Mayuresh Square Sector-15,
                        CBD Belapur-400614 Navi Mumbai.
                    </div>
                </div>
              <hr className="mx-auto d-sm-none col-10" style={{padding: '0.1rem'}}/>
                <div className="col-sm text-center py-3">
                    <u className="fs-3">Social Media Links</u>
                        <div className="d-flex justify-content-around py-3">
                            <div className="social-icons">
                            <a
                            className="fs-4 text-decoration-none underline-none"
                                href="https://facebook.com/interiordesignstudioforall"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <AiFillFacebook />
                                <span className="text-decoration-none px-2">FaceBook</span>
                            </a>
                            </div>
                            <div className="social-icons">
                            <a
                            className="fs-4 text-decoration-none underline-none"
                                href="https://www.instagram.com/urbanelementsofficial"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                                <span className="text-decoration-none px-2">Instagram</span>
                            </a>
                            </div>
                        </div>
                </div>
            </div>
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div className="text-center" >
                <span>Copyright © 2023 urban elements</span>
            </div>
        </div>
    )
}

export default Footer