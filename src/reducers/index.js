import {combineReducers} from 'redux';
import tmReducer from './standupReducer';
import timerReducer from './timerReducer';
import tmListReducer from './teamMemberListReducer';
import circleReducer from './circleReducer';
import tmLocationReducer from './teamMemberLocationReducer';
import winnerReducer from './winnerReducer';
import standupReducer from './standupReducer';

const rootReducer = combineReducers({
    whosOnFirst: winnerReducer,
    time: timerReducer,
    teamMembers : tmListReducer,
    circle: circleReducer,
    teamMemberLocations: tmLocationReducer,
    isSaved: standupReducer
});

export default rootReducer;