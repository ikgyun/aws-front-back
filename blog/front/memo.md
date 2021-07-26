# Blog 폴더 생성
 -> back 폴더 생성
 -> front 폴더 생성

 # 작업할 디렉토리까지 접근해야함

 # npm init으로 node.js 환경으로 만들어줌.

 # npm install next react react-dom

 React 배운느낌보다
 Next 기본구조 정도 배운다.

 # package.json을 수정함
 // 0.0.0.0 모든 접속허용?
 "dev":"next dev -p 3001 -H 0.0.0.0",
 "build":"next build",
 "start":"next start",
 "lint": "next lint"

 # pages 폴더를 생성합니다.

    url localhost:3001/ 일때 hello world !
    어떻게 해야하나?

    pages 폴더안에 index.jsx 파일 만들고 컴포넌트 생성하기
    * exprot default 주의

# dev server로 실행하기
npm run dev

노트북을 사용하시는분들. wifi 핸드폰이랑 같은 wifi라면
 IPv4 주소: 192.168.0.76:3001 을 핸드폰에 치면 똑같은 화면창을 확인 가능

 데스크탑인데 공유기사용하고 있다. 그래도 된다.

 --------------------------Next.js 맛보기 ----------------------------


 # pages 폴더
 -> indesx.jsx // 메인페이지
 -> join.jsx   // 회원가입
 -> login.jsx  // 로그인페이지
 -> post.jsx   // 글쓰기 페이지
 

// localhost:3001/posts/post  <<<이렇게 하고싶으면 폴더만 생성하면됨

ex) /posts/post.jsx 

# 동적라우팅 사용방법

1. 파일명을 배열형식으로 만든다. [post]

# 레이아웃 구성하기
-> components 폴더를 생성
   -> BlogLayout.jsx 파일 생성
      컴포넌트 까지


# 또다른 레이아웃구성하기
-> components 폴더안에서 FormLayout.jsx 생성한뒤
    login.jsx / join.jsx에 사용하기

# Link 컴포넌트 사용하기
 React에 사용되는 Link와 사용법이 다름

### import Link from 'next/link'
 ex ) react -> < Link to= "/">menu1</Link>
        next.js -> <Link href="/"> <a>menu1</a></Link>
        
# index.html 어디감?

# Next 모든 컴포넌트를 실행하기전에 거처가는 컴포넌트가 있다.

# app.jsx ? 어디감? HEAD 모든 곳에 공통적으로 사용이 가능하겠죠. 혹은 공통적인 CSS가 있다면 여기다가 import하는게 좋겟죠.

crossOrigin="true" html에서는 crossorigin 이렇해도되는데 jsx는 crossOrigin="true" 이렇게 써줘야함.

npm install styled-components

vscode-styled-components 다운받기 styled-components에 색상안보여서 다같은색이라 오타를 찾기가 힘듬 이라는 단점을 해결해줌.
