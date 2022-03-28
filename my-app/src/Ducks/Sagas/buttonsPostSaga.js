import { ButtonActions, sendButtonsFailed } from '../Actions/actionsButtons';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* postButtonsSaga(action) {
  try {
    yield call(API.post, action.url, action.payload);
  } catch (e) {
    yield put(sendButtonsFailed(e.message));
  }
}

export function* buttonsPostSaga() {
  yield takeLatest(ButtonActions.SEND_BUTTONS, postButtonsSaga);
}
