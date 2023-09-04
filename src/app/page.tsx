import { Button } from "@/components/ui/button";
import Delivery from "../../public/images/delivery.png";
import Map from "../../public/images/google-maps-2961754.webp";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="banner">
          <div
            className="flex absolute w-full h-screen flex-col gap-10 text-center inset-0 items-center justify-center"
            style={{ zIndex: 20 }}
          >
            <h2 className="text-shadow relative w-full text-center text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-20 animate__animated animate__backInUp">
              ¡Bienvenidos a Pizzeria!
            </h2>
            <p className="text-shadow relative w-full md:w-1/2 px-4 md:px-0 text-center text-xl md:text-2xl lg:text-2xl text-white drop-shadow-lg animate__animated animate__backInUp">
              Descubre el auténtico sabor italiano en cada bocado. Nuestras
              deliciosas pizzas están hechas con los ingredientes más frescos y
              la pasión por la cocina tradicional.
            </p>
            <Button
              variant={"secondary"}
              className="bg-red-600 p-4 text-white mt-8 rounded-full w-64 h-14 hover:bg-red-800 cursor-pointer font-semibold text-xl drop-shadow-2xl animate__animated animate__bounceIn animate__delay-1s"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <section className="relative w-full h-screen">
        <div className="delivery">
          <div
            className="flex absolute w-full h-screen flex-col gap-10 text-center inset-0 items-center justify-center"
            style={{ zIndex: 20 }}
          >
            <div className="w-full lg:w-1/2 flex flex-row text-white mt-8 px-10 lg:px-0">
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
            <div className="mt-8">
              <h1 className="text-slate-900 text-4xl px-6">
                Visita una de nuestras localidades
              </h1>
              <section className="py-4">
                <div className="mx-auto max-w-6xl px-4">
                  <ul className="mx-auto mt-0 xl:mt-12 grid max-w-md grid-cols-2 gap-2 lg:gap-10 lg:max-w-4xl lg:grid-cols-4 pl-20">
                    <li className="flex-start group relative flex lg:flex-col cursor-pointer gap-1">
                      <span
                        className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                        aria-hidden="true"
                      ></span>
                      <div
                        id="stepa"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-5 w-5 text-gray-600 group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
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
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-5 w-5 text-gray-600 group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
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
                        id="stepc"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-5 w-5 text-gray-600 group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-left">
                        Crustis
                      </h3>
                    </li>
                    <li className="flex-start group relative flex lg:flex-col cursor-pointer gap-1">
                      <div
                        id="stepd"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="h-5 w-5 text-gray-600 group-hover:text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-left">
                        PizzaFest
                      </h3>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="locationa max-w-7xl flex flex-col-reverse lg:flex-row gap-10 justify-center items-center py-10">
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
                <div className="w-1/3 h-full">
                  <Image src={Map} className="object-cover border-4 border-slate-800 rounded-lg drop-shadow-2xl" alt="Map Location"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
