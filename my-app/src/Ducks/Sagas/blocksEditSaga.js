import { BlockActions, editBlocksFailded } from "../Actions/actionsBlocks";
import { api } from "../../Api/index";
import { put, takeLatest, call } from "redux-saga/effects";

const API = api();

export function* editBlocksSaga(action) {
  try {
    yield call(API.editMethod, action.url, action.payload);
  } catch (e) {
    yield put(editBlocksFailded(e.message));
  }
}

export function* blocksEditSaga() {
  yield takeLatest(BlockActions.EDIT_BLOCKS, editBlocksSaga);
}
