import { Icons } from '@/components/icons';

export type NavbarItem = {
	title: string;
	href: string;
	icon?: keyof typeof Icons;
	disabled?: boolean;
};

export interface SiteConfig {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		twitter: string;
		github: string;
	};
}