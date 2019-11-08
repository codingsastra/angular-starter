import { Component } from '@angular/core'
import { Todo } from './models/todo.interface'

@Component({
    selector:'todos',
    styleUrls:['todos.component.scss'],
    templateUrl:'todos.component.html'
})
export class TodosComponent {
    todos:Todo[]=[];
    todo:string="";

    student={
        name:"Varma",
        age:46
    }

    handleChange(event){
        this.todo=event.target.value;
    }

    handleClick(){
        console.log(this.todo)
        
        let todo:Todo={
            id:this.todos.length+1,
            text:this.todo,
            isCompleted:false
        }

        this.todos.push(todo);
        this.todo='';
    }

//     removeTodo(todo){
//         this.todos=this.todos.filter((currentTodo)=>{
//             return currentTodo!=todo;
//         })
//     }

    completeTodo(id){
        console.log(id)

        //Get todo and update completion status
        let todo:Todo=this.todos.find((todo)=>{
            return todo.id==id
        });

        todo.isCompleted=true;

        //Remove existing today, then add updated one
        this.todos=this.todos.filter((todo)=>{
            return todo.id!=id;
        })

        this.todos.push(todo);
    }
}
