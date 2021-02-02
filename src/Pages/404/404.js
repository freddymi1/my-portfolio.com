import React from 'react';
import './styles/styles.css';
export default function Error404(){
    return(
        <>
            <div className="errorpg block w-full  text-center">
                <label className="e404 block text-8xl  fond-bold text-gray-50">404</label>
                <label className="pnf block text-2xl  fond-bold text-gray-50">Page not found</label>
            </div>
        </>
    )
}