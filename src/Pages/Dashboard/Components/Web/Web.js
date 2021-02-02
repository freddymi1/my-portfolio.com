import React from 'react';

import {BiCodeBlock} from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProgressBar from 'react-animated-progress-bar'
import './Styles.css';

export default function Web (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4  uppercase border-b-2 border-gray-50 text-md text-gray-100">
                        <BiCodeBlock size="1.5em" className="inline mr-2 text-gray-50"/>
                        connaissance en programmation
                    </div>
                    <Carousel responsive={responsive} className="mx-auto pt-4 ">
                        <div className="text-center mx-auto items-center justify-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                bgColor="#222"
                                width="250" 
                                trackWidth="20" 
                                percentage="90" 
                            />
                            <div className="pt-4 mx-auto text-center">
                                <p className="text-yellow-500 m-auto text-center uppercase font-extrabold text-2xl">
                                    html
                                </p>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="CSS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="85" 
                            />
                            <div className="pt-4">
                                <label className=" text-green-500 uppercase font-extrabold text-2xl">
                                    css
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="75" 
                            />
                            <div className="pt-4">
                                <label className="text-red-500 uppercase font-extrabold text-2xl">
                                    js
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="60" 
                            />
                            <div className="pt-4">
                                <label className="text-gray-300 uppercase font-extrabold text-2xl">
                                php
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="55" 
                            />
                            <div className="pt-4">
                                <label className="text-red-900 uppercase font-extrabold text-2xl">
                                    java
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="65" 
                            />
                            <div className="pt-4 text-center">
                                <label className="text-blue-500 uppercase font-extrabold text-2xl">
                                    python
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="65" 
                            />
                            <div className="pt-4 text-center">
                                <label className="text-red-400 uppercase font-extrabold text-2xl">
                                    ruby
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="250" 
                                trackWidth="20" 
                                percentage="70" 
                            />
                            <div className="pt-4 text-center">
                                <label className="text-gray-100 uppercase font-extrabold text-2xl">
                                    SQL
                                </label>
                            </div>
                        </div>
                    </Carousel>
                    
                    
                </div>

            </div>
            
            
        </div>
    )
}