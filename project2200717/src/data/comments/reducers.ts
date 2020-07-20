import { ADD_COMMENT } from './actionTypes';
import { CommentReducer, CommentState, CommentTypes } from 'data/rootTypes';
import { DummyComments } from 'data/Dummy';

const initialState: CommentState = DummyComments;

const reducer: CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      const newComments = { ...state };
      const comment: CommentTypes = {
        seq: state.allId.length,
        postId: action.payload.postSeq,
        writer: action.payload.userSeq,
        contents: action.payload.contents,
        createdAt: new Date(),
      };
      newComments.allId.push(comment.seq);
      newComments.byId.push(comment);

      return newComments;
    default:
      return state;
  }
};

export default reducer;
