import React, { useEffect } from "react";
import Greeting from "../@common/Greeting/Greeting";
import { Grid } from "@material-ui/core";
import Cabin from "./Cabin";
import { CabinModel } from "../../@core/models/Cabin.model";
import CabinsApiService from "../../api/cabins.api.service";
//react-redux
import { useDispatch, useSelector } from "react-redux";
import fetchCabinDetailsAction from "../../actions/fetchCabinDetailsAction";

//const Cabins: React.FC<DispatchProps> = (props) => {
const Cabins: React.FC = () => {
  const dispatch = useDispatch();
  // useSelector will subscribe to the Redux store, and run this selector whenever an action is dispatched
  // A cached result may be returned if the selector has been run and hasn't changed
  const cabinData: CabinModel[] = useSelector(state => state);

  useEffect(() => {
    //Dispatch the fetchDetailsAction
    CabinsApiService.getCabins().then(async data => {
      await dispatch(fetchCabinDetailsAction(data));      
    });
  }, [dispatch]);

  if (cabinData) {
    return (
      <>
        <Greeting greetingMessage="Mountain Vacation Cabins" />
        <Grid container spacing={4}>
          {cabinData.map(cabin => (
            <Grid key={cabin.id} item md={3}>
              <Cabin {...cabin} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
  else
    return <></>

};

// const mapStateToProps = (state: any, ownProps: any) => ({

// });

// interface DispatchProps {
//   fetchCabinDetailsAction: any
// }

// const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
//   fetchCabinDetailsAction: () => dispatch({ type: ActionTypes.GET_CABINS }),
// });

// connect is react-redux's higher-order component wrapper that will connect our component to the store
// export default connect<DispatchProps>(null, mapDispatchToProps)(Cabins);
export default Cabins;
