import { Action } from "@ngrx/store";

export enum TodoActionsType {
  ADD_TODO = "[Todo] Agregar todo",
  EDIT_TODO = "[Todo] Editar todo",
  DELETE_TODO = "[Todo] Eliminar todo",
  TOGGLE_TODO = "[Todo] Toggle todo",
  TOGGLE_ALL_TODO = "[Todo] Toggle all todo",
  CLEAN_COMPLETED = "[Todo] Clean Complete"
}

export class AgregarAction implements Action {
  readonly type = TodoActionsType.ADD_TODO;
  constructor(public payload: string) {}
}

export class EditarAction implements Action {
  readonly type = TodoActionsType.EDIT_TODO;
  constructor(public id: number, public texto: string) {}
}

export class EliminarAction implements Action {
  readonly type = TodoActionsType.DELETE_TODO;
  constructor(public payload: number) {}
}

export class ToggleCompleteAction implements Action {
  readonly type = TodoActionsType.TOGGLE_TODO;
  constructor(public payload: number) {}
}

export class ToggleAll implements Action {
  readonly type = TodoActionsType.TOGGLE_ALL_TODO;
  constructor(public payload: boolean) {}
}

export class CleanCompletedAction implements Action {
  readonly type = TodoActionsType.CLEAN_COMPLETED;
}

export type ActionsTodo =
  | AgregarAction
  | EditarAction
  | EliminarAction
  | ToggleCompleteAction
  | ToggleAll
  | CleanCompletedAction;
