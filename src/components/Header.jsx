import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../assets/MainImage.jpeg'

const Header = () => {

    let menuVisible = false;
    
    function mostrarOcultarMenu(){
      if(menuVisible){
          document.getElementById("nav").classList ="";
          menuVisible = false;
      }else{
          document.getElementById("nav").classList ="responsive";
          menuVisible = true;
      }
    }

    function seleccionar(){
      //oculto el menu una vez que selecciono una opcion
      document.getElementById("nav").classList = "";
      menuVisible = false;
    }

    return (

      <div className="contenedor-header">
        <header>
          <div className="logo">
            <Link to="/" className="flex items-center block shrink-0">
              <img
                alt="Man"
                src={Image}
                className="h-10 w-10 rounded-full object-cover"
              />
              <h3 className="px-5">Samuel</h3>
              <span className="sr-only">Home</span>
            </Link>
          </div>
          <nav id="nav">
              <ul>
                  <li><a href="#inicio" onclick="seleccionar()">Home</a></li>
                  <li><a href="#sobremi" onclick="seleccionar()">About</a></li>
                  <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>
                  <li><a href="#curriculum" onclick="seleccionar()">CURRICULUM</a></li>
                  <li><a href="#portfolio" onclick="seleccionar()">PORTFOLIO</a></li>
                  <li><a href="#ask" onclick="seleccionar()">QUESTIONS</a></li>
              </ul>
          </nav>
          <div className="nav-responsive" onclick="mostrarOcultarMenu()">
              <i className="fa-solid fa-bars"></i>
          </div>
        </header>
    </div>


    )
}



export default Header

/*
<header aria-label="Page Header" className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-end gap-4">
      <div className="flex items-center gap-4">
        

        <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <Link
            to="/about"
          className="inline-flex items-center justify-center px-5 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
        >
          <span class="text-sm font-medium"> About </span>

          
        </Link>

        <Link
            to="/contact"
          className="inline-flex items-center justify-center px-5 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
        >
          Contact
        </Link>
      </div>
      </div>

      <span
        aria-hidden="true"
        className="block h-6 w-px rounded-full bg-gray-200"
      ></span>

      <Link to="/" className="flex items-center block shrink-0">
          <h3 className="px-5">Samuel Medina</h3>
        <span className="sr-only">Home</span>
        <img
          alt="Man"
          src={Image}
          className="h-10 w-10 rounded-full object-cover"
        />
      </Link>
    </div>

    
  </div>
</header>

*/


