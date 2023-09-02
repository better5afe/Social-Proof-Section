import ReviewsCard from './subcomponents/ReviewsCard';

import { reviewsData } from '../utils/reviews-data';

const ReviewCards = () => {
	return (
		<>
			{reviewsData.map((review) => (
				<ReviewsCard
					key={review.websiteName}
					websiteName={review.websiteName}
					starsAmt={review.starsAmt}
				/>
			))}
		</>
	);
};

export default ReviewCards;
