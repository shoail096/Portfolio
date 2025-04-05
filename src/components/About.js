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
                            Hello! I’m Shoailuddin — currently juggling machine learning algorithms and JavaScript bugs while pursuing my Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning (AIML) at New Horizon College of Engineering.
                            </p>
                            <p className='slide-in-bottom'>
                            By day, I’m diving deep into AI models and web development. By night, I’m probably dreaming of scoring the winning goal as a classic No. 9 striker (yes, I take my football very seriously). You’ll usually find me playing upfront — speed, skill, and totally unnecessary stepovers included.
                            </p>
                            <p className='slide-in-bottom'>
                            When I’m not on the field (virtual or real), I’m either riding my cycle like it’s the Tour de Bangalore or out trying to read a golf green like it’s a neural net — yes, I’ve also got a soft spot for golf. Calm, precise, and just the right amount of rage when the ball misses the hole by that much.
                            </p>
                            <p className='slide-in-bottom'>
                            I’m passionate about staying updated with everything tech — from the latest breakthroughs in AI to the newest gadgets in the market. If it’s innovative, I’m in.
                            </p>
                            <p className='slide-in-bottom'>
                            Oh, and did I mention? Basketball is also part of the weekend therapy.
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