import React, { Fragment } from 'react'

function MyWork() {
    return (
        <Fragment>
            <div className="col p-4"> 
                <div className="p-4 slide-in-top">
                    
                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">My Projects</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {/* Weather App */}
                        <div className="col-md-4 text-center my-2">
                            <img src="../portfolio-images/profit2.png" className="d-block w-100" alt="Profit" />
                            <h5 className="ff-jose my-1">Performing regression analysis of company profit</h5>
                            <div className="row d-flex justify-content-center">
                            </div>
                        </div>
                        {/* Movie Browser */}
                        <div className="col-md-4 text-center my-2">
                        <img src="../portfolio-images/calorie1.png" className="d-block w-100" alt="Calorie Prediction" />
                            <h5 className="ff-jose my-1">Calories burnt prediction</h5>
                            <div className="row d-flex justify-content-center">
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </Fragment>
    )
}

export default MyWork;
