import { createAction, createReducer, createSelector, on, props } from "@ngrx/store"
import { AppState } from "."

// state
export interface State {
    druh: string | null
}

// actions
export const setFilterValues = createAction('[Vzorky] Set filter values', props<{ druh: string }>())

// reducers
export const reducers = createReducer<State>(
    {
        druh: null
    },
    on(setFilterValues, (state, action) => ({ ...state, druh: action.druh })),
)

// selectors
const selectVzorky = (state: AppState) => state.vzorky
export const selectVzorkyFilterValues = createSelector(selectVzorky, (state) => state.druh)
