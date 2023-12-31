import React from 'react'
import Image from 'next/image'
import Delivery from "../../../public/images/delivery.png";
import Map from "../../../public/images/google-maps-2961754.webp";
import { Icons } from '../icons';

function Location() {
  return (
    <section className="delivery relative w-full h-[120vh] sm:h-screen">        
        <div className="z-30 w-full flex-col gap-10 text-center items-center justify-center">
          <div className="w-full lg:w-1/2 flex flex-row text-white mt-6 px-10 lg:px-0 mx-auto pt-8">
            <h2 className="bg-red-600 w-28 h-16 p-2 py-4 text-center rounded-l-lg text-2xl">
              Pizza
            </h2>
            <div className="flex w-full h-16 p-2 bg-black gap-2 justify-between rounded-r-lg">
              <input
                className="bg-black border-0 focus-0 w-full px-4 italic font-semibold text-gray-300 focus:outline-none focus:ring-none"
                placeholder="Buscar"
              />
              <button className="bg-slate-400 text-red-700 p-1 w-44 rounded-full font-semibold hover:bg-red-600 hover:text-white">
                Ordenar Ahora!
              </button>
            </div>
          </div>
          <div className="mt-12 h-full">
            <h1 className="text-slate-900 text-4xl px-6">
              Visita una de nuestras localidades
            </h1>
            <section className="py-2">
              <div className="mx-auto max-w-6xl px-4">
                <ul className="mx-auto mt-0 xl:mt-12 grid max-w-md grid-cols-2 gap-2 lg:gap-10 lg:max-w-4xl lg:grid-cols-4 pl-8 md:pl-20">
                  <li className="flex-start group relative flex lg:flex-col cursor-pointer gap-1">
                    <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"
                    ></span>
                    <div
                      id="stepa"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white"
                    >
                      <Icons.MapPin className="w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-left">
                      Pizzarella
                    </h3>
                  </li>
                  <li className="flex-start group relative flex lg:flex-col cursor-pointer gap-1">
                    <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"
                    ></span>
                    <div
                      id="stepb"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white"
                    >
                      <Icons.MapPin className="w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-left">
                      Sabores Italia
                    </h3>
                  </li>
                  <li className="flex-start group relative flex lg:flex-col cursor-pointer gap-1">
                    <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"
                    ></span>
                    <div
                      id="stepb"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white"
                    >
                      <Icons.MapPin className="w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-left">
                      Crustis
                    </h3>
                  </li>
                  <li className="flex-start group relative flex lg:flex-col cursor-pointer gap-1">
                    <span
                      className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                      aria-hidden="true"
                    ></span>
                    <div
                      id="stepb"
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white"
                    >
                      <Icons.MapPin className="w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-left">
                      PizzaFest
                    </h3>
                  </li>
                </ul>
              </div>
            </section>
            <div className="locationa max-w-7xl flex flex-col-reverse lg:flex-row gap-8 justify-center items-center py-8 mx-auto">
              <div className="w-80">
                <Image
                  src={Delivery}
                  className="object-cover hidden lg:flex"
                  alt="Delivery Location"
                />
              </div>
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <h2 className="text-3xl uppercase font-semibold">
                  Calle Pizzarella
                </h2>
                <span>Dirección: Av. Delicioso #123</span>
                <p className="text-xl font-normal uppercase">
                  Horario de Atención:
                </p>
                <p>Lunes a Domingo, 11:00 AM - 10:00 PM</p>
                <span className="flex flex-row gap-2 items-center text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  (555) 123-4567
                </span>
              </div>
              <div className="w-9/12 sm:w-1/3 h-full">
                <Image
                  src={Map}
                  className="object-cover border-4 sm:border-slate-800 rounded-none sm:rounded-lg drop-shadow-2xl"
                  alt="Map Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Location