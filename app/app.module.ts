import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component'
import { TodosComponent } from './todos.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    TodosComponent
  ]
})
export class AppModule {}
