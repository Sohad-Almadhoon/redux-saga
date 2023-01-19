import * as userApi from "../../apis";
import { getUser, deleteUser, editUser, addUser } from "../slice/users";
import {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER_BY_ID,
  DELETE_USER_BY_ID,
} from "../types";
import { put, takeEvery } from "redux-saga/effects";

function* getUsersSaga() {
  const { data } = yield userApi.getUsersApi();
  yield put(getUser(data));
}
function* createUsersSaga(action) {
  const { data } = yield userApi.createUserApi(action.user.payload);
  yield put(addUser(data));
}
function* updateUsersSaga(action) {
  yield userApi.updateUserApi(action.user);
  yield put(editUser(action.user));
}
function* deleteUsersSaga(action) {
  yield userApi.deleteUserApi(action.id);
  yield put(deleteUser(action.id));
}
export function* watchUsersAysnch() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(CREATE_USER, createUsersSaga);
  yield takeEvery(UPDATE_USER_BY_ID, updateUsersSaga);
  yield takeEvery(DELETE_USER_BY_ID, deleteUsersSaga);
}
