import TestimonialsInfo from './components/TestimonialsInfo';
import TestimonialsComments from './components/TestimonialsComments';
import Container from 'react-bootstrap/Container';

import BackgroundTopMobile from './assets/icons/BackgroundTopMobile';
import BackgroundBottomMobile from './assets/icons/BackgroundBottomMobile';
import BackgroundTopDesktop from './assets/icons/BackgroundTopDesktop';
import BackgroundBottomDesktop from './assets/icons/BackgroundBottomDesktop';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<main className='main position-relative d-lg-flex justify-content-center align-items-center py-lg-5'>
			<Container>
				<section className='px-1 py-5'>
					<TestimonialsInfo />
					<TestimonialsComments />
				</section>
			</Container>

			<BackgroundTopMobile />
			<BackgroundBottomMobile />

			<BackgroundTopDesktop />
			<BackgroundBottomDesktop />
		</main>
	);
};

export default App;
