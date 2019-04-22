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
   firstName: string;
   lastName: string;
   age: number;
   address;

   foo: any;
   hasKids: boolean;
   numberArray: number[]; // This is saying it has to be an array of numbers
   stringArray: string[]; // This has to be an array of strings
   mixedArray: any[]; // This array can be full of any data types
   myTuple: [string, number, boolean]; // If you want a specific order the array should be in
   unusable: void;
   undef: undefined;
   noel: null;


   // Methods
   constructor() {
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.age = 30;

      this.address = {
         street: '50 Main St.',
         city: 'Sioux Falls',
         state: 'SD'
      }

      this.foo = 1;
      this.hasKids= true;
      this.numberArray = [1, 2, 3, 4, 5];
      this.stringArray = ['hello', 'world'];
      this.mixedArray = [true, undefined, ''];
      this.myTuple = ['stop', 0, false]; // Can put more than what is defined, as long as the part that is defined has the proper types.
      this.unusable = undefined;
      this.undef = undefined;
      this.noel = null;

      console.log(this.addNumbers(1,2));
      
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

   addNumbers(num1: number, num2: number):number {
      return num1 + num2;
   }
}