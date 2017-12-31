import * as types from 'actions/ActionTypes';

const initialState = {
    string: 'test'
}  

function test(state = initialState, action){
    switch(action.type){
        case types.TEST:
        return{
            ...state,
            string: 'Redux test done!'
        }

        default:
        return state;
    }
}

export default test;