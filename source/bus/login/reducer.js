//Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    email:    '',
    password: '',
});

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_ASYNC:
            return state.merge(action.payload);
        default:
            return state;
    }
};
