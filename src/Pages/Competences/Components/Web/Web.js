import React from 'react';
import {IoCodeSlash} from 'react-icons/io5';
import {FaPhp, FaJava} from 'react-icons/fa';
import {SiHtml5, SiPython, SiRuby} from 'react-icons/si';
import {IoLogoCss3} from 'react-icons/io5';
import {DiJavascript} from 'react-icons/di';
import ProgressBar from 'react-animated-progress-bar'
export default function Web (){
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4  uppercase border-b-2 border-gray-50 text-md text-gray-100">
                        <IoCodeSlash size="1.5em" className="inline mr-2 text-gray-50"/>
                        Language de programmation
                    </div>
                    <div className="w-full pt-4 md:flex">
                        <div className="text-center justify-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                bgColor="#222"
                                width="205" 
                                trackWidth="12" 
                                percentage="90" 
                             />
                             <div className="pt-4 mx-auto text-center">
                                <p className="text-yellow-500 m-auto text-center uppercase font-extrabold text-2xl">
                                    <SiHtml5 size="2em" className="text-center mx-auto" />
                                </p>
                             </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="CSS" 
                                width="205" 
                                trackWidth="12" 
                                percentage="85" 
                            />
                            <div className="pt-4">
                                <label className=" text-green-500 uppercase font-extrabold text-2xl">
                                    <IoLogoCss3 className="text-center mx-auto" size="2em"/>
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="205" 
                                trackWidth="12" 
                                percentage="75" 
                            />
                            <div className="pt-4">
                                <label className="text-red-500 uppercase font-extrabold text-2xl">
                                    <DiJavascript className="text-center mx-auto" size="2em"/>
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="205" 
                                trackWidth="12" 
                                percentage="60" 
                            />
                            <div className="pt-4">
                                <label className="text-gray-300 uppercase font-extrabold text-2xl">
                                   <FaPhp className="text-center mx-auto" size="2em" />
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="205" 
                                trackWidth="12" 
                                percentage="55" 
                            />
                            <div className="pt-4">
                                <label className="text-red-900 uppercase font-extrabold text-2xl">
                                    <FaJava size="2em" className="text-center mx-auto" />
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="205" 
                                trackWidth="12" 
                                percentage="65" 
                            />
                            <div className="pt-4 text-center">
                                <label className="text-blue-500 uppercase font-extrabold text-2xl">
                                    <SiPython className="text-center mx-auto" size="2em" />
                                </label>
                            </div>
                        </div>
                        <div className="text-center p-4 shadow-lg hover:bg-gray-800">
                            <ProgressBar 
                                title="JS" 
                                width="205" 
                                trackWidth="12" 
                                percentage="65" 
                            />
                            <div className="pt-4 text-center">
                                <label className="text-red-400 uppercase font-extrabold text-2xl">
                                    <SiRuby className="text-center mx-auto" size="2em" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='w-100 rounded-b-xl -mt-8'>
                <a className='font-semibold pt-2 pr-2 float-right text-right text-sm  text-gray-100'>
                    Plus de details
                </a>
            </div> */}
        </div>
    )
}