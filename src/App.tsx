import TestimonialsInfo from './components/TestimonialsInfo';
import TestimonialsComments from './components/TestimonialsComments';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	return (
		<Container>
			<main className='px-1 py-5'>
				<TestimonialsInfo />
				<TestimonialsComments />
			</main>
		</Container>
	);
};

export default App;
