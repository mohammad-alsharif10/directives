import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {filter, takeUntil, tap} from 'rxjs/operators';


@Directive({
   selector: '[appHoldDeleteButton]'
})
export class HoldDeleteButtonDirective {

   @Output() holdingTime: EventEmitter<number> = new EventEmitter<number>();
   state: Subject<string> = new Subject<string>();
   cancel: Observable<string> = new Observable<string>();


   constructor() {
      this.cancel = this.state.pipe(
         filter(value => value === 'cancel'),
         tap(_ => {
            console.log('%c user stopped holding', 'color:#5fba7d');
            this.holdingTime.emit(0);
         })
      );
   }

   @HostListener('mouseup', ['$event'])
   @HostListener('mouseleave', ['$event'])
   onExit(): void {
      this.state.next('cancel');
   }

   @HostListener('mousedown', ['$event'])
   onHold(): void {
      console.log('%c user started holding', 'color:#5fba7d');
      this.state.next('start');
      const n = 100;
      interval(n)
         .pipe(
            takeUntil(this.cancel),
            tap(x => {
               this.holdingTime.emit(n * x);
               console.log(`%c ${n * x}`, 'color:#aa8500');
               if (x >= 11) {
                  this.state.next('cancel');
               }
            })
         )
         .subscribe();

   }

}
