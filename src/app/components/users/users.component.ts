import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  // Lifecycle method, runs automatically when component is intitialized, like contstructor
  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john80@whatisthis.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Smith',
          email: 'kevin36@ihatemyjob.com',
          isActive: false,
          registered: new Date('03/11/2017 01:00:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'karen29@example.com',
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        },
      ];

      this.loaded = true;
    // }, 2000);
  };

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     age: null,
  //     email: ''
  //   }
  // };

  onSubmit(e) {
    e.preventDefault();
  }
}
