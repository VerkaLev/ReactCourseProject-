import { BlockActions, sendBlocksFailed } from '../Actions/actionsBlocks';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* postBlocksSaga(action) {
  try {
    yield call(API.post, action.url, action.payload);
  } catch (e) {
    yield put(sendBlocksFailed(e.message));
  }
}

export function* blocksPostSaga() {
  yield takeLatest(BlockActions.SEND_BLOCKS, postBlocksSaga);
}
