import React from 'react';
import ProgressBar from 'react-animated-progress-bar'

export default function Php(){
    return(
        <div className="w-full text-center text-gray-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center mx-auto justify-center p-4 hover:bg-gray-800">
                <div className="pb-4">
                    <label className="text-gray-100 capitalize font-extrabold text-lg">
                        Symfony
                    </label>
                </div>
                <ProgressBar 
                    text="HTML" 
                    bgColor="#222"
                    width="150" 
                    trackWidth="12" 
                    percentage="55" 
                />
            </div>
            <div className="text-center mx-auto justify-center p-4 hover:bg-gray-800">
                <div className="pb-4">
                    <label className="text-gray-100 capitalize font-extrabold text-lg">
                        codigniter
                    </label>
                </div>
                <ProgressBar 
                    text="HTML" 
                    bgColor="#222"
                    width="150" 
                    trackWidth="12" 
                    percentage="60" 
                />
            </div>
        </div>
    )
}