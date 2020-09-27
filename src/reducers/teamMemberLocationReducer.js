import * as CalcFunctions from '../modules/CalculationManager';

const tmLocationReducer = (state = [], action) => {
    switch (action.type) {
      case "INITIALIZE":
        {
          var z = [];
          console.log(action.value);
          action.value.forEach((aa) => {
            console.log(aa);
            var i = action.value.indexOf(aa);
            var n = i+1;
            var e = [];
            e[0] = aa;
            e[1] = (n-1)*60;
            e[2] = (n*60)-1;
            z[i] = e;
          });
          return z;           
        }

      case "UPDATE" : 
      {
        console.log(action.value.time);
        console.log(action.value.teamMemberLocations);
        // var tmArray = Array.from(action.value.teamMemberLocations);
        action.value.teamMemberLocations.forEach((aa) => {
            console.log(aa[1]);
            console.log(aa[2]);
            aa[1] = CalcFunctions.CalculateAngleChange(action.value.time, aa[1]);
            aa[2] = CalcFunctions.CalculateAngleChange(action.value.time, aa[2]);
        });
        return action.value.teamMemberLocations;        
      }

      default:
        return state;
    }
  };

  export default tmLocationReducer;

// const tmLocationReducer = (state = [], action) => {
//   switch (action.type) {
//     case "INITIALIZE":
//         return {teamMemberLocations: action.value};
//     case "UPDATE":
//         return action.value;
//     default:
//       return state;
//   }
// };

// export default tmLocationReducer;

