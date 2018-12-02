import { TodoModel } from "./todo/models/todo.model";
import { ActionReducerMap } from "@ngrx/store";

import * as fromTodo from "./todo/todo.reducer";
import * as fromFilter from "./todo/filter/filter.reducer";
import * as fromFilterActions from "./todo/filter/filter.actions";

export interface AppState {
  todos: TodoModel[];
  filter: fromFilterActions.Filters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
