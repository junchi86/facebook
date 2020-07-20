import { UserEntities, PostEntities, CommentEntities } from './rootTypes';

export const DummyUsers: UserEntities = {
  byId: [
    {
      seq: 0,
      name: '해리',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    {
      seq: 1,
      name: '지호',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    {
      seq: 2,
      name: '에밀리',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    {
      seq: 3,
      name: '진',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    {
      seq: 4,
      name: '크리시',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    {
      seq: 5,
      name: '스텔라',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
  ],
  allId: [0, 1, 2, 3, 4, 5],
};

export const DummyPosts: PostEntities = {
  byId: [
    { seq: 5, writer: 0, createdAt: new Date(), comments: 0, contents: '우우우우', likes: 0, likesOfMe: false },
    { seq: 4, writer: 1, createdAt: new Date(), comments: 0, contents: '오오오오', likes: 0, likesOfMe: false },
    { seq: 3, writer: 2, createdAt: new Date(), comments: 0, contents: '아아아아', likes: 0, likesOfMe: false },
    { seq: 2, writer: 3, createdAt: new Date(), comments: 0, contents: '골골골골', likes: 0, likesOfMe: false },
    { seq: 1, writer: 4, createdAt: new Date(), comments: 0, contents: '냠냠냠냠', likes: 0, likesOfMe: false },
    { seq: 0, writer: 5, createdAt: new Date(), comments: 0, contents: '뇸뇸뇸뇸', likes: 0, likesOfMe: false },
  ],

  allId: [5, 4, 3, 2, 1, 0],
};

export const DummyComments: CommentEntities = {
  byId: [
    { seq: 0, writer: 5, postId: 3, createdAt: new Date(), contents: '아아아아' },
    { seq: 1, writer: 4, postId: 4, createdAt: new Date(), contents: '오오오오' },
    { seq: 2, writer: 3, postId: 5, createdAt: new Date(), contents: '뇸뇸뇸뇸' },
    { seq: 3, writer: 2, postId: 2, createdAt: new Date(), contents: '골골골골' },
    { seq: 4, writer: 1, postId: 1, createdAt: new Date(), contents: '냠냠냠냠' },
    { seq: 5, writer: 0, postId: 5, createdAt: new Date(), contents: '우우우우' },
  ],
  allId: [0, 1, 2, 3, 4, 5],
};
