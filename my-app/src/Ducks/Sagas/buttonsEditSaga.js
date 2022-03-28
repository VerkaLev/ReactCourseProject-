import { ButtonActions, editButtonsFailded } from '../Actions/actionsButtons';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* editButtonsSaga(action) {
  try {
    yield call(API.editMethod, action.url, action.payload);
  } catch (e) {
    yield put(editButtonsFailded(e.message));
  }
}

export function* buttonsEditSaga() {
  yield takeLatest(ButtonActions.EDIT_BUTTONS, editButtonsSaga);
}
