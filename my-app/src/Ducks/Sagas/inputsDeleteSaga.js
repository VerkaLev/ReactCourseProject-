import { InputActions, deleteInputsFailed } from '../Actions/actionsInputs';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* deleteInputsSaga(action) {
  try {
    yield call(API.deleteMethod, action.url, action.payload);
  } catch (e) {
    yield put(deleteInputsFailed(e.message));
  }
}

export function* inputsDeleteSaga() {
  yield takeLatest(InputActions.DELETE_INPUTS, deleteInputsSaga);
}
