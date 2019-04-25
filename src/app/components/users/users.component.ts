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
  enableAdd: boolean = true;
  currentClasses = {};

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
          // lorempixel is a site for generating images, height/width/category/number
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true
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
          image: 'http://lorempixel.com/600/600/people/5',
          isActive: false
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: false
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

    this.setCurrentClasses();
  };

  addUser(user: User) {
    this.users.push(user);
  };

  setCurrentClasses() {
    this.currentClasses = {
      // If enableAdd is true, add btn-success class
      'btn-success': this.enableAdd,
      'btn-light': this.enableAdd === false,
      'big-text': this.showExtended
    }
  }

}
