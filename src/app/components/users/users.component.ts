import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() { }

  // Lifecycle method, runs automatically when component is intitialized, like contstructor
  ngOnInit() {
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

    this.addUser(
      {
        firstName: 'David',
        lastName: 'Jackson',
        age: 47,
        address: {
          street: '12 Wakeson St.',
          city: 'Boston',
          state: 'MA'
        }
      }
    );
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
