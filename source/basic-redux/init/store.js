//Core
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

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

const preloadedState = JSON.parse(localStorage.getItem('gallery'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancedStore = composeEnhancers(applyMiddleware(logger));

export const store = preloadedState
    ? createStore(rootReducer, preloadedState, enhancedStore)
    : createStore(rootReducer, enhancedStore);

store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('gallery', JSON.stringify(state));
});
