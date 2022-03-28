import { InputActions, editInputsFailded } from '../Actions/actionsInputs';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* editInputsSaga(action) {
  try {
    yield call(API.editMethod, action.url, action.payload);
  } catch (e) {
    yield put(editInputsFailded(e.message));
  }
}

export function* inputsEditSaga() {
  yield takeLatest(InputActions.EDIT_INPUTS, editInputsSaga);
}
