# PR 리뷰 - 디플로이 버전 : http://junchi86.github.io/facebook

새로 인지한 문제

styled-jsx 콘솔 오류. // 빌드와 실행에는 문제가 없는 것으로 보임.

```

react-dom.development.js:88 Warning: Received `true` for a non-boolean attribute `jsx`.

If you want to write it to the DOM, pass a string instead: jsx="true" or jsx={value.toString()}.
    in style (created by NavigationPublic)
    in NavigationPublic (created by PublicLayout)
    in PublicLayout (created by RouterComponent)
    in Router (created by HashRouter)
    in HashRouter (created by RouterComponent)
    in RouterComponent (created by App)
    in App
printWarning @ react-dom.development.js:88
react-dom.development.js:88 Warning: Received `true` for a non-boolean attribute `global`.

If you want to write it to the DOM, pass a string instead: global="true" or global={value.toString()}.
    in style (created by App)
    in App


```

## shonjiho님 리뷰 - 모두 완료.

User | any is same with any
의도는 이게 아니었을까요? User | null

```
완료 - 교훈 - initialState를 객체로 줬을 때 내부 키값들을 제대로 정의하지 않고 진행하면 대참사가 생깁니다.
```

---

const App:React.FC = () => {...}
How about using FC instead of FunctionComponent?

```
완료!
```

how about?? more strong typing

```
완료!
```

Use Camelcase! onChangeName

```
완료!
```

컴포넌트이름을 Router보다는 Home or Index 같은 컴포넌트가 더 직관적이지 않을까요?
BrowserRouter를 Router로 Alias해서 사용하는게 더 적절하다고 생각이드네요.

추가로) 아래에 있는 RouterDom 이라는 컴포넌트가 있길래 제가 모르는 react-router-dom 속 object가 또 있나했습니다. 헤갈릴 수도 있다는 생각이 드네요.

```
완료!
```

unused

```
완료!
```

상대경로를 사용하는 것보다 module-resolver를 설정해서 프로젝트 구성하는게 더 가독성이 좋을 것 같네요.

```
완료!
```

개인적인 생각인데 Logout과 같이 argument, return value가 간단할 경우, 따로 Type을 만들어서 활용하는 것보다 해당 컴포넌트에서만 바로 정의해서 사용하는게 더 편할 것 같다는 생각이 드네요.

```
완료!(프롭으로 넣은 부분이 많아 type로 뿌렸습니다.)
리덕스 적용하게 되면 변경하겠습니다!
```

Card라는 Component Name은 다소 의미가 추상적인것 같아요. UI적인 의미가 담기기도 했구요. Post(게시글)같은 이름이 좋지않을까요?

```
완료!
```

CardBody 보다는 PostContainer or PostList와 같은 이름이 좋지않을 까 생각이 드네요.

```
완료!
```

thumUp 도 쓰이고 upLikes 도 같은 의미로 쓰이는데 하나로 이름을 통일하는게 좋겠네요.

```
완료!
```

Reuse Type!

```
완료!
```

# 1주차 프로젝트 완성 및 회고

디플로이 버전 : http://junchi86.github.io/facebook

1. 타입스크립트를 처음 써보는 상황에서 타입에서 많은 부딪힘이 있었음.
   인터페이스와 타입의 정확한 사용방법이 아직 뜬구름 잡히는 느낌

2. 파슬이 생각보다 잘 동작해줌

3. 아는 것들을 다 쏟아보려고 해 봤는데 생각보다 잘 되지는 않은 상황.

4. 리덕스 도입이 시급함.

5. 하다 보니 파일들을 많이 생성하게 됐는데 생각 외로 줄이기 어려웠음.

6. 이렇게 하는게 맞는건지...라는 생각이 많이 들어서 쉽지 않았음.
