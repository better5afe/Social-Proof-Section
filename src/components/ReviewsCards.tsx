import ReviewsCard from './subcomponents/ReviewsCard';

import { reviewsData } from '../utils/reviews-data';

const ReviewCards = () => {
	return (
		<div className='col-lg-6 mb-5 mb-lg-0'>
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
