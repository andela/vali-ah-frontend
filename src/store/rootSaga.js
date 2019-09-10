// third-party libraries
import { all } from 'redux-saga/effects';

// modules
import { watchVoteRequest } from 'modules/articleVote';
import { watchLoginRequests } from 'modules/login';
import { watchSignupRequest } from 'modules/signUp';
import { watchSelectionRequest } from 'modules/userSelection';
import {
  watchProfileRequests,
  watchProfileUpdateRequests,
} from 'modules/profile';

export default function* rootSaga() {
  yield all([
    watchVoteRequest(),
    watchSignupRequest(),
    watchVoteRequest(),
    watchLoginRequests(),
    watchSelectionRequest(),
    watchVoteRequest(),
    watchProfileRequests(),
    watchProfileUpdateRequests(),
  ]);
}
