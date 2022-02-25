import React from 'react';
import { Button } from './Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import './Hero.css'


function Hero() {
  return (
    <div>
       <video src="/videos/video.mp4" autoPlay loop muted></video>
       <h1>Avantura počinje</h1>
       <p>Nemojte čekati, bukirajte danas, mkaaay</p>
       <div className="hero-btns">
           <Button className = "btns" buttonStyle="btn-outline" buttonSize="btn-large">
               REZERVIRAJTE SAD!
           </Button>
           <Button className = "btns" buttonSize="btn-large">POGLEDAJ PONUDU <FontAwesomeIcon Icon={faGlobe}/></Button>
       </div>
    </div>
  )
}

export default Hero