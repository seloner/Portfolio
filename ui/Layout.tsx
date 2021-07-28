import { Footer } from '@/ui/Footer';
import { Navigation } from '@/ui/Navigation';
import React from 'react';
import prism from 'prismjs';

export const Layout = ({ children }: { children: React.ReactNode }) => {
	React.useEffect(() => {
		prism.highlightAll();
	}, []);
	return (
		<div>
			<Navigation />
			<main className='max-w-4xl mx-auto mt-16 antialiased'>{children}</main>
			<Footer />
		</div>
	);
};
