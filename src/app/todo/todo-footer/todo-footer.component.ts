import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import * as fromFilterActions from "../filter/filter.actions";
import * as fromTodoActions from "../todo.actions";
import { TodoModel } from "../models/todo.model";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFilterActions.Filters[];
  currentFilter: fromFilterActions.Filters;
  numberElements: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countPending(state.todos);
    });
    this.filtrosValidos = ["Todos", "Pendientes", "Completados"];
  }

  setFilter(filter: fromFilterActions.Filters) {
    const action = new fromFilterActions.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  countPending(todos: TodoModel[]) {
    this.numberElements = todos.filter(item => item.completado === false).length;
  }

  cleanCompleted() {
    const action = new fromTodoActions.CleanCompletedAction();
    this.store.dispatch(action);
  }
}
