import React from 'react';
import ProgressBar from 'react-animated-progress-bar'

export default function GitComp(){
    return(
        <div className="font-normal pt-2 text-sm text-left text-gray-100">
            <div>
                <label className="text-lg font-bold text-gray-200">Git:</label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="70"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            
            
        </div>
    )
}