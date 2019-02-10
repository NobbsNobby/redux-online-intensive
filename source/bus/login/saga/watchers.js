// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { login } from './workers';

export function* watchWorker () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchLogin () {
    yield all([call(watchWorker)]);
}
