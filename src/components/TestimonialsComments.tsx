import TestimonialsComment from './subcomponents/TestimonialsComment';

import { comments } from '../utils/comments-data';

const TestimonialsComments = () => {
	return (
		<section>
			{comments.map((comment) => (
				<TestimonialsComment
					key={comment.id}
					id={comment.id}
					userName={comment.userName}
					isVerified={comment.isVerified}
					commentBody={comment.commentBody}
				/>
			))}
		</section>
	);
};

export default TestimonialsComments;
