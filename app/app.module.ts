import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component'
import { TodosComponent } from './todos.component'
import { LoginComponent } from './login.component'

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
    TodosComponent,
    LoginComponent
  ]
})
export class AppModule {}
