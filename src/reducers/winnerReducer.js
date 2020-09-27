import * as CalcFunctions from '../modules/CalculationManager';

const winnerReducer = (state = '', action) => {
    switch (action.type) {
      case "CALCULATE":
        {
            var winner = '';
            action.value.teamMemberLocations.forEach((tm) => {
                var isWinner = CalcFunctions.IsTheWinner(action.value.time, tm[1], tm[2]);
                if (isWinner)
                    winner = {firstName: tm[0].firstName, lastName: tm[0].lastName}
            });
            return winner;
        }
      default:
        return state;
    }
  };

  export default winnerReducer;