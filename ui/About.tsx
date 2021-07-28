import { LIGHT_COLORS } from '@/lib/constants';
import { shuffleArray } from '@/lib/shuffleArray';
import { useIsFontReady } from '@/lib/useIsFontReady';
import ProfileImage from '@/public/profile.jpg';
import { RainbowHighlight } from '@/ui/RainbowHighlight';
import Image from 'next/image';
import React from 'react';
import { RoughNotationGroup } from 'react-rough-notation';
import cx from 'clsx';
import { FOCUS_VISIBLE_OUTLINE } from '@/lib/constants';

export const About = () => {
	// Before animation, detect if custom fonts are loaded, so <RoughNotation />
	// SVG's are correctly positioned over the elements
	const isFontReady = useIsFontReady();

	const [colors, setColors] = React.useState<string[]>([]);

	// Shuffle our colors and store them in state so the order is persisted during
	// React re-renders
	React.useEffect(() => {
		setColors(shuffleArray(LIGHT_COLORS));
		``;
	}, []);

	return (
		<div className='container px-4 mx-auto'>
			<div className='space-x-5 lg:flex item-center lg:-mx-4'>
				<div className='lg:px-4 '>
					<RoughNotationGroup show={isFontReady}>
						<h1 className='text-2xl font-bold text-gray-900 lg:text-4xl'>
							Hi there,I am George.
						</h1>

						<div className='mt-4 text-gray-800'>
							<p>
								I love making applications that are user-friendly, simple and delightful.
								I work as a{' '}
								<RainbowHighlight color={colors[1]}>
									Full Stack Developer
								</RainbowHighlight>{' '}
								at{' '}
								<a
									href='https://www.connect-line.gr/'
									className={cx(
										'font-bold transition-colors hover:text-sky-500',
										FOCUS_VISIBLE_OUTLINE,
									)}
								>
									ConnectLine
								</a>{' '}
								&mdash; focusing on fast and mobile and web applications.
							</p>
							<p className='mt-2'>
								Welcome to my digital space where I share my{' '}
								<RainbowHighlight color={colors[2]}>work</RainbowHighlight>, becoming a{' '}
								<RainbowHighlight color={colors[3]}>better developer</RainbowHighlight>{' '}
								and growing a{' '}
								<RainbowHighlight color={colors[0]}>career in tech</RainbowHighlight>.
							</p>

							<p className='mt-2'>
								I have passion for web-developement,
								<span className='font-bold'> React</span> and{' '}
								<span className='font-bold'>state machines</span>
								!!!
							</p>
						</div>
					</RoughNotationGroup>
				</div>

				<div className='flex-shrink-0 mt-12 lg:px-4 lg:mt-0'>
					<Image
						src={ProfileImage}
						alt='Profile'
						placeholder='blur'
						priority={true}
						className='rounded-full'
						width={200}
						height={200}
					/>
				</div>
			</div>
		</div>
	);
};
