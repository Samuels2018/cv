import React from 'react'
import { ReactComponent as Cience } from "../assets/cience.svg";

const HowIMaked = () => {
	return (

		<section id="sobremi" class="sobremi">
        <div class="contenido-seccion">
            <h2>About</h2>
            <p>
            	<span>
            		Hello, i am Samuel Medina.
            	</span>
            		<br /> 
            		
						I started as a web developer two years ago and in a couple of months I started doing small projects and my skills increased. 
						My studies and experience are a small sample of my skills as a web developer represented in this small site. 
      		</p>

            <div class="fila">
                <div class="col">
                    <h3>Personal information</h3>
                    <ul>
                        <li>
                            <strong>Date of Birth</strong>
                            16-05-1997
                        </li>
                        <li>
                            <strong>Phone</strong>
                            +584125035687
                        </li>
                        <li>
                            <strong>Email</strong>
                            samuelmedina265@gmail.com
                        </li>
                        
                        <li>
                            <strong>Direction</strong>
                            Valencia, Vanezuela
                        </li>
                        
                    </ul>
                </div>

                <div class="col">
                    <h3>Interests</h3>
                    <div class="contenedor-intereses">
                        <div class="interes">
                            <i class="fa-solid fa-gamepad"></i>
                            <span>GAMES</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-headphones"></i>
                            <span>MUSIC</span>
                        </div>
                        <div class="interes">
                            <i class="fa-solid fa-plane"></i>
                            <span>TO TRAVEL</span>
                        </div>
                        <div class="interes">
                            <i class="fa-brands fa-linux"></i>
                            <span>Linux</span>
                        </div>
                        
                        <div class="interes">
                            <i class="fa-solid fa-book"></i>
                            <span>BOOKS</span>
                        </div>
                        
                        <div class="interes">
                            <i class="fa-solid fa-camera"></i>
                            <span>PHOTOS</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </section>
		

	)
}

export default HowIMaked

/*
<div className="p-8 md:p-12 lg:px-16 lg:py-24">
    	<div className="my-10 mx-auto max-w-lg text-center">
    		<div className="flex items-center justify-center" >
    			<h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
			       My studies and experience is a litle sample of my habilities as web developer represented in this small site
			    </h2>

			    <Cience className="" />
    		</div>

			<p className="hidden text-gray-500 sm:mt-4 sm:block">
	        	i started as a web developer two years ago and a couple of months they did small projects and growing my habilities 
			</p>
    	</div>

  	</div>

*/
