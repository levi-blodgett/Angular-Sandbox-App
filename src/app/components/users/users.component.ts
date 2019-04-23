import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  // Lifecycle method, runs automatically when component is intitialized, like contstructor
  ngOnInit() {
    // setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
             street: '50 Main St.',
             city: 'Sioux Falls',
             state: 'SD'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Smith',
          age: 20,
          address: {
             street: '20 School St.',
             city: 'New York',
             state: 'NY'
          }
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 76,
          address: {
             street: '55 Mill St.',
             city: 'Miami',
             state: 'FL'
          }
        },
      ];

      this.loaded = true;
    // }, 2000);

    this.addUser(
      {
        firstName: 'David',
        lastName: 'Jackson'
      }
    );
  };

  addUser(user: User) {
    this.users.push(user);
  };

}
