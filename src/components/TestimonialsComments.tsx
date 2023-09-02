import TestimonialsComment from './subcomponents/TestimonialsComment';

import { comments } from '../utils/comments-data';

const TestimonialsComments = () => {
	return (
		<section className='testimonials-box d-lg-flex align-items-start'>
			{comments.map((comment) => (
				<TestimonialsComment
					key={comment.commentId}
					commentId={comment.commentId}
					id={comment.userId}
					userName={comment.userName}
					isVerified={comment.isVerified}
					commentBody={comment.commentBody}
				/>
			))}
		</section>
	);
};

export default TestimonialsComments;
