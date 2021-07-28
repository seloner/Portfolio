import { getProjectBySlug } from '@/lib/projects';
import { Layout } from '@/ui/Layout';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { components } from '@/ui/MdxComponents';
import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import type { BlogMeta, ProjectMeta } from 'types';
import { NextSeo } from 'next-seo';
import { format, parseISO } from 'date-fns';
import { ButtonLink } from '@/ui/Button';
import { getAllPosts, getPostBySlug } from '@/lib/blogs';

export const getStaticPaths = () => {
	const posts = getAllPosts();
	const paths = posts.map(({ slug }) => ({ params: { slug } }));

	return {
		paths: paths,
		// Return 404 page if path is not returned by getStaticPaths
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<{ meta: ProjectMeta; code: string }> = async (
	context,
) => {
	const slug = context.params?.slug as string;
	const project = await getPostBySlug(slug);

	return { props: { code: project.code, meta: project.meta } };
};

export default function ProjectPage({ meta, code }: { meta: BlogMeta; code: string }) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);
	return (
		<>
			<NextSeo
				title={`${meta.title} • George Kalogeropoulos`}
				description={meta.description}
				canonical={`https://www.gk.com/projects/${meta.slug}`}
				openGraph={{
					type: 'website',
					url: `https://www.gk.com/projects/${meta.slug}`,
					title: `${meta.title} • George Kalogeropoulos`,
					description: meta.description,
					images: [
						{
							url: `https://www.gk.com/${meta.image}`,
							width: 1200,
							height: 630,
							alt: meta.title,
						},
					],
					site_name: 'George Kalogerpoulos',
				}}
				twitter={{
					handle: '@seloner_7',
					cardType: 'summary_large_image',
				}}
			/>

			<Layout>
				<div className='container max-w-3xl px-4 mx-auto mt-36'>
					<h1 className='text-2xl font-bold md:text-4xl'>{meta.title}</h1>

					<div className='flex items-center mt-4 space-x-2 text-gray-500'>
						<Image src='/profile.jpg' height={24} width={24} className='rounded-full' />

						<div>George Kalogeropoulos</div>

						<div className='text-gray-300'>&middot;</div>

						<div>{format(parseISO(meta.publishedAt), 'MMMM dd, yyyy')}</div>
					</div>

					{meta.image ? (
						<div className='mt-10 overflow-hidden rounded-2xl text-[0px]'>
							<Image src={`/${meta.image}`} width={1920} height={960} />
						</div>
					) : null}

					<div className='mt-10 text-gray-900'>
						<Component components={components as any} />
					</div>
					{meta.source && (
						<div className='flex justify-center mt-16 space-x-8'>
							<ButtonLink href={meta.url} target='_blank'>
								View Source Code
							</ButtonLink>
						</div>
					)}
				</div>
			</Layout>
		</>
	);
}
