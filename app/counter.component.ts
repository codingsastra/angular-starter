import { Component } from '@angular/core';

@Component({
    selector:'counter',
    template:`
        <div>
                <h1>Counter</h1>
                <h3>{{ count }}</h3>
                <button (click)="increment()">Increment</button>
                <button (click)="decrement()" [disabled]="disabled">Decrement</button>
        </div>
    `
})
export class CounterComponent {
    count:number=0;
    disabled:boolean=true;

    increment(){
        this.count++;   
        this.disabled=false;
    }

    decrement(){
        this.count--;
        if(this.count==0){
            this.disabled=true;
        }
    }
}