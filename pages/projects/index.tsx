import { getAllProjects } from '@/lib/projects';
import { Layout } from '@/ui/Layout';
import { ProjectPreview } from '@/ui/ProjectPreview';
import React from 'react';
import type { ProjectMeta } from 'types';

export function getStaticProps() {
	const projects = getAllProjects();
	return { props: { projects } };
}

export default function ProjectsPage({ projects }: { projects: ProjectMeta[] }) {
	return (
		<Layout>
			<div className='container px-4 mx-auto mt-24'>
				<h1 className='text-4xl font-extrabold text-gray-800'>Projects</h1>
				<h4 className='mt-2 text-gray-500'>Projects that I have been working on lately</h4>
				<div className='mt-8 divide-y divide-gray-200'>
					{[...projects].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).map((project) => (
						<div key={project.slug} className='py-10 first:pt-0 last:pb-0 sm:grid sm:grid-cols-2 sm:gap-10'>
							<ProjectPreview project={project} />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
