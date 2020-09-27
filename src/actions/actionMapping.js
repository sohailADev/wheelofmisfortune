import {connect} from 'react-redux';
import * as Actions from '../actions';
import App from '../App';
import * as AsyncFuncs from '../customMiddleware'

const mapStateToProps = state => ({
    whosOnFirst: state.whosOnFirst,
    time : state.time,
    teamMembers: state.teamMembers,
    circle: state.circle,
    teamMemberLocations: state.teamMemberLocations,
    isSaved: state.isSaved
  });
  const mapDispatchToProps = (dispatch) => ({
    changeTMList: () => dispatch(AsyncFuncs.FetchTMs()),
    updateTimer: (newTime) => dispatch(AsyncFuncs.UpdateTime(newTime)),
    updateTM: () => dispatch(Actions.changeTeamMember),
    changeCircle: (c) => dispatch(AsyncFuncs.UpdateCircle(c)),
    initializeLocation: (c) => dispatch(Actions.initializeLocationArray(c)),
    updateLocation: (c) => dispatch(Actions.updateLocationArray(c)),
    calculateWinner: (c) => dispatch(Actions.calculateWinner(c)),
    resetStandup: (c) => dispatch(Actions.resetStandup(c)),
    saveStandup: (c) => dispatch(AsyncFuncs.UpdateStandup(c))


  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App);