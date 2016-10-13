"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var usersPromise = Promise.resolve([
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
var UserService = (function () {
    function UserService() {
    }
    //get all users
    UserService.prototype.getUsers = function () {
        return usersPromise;
    };
    //find a specific user
    UserService.prototype.getUser = function (username) {
        return usersPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
        // let user = usersPromise.then(users => {
        // 	return users.find(user => {
        // 		return user.username === username;
        // 	});
        // });
        //
        // return user;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map