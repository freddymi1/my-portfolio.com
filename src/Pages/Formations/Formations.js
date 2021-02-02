import React from 'react';
import Etudes from './Components/Etude/Etudes';
import Formation from './Components/Formations/Formations';
export default function Formations () {
    return(
        <>
            <div className="w-full">
                <div className="w-full grid grid-cols-1 mb-4">
                    <Etudes />
                </div>
                <div className="w-full grid grid-cols-1 mb-4">
                    <Formation />
                </div>
                
            </div>
        </>
    )
}