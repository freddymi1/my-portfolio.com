import React from "react";
import Tech from './Components/TechInfo/Tech';
import Project from './Components/Project/Project'

function Experience (){
    return (
        <>
            <div className="w-full">
                <div className="w-full grid grid-cols-1 mb-4">
                    <Tech />
                </div>
                <div className="w-full grid grid-cols-1 mb-4">
                    <Project />
                </div>
                
            </div>
        </>
    )
}
export default Experience;


// function Experience() {
//   return (
//     <div className="App">
//       <Board data={data} draggable />
//     </div>
//   );
// }
// export default Experience;