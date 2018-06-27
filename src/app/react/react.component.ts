import { Component, AfterViewInit, ElementRef } from '@angular/core'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Welcome } from './Welcome'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-react',
  template: '',
})
export class ReactComponent implements AfterViewInit {
  private app: HTMLElement
  constructor(elementRef: ElementRef, private store: Store<any>) { 
    this.app = elementRef.nativeElement
  }

  ngAfterViewInit() {
    const WelcomeComponent = React.createFactory(Welcome)
    setTimeout(() => {
      ReactDOM.render(WelcomeComponent({'store': this.store}), this.app)
    })
  }
}
