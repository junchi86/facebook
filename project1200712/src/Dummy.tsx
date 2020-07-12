export const PostList = [
  {
    seq: 0,
    writer: {
      seq: 0,
      name: 'harry',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    contents: '안녕하세요. 다같이 리엑트를 배워봅시다. 리덕스도 물런 배워야죠',
    createAt: '10분전',
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
        contents: '그래요 배워야죠 배워야 남는거죠...',
        createAt: '10분전',
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
