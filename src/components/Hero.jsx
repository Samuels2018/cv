import React, {Fragment} from 'react'
import Image from '../assets/faceImage.jpeg'
import { ReactComponent as Hand } from "../assets/hand.svg";
import Maletin from '../assets/briefcase.png'

const Hero = () => {
	return (

		<Fragment>
     <section id="inicio" className="inicio">
        <div className="contenido-banner">
            <div className="contenedor-img">
                <img src={Image} alt="" className="w-44 h-44"/>
            </div>
            <h1>SAMUEL MEDINA</h1>
            <h2>Full-Stack Developer</h2>
            <div className="redes">
                <a 
              href="https://github.com/Samuels2018/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/samuel-alejandro-medina-funes"
              rel="noreferrer"
              target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a 
              href="https://instagram.com/s.a.m.f?igshid=NTA5ZTk1NTc="
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a 
              href="https://samuelmedina265@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa-sharp fa-solid fa-envelopes-bulk"></i>
            </a>
            </div>
        </div>
    </section>

    </Fragment>
    
		

  );
}


export default Hero

/*
<section className="bg-gray-50">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="my-10 mx-auto max-w-lg text-center">
          <div className="flex items-center">
            <h2 className="px-3 text-2xl font-bold text-gray-900 md:text-3xl">
              HELLO, MY NAME IS SAMUEL
            </h2>
            <Hand className="w-20 h-20" />
          </div>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            I’m a Venezolan web developer 
          </p>
        </div>
      </div>

      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="my-10 mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center">
            <h2 className="px-3 text-2xl font-bold text-gray-900 md:text-3xl">
              How i work
            </h2>
            <img src={Maletin} className="w-20 h-20" />
          </div>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
             I create #usable, #responsive interface design,
            that is nice to look at and easy to use
          </p>
        </div>
    </div>
    </section>

*/

