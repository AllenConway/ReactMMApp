import axios from "axios";
import { CabinModel } from '../@core/models/Cabin.model';

const CabinsApiService = {
    getCabins: async (): Promise<CabinModel[]> =>  {
        // ensure mock data is in /public folder so it can be fetched locally without getting a 404 in the browser
        return axios.get<CabinModel[]>("cabins.json")
        .then((response) => response.data);        
    }
};

export default CabinsApiService;