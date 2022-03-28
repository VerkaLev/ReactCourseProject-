import { buttonsSaga } from '../Ducks/Sagas/buttonsSaga';
import { inputsSaga } from '../Ducks/Sagas/inputsSaga';
import { buttonsPostSaga } from '../Ducks/Sagas/buttonsPostSaga';
import { buttonsDeleteSaga } from '../Ducks/Sagas/buttonsDeleteSaga';
import { buttonsEditSaga } from '../Ducks/Sagas/buttonsEditSaga';
import { all } from 'redux-saga/effects';
import { blocksSaga } from '../Ducks/Sagas/blocksSaga';
import { inputsEditSaga } from '../Ducks/Sagas/inputsEditSaga';
import { blocksEditSaga } from '../Ducks/Sagas/blocksEditSaga';
import { inputsPostSaga } from '../Ducks/Sagas/inputsPostSaga';
import { blocksPostSaga } from '../Ducks/Sagas/blocksPostSaga';
import { inputsDeleteSaga } from '../Ducks/Sagas/inputsDeleteSaga';
import { blocksDeleteSaga } from '../Ducks/Sagas/blocksDeleteSaga';

export function* rootSaga() {
  yield all([
    buttonsSaga(),
    inputsSaga(),
    blocksSaga(),
    buttonsPostSaga(),
    inputsPostSaga(),
    blocksPostSaga(),
    buttonsDeleteSaga(),
    inputsDeleteSaga(),
    blocksDeleteSaga(),
    buttonsEditSaga(),
    inputsEditSaga(),
    blocksEditSaga(),
  ]);
}
