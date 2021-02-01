import React from 'react';
import {MdContactPhone, MdEmail} from 'react-icons/md';
import {FiSmartphone} from 'react-icons/fi';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {IoMdPhonePortrait} from 'react-icons/io';
export default function Contact (){
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4 uppercase border-b-2 border-gray-50 text-md text-gray-100">
                        <IoMdPhonePortrait size="1.5em" className="inline mr-2 text-gray-50"/>
                        Mes contacts
                        </div>
                    <div className="space-y-8 pt-4 text-md font-normal text-gray-100">
                        <div className="flex">
                            <MdContactPhone className="inline text-gray-100 mr-2" size="1.5em"/>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"1.5rem"}}>
                                +261 34 75 979 57
                            </span>
                        </div>
                        <div className="flex">
                            <FiSmartphone className="inline text-gray-100 mr-2" size="1.5em"/>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"1.5rem"}}>
                                +261 34 21 243 19
                            </span>
                        </div>
                        <div className="flex">
                            <MdEmail className="inline text-gray-100 mr-2" size="1.5em"/>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"1.5rem"}}>
                                michelfreddy1992@gmail.com
                            </span>
                        </div>
                        <div className="flex">
                            <FaMapMarkerAlt className="inline text-gray-100 mr-2" size="1.5em"/>
                            <span className="inline text-sm md:text-lg" style={{lineHeight:"1.5rem"}}>
                                Lot IIA 89 Bis Tanjombato, Tana 102
                            </span>
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