import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(public id:number,
    public description:string,
    public done : boolean,
    public targetDate:Date){

    }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,'Try to be happy and reduce stress',false,new Date()),
    new Todo(2,'Learn with no pressure and be an expert in what you\'re doing',false,new Date()),
    new Todo(3,'Come out of Comfort Zone and explore new things',false,new Date()),
    new Todo(4,'Be humble stay focused',false,new Date()),
]

  constructor() { }

  ngOnInit(): void {
  }

}
