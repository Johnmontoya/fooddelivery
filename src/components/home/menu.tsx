'use client';
import React from "react";
import Image from "next/image";
import Pizza from "../../../public/images/pizza.png";
import Hotdog from "../../../public/images/hot-dog.png";
import Burger from "../../../public/images/burger.png";
import Fries from "../../../public/images/french-fries.png";
import Drinks from "../../../public/images/hot-dog.png";
import menus from "@/seed/menu";
import { Icons } from "../icons";

export interface Menu {
    id: string,
    nombre: string,
    image: string,
    precio: number
}

function Menu() {
  return (
    <section id="menu" className="menu w-full h-full relative">
      <div className="flex w-full h-full flex-col gap-10 text-center items-center justify-center z-20">
        <h2 className="text-3xl text-white mt-20">Nuestro Menú</h2>
        <div className="max-w-6xl text-center mx-auto">
          <ul className="flex flex-row flex-wrap gap-10 text-white px-6">
            <li className="flex flex-row gap-2 hover:text-red-600 cursor-pointer">
              <div className="w-5 h-6">
                <Image
                  className="object-cover"
                  src={Pizza}
                  alt="menu pizza Pizzeria"
                />
              </div>{" "}
              Gourmet Pizza
            </li>
            <li className="flex flex-row gap-2 hover:text-red-600 cursor-pointer">
              <div className="w-5 h-6">
                <Image
                  className="object-cover"
                  src={Hotdog}
                  alt="menu hotdog Pizzeria"
                />
              </div>{" "}
              Hot Dogs
            </li>
            <li className="flex flex-row gap-2 hover:text-red-600 cursor-pointer">
              <div className="w-5 h-6">
                <Image
                  className="object-cover"
                  src={Burger}
                  alt="menu hamburguesa Pizzeria"
                />
              </div>{" "}
              Hamburguesa
            </li>
            <li className="flex flex-row gap-2 hover:text-red-600 cursor-pointer">
              <div className="w-5 h-6">
                <Image
                  className="object-cover"
                  src={Fries}
                  alt="menu salchipapas Pizzeria"
                />
              </div>{" "}
              Salchipapas
            </li>
            <li className="flex flex-row gap-2 hover:text-red-600 cursor-pointer">
              <div className="w-5 h-6">
                <Image
                  className="object-cover"
                  src={Drinks}
                  alt="menu bebidas Pizzeria"
                />
              </div>{" "}
              Bebidas
            </li>
          </ul>
        </div>
        <div className="max-w-7xl h-auto">
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {menus.map((menu: Menu, index: number) => (
            <div key={index}  className="h-full relative flex justify-center mb-4 px-4">
              <div className="relative isolate flex flex-col justify-center overflow-hidden rounded-2xl w-96 mx-auto mt-10">
                
                  <div className="h-full w-full">
                  <img
                    src={menu.image}
                    alt="Pizza Italiana"
                    className="object-cover shadow-2xl"
                  />
                  <div className="absolute top-0 right-4 mt-4 mr-5 p-2 z-20 backdrop-blur-sm bg-white/60 rounded-full">
                    <Icons.Heart className="w-5 h-5 cursor-pointer hover:fill-red-500" />
                  </div>
                  <div className="z-30 w-11/12 h-24 backdrop-blur-sm bg-white/90 inset-1 -mt-10 bottom-0 rounded-2xl ml-3">
                    <h3 className="z-10 mt-3 text-2xl font-bold text-gray-800">
                      {menu.nombre}
                    </h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-md leading-6 text-gray-800">
                      ${menu.precio}
                    </div>
                    <button className="z-50 w-1/2 h-10 relative mt-4 bg-red-500 p-2 rounded-full text-white hover:bg-red-800">
                      Ordenar
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;

/**
 * <div className="max-w-7xl h-full">
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 menu-list animate__animated">
            <div className="h-full relative flex justify-center mb-4">
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20 w-60 mx-auto mt-10">
                <div className="h-full w-full">
                  <Image
                    src={Italiana}
                    alt="Pizza Italiana"
                    className="absolute inset-0 object-cover"
                  />
                </div>

                <div className="absolute top-0 right-0 mt-4 mr-5 p-2 z-20 backdrop-blur-sm bg-white/60 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-heart w-5 cursor-pointer hover:fill-red-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
              </div>
              <div className="z-30 w-11/12 h-24 backdrop-blur-sm bg-white/90 absolute -bottom-10 rounded-2xl">
                <h3 className="z-10 mt-3 text-2xl font-bold text-gray-800">
                  Pizza Italiana
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-md leading-6 text-gray-800">
                  $12
                </div>
              </div>
              <button className="z-40 w-1/2 absolute -bottom-14 bg-red-500 p-2 rounded-full text-white hover:bg-red-800">
                Ordenar
              </button>
            </div>
            <div className="h-full relative flex justify-center mb-4">
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20 w-60 mx-auto mt-10">
                <div className="h-full w-full">
                  <Image
                    src={Italiana}
                    alt="Pizza Italiana"
                    className="absolute inset-0 object-cover"
                  />
                </div>

                <div className="absolute top-0 right-0 mt-4 mr-5 p-2 z-20 backdrop-blur-sm bg-white/60 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-heart w-5 cursor-pointer hover:fill-red-600"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
              </div>
              <div className="z-30 w-11/12 h-24 backdrop-blur-sm bg-white/90 absolute -bottom-10 rounded-2xl">
                <h3 className="z-10 mt-3 text-2xl font-bold text-gray-800">
                  Pizza Italiana
                </h3>
                <div className="z-10 gap-y-1 overflow-hidden text-md leading-6 text-gray-800">
                  $12
                </div>
              </div>
              <button className="z-40 w-1/2 absolute -bottom-14 bg-red-500 p-2 rounded-full text-white hover:bg-red-800">
                Ordenar
              </button>
            </div>
          </div>
        </div>
 */
