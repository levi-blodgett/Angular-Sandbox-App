import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  // Lifecycle method, runs automatically when component is intitialized, like contstructor
  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 80,
          address: {
             street: '50 Main St.',
             city: 'Sioux Falls',
             state: 'SD'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Smith',
          age: 36,
          address: {
             street: '20 School St.',
             city: 'New York',
             state: 'NY'
          },
          isActive: false,
          registered: new Date('03/11/2017 01:00:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 29,
          address: {
             street: '55 Mill St.',
             city: 'Miami',
             state: 'FL'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        },
      ];

      this.loaded = true;
    // }, 2000);
  };

  addUser(user: User) {
    this.users.push(user);
  };
}
