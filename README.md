# 바보카 BREAK 시뮬레이터 (독립 사이트)

하이큐!! 바보카(バボカ!!) BREAK 팬메이드 웹 시뮬레이터. 스타터 덱 HV-D01 카라스노 · HV-D02 네코마, 종합 룰 ver.1.06 기준. 비공식 팬 제작물입니다.

- `index.html` — 시뮬레이터 본체 (claude.ai 아티팩트 버전과 같은 소스에서 빌드, 로그인 기능만 추가)
- `config.js` — Firebase 프로젝트 설정 값 (비워 두면 게스트 전용으로 동작)
- `firestore.rules.txt` — Firestore 보안 규칙 (Firebase 콘솔에 붙여넣기)
- `img/` — 카드 이미지

## 로그인 · 저장

- **Google 로그인**, **이메일 회원가입/로그인**(인증 메일 · 비밀번호 재설정 메일), **게스트**(Firebase 익명 로그인)
- 덱 · 튜토리얼 진행 · AI 대전 설정 · 진행 속도가 계정별로 Firestore `users/{UID}` 문서 하나에 저장됨
- 게스트로 쓰다가 계정 메뉴(로비 오른쪽 위)에서 Google · 이메일 계정을 **연결**하면 기록이 그대로 옮겨짐
- 처음 로그인한 계정에는 그 브라우저에 있던 기록(게스트 때 만든 덱 등)이 올라감

## 처음 설정 (Firebase 콘솔)

1. https://console.firebase.google.com → **프로젝트 추가** (이름 예: `vobaca-simulator`, Google 애널리틱스는 꺼도 됨, 무료 Spark 요금제)
2. 프로젝트 개요 → **웹 앱 추가(`</>`)** → 앱 닉네임 입력 → 나오는 `firebaseConfig` 값을 `config.js`에 붙여넣기
3. **Authentication** → 시작하기 → 로그인 방법 탭에서 세 가지 사용 설정
   - **Google** (프로젝트 지원 이메일 선택)
   - **이메일/비밀번호** (첫 번째 스위치만)
   - **익명** (게스트 로그인용)
4. Authentication → **설정** → **승인된 도메인** → `<GitHub 아이디>.github.io` 추가 (나중에 도메인을 연결하면 그 도메인도 추가)
5. (선택) Authentication → 템플릿 → 언어를 한국어로 → 인증 · 비밀번호 재설정 메일이 한국어로 감
6. **Firestore Database** → 데이터베이스 만들기 → 위치 `asia-northeast3 (서울)` → **프로덕션 모드**
7. Firestore → **규칙** 탭 → `firestore.rules.txt` 내용 전체를 붙여넣고 **게시**

## GitHub Pages

저장소 Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
몇 분 뒤 `https://<GitHub 아이디>.github.io/<저장소 이름>/` 에서 열림.
