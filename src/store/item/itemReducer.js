import { types } from "./types";

export const itemReducer = (state = [], action) => {

    switch (action.type) {
        case types.items:

            return {
                ...state, items: action.payload
            }
        case types.detail:
            return {
                ...state,
                detail: action.payload.detail
            }

        default:
            return state;
    }


}