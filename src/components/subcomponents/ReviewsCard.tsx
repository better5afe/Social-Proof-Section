import StarRating from './StarRating';

interface ReviewCardProps {
	websiteName: string;
	starsAmt: number;
}

const ReviewsCard: React.FC<ReviewCardProps> = ({ websiteName, starsAmt }) => {
	return (
		<div className='review-card mb-3 p-3 rounded text-center'>
			<StarRating />
			<p className='review-details mt-2 mb-0 fw-bold'>
				Rated {starsAmt} Stars in {websiteName}
			</p>
		</div>
	);
};

export default ReviewsCard;
