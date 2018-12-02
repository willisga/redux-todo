import {
  TodoActionsType,
  ActionsTodo
} from "./todo.actions";
import { TodoModel } from "./models/todo.model";

export const initialState: TodoModel[] = [
  new TodoModel("Vencer a Thanos"),
  new TodoModel("Salvar el mundo")
];

export function todoReducer(
  state: TodoModel[] = initialState,
  action: ActionsTodo
): TodoModel[] {
  switch (action.type) {
    case TodoActionsType.ADD_TODO:
      const todo = new TodoModel(action.payload);
      return [...state, todo];

    case TodoActionsType.DELETE_TODO:
      return state.filter(item => item.id !== action.payload);

    case TodoActionsType.EDIT_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            texto: action.texto,
            completado: false
          };
        } else {
          return item;
        }
      });

    case TodoActionsType.TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completado: !item.completado
          };
        } else {
          return item;
        }
      });

    case TodoActionsType.TOGGLE_ALL_TODO:
      return state.map(item => {
        return {
          ...item,
          completado: action.payload
        };
      });

    case TodoActionsType.CLEAN_COMPLETED:
      return state.filter(item => !item.completado);

    default:
      return state;
  }
}
