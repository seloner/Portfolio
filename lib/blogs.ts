import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { BlogMeta } from 'types';
const ROOT_PATH = process.cwd();

export const PROJECTS_PATH = path.join(ROOT_PATH, 'blogs');

export const getAllPosts = () => {
	const PATH = path.join(PROJECTS_PATH);
	const paths = glob.sync(`${PATH}/**/*.mdx`);
	return paths.map((filePath) => {
		const source = fs.readFileSync(path.join(filePath), 'utf-8');
		const slug = path.basename(filePath).replace('.mdx', '');
		// Get the file name without .mdx
		// Use gray-matter to extract the post meta from post content
		const data = matter(source).data;
		return {
			...data,
			slug,
		};
	});
};

export const getPostBySlug = async (slug: string) => {
	// Get the content of the file
	const source = fs.readFileSync(path.join(PROJECTS_PATH, `${slug}.mdx`), 'utf8');

	const { code, frontmatter } = await bundleMDX({
		source,
	});

	const meta = {
		...frontmatter,
		slug,
	};

	return {
		meta,
		code,
	} as { meta: BlogMeta; code: string };
};
