import * as React from 'react';
import { BlogMeta, ProjectMeta } from 'types';
import { MediaPreview } from '../MediaPreview';

export const BlogPreview: React.FC<{ post: BlogMeta }> = ({ post }) => {
	return (
		<MediaPreview
			text={post.description}
			title={post.title}
			url={`/blog/${post.slug}`}
			image={`/${post.image}`}
			type='post'
		/>
	);
};
