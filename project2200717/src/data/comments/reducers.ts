import { ADD_COMMENT } from './actionTypes';
import { CommentReducer, CommentTypes, CommentEntities } from 'data/rootTypes';
import { DummyComments } from 'data/Dummy';

const initialState: CommentEntities = DummyComments;

const reducer: CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newComments = { ...state };
      const comment: CommentTypes = {
        seq: action.payload.commentSeq,
        postId: action.payload.postSeq,
        writer: action.payload.userSeq,
        contents: action.payload.contents,
        createdAt: new Date(),
      };
      newComments.byId[comment.seq] = comment;
      newComments.allId.push(comment.seq);
      return newComments;
    default:
      return state;
  }
};

export default reducer;
