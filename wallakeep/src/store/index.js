import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import * as reducer from './reducers';
import log from './reducers';

// export const configureStore = config => preloadedState => {
//     const rootReducer = createRootReducer(config);
//     const middlewares = configureMiddleware(config);
//     const composeEnhancers = composeWithDevTools;

//     const store = createStore(
//       rootReducer,
//       preloadedState,
//       composeEnhancers(applyMiddleware(...middlewares)),
//     );
//     return store;
//   };

export function configureStore() {
    const store = createStore(
        log,
        composeWithDevTools());
    return store;

}
