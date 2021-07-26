import { About } from '@/ui/About';
import { Layout } from '@/ui/Layout';
import Head from 'next/head';

export default function Home() {
	return (
		<Layout>
			<About />
		</Layout>
	);
}
