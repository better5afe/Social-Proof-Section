import useAvatar from '../../utils/useAvatar';

import './TestimonialsComment.css';

interface TestimonialsCommentProps {
	id: number;
	userName: string;
	isVerified: boolean;
	commentBody: string;
}

const TestimonialsComment: React.FC<TestimonialsCommentProps> = ({
	id,
	userName,
	isVerified,
	commentBody,
}) => {
	let avatar = useAvatar(id);
	let verifiedBadge = isVerified ? 'Verified Buyer' : '';

	return (
		<div className='comment mb-3 p-4 rounded'>
			<div className='comment-top d-flex align-items-center mb-4'>
				<img src={avatar} alt="User's avatar." className='comment-avatar me-3 rounded-circle'/>
				<div>
					<p className='mb-0 fw-bold'>{userName}</p>
					<p className='comment-badge mb-0 fe-bold'>{verifiedBadge}</p>
				</div>
			</div>
			<div className='comment-bottom'>
				<p className='mb-0'>"&nbsp;{commentBody}&nbsp;"</p>
			</div>
		</div>
	);
};

export default TestimonialsComment;
