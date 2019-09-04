import * as React from 'react';

import { storiesOf } from '@storybook/react';

import { comments } from 'fixtures/articleComments';

import { Comments } from 'components/Comments';

storiesOf('Comments', module).add('default', () => (
  <Comments
    articleId="sampleId"
    comments={comments}
    createCommentRequest={() => ({})}
    getCommentsRequest={() => ({})}
    loading={false}
  />
));
