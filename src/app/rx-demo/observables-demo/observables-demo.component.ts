import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.css']
})
export class ObservablesDemoComponent implements OnInit {

  fromEventLogs: string[] = [];

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

  }
}