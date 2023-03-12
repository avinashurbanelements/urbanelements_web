const Footer = () => {
    return (
        <div style={{backgroundColor: '#d7b38c', textAlign: "center"}}  className="p-3 p-md-5">
            <hr className="mx-5" style={{backgroundColor: '#664229'}}/>
            <div className="row py-3 py-md-4">
                <div className="col-sm text-center py-3">
                    <u>Location</u>
                    <div className="text-center">
                        5th floor, Office no. 502,
                        Mayuresh Square Sector-15,
                        CBD Belapur-400614 Navi Mumbai.
                    </div>
                </div>
              <hr className="mx-auto d-sm-none col-10" style={{padding: '0.1rem'}}/>
                <div className="col-sm text-center py-3">
                    <u>Social Media Links</u>
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