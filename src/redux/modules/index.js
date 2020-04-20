import { combineReducers } from 'redux';
import app from './app';
import count from './count';
import home from './home';
import hall from './hall';
import order from './order';
import login from './login';
import players from './players';
import gold from './gold';
import group from './group';
import adminCash from './adminCash';
import bindMobile from './bindMObile';
import game from './game';
import gather from './gather';
import password from './password';
import consume from './consume';
import recordCost from './recordCost';

//import entities from './entities';

const rootReducer = combineReducers({
    app,
    count,
    home,
    hall,
    order,
    login,
    players,
    gold,
    group,
    adminCash,
    bindMobile,
    game,
    gather,
    password,
    consume,
    recordCost
})

export default rootReducer;