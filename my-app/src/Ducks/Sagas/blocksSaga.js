import {
  getBlockFailed,
  getBlockSucceded,
  BlockActions,
} from '../Actions/actionsBlocks';
import { api } from '../../Api/index';
import { put, takeLatest, call } from 'redux-saga/effects';

const API = api();

export function* getBlocksSaga(action) {
  try {
    const data = yield call(API.get, action.payload);

    yield put(getBlockSucceded(data));
  } catch (e) {
    yield put(getBlockFailed(e.message));
  }
}

export function* blocksSaga() {
  yield takeLatest(BlockActions.GET_BLOCKS_REQUESTED, getBlocksSaga);
}
