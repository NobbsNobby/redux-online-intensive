//Core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

//Reducer
import { rootReducer } from './rootReducer';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#FF0005',
    },
});

const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancedStore);
