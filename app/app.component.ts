import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <div *ngIf="name.length>0">
        Hello, I am {{ name }} !, {{ age }} old.
      </div>
      <div>
        My age <input type="text" [value]="age" (input)="handleChange($event)"/>
      </div>
      <div>
        My age <input type="text" [(ngModel)]="age"/>
      </div>
      <div>
          My user name is <input type="text" (input)="onUsernameChange(username)" #username/>
          {{ login }}
      </div>
      <div>
          <counter></counter>
      </div>
      <div>
          <ul>
              <li *ngFor="let friend of friends; let i=index">
                {{ i+1 }} {{ friend }}
              </li>
          </ul>
      </div>
      <div>
          <todos></todos>
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = "Varma";
  age: number = 46;
  friends: string[]=["Ram","Robert","Rahim"];
  login: string;

  onUsernameChange(username){
    console.log(username.value);
    this.login=username.value;
  }

  handleChange(event){
    this.age=event.target.value;
  }

}
