import React, {FC} from 'react';
import {Sequence, useVideoConfig} from 'remotion';
import {KidFancy} from '../components/kid_fancy';
import {Queb} from '../components/queb';

type Props = {};

export const FancyIntro: FC<Props> = () => {
	// const frame = useCurrentFrame();
	const conf = useVideoConfig();

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<Sequence from={0} durationInFrames={conf.durationInFrames}>
				<Queb />
			</Sequence>
			<Sequence from={0} durationInFrames={conf.durationInFrames}>
				<KidFancy />
			</Sequence>
		</div>
	);
};
