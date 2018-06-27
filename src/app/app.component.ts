import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-react';

  constructor(private store: Store<any>) {

  }

  public onAdd() {
    this.store.dispatch({ type: INCREMENT })
  }
}
