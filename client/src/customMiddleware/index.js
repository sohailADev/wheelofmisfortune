import axios from 'axios';
import * as Actions from '../actions';



export const FetchTMs = () => {
    return dispatch => {
  
      axios
      .get("http://localhost:5000/teamMembers")
        .then(res => {
          dispatch(Actions.changeTMList(res.data));
          dispatch(Actions.initializeLocationArray(res.data));
        })
        .catch(err => {
          console.log("ERROR: " + err);
        });
    };
  };

  export const UpdateTime = (newTime) => {
    return dispatch => {
        dispatch(Actions.changeTimeDelta(newTime))
    };
  };


  export const UpdateCircle = (c) => {
    return dispatch => {
        dispatch(Actions.changeCircle(c))
    };
  };

  export const UpdateTMLocations = (c) => {
    return dispatch => {
        dispatch(Actions.updateLocationArray(c))
    };
  };

  export const initializeLocationArray = (c) => {
    return dispatch => {
        dispatch(Actions.initializeLocationArray(c))
    };
  };

  export const UpdateStandup = (c) => {
    return dispatch => {
        axios
        .post("http://localhost:5000/dailyStandups/add", {firstName: c.firstName, lastName: c.lastName})
          .then(res => {
              if (res.status === 200)
              {
                dispatch(Actions.saveStandup(true));                  
              }
              else
              {
                  dispatch(Actions.resetStandup(false));
              }
          })
          .catch(err => {
            console.log("ERROR: " + err);
          });
    };
  };