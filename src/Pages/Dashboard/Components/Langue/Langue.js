import React from 'react';
import ProgressBar from 'react-animated-progress-bar'
import {BiGlobeAlt} from 'react-icons/bi';
export default function Langue (){
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold uppercase pb-4 border-b-2 border-gray-50 text-md text-gray-100">
                        <BiGlobeAlt size="1.5em" className="inline mr-2 text-gray-50" />
                        Connaissance Linguistique
                    </div>
                    <div className="font-normal pt-2 text-sm text-left text-gray-100">
                        <div>
                            <label className="text-lg font-bold text-gray-200">Malagasy:</label>
                            <ProgressBar
                                width="100%"
                                height="10px"
                                rect
                                fontColor="white"
                                percentage="90"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                        </div>
                        <div>
                            <label className="text-lg font-bold text-gray-200">Anglais:</label>
                            <ProgressBar
                                paddingTop="-20px"
                                width="100%"
                                height="10px"
                                rect
                                fontColor="white"
                                percentage="65"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                        </div>
                        <div className="space-y-0">
                            <label className="text-lg font-bold text-gray-200">
                                Francais:
                            </label>
                            <ProgressBar
                                width="100%"
                                height="10px"
                                rect
                                fontColor="white"
                                percentage="80"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="red"
                                trackBorderColor="grey"
                            />
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