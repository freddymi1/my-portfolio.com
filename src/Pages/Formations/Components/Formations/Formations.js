import React from 'react';
import {FaGraduationCap} from 'react-icons/fa';
import data from "./Data.json";
import "./styles.css";
import Board from "react-trello";

export default function Formation (){
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4  uppercase border-b-2 border-gray-50 text-md text-gray-100">
                        <FaGraduationCap size="1.5em" className="inline mr-2 text-gray-50"/>
                        Formations
                    </div>
                    <div className="w-full pt-4 md:flex">
                        <Board data={data} draggable />
                    </div>
                </div>

            </div>
            
        </div>
    )
}