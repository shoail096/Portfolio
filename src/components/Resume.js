import React, { Fragment } from 'react'

function Resume() {
    return (
        <Fragment>
            <div className="col p-4"> 
                <div className="p-4 bg-dark slide-in-top">
                    
                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Shoail</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        
                        <div className="col-md-6">
                            
                            <h4 className="ff-jose ls-2">EDUCATION</h4>
                            <ul>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">BE - AIML</h4>
                                    <h6 className="purple-label px-2 py-1">2021 - 2025</h6>
                                    <p className="m-0">New Horizon College of Engineering</p>
                                    <p>CGPA: 8.68</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">2nd PUC</h4>
                                    <h6 className="purple-label px-2 py-1">2021</h6>
                                    <p className="m-0">Primus Public School</p>
                                    <p>Grade: 87 %</p>
                                </li>
                                <li>
                                    <h4 className="ff-jose my-1 text-red">10th Grade</h4>
                                    <h6 className="purple-label px-2 py-1">2019</h6>
                                    <p className="m-0">St.Peter's School</p>
                                    <p>Grade: 80.5 %</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <p className="text-center fw-bold"><h3>Get Resume</h3></p>
                        <div class="container text-center mt-4">
                            <a href="../shoailResume.pdf" download="Resume_Shoail.pdf" class="btn btn-primary black-label">
                                <i class="fas fa-download"></i> Download Resume
                            </a>
                        </div>

                    </div>
                    
                </div>
            </div>
    </Fragment>
    )
}

export default Resume