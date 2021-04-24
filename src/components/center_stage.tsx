import {FC} from 'react';

export const CenterStage: FC = ({children}) => {
	return (
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				zIndex: 1,
			}}
		>
			{children}
		</div>
	);
};
