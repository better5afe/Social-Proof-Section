import ReviewsCard from './subcomponents/ReviewsCard';

import { reviewsData } from '../utils/reviews-data';

const ReviewCards = () => {
	return (
		<div className='mb-5'>
			{reviewsData.map((review) => (
				<ReviewsCard
					key={review.websiteName}
					websiteName={review.websiteName}
					starsAmt={review.starsAmt}
				/>
			))}
		</div>
	);
};

export default ReviewCards;
