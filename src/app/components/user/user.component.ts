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

}