import React, { Fragment } from 'react'

function About() {
    return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-pink slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>
                                Hello, I am Shoailuddin, currently pursuing a Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning (AIML) from New Horizon College of Engineering. In addition to my specialization in AI and ML, I actively explore and deepen my skills in web development.
                            </p>
                            <p className='slide-in-bottom'>
                                I have a passion for staying updated with the latest developments in technology and tech news across various fields.
                            </p>
                            <p className='slide-in-bottom'>
                                My hobbies are, Cycling, Watching Football, Playing Basketball. 
                            </p>
                            <p className='slide-in-bottom'>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default About