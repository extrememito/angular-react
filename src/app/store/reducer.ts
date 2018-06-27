import { Action } from "@ngrx/store"

export const INCREMENT = "INCREMENT"

const initialState = 0;

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}
