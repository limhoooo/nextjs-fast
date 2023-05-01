### create

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/ma
ster/basics/learn-starter"

yarn

yarn dev
```

### 참고

https://github.com/vercel/next.js/tree/canary/examples

## 배우는것들

### Data Fetching ( CSR, SSR, SSG, ISR )

### layout 과 sublayout 사용법

### Images 태그 (최적화방법)

Images 태그 사용시 webp 확장자로 가져오고 사이즈도 img 태그보다 가볍게 가져온다.
레이지로드 까지 해줌

### route (Shallow Routing) : 같은 url 인데 뒤의 param 만 바뀌는 경우 데이터패칭을 제한하는 route 방법

### API route : NEXTJS 내부적으로 API 를 받아서 컨트롤하는 기능 (파일기반 slug 사용가능)

### Nextjs 는 코드스플릿팅을 자동 적용해준다 (Link태그 , Images태그)

(view 에 노출될때 필요한 컴포넌트를 가져옴)

### Hade 컴포넌트 ( meta태그 정의 )

### getStaticPaths fallback : 빌드시 생성되지않은 page에 대한 처리 (공부요망)

### vercel 로 배포 (write 는 안됨, github 레파지토리 md 끌어오는식으로 변경해야할듯)

### tailwind 추가

yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### mdx 추가 (md 파일 코드 하이라이팅 , 코드 복사기능)

yarn add next-mdx-remote react-syntax-highlighter
