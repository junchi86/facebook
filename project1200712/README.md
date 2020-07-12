1주차 프로젝트 완성 및 회고

디플로이 버전 : http://junchi86.github.io/facebook

1. 타입스크립트를 처음 써보는 상황에서 타입에서 많은 부딪힘이 있었음.
   인터페이스와 타입의 정확한 사용방법이 아직 뜬구름 잡히는 느낌

2. 파슬이 생각보다 잘 동작해줌

3. 아는 것들을 다 쏟아보려고 해 봤는데 생각보다 잘 되지는 않은 상황.

4. 리덕스 도입이 시급함.

5. 하다 보니 파일들을 많이 생성하게 됐는데 생각 외로 줄이기 어려웠음.

6. 이렇게 하는게 맞는건지...라는 생각이 많이 들어서 쉽지 않았음.

# 1주차 미션 시작

```
git checkout class/#1

git checkout -b class/#1_준치

git push origin class/#1_준치

git checkout -b class/#1_준치_working

git push origin class/#1_준치_working

```

# ToDo

[ ] Login 만들기

[ ] SignUp 만들기

[ ] Home 만들기

# 상세 설명

### 프로젝트 구성

- parcel, react, react-dom,
- 프로젝트 구성시 eslint, babel, prettier, editorConfig를 설정해주세요.

### 컴포넌트 쪼개기

- index.html에 작성된 App컴포넌트를 상태를 가져야하는 컴포넌트와 상태가 필요없는 컴포넌트들로 쪼개보세요.
- 폴더구조는 다음과 같이 잡아 봅니다.

```
.
├── published
└── src
    ├── components
    │   ├── Logo (예시)
    ├── layouts
    └── pages
        ├── Home (하위에 컴포넌트들이 위치합니다)
        ├── Login
        └── SignUp

```

- published에 퍼블리쉬 파일들을 위치합니다. (디자이너가 이미지를 html과 css로 만든 파일들)
- components 폴더에는 여러 페이지에서 재사용이 가능하 컴포넌트를 위치합니다.
- pages 폴더에는 각 페이지에 해당하는 컴포넌트를 위치합니다. (Home에 해당하는 페이지용 컴포넌트가 존재하고 그 페이지에서 사용되는 컴포넌트들도 있을 수 있습니다.)
- layouts 폴더에는 각 라우터와 연결이 되는 컴포넌트를 위치합니다. 라우터에 연결되는 컴포넌트는 네비게이션이나 여러 페이지에 공통적으로 보여지는 내용이 들어간 컴포너트입니다.

### css-in-js 형태로 styled-jsx를 사용하기

- styled-jsx를 설피하세요. (https://github.com/vercel/styled-jsx)
- style.css에 작성된 스타일을 css-in-js 형태로 styled-jsx를 사용하여 변경해보세요.

### Post 등록/조회기능 구현하기

- 외부의 별다른 통신없이 (API 요청을 하지 않고) 일단 브라우저에 메모리에서 보관되는 형태로 작성해보세요
- App 컴포넌트가 Post 목록정보를 상태(state)로 들고 있습니다.
- 로그인한 사용자의 정보도 App 컴포넌트에서 상태로 들고 있습니다.

```
state = {
  user: {
    seq: 0,
    name: "harry",
    profileImageUrl:
      "<https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png>"
  },
  posts: []
};

```

- 추후에 서버에서 주는 Post의 데이터 형테는 다음과 같습니다.

```
 {
      seq: 0,
      writer: {
        seq, name, profileImageUrl
      },
      contents: '',
      createAt: new Date(),
      likes: 0,
      comments: 0,
      likesOfMe: false,
      commentList: [],
},
```

### 댓글 등록/조회 기능 추가하기

- 댓글를 입력/조회할 수 있습니다.
- 댓글 추가시 포스드에 달린 댓글 수가 업데이트되야 합니다.

### 좋아요 처리하기

- 좋아요 버튼을 클릭하면 포스트의 좋아요 카운트가 올라갑니다.
- `likesOfMe`

### 라우터 적용하기

- react-router-dom 설치 (https://www.npmjs.com/package/react-router-dom)
- 라우터를 설정해주세요!

```
/login → Login 컴포넌트
/signup → SignUp 컴포넌트
/ → Home 컴포넌트
```

- 레이아웃 컴포넌트를 만들어주세요.
  **PublicLayout 컴포넌트**
  SignUp과 Login이 사용되는 컴포넌트입니다. 네비게이션 영역이 없고 나중에 인증이 필요없이 공개적으로 접근이 가능한 레이아웃에 사용됩니다.
  **DefaultLayout 컴포넌트**
  네비게이션이 있는 컴포넌트입니다. 추후에 인증정보가 있을 경우에만 접근이 가능한 컴포넌트입니다.
  Reusing layouts in React Router 4 문서를 읽어보세요!

## 참고문서

- [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
- [https://editorconfig.org/](https://editorconfig.org/)
- [https://prettier.io/docs/en/install.html](https://prettier.io/docs/en/install.html)
- [https://www.npmjs.com/package/styled-jsx](https://www.npmjs.com/package/styled-jsx)
- https://reacttraining.com/react-router/web/guides/quick-start
- [Reusing layouts in React Router 4](https://simonsmith.io/reusing-layouts-in-react-router-4)
