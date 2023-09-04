"use client";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";

function Footer() {
    
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth',
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <section className="w-full h-80 md:h-96 relative">
        <div className="footer"></div>
        <footer className="z-20 flex flex-col absolute inset-0 space-y-3 md:space-y-10 justify-center m-6 md:m-10">
          <nav className="flex justify-center flex-wrap gap-2 md:gap-6 text-gray-500 font-medium">
            <a className="hover:text-gray-900" href="#">
              Menú |
            </a>
            <a className="hover:text-gray-900" href="#">
              Carrera |
            </a>
            <a className="hover:text-gray-900" href="#">
              Premios |
            </a>
            <a className="hover:text-gray-900" href="#">
              Proveedores |
            </a>
            <a className="hover:text-gray-900" href="#">
              Ordenar |
            </a>
            <a className="hover:text-gray-900" href="#">
              Contacto
            </a>
          </nav>

          <div className="flex justify-center text-center md:text-left">
            <span className="text-gray-500">
              Cuentanos como fue tu experiencia:{" "}
              <a href="#" className="text-orange-600">
                Pizzeria@mail.com{" "}
              </a>
            </span>
          </div>

          <div className="flex justify-center space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a
              href="https://messenger.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
          </div>

          <div className="w-full flex justify-center text-center">
            <p className="w-full lg:w-1/3 px-4 md:px-0 text-gray-500">
              Descubre el auténtico sabor italiano en cada bocado. ¡tenemos la
              pizza perfecta para todos los gustos!
            </p>
          </div>
          <p className="text-center text-gray-700 font-medium">
            &copy; 2022 Company Ltd. All rights reservered.
          </p>
        </footer>
      </section>

      <Button
      variant={'secondary'}
      onClick={scrollToTop}
      className={`fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-md bg-red-600 hover:bg-red-700 text-white text-lg font-semibold transition-colors duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Icons.ChevronUp className="w-8"/>
      </Button>
    </>
  );
}

export default Footer;
