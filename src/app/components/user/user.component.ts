import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
   // Properties
   user: User;

   // Methods
   constructor() {
      
   }

   // This is useed for methods and properites more, while constructors are used for like ajax services and such
   ngOnInit() {
      this.user = {
         firstName: 'John',
         lastName: 'Doe',
         age: 30,
         address: {
            street: '50 Main St.',
            city: 'Sioux Falls',
            state: 'MA'
         }
      }
   }
}