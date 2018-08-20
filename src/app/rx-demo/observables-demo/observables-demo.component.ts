import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {
  fromEventLogs: string[] = [];
  ajaxLogs: string[] = [];
  intervalLogs: string[] = [];
  fromLogs: string[] = [];


  constructor() { }

  ngOnInit() {
    /***** fromEvent *****/
    const specialElement = document.getElementById('special-area');
    const mouseEventsObservable = fromEvent(specialElement, 'mousemove');
     const subscription = mouseEventsObservable.subscribe(
      (evt: MouseEvent) => {
        this.fromEventLogs.push(`Coords: ${evt.clientX} X ${evt.clientY}`);
      
        if (evt.clientX < 250 && evt.clientY < 230) {
          subscription.unsubscribe();
          this.fromEventLogs.push("Unsubscribed for mouse events");
        }
      }
    );


        /***** ajax *****/
        let todosUrl = 'http://localhost:3000/todos';
        const todoObservable = ajax(todosUrl);
         todoObservable.subscribe(
          //res => console.log(res.status, res.response)
          res => this.ajaxLogs.push('Response came')
                );
         /***** interval *****/
         const secondsCounterObservable = interval(1000);
         secondsCounterObservable.subscribe(
         // n => console.log(`It's been ${n} seconds since subscribing!`)
          n => this.intervalLogs.push(`It's been ${n} seconds since subscribing!`)
        );
        
         /***** from array *****/
    let numbers = [10, 20, 30, 40, 50];
    const arrayObservable = from(numbers);

    arrayObservable.subscribe(
      n => this.fromLogs.push(`${n}`)
    );
  }
}