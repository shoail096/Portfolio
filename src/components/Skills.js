import React, { Fragment } from 'react'
function Skills() {
return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="m-0 font-big animate-charcter">Languages I'm Proficient In</h1>
                            <hr></hr>

                            <div className="row my-2">

                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>JAVA</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>C</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Python</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>React</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>MongoDB</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Node.js</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>Express.js</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>HTML</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>CSS</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span> JavaScript</span>
                                </div>
                                <div className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                    <span>XML</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid rounded-corner" src="../images/manScreen2.png" alt="..."></img>
                    </div>
                </div>
            </div>
            
        </div>
    </Fragment>
    )
}

export default Skills