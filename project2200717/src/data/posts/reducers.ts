import { PostReducer, PostTypes, PostEntities } from 'data/rootTypes';
import { DummyPosts } from 'data/Dummy';
import { LIKE_POST, ADD_POST } from './actionTypes';
import { ADD_COMMENT } from 'data/comments/actionTypes';

const initialState: PostEntities = DummyPosts;

const reducer: PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const userSeq = action.payload.userSeq;
      if (userSeq === null) return state;
      const post: PostTypes = {
        seq: state.allId.length,
        writer: userSeq,
        contents: action.payload.contents,
        createdAt: new Date(),
        likes: 0,
        comments: 0,
        likesOfMe: false,
        commentList: [],
      };
      const posts = { ...state };
      posts.byId[post.seq] = post;
      posts.allId.unshift(post.seq);
      return posts;
    case LIKE_POST:
      const newPosts = { ...state };
      const idx = newPosts.allId.filter((v) => v === action.payload)[0];
      const newPost = newPosts.byId[idx];
      if (newPost.likesOfMe === false) newPost.likes += 1;
      newPost.likesOfMe = true;
      return newPosts;
    case ADD_COMMENT:
      const newPosts2 = { ...state };
      const idx2 = newPosts2.allId.filter((v) => v === action.payload.postSeq)[0];
      const newPost2 = newPosts2.byId[idx2];
      newPost2.commentList.push(action.payload.commentSeq);
      return state;
    default:
      return state;
  }
};

export default reducer;
