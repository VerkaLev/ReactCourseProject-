import { BlockActions, deleteBlocksFailed } from '../Actions/actionsBlocks';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* deleteBlocksSaga(action) {
  try {
    yield call(API.deleteMethod, action.url, action.payload);
  } catch (e) {
    yield put(deleteBlocksFailed(e.message));
  }
}

export function* blocksDeleteSaga() {
  yield takeLatest(BlockActions.DELETE_BLOCKS, deleteBlocksSaga);
}
