import { User } from '../models/user';
import { Injectable } from '@angular/core';


const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: '8 BIT PLATOON',
    username: '@8BitPlatoon',
    avatar: 'https://pbs.twimg.com/profile_images/624984296252682240/LhxQ_LYk_400x400.jpg'
  },
  {
    id: 2,
    name: 'AndrewAnele',
    username: '@ANDREWANELE',
    avatar: 'https://pbs.twimg.com/profile_images/753978476496031748/RLyJrHcp_400x400.jpg'
  },
  {
    id: 3,
    name: 'CTU RedHat Community',
    username: '@CtuRedhat',
    avatar: 'https://pbs.twimg.com/profile_images/763291339945541632/574km6zW_400x400.jpg'
  }
]);
@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return usersPromise;
  }
  
  
  getUser(username) {
    return usersPromise.then(users => users.find(user => user.username === username));
    //    let user = usersPromise.then(users => {
    //      return users.find(user => {
    //        return user.username === username;
    //      });
    //    });
    //    return user;

  }

}
