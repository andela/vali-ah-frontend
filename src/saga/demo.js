import {
  put, takeLatest
} from 'redux-saga/effects';

import { REQUEST_DEMO, receiveDemo } from '../actions/type';


function* demo() {
  try {
    yield put(receiveDemo('My demo call'));
  } catch (error) {
    yield put(receiveDemo('My demo call'));
  }
}


export default function* myDemo() {
  yield takeLatest(REQUEST_DEMO, demo);
}
