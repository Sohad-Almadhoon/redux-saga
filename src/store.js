import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import user from "./redux/slice/user";
import users from "./redux/slice/users";
import { rootSaga } from "./redux/sagas";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user,
    users,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({ thunk: false }).concat(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga);
export default store;
