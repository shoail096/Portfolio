import React, { Fragment } from 'react';

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
                        {/* Predicting Profit */}
                        <div className="col-md-4 text-center my-2 project-item">
                            <div className="project-image">
                                <img src="../portfolio-images/profitWeb.png" className="d-block w-100" alt="Profit" />
                                <div className="project-description">
                                    <h5 className="ff-jose">Predicting Company Profits</h5>
                                </div>
                            </div>
                        </div>

                        {/* Calorie Predictor */}
                        <div className="col-md-4 text-center my-2 project-item">
                            <div className="project-image">
                                <img src="../portfolio-images/calorie1.png" className="d-block w-100" alt="Calorie Prediction" />
                                <div className="project-description">
                                    <h5 className="ff-jose">Calories burnt prediction</h5>
                                </div>
                            </div>
                        </div>
                        
                        {/* Note APP */}
                        <div className="col-md-4 text-center my-2 project-item">
                            <div className="project-image">
                                <img src="../portfolio-images/noteApp.png" className="d-block w-100" alt="Note App" />
                                <div className="project-description">
                                    <h5 className="ff-jose">Note-taking application</h5>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </Fragment>
    );
}

export default MyWork;
