import React, {useState, useRef} from 'react';
import FrameworkComp from './Components/FrameworkComp';
import {FaLaptopCode} from 'react-icons/fa';


import Chevron from './Chevron/Chevron';
import './Styles/Accordion.css';
export default function Framework (){
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion_icon")
    const content = useRef(null);

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
        console.log(content.current.scrollHeight)
    }
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="accordion_section bg-gray-900">
                        <div className="accordion  bg-gray-900 cursor-pointer"
                            onClick={toggleAccordion}
                        >
                            <div className="accordion_title text-center">
                                <div className="text-center font-bold bg-gray-900 uppercase text-md text-gray-100">
                                    <FaLaptopCode size="1.5em" className="inline mr-2 text-gray-50"/>   
                                    frameworks
                                </div>
                            </div>
                            <Chevron className={`${rotate}`} size={"1.5em"} color={"#f2f2f2"} position={"right"}/>
                        </div>
                        <div
                            ref={content}
                            style={{maxHeight:`${height}`}}
                            className="accordion_content">
                                
                            <div className='mt-4 py-4 w-full justify-items-auto  border-t-2 border-gray-50'>
                                    <FrameworkComp />
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}