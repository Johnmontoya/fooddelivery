import { Button } from "@/components/ui/button";
import Promocion from "../../public/images/promocion.png";
import Image from "next/image";
import Footer from "@/components/home/footer";
import Location from "@/components/home/location";
import Menu from "@/components/home/menu";
import Banner from "@/components/home/banner";

export default function Home() {
  return (
    <div className="flex flex-col">      
      <Banner />     
      <Location />      
             
      <section id="oferta" className="w-full h-auto relative">
        <div className="mx-auto h-auto w-full">
          <div className="oferta bg-fixed bg-cover overflow-auto h-auto w-full">
            <div className="max-w-10xl w-full lg:h-96 h-auto mx-auto bg-red-600/70 flex item-center justify-center">
              <div className="m-auto flex lg:flex-row md:flex-row flex-col justify-between p-6">
                <div className="w-full h-full">
                  <Image
                    src={Promocion}
                    alt="Pizzeria promocion"
                    className="img-oferta w-full h-full hidden md:flex mt-20 lg:mt-0 animate__animated "
                  />
                </div>
                <span className="w-full Wreckout text-9xl flex item-center justify-center text-zinc-50 m-auto">
                  15%
                </span>
                <div className="w-full flex flex-col lg:text-left text-center gap-6 poppins text-zinc-100">
                  <h2 className="uppercase text-5xl">Oferta del mes</h2>
                  <div className="text-3xl font-thin italic">
                    <span>Supreme</span>
                  </div>
                  <p>
                    ¡Descubre la Experiencia Suprema de Sabor con Nuestra Nueva
                    Hamburguesa SupremeStack!
                  </p>
                  <button className="h-14 w-48 lg:ml-0 m-auto bg-zinc-100 text-orange-600 hover:bg-zinc-800 hover:text-zinc-100">
                    Ver ofertas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Menu />

      <Footer />
            
    </div>
  );
}

/*
 
                
*/
