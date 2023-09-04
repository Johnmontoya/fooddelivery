import { navbarItems } from "@/config/navbar";
import { Navbar } from "./navbar";

export const Header: React.FC = async () => {	

  return (
    <div className="fixed w-full z-50">
      <Navbar items={navbarItems}/>
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
