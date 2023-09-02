const avatarOne = require('../assets/images/image-colton.jpg');
const avatarTwo = require('../assets/images/image-irene.jpg');
const avatarThree = require('../assets/images/image-anne.jpg');

const useAvatar = (id: number) => {
	let avatar;

	switch (id) {
		case 1:
			avatar = avatarOne;
			break;
		case 2:
			avatar = avatarTwo;
			break;
		case 3:
			avatar = avatarThree;
			break;
		default:
			avatar = '';
	}

	return avatar;
};

export default useAvatar;
