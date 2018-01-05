import * as types from 'actions/ActionTypes';
import {Map} from 'immutable'


const initialState = Map({
    string: 'test'
})

function test(state = initialState, action){

    switch(action.type){
        case types.TEST:
        return state.set('string', 'redux test done!')

        default:
        return state;
    }
}

export default test;