import * as React from 'react';
import { ProjectMeta } from 'types';
import { MediaPreview } from './MediaPreview';

export const ProjectPreview: React.FC<{ project: ProjectMeta }> = ({ project }) => {
	return (
		<MediaPreview
			text={project.description}
			title={project.title}
			url={`/projects/${project.slug}`}
			image={`/${project.image}`}
			type='post'
		/>
	);
};
