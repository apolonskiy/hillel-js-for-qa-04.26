 let type;

// if(1 > 2) {
// } else {
//     let type;
// }

const fruitName = 'cucumber';
switch (fruitName) {
    case 'apple':
    case 'orange':
	case 'kiwi':
		type = 'Fruit';
		break;
	case 'cucumber':
		type = 'Vegetable';
		break;
	default:
		type = 'Unknown';
}


if (fruitName === 'apple' || fruitName === 'orange' || fruitName === 'kiwi') {
    type = 'Fruit';
}
console.log(type);
