import { Component } from '@angular/core'

@Component({
    selector:'todos',
    templateUrl:'todos.component.html'
})
export class TodosComponent {
    todos:string[]=[];
    todo:string="";

    handleChange(event){
        this.todo=event.target.value;
    }

    handleClick(){
        console.log(this.todo)
        this.todos.push(this.todo);
        this.todo='';
    }

    removeTodo(todo){
        console.log(todo);
    }
}