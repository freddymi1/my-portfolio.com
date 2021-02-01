import React from 'react';
import Aboutme from './Components/AboutMe/Aboutme'
import Contact from './Components/Contact/Contact'
import Langue from './Components/Langue/Langue'
import Web from './Components/Web/Web'

export default function Dashboard (){
    return(
        <>
            <div className="w-full justify-items-auto">
                <div className="w-full grid grid-cols-1 mb-4">
                    <Aboutme/>
                </div>
                
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <Contact/>
                    <Langue/>
                </div>
                <div className="w-full grid grid-cols-1 mt-4">
                    <Web/>
                </div>
            </div>
        </>
    )
}