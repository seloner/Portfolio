import fs from 'fs';
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';

const ROOT_PATH = process.cwd();
export const PROEJECTS_PATH = path.join(ROOT_PATH, 'projects');

export const getAllProjects = () => {
	const PATH = path.join(PROEJECTS_PATH);
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
