import {types} from "../item/types";

    export const itemReducer = (state =[], action) => {

        switch (action.type) {
            case types.items:

                return  {
                    ...state,items:action.payload
                }
        
            default:
                return state;
        }


    }