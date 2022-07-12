import * as _ from 'lodash';

import { Authority } from './authority.model';

export class User {

    id: number;

    contactId: number;

    login: string;

    userName: string;

    password: string;

    firstName: string;

    lastName: string;

	presenceStatus: string;  

    currentRoom: string;
    	
    enabled: string;

    email: string;

    ext: string;
    
    bio: string;

    image: string;
    
    isLoggedIn: string;
    
  constructor(user?: { 
	id: number,
    contactId: string,
    login: string,
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    enabled: string,
    email: string,
    bio: string,
    image: string,
    presenceStatus: string,
    isLoggedIn: string
     }) {
    if (user) {
      _.assignIn(this, user);
      // this.authenticated = false;
    }
  }
}
