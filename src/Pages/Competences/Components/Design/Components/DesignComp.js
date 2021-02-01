import React from 'react';
import ProgressBar from 'react-animated-progress-bar'

export default function DesignComp(){
    return(
        <div className="font-normal pt-2 text-sm text-left text-gray-100">
            <div>
                <label className="text-lg font-bold text-gray-200">Figma:</label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="87"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div>
                <label className="text-lg font-bold text-gray-200">Illustrator:</label>
                <ProgressBar
                    paddingTop="-20px"
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="75"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div>
                <label className="text-lg font-bold text-gray-200">Canva:</label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="67"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div className="space-y-0">
                <label className="text-lg pb-12 font-bold text-gray-200">
                    Photoshop:
                </label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="75"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="red"
                    trackBorderColor="grey"
                />
            </div>
        </div>
    )
}