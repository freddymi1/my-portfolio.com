import React from 'react';
import {BiCodeBlock} from 'react-icons/bi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const MyProject = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4  uppercase border-b-2 border-gray-50 text-md text-gray-100">
                        <BiCodeBlock size="1.5em" className="inline mr-2 text-gray-50"/>
                        Language de programmation
                    </div>
                    {/* <Carousel responsive={responsive}>
                        
                    </Carousel> */}
                    
                </div>

            </div>
            
            
        </div>
    )
}
export default MyProject;
{/*  */}