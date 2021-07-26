import { getAllProjects } from '@/lib/getAllProjects';
import { About } from '@/ui/About';
import { Layout } from '@/ui/Layout';
import { ProjectPreview } from '@/ui/ProjectPreview';
import React from 'react';
import { ProjectMeta } from 'types';

export const getStaticProps = async () => {
	const projects = getAllProjects();
	return {
		props: { projects },
	};
};

export default function Home({ projects }: { projects: ProjectMeta[] }) {
	return (
		<Layout>
			<div className='space-y-14 lg:space-y-24'>
				<div id='about'>
					<About />
				</div>
			</div>
			<div id='blog'>
				<div className='container px-4 mx-auto'>
					<h2 className='text-2xl font-bold text-gray-800'>Recent Projects</h2>
					<h4 className='mt-2 text-gray-500'>Projects what I have been working lately</h4>
					{projects.map((project) => (
						<div key={project.slug} className='mt-6 sm:grid sm:grid-cols-2 sm:gap-10'>
							<ProjectPreview project={project} />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
