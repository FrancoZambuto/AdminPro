import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  title: string;
  titleSubs$: Subscription;

  constructor(private router: Router) {
   this.titleSubs$ = this.getRouteArguments()
       .subscribe(data => {
         this.title = data.title;
         document.title = `AdminPro - ${this.title}`;
       });
  }

  getRouteArguments() {
   return this.router.events
    .pipe(
      filter(event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    )
  }

ngOnDestroy() {
  this.titleSubs$.unsubscribe();
}


}
