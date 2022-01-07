import { CabinModel } from "../@core/models/Cabin.model";
import ActionTypes from '../actions/actionTypes';

const fetchCabinDetailsReducer = (state:CabinModel[] = [], action) => {
    switch (action.type) {
        case ActionTypes.GET_CABINS:
            return action.payload;
        default:
            return state;
    }
}

export default fetchCabinDetailsReducer;