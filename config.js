/* Firebase 프로젝트 설정 — Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹) → SDK 설정의 firebaseConfig 값을 그대로 붙여넣기.
   이 값들은 공개되어도 괜찮아요 (데이터 보호는 firestore.rules.txt 규칙이 담당).
   비워 두면 로그인 없이 "게스트(이 브라우저에만 저장)"로만 동작합니다. */
window.VOBACA_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
