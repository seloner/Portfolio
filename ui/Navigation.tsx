import { FOCUS_VISIBLE_OUTLINE } from '@/lib/constants';
import cx from 'clsx';
import Link from 'next/link';
import React from 'react';

export const Navigation = () => {
	return (
		<div className='sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6'>
			<div className='container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between'>
				<a
					href='/'
					className={cx(
						'font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase',
						FOCUS_VISIBLE_OUTLINE
					)}
				>
					George Kalogeropoulos
				</a>
				<div className='flex space-x-4 font-medium text-gray-800'>
					<a
						className={cx('transition-colors hover:text-sky-500', FOCUS_VISIBLE_OUTLINE)}
					>
						About
					</a>
					<a
						href='/blog'
						className={cx('transition-colors hover:text-sky-500', FOCUS_VISIBLE_OUTLINE)}
					>
						Blog
					</a>

					<a
						href='/projects'
						className={cx('transition-colors hover:text-sky-500', FOCUS_VISIBLE_OUTLINE)}
					>
						Projects
					</a>

					<div className='text-gray-300'>&bull;</div>
					<a
						href='https://github.com/seloner'
						className={cx('transition-colors hover:text-sky-500', FOCUS_VISIBLE_OUTLINE)}
					>
						GitHub
					</a>
				</div>
			</div>
		</div>
	);
};
