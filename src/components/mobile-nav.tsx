'use client';

import Link from 'next/link';

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/components/icons';

// import { useLockBody } from '@/hooks/use-lock-body';
import { NavbarItem } from '@/constants/types';
import { cn } from '@/lib/util';

interface MobileNavProps {
	children?: React.ReactNode;
	items?: NavbarItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ children, items }) => {
	return (
		<Sheet>
			<SheetTrigger>
				<Icons.Menu className="h-6 w-6 md:hidden text-white" />
			</SheetTrigger>
			<SheetContent position="right" size="lg" className="px-4 md:hidden bg-black z-50">
				<SheetHeader>
					<SheetTitle>
						<Link href="/" className='text-white'>Pizzeria</Link>
					</SheetTitle>
					<SheetClose className='border rounded text-white fill-white absolute right-3 top-1'>
						<Icons.Close/>
					</SheetClose>
				</SheetHeader>
				{items?.length ? (
					<nav className="grid grid-flow-row auto-rows-max text-sm">
						{items.map((item, index) => {
							const Icon = item.icon ? Icons[item.icon] : undefined;
							return (
								<Link
									key={index}
									href={item.disabled ? '#' : item.href}
									className={cn(
										'flex h-fit w-fit items-center rounded-md p-2',
										item.disabled && 'cursor-not-allowed opacity-60',
									)}
								>
									{Icon ? <Icon className="mr-2 h-5 w-5 text-white/70 hover:text-red-600" /> : null}
									<span className="text-lg font-medium text-white/70 hover:text-red-600">{item.title}</span>
								</Link>
							);
						})}
					</nav>
				) : null}
			</SheetContent>
		</Sheet>
	);
};