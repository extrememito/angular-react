import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactComponent } from './react/react.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReactComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: reducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
