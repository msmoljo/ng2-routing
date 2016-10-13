import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
	{
		id: 1,
		name: 'Marko',
		username: 'marco.smolio',
		avatar: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/c1.0.160.160/p160x160/13177562_1194449780565589_3474115213818091502_n.jpg?oh=b929cd5645babaf2e2e6305b32c64393&oe=586F8FD4'
	},
	{
		id: 2,
		name: 'Karlo',
		username: 'poldo',
		avatar: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p160x160/10665769_10203531500500675_2898520521896214296_n.jpg?oh=8d810ba0f24cf3acf943b9df27c369cb&oe=58ADE759'
	},
	{
		id: 3,
		name: 'Dario',
		username: 'herci',
		avatar: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-1/p160x160/10563055_10152334594501849_2411822943346802989_n.jpg?oh=6aa3d8914c4da2751961cbe77d6c66a4&oe=586585FA'
	}
]);

@Injectable()

export class UserService {

	//get all users
	getUsers() {
		return usersPromise;
	}
	//find a specific user
	getUser(username) {

		return usersPromise.then(users => users.find(user => user.username === username));

		// let user = usersPromise.then(users => {
		// 	return users.find(user => {
		// 		return user.username === username;
		// 	});
		// });
		//
		// return user;
	}
}
