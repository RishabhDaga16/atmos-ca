import './App.css';
import First from './Components/First';
import Navbar from './Components/Navbar';
import React, { useRef } from 'react';
import About from './Components/About';
import Apply from './Components/Apply';
import { useState, useEffect } from 'react';

import imagePaths from './images';

function App() {
  
  const [bac,setBac] = useState({b:'none',})
  const [im,setIm] = useState(1)
  const elementRef = useRef()

  const BackScroll = ()=>{
    if(Math.floor(elementRef.current.scrollHeight/250)+1 !== im){
      const x = Math.floor(window.scrollY/20)
      setIm(Math.floor(x/30)%2 === 0 ? x%30 : 30 - x%30)
      console.log(Math.floor(x/30)%2 === 0 ? x%30 : 30 - x%30)
    }
     
  }

  const HandleScroll = (e)=>{

      if(window.scrollY>0){
        setBac({
          b:"rgba(0, 0, 0, 1)",

        })
      }
      else{
        setBac({
          b:'none',
          
        })
      }

  }

  useEffect(() => {
    window.addEventListener("scroll",HandleScroll)
    window.addEventListener("scroll",BackScroll)
  },[]);

  return (
    <div className='body'
      ref={elementRef}
    >
      {
        imagePaths.map((image, index)=>{return<img src={imagePaths[index]} alt='load' style={{opacity:0, zIndex:-5, position:"fixed"}}/>})
      }
      <img src={imagePaths[im]} alt='Background' className='bgImage'/>
    <Navbar b={bac.b}/>
    <div className='container' id="first">
    <First/>
    </div>
    <div className='container' id="ab">
    <About/>
    </div>
    <div className="cont" id="apply">
    <Apply/>
    </div>
    </div>
  );
}

export default App;
