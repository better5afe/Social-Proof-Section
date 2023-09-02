import useAvatar from '../../utils/useAvatar';

interface TestimonialsCommentProps {
	id: string;
	commentId: number;
	userName: string;
	isVerified: boolean;
	commentBody: string;
}

const TestimonialsComment: React.FC<TestimonialsCommentProps> = ({
	id,
	commentId,
	userName,
	isVerified,
	commentBody,
}) => {
	let avatar = useAvatar(commentId);
	let verifiedBadge = isVerified ? 'Verified Buyer' : '';

	return (
		<div id={id} className='col-lg-4'>
			<div id={id} className='comment mb-3 mb-lg-0 me-lg-4 p-4 py-lg-5 rounded'>
				<div className='comment-top d-flex align-items-center mb-4'>
					<img
						src={avatar}
						alt="User's avatar."
						className='comment-avatar me-3 rounded-circle'
					/>
					<div className='comment-author'>
						<p className='mb-0 fw-bold'>{userName}</p>
						<p className='comment-badge mb-0 fe-bold'>{verifiedBadge}</p>
					</div>
				</div>
				<div className='comment-bottom'>
					<p className='comment-body mb-0'>"&nbsp;{commentBody}&nbsp;"</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsComment;
