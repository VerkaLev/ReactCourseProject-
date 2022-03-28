import { InputActions, sendInputsFailed } from '../Actions/actionsInputs';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* postInputsSaga(action) {
  try {
    yield call(API.post, action.url, action.payload);
  } catch (e) {
    yield put(sendInputsFailed(e.message));
  }
}

export function* inputsPostSaga() {
  yield takeLatest(InputActions.SEND_INPUTS, postInputsSaga);
}
