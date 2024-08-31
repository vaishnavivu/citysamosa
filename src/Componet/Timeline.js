import React from 'react';
const Timeline = () => {

    return (

        <div className='main container'>

            <h1> My <span> Skills </span> </h1>

            <div className='timeline'>


                {/* HTML Card*/}

                <div className='timecontainer left-container 'data-aos="flip-left">

                    <img src="../htmlimg.png" alt='HTML' />

                    <div className='text-box htmlcard'>

                        <h2 className='htmltext'> HTML </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>
                            MR Coder has 1 years of experience at [Company Name], specializing in HTML.
                            </p>

                        <span className='left-container-arrow htmlarrow'></span>

                    </div>

                </div>


                {/*  JavaScript Card*/}

                <div className='timecontainer right-container'data-aos="flip-right">

                    <img src="../javascriptimg.png" alt='JavaScript' />

                    <div className='text-box javascriptcard'>

                        <h2 className='javascripttext'> JavaScript </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], focusing on JavaScript.
                            </p>

                        <span className='right-container-arrow javascriptarrow'></span>

                    </div>

                </div>


                {/*  React Js Card*/}

                <div className='timecontainer left-container'data-aos="flip-left">

                    <img src="../reactjsimg.png" alt='React JS' />

                    <div className='text-box reactjscard'>

                        <h2 className='reactjstext'> React Js </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>

                            MR Coder has 1 year of experience at [Company Name] in React.js,
                           
                        </p>

                        <span className='left-container-arrow reactjsarrow'></span>

                    </div>

                </div>


                {/*  Node JS Card*/}

                <div className='timecontainer right-container'data-aos="flip-right">

                    <img src="../nodejsimg.png" alt='Node JS' />

                    <div className='text-box nodejscard'>

                        <h2 className='nodejstext'> Node Js </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>

                            MR Coder has 1 year of experience at [Company Name] in Node.js,
                         
                        </p>

                        <span className='right-container-arrow nodejsarrow'></span>

                    </div>

                </div>


                {/*  Express Js Card*/}

                <div className='timecontainer left-container'data-aos="flip-left">

                    <img src="../expressjsimg.png" alt='Express JS' />

                    <div className='text-box expressjscard'>

                        <h2 className='expressjstext'> Express Js </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], focusing on Express.js.
                             </p>

                        <span className='left-container-arrow expressjsarrow'></span>

                    </div>

                </div>


                {/*  MongoDB Card*/}

                <div className='timecontainer right-container'data-aos="flip-right">

                    <img src="../mongodbimg.png" alt='MongoDB' />

                    <div className='text-box mongodbcard'>

                        <h2 className='mongodbext'> MongoDB </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], working with MongoDB.
                           </p>

                        <span className='right-container-arrow mongodbarrow'></span>

                    </div>

                </div>


                {/*  PHP Card*/}

                <div className='timecontainer left-container'data-aos="flip-left">

                    <img src="../phpimg.png" alt='PHP' />

                    <div className='text-box phpcard'>

                        <h2 className='phptext'> PHP </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], specializing in PHP.
                           </p>

                        <span className='left-container-arrow phparrow'></span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Timeline;