import StarRating from './StarRating';

interface ReviewCardProps {
	websiteName: string;
	starsAmt: number;
}

const ReviewsCard: React.FC<ReviewCardProps> = ({ websiteName, starsAmt }) => {
	return (
		<div className='review-card col-12 col-lg-9 d-lg-flex align-items-center mb-3 p-3 px-lg-5 rounded text-center'>
			<StarRating />
			<p className='review-details mb-0 mt-2 mt-lg-0 ms-lg-4 fw-bold'>
				Rated {starsAmt} Stars in {websiteName}
			</p>
		</div>
	);
};

export default ReviewsCard;
