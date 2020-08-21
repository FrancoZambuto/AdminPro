import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.getUsers().then(users => {
      console.log(users);
    })
   }

  ngOnInit(): void {
    // const promise = new Promise( (resolve, reject) => {
    //   if(false) {
    //   resolve("hello world!");
    //   } else {
    //     reject("something was wrong");
    //   }
    // });

    // promise.then((message) => {
    //   console.log(message);
    // })
    // .catch( error => {
    //   console.log("Error en promise", error);
    // });

    // console.log("fin del init");
  }

  getUsers() {

    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then( body => resolve(body.data));
    });
  }
}
