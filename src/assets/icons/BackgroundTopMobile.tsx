import './icons.css'

const BackgroundTopMobile = () => {
	return (
		<svg className='icon bg-top-mobile' width='374' height='232' xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<linearGradient x1='100%' y1='69.24%' x2='9.399%' y2='32.157%' id='a'>
					<stop stop-color='#8A4389' stop-opacity='0' offset='0%' />
					<stop stop-color='#512051' offset='100%' />
					<stop stop-color='#512051' offset='100%' />
					<stop stop-color='#512051' offset='100%' />
				</linearGradient>
			</defs>
			<path
				d='M0 232c25.63-53.065 74.118-86.618 145.464-100.66 107.018-21.062 66.506-42.306 119.083-84.466C299.6 18.767 336.083 3.143 374 0v232H0z'
				transform='rotate(180 187 116)'
				fill='url(#a)'
				fill-rule='evenodd'
				opacity='0.25'
			/>
		</svg>
	);
};

export default BackgroundTopMobile;
