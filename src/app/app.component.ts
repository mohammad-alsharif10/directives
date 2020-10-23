import {Component} from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'directives';

   deleteHoledElement($event: number): void {
      console.log(`the holding time from the component ${$event}`);
      if ($event === 1000) {
         console.log('%c starting the delete operation', 'color:#aa0000');
      }
   }
}
