import Reactotron from "reactotron-react-native";
import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

export default () => {
  const sagaMonitor = Reactotron.createSagaMonitor();

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const store = Reactotron.createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
