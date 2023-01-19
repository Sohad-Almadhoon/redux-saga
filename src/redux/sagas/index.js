import { all } from "redux-saga/effects";
import { watchUsersAysnch } from "./user";
export function* rootSaga() {
    yield all([watchUsersAysnch()]);
}