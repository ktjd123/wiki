import test from 'reducers/test';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    test: test
})

export default reducers