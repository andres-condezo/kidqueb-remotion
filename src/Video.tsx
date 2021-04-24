import {Composition} from 'remotion';
import {FancyIntro} from './compositions/fancy_intro';
import {Glitch} from './compositions/glitch';

const FRAMES = 30;
const FANCY_DURATION = 30 * 3;
const GLITCH_DURATION = 30 * 5;

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="FancyIntro"
				component={FancyIntro}
				durationInFrames={FANCY_DURATION}
				fps={FRAMES}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Glitch"
				component={Glitch}
				durationInFrames={GLITCH_DURATION}
				fps={FRAMES}
				width={1920}
				height={1080}
			/>
		</>
	);
};
