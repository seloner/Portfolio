import { getAllPosts } from '@/lib/blogs';
import { BlogPreview } from '@/ui/blog/BlogPreview';
import { Layout } from '@/ui/Layout';
import { ProjectPreview } from '@/ui/ProjectPreview';
import React from 'react';
import type { BlogMeta } from 'types';

export function getStaticProps() {
	const posts = getAllPosts();
	return { props: { posts } };
}

export default function BlogsPage({ posts }: { posts: BlogMeta[] }) {
	return (
		<Layout>
			<div className='container px-4 mx-auto mt-24'>
				<h1 className='text-4xl font-extrabold text-gray-800'>Blogs</h1>
				<h4 className='mt-2 text-gray-500'>Blogs that I have been working on lately</h4>
				<div className='mt-8 space-y-8'>
					{posts.map((post) => (
						<div key={post.slug} className='mt-6 sm:grid sm:grid-cols-2 sm:gap-10'>
							<BlogPreview post={post} />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
