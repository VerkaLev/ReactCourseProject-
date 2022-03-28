import { ButtonActions, deleteButtonsFailed } from '../Actions/actionsButtons';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* deleteButtonsSaga(action) {
  try {
    yield call(API.deleteMethod, action.url, action.payload);
  } catch (e) {
    yield put(deleteButtonsFailed(e.message));
  }
}

export function* buttonsDeleteSaga() {
  yield takeLatest(ButtonActions.DELETE_BUTTONS, deleteButtonsSaga);
}
