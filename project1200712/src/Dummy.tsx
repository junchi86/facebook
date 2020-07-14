export const PostList = [
  {
    seq: 0,
    writer: {
      seq: 0,
      name: 'harry',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    contents:
      '안녕하세요. Email : harry@naver.com Password : harry harry 입니다. 글냄겨주세요.  회원 가입 가능, 댓글도 되고 좋아요 가능해요!',
    createAt: new Date().toLocaleDateString(),
    likes: 4,
    comments: 1,
    likesOfMe: false,
    commentList: [
      {
        seq: 0,
        writer: {
          seq: 1,
          name: 'Aiden',
          profileImageUrl:
            'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
        },
        contents: '접속해서 테스트 해보세요! 안되면 얘기해 주세요 ㅎㅎ',
        createAt: new Date().toLocaleDateString(),
      },
    ],
  },
];

export const userList = [
  {
    user: {
      seq: 0,
      email: 'harry@naver.com',
      password: 'harryharry',
      name: 'harry',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    posts: [],
  },
];
