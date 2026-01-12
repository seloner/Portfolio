import { getAllPosts } from '@/lib/blogs';
import { getAllProjects } from '@/lib/projects';
import { About } from '@/ui/About';
import { BlogPreview } from '@/ui/blog/BlogPreview';
import { Layout } from '@/ui/Layout';
import { ProjectPreview } from '@/ui/ProjectPreview';
import React from 'react';
import { BlogMeta, ProjectMeta } from 'types';

export const getStaticProps = async () => {
	const projects = getAllProjects();
	console.log(projects);
	const posts = getAllPosts() || [];
	return {
		props: { projects, posts },
	};
};

export default function Home({
	projects,
	posts,
}: {
	projects: ProjectMeta[];
	posts: BlogMeta[];
}) {
	return (
		<Layout>
			<div className='space-y-14 lg:space-y-24'>
				<div id='about'>
					<About />
				</div>
				<div id='projects'>
					<div className='container px-4 mx-auto'>
						<h2 className='text-2xl font-bold text-gray-800'>Recent Projects</h2>
						<h4 className='mt-2 text-gray-500'>
							Projects that I have been working on lately
						</h4>
						<div className='flex mt-12 flex-col gap-12'>
							{projects
								.sort(
									(a, b) =>
										new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
								)
								.map((project) => (
									<div key={project.slug} className='sm:grid  sm:grid-cols-2 sm:gap-10'>
										<ProjectPreview project={project} />
									</div>
								))}
						</div>
					</div>
				</div>
				<div id='blogs'>
					<div className='container px-4  mx-auto'>
						<h2 className='text-2xl font-bold text-gray-800'>Recent Blogs</h2>
						<h4 className='mt-2 text-gray-500'>
							Blogs that I have been working on lately
						</h4>
						<div className='flex mt-12 flex-col gap-12'>
							{posts.map((post) => (
								<div key={post.slug} className='sm:grid  sm:grid-cols-2 sm:gap-10'>
									<BlogPreview post={post} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
