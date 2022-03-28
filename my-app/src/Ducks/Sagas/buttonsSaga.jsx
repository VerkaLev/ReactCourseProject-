import {
  getButtonFailed,
  getButtonSucceded,
  ButtonActions,
} from '../Actions/actionsButtons';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* getButtonsSaga(action) {
  try {
    const data = yield call(API.get, action.payload);

    yield put(getButtonSucceded(data));
  } catch (e) {
    yield put(getButtonFailed(e.message));
  }
}

export function* buttonsSaga() {
  yield takeLatest(ButtonActions.GET_BUTTONS_REQUESTED, getButtonsSaga);
}
