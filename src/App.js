import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Sidebar from './Pages/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard'
import Competences from './Pages/Competences/Competences';
import Experience from './Pages/Experience/Experience';
import DarkToggle from './Pages/Test/Test'
import Other from './Pages/Other/Other';
function App() {
  const [darkMode, setDarkMode] = useState(getInitMode());

  useEffect(() =>{
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode]);

  function getInitMode() {
    const isReturnUserMode = "dark" in localStorage;
    const actuMode = JSON.parse(localStorage.getItem('dark'));
    const userPreferDark = getPrefColorMode()
    if(isReturnUserMode){
      return actuMode
    }else if(userPreferDark){
      return true;
    }else{
      return false;
    }
    // return actuMode
  }

  function getPrefColorMode(){
    if(!window.matchMedia) return;
    return window.matchMedia("(prefers-color-schema: dark)").matches;
  }

  return (
    <BrowserRouter>
      <div className="flex w-full m-0" style={{width:"100%;"}}>
        <div>
          <Sidebar/>
        </div>
        <div className={darkMode ? "bord w-full bg-gray-800 bottom-0 text-gray-50" : "bord w-full bg-gray-100 text-gray-900"}>
          <div className="modeStyle">
            <label className={darkMode ? "toggle" : "toggle"} for="myToggle">
                <input 
                checked={darkMode}
                onChange={()=> setDarkMode(prevMode=> !prevMode)}
                class="toggle__input" 
                name=""
                type="checkbox" 
                id="myToggle"/>
                <div className="toggle__fill"></div>
            </label>
          </div>
          <div className="subBord overflow-y-auto p-4">
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/competences' component={Competences}/>
            <Route exact path='/experience' component={Experience}/>
            <Route exact path='/other' component={Other}/>
            <Route exact path='/test' component={DarkToggle} />
          </div>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
