# @redgoose/markdown-style

redgoose 서비스에서 공통으로 사용하기 위한 글 본문 스타일입니다.  
메인 파일은 `./src/body.scss`이고, css로 빌드된 파일은 `./dist/body.css`입니다.


## Installation

```
// npm
npm install https://github.com/redgoose-dev/redgoose-content-body.git

// yarn
yarn add https://github.com/redgoose-dev/redgoose-content-body.git
```


## Apply in service

### scss

scss 파일 안에서는 다음과 같이 소스를 붙일 수 있습니다.

```
// src/body.scss
@import '~redgoose-content-body';

// dist/body.scss
@import '~redgoose-content-body/dist/body.scss';
```

### css

javascript 프로젝트 내부에서 다음과 같이 css 파일을 불러옵니다.

```
import '~redgoose-content-body/dist/body.css';
```


## development

개발을 위한 로컬서버를 띄웁니다.

```
yarn run watch
```

`./src/body.scss` 파일을 `./dist/body.css` 파일로 빌드합니다.

```
yarn run build
```
