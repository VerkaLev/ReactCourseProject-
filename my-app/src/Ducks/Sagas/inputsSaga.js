import {
  getInputFailed,
  getInputSucceded,
  InputActions,
} from '../Actions/actionsInputs';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* getInputsSaga(action) {
  try {
    const data = yield call(API.get, action.payload);

    yield put(getInputSucceded(data));
  } catch (e) {
    yield put(getInputFailed(e.message));
  }
}

export function* inputsSaga() {
  yield takeLatest(InputActions.GET_INPUTS_REQUESTED, getInputsSaga);
}
