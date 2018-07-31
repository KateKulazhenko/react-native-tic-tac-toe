import Reactotron from "reactotron-react-native";
import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

export default () => {
  const sagaMonitor = Reactotron.createSagaMonitor();

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const store = Reactotron.createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return { store };
};
