import * as fromVzorky from "./vzorky";

// reducers
export const reducers = {
    vzorky: fromVzorky.reducers
}

// state
export interface AppState {
    vzorky: fromVzorky.State,
}