import { getAllProjects } from '@/lib/getAllProjects';
import { Layout } from '@/ui/Layout';
import { ProjectPreview } from '@/ui/ProjectPreview';
import React from 'react';
import type { Project } from 'types';

export function getStaticProps() {
	const projects = getAllProjects();
	return { props: { projects } };
}

export default function ProjectsPage({ projects }: { projects: Project[] }) {
	return (
		<Layout>
			<div className='container px-4 mx-auto mt-24'>
				<h1 className='text-4xl font-extrabold text-gray-800'>Projects</h1>
				<h4 className='mt-2 text-gray-500'>Projects what I have been working lately</h4>
				<div className='mt-8 space-y-8'>
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
