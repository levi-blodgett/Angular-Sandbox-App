import {Component} from '@angular/core';

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
   // template: '<h2>John Doe</h2>' <<< this is possible, but not preferred, better to separate markup from main file
   // styles: [`
   //    h2 {
   //       color: blue;
   //    }
   // `] <<<<< Same as other, possible but not preferred
})

export class UserComponent {
   // Properties
   firstName = 'John';
   lastName = 'Smith';
   age = 30;
   address = {
      street: '50 Main St.',
      city: 'Sioux Falls',
      state: 'SD'
   }

   // Methods
   constructor() {
      this.sayHello();
      this.hasBirthday();
   }

   sayHello() {
      console.log(`Hello ${this.firstName}`);
   }

   hasBirthday() {
      console.log(this.age);
      this.age += 1;
      console.log(`Happy Birthday! You are now ${this.age} years old, don't die on us now!`);
   }
}