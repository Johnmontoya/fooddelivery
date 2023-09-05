import React from "react";
import { Button } from "../ui/button";

function Banner() {
  return (
    <section className="banner relative w-full h-screen">
      <div
        className="flex w-full h-screen flex-col gap-10 text-center items-center justify-center"
        style={{ zIndex: 20 }}
      >
        <h2 className="text-shadow relative w-full text-center text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-20 animate__animated animate__backInUp">
          ¡Bienvenidos a Pizzeria!
        </h2>
        <p className="text-shadow relative w-full md:w-1/2 px-4 md:px-0 text-center text-xl md:text-2xl lg:text-2xl text-white drop-shadow-lg animate__animated animate__backInUp">
          Descubre el auténtico sabor italiano en cada bocado. Nuestras
          deliciosas pizzas están hechas con los ingredientes más frescos y la
          pasión por la cocina tradicional.
        </p>
        <Button
          variant={"secondary"}
          className="bg-red-600 p-4 text-white mt-8 rounded-full w-64 h-14 hover:bg-red-800 cursor-pointer font-semibold text-xl drop-shadow-2xl animate__animated animate__bounceIn animate__delay-1s"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default Banner;
