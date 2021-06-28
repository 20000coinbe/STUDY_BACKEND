# Node.js

---

## 환경설정

### 1. 노드버전관리 툴

- n

  ```
  // windows 사용환경지원 X
  n latest
  ```

- nvm
  ```
  MAC OS 기반으로 만들어졌으며, Window사용자는 윈도우전용 설치
  node.js가 먼저 설치되어 있으면 안된다
  ```

### 2. Formatting과 Linting

- 2-1. Formatting  
  prettier 설치
  ```
  npm install -D prettier
  ```
  .prettierrc 생성 및 옵션설정
  ```js
  {
    // 예시
    "semi": false,
    "singleQuote": true
  }
  ```
- 2-2. Linting  
  eslint 설치
  ```
  npm install --save-dev eslint
  ```
  Airbnb-eslint와 플러그인 설치
  ```
  // 에어비엔비에서 만든 최신문법 Lint
  npm install -D eslint-config-airbnb-base
  npm install -D eslint-plugin-import
  npm install -D eslint-config-prettier // prettier충돌해결
  npm install -D eslint-plugin-node // 노드전용 plugin
  ```
  .eslintrc.js 생성 및 설정
  ```js
  module.exports = {
    // 주의 : prettier가 뒤어 있어야한다
    extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  }
  ```
- 2-3. .vscode/settings.json 설정
  ```js
  {
  // vscode-local-setting, 이 프로젝트에서만 적용사항들
  "[javascript]": {
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode" // esbenp는 플러그인
    }
  }
  ```

### 3. Typesciprt: type checking

- 3-1. Typescript
  ```
  npm install -D typescript
  ```
  ```js
  //@ts-check
  const a = 'hello'
  const b = Math.log(a) // Math에 문자열을 할당할 수 없다 .ts(2345)
  console.log(b)
  /*
  ts-check를 통해서 typescript문법사용 없이 체크가능
  */
  ```
  jsconfig.json 생성 및 설정
  ```js
  {
    "compilerOptions": {
      "strict": true // strict모드 만드시 켜주자
    },
    "include": ["src/**/*"] // src디렉터리 밑에서만 적용
  }
  ```

---
