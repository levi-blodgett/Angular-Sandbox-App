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
  currentStyles = {};

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
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
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
          isActive: false,
          balance: 300,
          registered: new Date('03/11/2017 01:00:00')
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
          isActive: true,
          balance: 20,
          registered: new Date('11/02/2016 10:30:00')
        },
      ];

      this.loaded = true;
    // }, 2000);

    this.addUser(
      {
        firstName: 'David',
        lastName: 'Jackson',
        image: 'http://lorempixel.com/600/600/people/8',
      }
    );

    this.setCurrentClasses();
    this.setCurrentStyles();
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

  setCurrentStyles() {
    this.currentStyles = {
      // If showExtended is true, have top padding be 0, else make the top padding 40px
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
