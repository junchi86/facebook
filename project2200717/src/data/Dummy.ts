import { UserEntities, PostEntities, CommentEntities } from './rootTypes';

export const DummyUsers: UserEntities = {
  byId: {
    0: {
      seq: 0,
      name: '해리',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      postList: [5],
      commentList: [5],
      email: 'harry@naver.com',
      password: 'harry',
    },
    1: {
      seq: 1,
      name: '지호',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      postList: [4],
      commentList: [4],
      email: 'jiho@naver.com',
      password: 'jiho',
    },
    2: {
      seq: 2,
      name: '에밀리',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      postList: [3],
      commentList: [3],
      email: 'emily@naver.com',
      password: 'emily',
    },
    3: {
      seq: 3,
      name: '진',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      postList: [2],
      commentList: [2],
      email: 'jin@naver.com',
      password: 'jin',
    },
    4: {
      seq: 4,
      name: '크리시',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      postList: [1],
      commentList: [1],
      email: 'chrissy@naver.com',
      password: 'chrissy',
    },
    5: {
      seq: 5,
      name: '스텔라',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      postList: [0],
      commentList: [0],
      email: 'stella@naver.com',
      password: 'stella',
    },
  },
  allId: [0, 1, 2, 3, 4, 5],
};

export const DummyPosts: PostEntities = {
  byId: {
    0: {
      seq: 0,
      writer: 5,
      createdAt: new Date(),
      comments: 0,
      contents: '뇸뇸뇸뇸',
      likes: 0,
      likesOfMe: false,
      commentList: [],
    },
    1: {
      seq: 1,
      writer: 4,
      createdAt: new Date(),
      comments: 0,
      contents: '냠냠냠냠',
      likes: 0,
      likesOfMe: false,
      commentList: [4],
    },
    2: {
      seq: 2,
      writer: 3,
      createdAt: new Date(),
      comments: 0,
      contents: '골골골골',
      likes: 0,
      likesOfMe: false,
      commentList: [3],
    },
    3: {
      seq: 3,
      writer: 2,
      createdAt: new Date(),
      comments: 0,
      contents: '아아아아',
      likes: 0,
      likesOfMe: false,
      commentList: [0],
    },
    4: {
      seq: 4,
      writer: 1,
      createdAt: new Date(),
      comments: 0,
      contents: '오오오오',
      likes: 0,
      likesOfMe: false,
      commentList: [1],
    },
    5: {
      seq: 5,
      writer: 0,
      createdAt: new Date(),
      comments: 0,
      contents: '우우우우',
      likes: 0,
      likesOfMe: false,
      commentList: [2, 5],
    },
  },

  allId: [5, 4, 3, 2, 1, 0],
};

export const DummyComments: CommentEntities = {
  byId: {
    0: { seq: 0, writer: 5, postId: 3, createdAt: new Date(), contents: '아아아아' },
    1: { seq: 1, writer: 4, postId: 4, createdAt: new Date(), contents: '오오오오' },
    2: { seq: 2, writer: 3, postId: 5, createdAt: new Date(), contents: '뇸뇸뇸뇸' },
    3: { seq: 3, writer: 2, postId: 2, createdAt: new Date(), contents: '골골골골' },
    4: { seq: 4, writer: 1, postId: 1, createdAt: new Date(), contents: '냠냠냠냠' },
    5: { seq: 5, writer: 0, postId: 5, createdAt: new Date(), contents: '우우우우' },
  },
  allId: [0, 1, 2, 3, 4, 5],
};
