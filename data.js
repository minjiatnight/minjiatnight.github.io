// 에피소드 추가 방법: EPISODES 배열 끝에 객체를 하나 더 넣는다. url이 비어 있으면 fallback(쿠팡 인플루언서스 스토어)으로 연결.
const STORE = "https://influencers.coupang.com/s/temfind";
const EPISODES = [
  {
    tab: "EP001",
    pov: "짝사랑하는 남자 만나러 갈 때",
    fallback: STORE,
    looks: [
      { name: "와인 테니스 코디", items: [
        { name: "A라인 밴딩 스판 골프 테니스 미니 스커트", price: "11,320원" },
        { name: "7APRIL 브이넥 크롭 니트 가디건", price: "" },
        { name: "수스다 왕리본 새틴 머리핀", price: "" },
        { name: "삭스핑 자수 리본 중목 양말", price: "" },
        { name: "UPPERCUT 리본 밴딩 발레코어 스니커즈", price: "16,900원" } ] },
      { name: "걸리시 데님 코디", items: [
        { name: "cammello 콩단추 벌룬 셔링 리본 블라우스", price: "" },
        { name: "구디프 큐트 데님 미니 스커트", price: "17,670원" },
        { name: "슈즈앤 메리제인 펌프스", price: "16,400원" },
        { name: "콜콜러브 하트 포치 숄더백", price: "" },
        { name: "수스다 페어리 리본 진주 집게핀", price: "" } ] },
      { name: "다크 로맨틱 코디", items: [
        { name: "PU 가죽 라이더 숏 재킷", price: "25,800원" },
        { name: "위드후이린 뒷리본 슬림 퍼프 블라우스", price: "" },
        { name: "라라온 순면 캉캉 미니스커트", price: "" },
        { name: "착한구두 체니 스트랩 키높이 메리제인", price: "" },
        { name: "엘라주르 블랙 리본 진주 초커", price: "9,600원" },
        { name: "거와스 대형 블랙 리본 집게핀", price: "" } ] },
      { name: "하트 로맨틱 코디", items: [
        { name: "ZIVIA 하트 버튼 니트 가디건", price: "" },
        { name: "제이로그 프릴 퍼프 버튼 블라우스", price: "" },
        { name: "펀칭 플라워 레이스 레이어드 미니 스커트", price: "" },
        { name: "타니즈 올린 더블 스트랩 메리제인 플랫", price: "" },
        { name: "진주 장식 스카프 리본 쁘띠 목걸이", price: "" } ] },
      { name: "올리브 유틸리티 코디", items: [
        { name: "아피나르 허리 스트링 후드 점퍼", price: "26,900원" },
        { name: "메이킹유 펀칭 레이스 캉캉 원피스", price: "25,900원" },
        { name: "POMTOR 통굽 롱 부츠", price: "" } ] }
    ]
  }
];
