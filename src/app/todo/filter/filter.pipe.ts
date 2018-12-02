import { Pipe, PipeTransform } from "@angular/core";
import { TodoModel } from "../models/todo.model";
import * as fromFilters from "./filter.actions";

@Pipe({
  name: "filterTodo"
})
export class FilterPipe implements PipeTransform {
  transform(todos: TodoModel[], filter: fromFilters.Filters): TodoModel[] {
    switch (filter) {
      case "Pendientes":
        return todos.filter(item => !item.completado);
      case "Completados":
        return todos.filter(item => item.completado);
      default:
        return todos;
    }
  }
}
