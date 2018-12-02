import { Action } from "@ngrx/store";

export enum FilterActionsType {
  SET_FILTER = "[Filter] Set FILTER",
  CLEAN_COMPLETED = "[Filter] Clean completed todo"
}

export type Filters = "Todos" | "Pendientes" | "Completados";

export class SetFilterAction implements Action {
  readonly type = FilterActionsType.SET_FILTER;
  constructor(public payload: Filters) {}
}

export type ActionsFilter = SetFilterAction;
