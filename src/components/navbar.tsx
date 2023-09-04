import type { NavbarItem } from "@/constants/types";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { Button } from "./ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

import { cn } from "@/lib/util";
import { MobileNav } from "./mobile-nav";
import { Icons } from "./icons";

interface NavbarProps {
  children?: React.ReactNode;
  items?: NavbarItem[];
}

export const Navbar: React.FC<NavbarProps> = async ({ children, items }) => {
  return (
    <div className="fixed w-full z-100" style={{zIndex: 100}}>
      <nav className="border-gray-200 py-5 h-32">
        <div className="max-w-7xl grid grid-cols-2 md:grid-cols-3 items-center px-4 mx-auto">
			<div className="w-full">
				<Link href="/" className="items-center gap-x-2">
					<Image
					src={Logo}
					width={96}
					alt="Logo Pizza"
					className="logo h-24 mr-3 sm:h-24"
					/>
				</Link>
			</div>
			<div className="w-full justify-center items-center hidden md:flex">
				{items?.length ? (
					<ul className="list-menu w-full justify-center flex mt-4 font-semibold flex-row space-x-8">
					{items?.map((item, index) => (
						<li key={index}>
						<Link
							href={item.disabled ? "#" : item.href}
							className={cn(
							"flex items-center text-lg font-medium transition-colors hover:text-white sm:text-sm",
							item.disabled && 'cursor-not-allowed opacity-80',
							)}
						>
							<span className="text-white hover:text-red-600 text-lg">
								{item.title}
							</span>
						</Link>
						</li>
					))}
					</ul>
				) : null}
			</div>
			<div className="w-full flex justify-end items-center">
				<Button variant={"secondary"} className="bg-red-600 hover:bg-red-800">
					<Icons.ShoppingCart className="w-8 text-white"/>
				</Button>				
				<div className="w-20 ml-4 flex justify-center md:hidden">
					<MobileNav items={items}>{children}</MobileNav>	
				</div>			
			</div>			
		</div>
      </nav>
    </div>
  );
};

/**
 * 
 * <div className="flex flex-row flex-wrap items-center justify-between  px-4 mx-auto">
          
          
          <div className="w-full flex items-center justify-center lg:order-2">                        
            <div
              className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              
            </div>
            <MobileNav items={items}>{children}</MobileNav>
          </div>
        </div>
 * 
 * <div className="flex w-full flex-1 gap-x-6 md:gap-x-10">
			
			{items?.length ? (
				<nav className="hidden gap-x-6 md:flex">
					{items?.map((item, index) => (
						<Link
							key={index}
							href={item.disabled ? '#' : item.href}
							className={cn(
								'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',										
								item.disabled && 'cursor-not-allowed opacity-80',
							)}
						>
							{item.title}
						</Link>
					))}
				</nav>
			) : null}
		</div>
		<div className='flex'>
			<div className="flex items-center justify-center ml-0 sm:ml-2 md:ml-0">
						
			</div>				
			
		</div>
		<div className="flex w-full items-center justify-between md:w-fit">
			<Link href="/" className="flex items-center space-x-2 md:hidden">
				
				<span className="inline-block font-bold uppercase md:hidden">{siteConfig.name}</span>
			</Link>
			<MobileNav items={items}>{children}</MobileNav>
		</div>
 */
