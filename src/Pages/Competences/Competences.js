import React from 'react';
import Web from './Components/Web/Web'
import Framework from './Components/framework/Framework'
import Design from './Components/Design/Design';
import Cms from './Components/Cms/Cms'
import Db from './Components/Db/Db';
import Git from './Components/Git/Git';
import Mr from './Components/Mr/Mr'
function Competences (){
    return (
        <>
            <div className="w-full">
                <div className="w-full grid grid-cols-1 mb-4">
                    <Web/>
                </div>
                <div className="w-full grid grid-cols-1 mb-4">
                    <Framework />
                </div>
                
                <div className="w-full grid grid-cols-1 mb-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <Cms />
                    <Design />
                </div>
                
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Db />
                    <Git />
                    <Mr />
                </div>
            </div>
        </>
    )
}
export default Competences;