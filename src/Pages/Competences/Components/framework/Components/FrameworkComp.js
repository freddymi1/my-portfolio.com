import React from 'react';
import Js from './Js/Js';
import Css from './Css/Css';
import Php from './Php/Php';
export default function FrameworkComp(){
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-full shadow-md pt-4">
                <div className="text-yellow-500 text-center uppercase font-extrabold text-2xl">
                    javascript
                </div>
                <div className="w-full">
                    <Js/>
                </div>
            </div>
            <div className="w-full shadow-md pt-4">
                <div className="text-green-500 text-center uppercase font-extrabold text-2xl">
                    Css
                </div>
                <div className="w-full ">
                    <Css/>
                </div>
            </div>
            <div className="w-full  shadow-md pt-4">
                <div className="text-gray-100 text-center uppercase font-extrabold text-2xl">
                    php
                </div>
                <div className="w-full">
                    <Php/>
                </div>
            </div>
        </div>
    )
}