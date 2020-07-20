import { PostReducer, PostState, PostTypes } from 'data/rootTypes';

const initialState: PostState = { byId: [], allId: [] };

const reducer: PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const user = action.payload.user;
      if (!user) return state;
      const post: PostTypes = {
        seq: state.allId.length,
        writer: user.seq,
        contents: action.payload.contents,
        createdAt: new Date(),
        likes: 0,
        comments: 0,
        likesOfMe: false,
      };
      const posts = { ...state };
      posts.byId.unshift(post);
      posts.allId.unshift(post.seq);
      return posts;
    case 'LIKE_POST':
      const newPosts = { ...state };
      const idx = newPosts.allId.findIndex((v) => v === action.payload);
      const newPost = newPosts.byId[idx];
      if (newPost.likesOfMe === false) newPost.likes += 1;
      newPost.likesOfMe = true;
      return newPosts;
    default:
      return state;
  }
};

export default reducer;
