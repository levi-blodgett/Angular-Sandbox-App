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
  enableAdd: boolean = false;

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
          },
          // lorempixel is a site for generating images, height/width/category/number
          image: 'http://lorempixel.com/600/600/people/2'
        },
        {
          firstName: 'Kevin',
          lastName: 'Smith',
          age: 20,
          address: {
             street: '20 School St.',
             city: 'New York',
             state: 'NY'
          },
          image: 'http://lorempixel.com/600/600/people/3'
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 76,
          address: {
             street: '55 Mill St.',
             city: 'Miami',
             state: 'FL'
          },
          image: 'http://lorempixel.com/600/600/people/4'
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
