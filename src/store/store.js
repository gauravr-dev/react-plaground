import { connectRoutes } from "redux-first-router";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../state/reducers";
import { routePaths } from "../routes/routes";

const {
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
  initialDispatch
} = connectRoutes(routePaths, { initialDispatch: false });

// Root store
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      routerEnhancer,
      applyMiddleware(thunk, routerMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  initialDispatch();

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../state/reducers", () => {
      const nextRootReducer = require("../state/reducers");

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
