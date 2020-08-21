import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  public intervalSubscription: Subscription;

  constructor() {
    
    // this.returnAnObservable().pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   value => console.log("Subs: ",value),
    //   error => console.warn("error", error),
    //   () => console.info("obs fineshed")
    // );

 this.intervalSubscription = this.returnInterval().subscribe( 
      (value) => console.log(value)
    );
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }


  returnInterval(): Observable<number> {
    return interval(100).pipe(
      take(100),
      map( value => {
        return value +1;
      }),
      filter(value => (value % 2 === 0 ) ? true : false)
    );

  }

  returnAnObservable(): Observable<number> {
  
   return new Observable<number>( observer => {
      let i = -1;
     const intervals = setInterval( () => {
        i++;
        observer.next(i);
        if(i===4) {
          clearInterval(intervals);
        }
        if(i==2) {
          observer.error("i equals 2");
        }

      }, 1000);
    });
  }
}
