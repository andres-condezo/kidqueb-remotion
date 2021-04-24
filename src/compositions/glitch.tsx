import React, {FC} from 'react';
import {Sequence, useVideoConfig} from 'remotion';
import {KidFancyGlitch} from '../components/kid_fancy_glitch';
import {QuebGlitch} from '../components/queb_glitch';

type Props = {};

export const Glitch: FC<Props> = () => {
	// const frame = useCurrentFrame();
	const conf = useVideoConfig();

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={conf.durationInFrames}>
				<QuebGlitch />
			</Sequence>
			<Sequence from={0} durationInFrames={conf.durationInFrames}>
				<KidFancyGlitch />
			</Sequence>
		</div>
	);
};
