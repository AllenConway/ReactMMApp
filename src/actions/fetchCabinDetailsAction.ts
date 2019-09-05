import { CabinModel } from "../@core/models/Cabin.model";
import ActionTypes from './actionTypes';

export const fetchCabinDetailsAction = (data: CabinModel[]) => {        
    return {
        type: ActionTypes.GET_CABINS,
        payload: data
    }
}

export default fetchCabinDetailsAction;
