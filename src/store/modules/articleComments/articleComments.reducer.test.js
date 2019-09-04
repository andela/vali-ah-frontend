import { comments, articleComments } from 'fixtures/articleComments';

import defaultReducer, {
  getCommentsRequest, getCommentsSuccess, getCommentsFailure,
  createCommentFailure, createCommentSuccess
} from './index';

describe('Article comment reducer', () => {
  const initialState = {
    comments: [],
    createdComment: {},
    apiCallsInProgress: 0,
    error: null
  };

  it('should increase the count of api call ion store', () => {
    const action = getCommentsRequest('articleId');
    const newState = defaultReducer(initialState, action);

    expect(newState).toMatchObject({ ...initialState, apiCallsInProgress: +1 });
  });

  it('should add fetched comments to store', () => {
    const action = getCommentsSuccess(comments);
    const newState = defaultReducer(initialState, action);

    expect(newState).toMatchObject({ ...articleComments, apiCallsInProgress: -1 });
  });

  it('should update error value in store', () => {
    const action = getCommentsFailure('error');
    const newState = defaultReducer(initialState, action);

    expect(newState).toMatchObject({ ...initialState, apiCallsInProgress: -1, error: 'error' });
  });

  it('should not add created comment to store on success', () => {
    const action = createCommentSuccess(comments[0]);
    const newState = defaultReducer(initialState, action);

    expect(newState).toMatchObject({ ...initialState });
  });

  it('should update error value in store on create comment failure', () => {
    const action = createCommentFailure('error');
    const newState = defaultReducer(initialState, action);

    expect(newState).toMatchObject({ ...initialState, error: 'error' });
  });
});
