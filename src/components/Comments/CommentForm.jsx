import * as React from 'react';

import * as PropTypes from 'prop-types';

const CommentForm = ({
  handleChange, saveComment, saving = false, comment
}) => (
  <form onSubmit={saveComment} className="ui form">
    <div className="field">
      <textarea
        name="comment"
        rows={3}
        placeholder="Write a comment..."
        onChange={handleChange}
        value={comment}
        disabled={saving}
        required
      />
    </div>
    <button
      className={`massive ui right floated button ${saving && 'disabled loading'}`}
      type="submit"
    >
        Comment
    </button>
  </form>
);

CommentForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  comment: PropTypes.string.isRequired
};

export default CommentForm;
