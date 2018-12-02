import { ActionsFilter, FilterActionsType, Filters } from "./filter.actions";

export const initialState: Filters = 'Todos';

export function filterReducer(
  state: Filters = initialState,
  action: ActionsFilter
): Filters {
  switch (action.type) {
    case FilterActionsType.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}
