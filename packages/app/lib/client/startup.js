// ----------------------------------------------------------------------- Imports

// ---------------------------------- Meteor, React
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

// ---------------------------------- Redux stuff
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

// ---------------------------------- Router
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// ---------------------------------- Fetch children
import { rootRoute } from 'meteor/lib-interfaces';

// ----------------------------------------------------------------------- Set up redux
const logger = createLogger(); // Create the redux logger

const rootReducer = combineReducers({ // Create the root reducer
  routing: routerReducer, // redux-router
});

const Store = createStore(
  rootReducer, // The reducer
  {}, // Initial state
  applyMiddleware(ReduxThunk, logger) // Enhancers
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, Store);

// -----------------------------------------------------------------------

Meteor.startup(() => {
  render(
    <Provider store={Store}>
      <Router routes={rootRoute} history={history} />
    </Provider>,
    document.getElementById('app-root')
  );
});
