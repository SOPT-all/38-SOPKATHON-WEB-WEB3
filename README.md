<div align="center">
<h2> (서비스이름) </h2>
<img src=""  alt="서비스대표-이미지" />
<p>(서비스 소개)</p>
</div>

<h2> ✨ (서비스) 주요 기능 </h2>

<h3> 1️⃣ (기능 1) </h3>
<img src=""  alt="기능1-대표이미지" />
<div><strong>(강조단어)</strong> (기능설명)<br/></div>

<h3> 2️⃣ (기능 2) </h3>
<img src=""  alt="기능2-대표이미지" />
<div><strong>(강조단어)</strong> (기능설명)<br/></div>

<h2> 👥 Team </h2>
<table align="center">
  <tr align="center">
    <td style="min-width: 150px;">
      <a href="https://github.com/ssolsh">
        <img src="https://github.com/ssolsh.png" width="200" alt="ssolsh 프로필사진">
        <br />
        <b>ssolsh</b>
      </a>
    </td>
    <td style="min-width: 150px;">
      <a href="https://github.com/MinseoSONG">
        <img src="https://github.com/MinseoSONG.png" width="200" alt="MinseoSONG 프로필사진">
        <br />
        <b>MinseoSONG</b>
      </a>
    </td>
    <td style="min-width: 150px;">
      <a href="https://github.com/jjangminii">
        <img src="https://github.com/jjangminii.png" width="200" alt="jjangminii 프로필사진">
        <br />
        <b>jjangminii</b>
      </a>
    </td>
    <td style="min-width: 150px;">
      <a href="https://github.com/yurimidaH">
        <img src="https://github.com/yurimidaH.png" width="200" alt="yurimidaH 프로필사진">
        <br />
        <b>yurimidaH</b>
      </a>
    </td>
  </tr>
  <tr align="center">
    <td>이소희</td>
    <td>송민서</td>
    <td>김정민</td>
    <td>황유림</td>
  </tr>
  <tr align="center">
    <td>(역할분담)</td>
    <td>(역할분담)</td>
    <td>(역할분담)</td>
    <td>(역할분담)</td>
  </tr>
</table>

<h2> 🛠 기술스택 </h2>


| 역할                        | 스택                                                                                                                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **UI Library**              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                 |
| **Language**                | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                  |
| **Styling**                 | ![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black)                                                                                               |
| **Data Fetching**           | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)                                                                                                                 |
| **Server State management** | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white)                                                                                     |
| **Formatting**              | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) |
| **Package Manager**         | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)                                                                                                                    |
| **Version Control**         | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)   |
| **Deployment**  | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                             


<br/>

<h2> 📄 컨벤션 및 브랜치 전략 </h2>

<h3> 커밋 컨벤션 </h3>

| 커밋 컨벤션 | 용도 |
| ----------- | ---- |
| `init` | 초기 세팅 |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `refactor` | 코드 리팩토링 |
| `style` | 스타일 코드 변경 |
| `chore` | 패키지 매니저 수정, 기타 수정 (.gitignore 등) |
| `docs` | 문서 수정 |
| `asset` | SVG, 이미지 등 디자인 파일 추가 |
| `type` | 타입 수정 |
| `rename` | 파일 또는 폴더명 수정/이동 |
| `remove` | 파일 삭제 |
| `HOTFIX` | 치명적인 버그 긴급 수정 |

<h3> 브랜치 </h3>

| 브랜치 | 용도 |
| ------ | ---- |
| `main` | 배포용 브랜치 — 모든 리뷰가 끝난 후 merge |
| `dev` | 개발용 브랜치 — 기능 브랜치들을 merge |
| `init/#issue-number/기능명` | 초기 세팅 |
| `feat/#issue-number/기능명` | 새로운 기능 개발 |
| `fix/#issue-number/기능명` | 버그 수정 |
| `refactor/#issue-number/기능명` | 리팩토링 |

<br/>

<h2> 📁 프로젝트 구조 </h2>

```
📦 src/
├── 🗂️ layout/              # 앱 전체 공통 레이아웃
├── 🗂️ pages/               # 페이지 단위 기능 (Route에 해당)
│   └── 🗂️ home/
│       ├── 🗂️ components/
│       ├── 🗂️ constants/
│       ├── 🗂️ apis/
│       ├── 🗂️ types/
│       ├── 🗂️ utils/
│       └── 🗂️ hooks/
├── 🗂️ routes/              # 라우팅 설정
└── 🗂️ shared/              # 전역 공유 코드
    ├── 🗂️ apis/            # 공통 API 함수
    ├── 🗂️ assets/          # 이미지, 아이콘, 폰트 등
    ├── 🗂️ components/      # 재사용 가능한 공통 UI 컴포넌트
    ├── 🗂️ constants/       # 공통 상수 및 쿼리 키
    ├── 🗂️ styles/          # 전역 스타일, 테마
    ├── 🗂️ types/           # 공통 타입 정의
    ├── 🗂️ utils/           # 공통 유틸 함수
    └── 🗂️ hooks/           # 전역 커스텀 훅
```

<br/>

<h2> 🫶 우리 조 그라운드 룰 </h2>
<div><strong>규칙 1</strong> 말 이쁘게 하기 🗣️<br/></div>
<div><strong>규칙 2</strong> 행복하기. 건강하기. 🌿<br/></div>
<div><strong>규칙 3</strong> 열심히하깅! 💪<br/></div>
<div><strong>규칙 4</strong> 1시간에 한번씩 웃음꽃 🌸<br/></div>
<div><strong>규칙 5</strong> 회피하지 말고 해피하기 😊<br/></div>

<br/>

<h2>🏡 웹왔니팟 Before and After</h2>
<h3>Before</h3>
<img src="https://github.com/user-attachments/assets/17af3941-8cba-4fff-8d16-709ba504ad79" alt="image" />


<h3>After</h3>
<img src="" alt="웨비 팀원들 사진 (after)"/>
