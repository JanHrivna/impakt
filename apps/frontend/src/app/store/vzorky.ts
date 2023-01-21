import { createAction, createReducer, createSelector, on, props } from "@ngrx/store"
import { AppState } from "."

// state
export interface State {
    filters: {
        druh: string | null
    }
}

// actions
export const setFilterValues = createAction('[Vzorky] Set filter values', props<{ druh: string }>())

// reducers
export const reducers = createReducer<State>(
    {
        filters: {
            druh: null
        }
    },
    on(setFilterValues, (state, action) => ({ ...state, filters: { ...state.filters, druh: action.druh } })),
)

// selectors
const selectVzorky = (state: AppState) => state.vzorky
const selectVzorkyFilterValues = createSelector(selectVzorky, (state) => state.filters)
export const selectVzorkyFilterDruh = createSelector(selectVzorkyFilterValues, (state) => state.druh)
