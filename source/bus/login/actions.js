// Types
import { types } from './types';

export const loginActions = {
    //Async
    loginAsync: (userData) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userData,
        };
    },
};
