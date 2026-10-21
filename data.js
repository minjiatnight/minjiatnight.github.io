// 에피소드 추가: EPISODES 배열 끝에 객체를 더 넣는다.
// 상품: [이름, 가격, productId, itemId, vendorItemId, 이미지URL]  → 클릭하면 쿠팡 상품 페이지로 이동
// 룩 이미지: imgs 폴더의 파일명(룩 대표 컷 + 영상 컷)
// IMGS: 룩 소개 사진(img/ 폴더 파일명). 파일을 올리고 목록에 이름만 추가하면 갤러리에 나온다.
const IMGS = {
  1: ["ep1s_l1_1.jpg","ep1s_l1_2f.jpg","ep1s_l1_3.jpg"],
  2: ["ep1s_l2_1.jpg","ep1s_l2_2f.jpg","ep1s_l2_3.jpg"],
  3: ["ep1s_l3_1.jpg","ep1s_l3_2f.jpg","ep1s_l3_3.jpg"],
  4: ["ep1s_l4_1.jpg","ep1s_l4_2f.jpg","ep1s_l4_3.jpg"],
  5: ["ep1s_l5_1.jpg","ep1s_l5_2f.jpg","ep1s_l5_3.jpg"]
};
// P(이름, 가격, productId, itemId, vendorItemId, 상품이미지 파일명, ok)
// ok=true 는 상품 페이지에서 색상·사이즈가 룩과 일치하는 것을 확인한 뒤에만 쓴다. false면 "색상 확인 중" 표시가 붙는다.
const PLINK = {
"https://www.coupang.com/vp/products/6629626563?itemId=15108568332&vendorItemId=92003182581": "https://link.coupang.com/a/h182YuBy5Q",
"https://www.coupang.com/vp/products/7219802962?itemId=18292554862&vendorItemId=85438221385": "https://link.coupang.com/a/h183bYyOjY",
"https://www.coupang.com/vp/products/9569061567?itemId=28559875483&vendorItemId=95504481137": "https://link.coupang.com/a/h183qc3HIy",
"https://www.coupang.com/vp/products/9309403316?itemId=28592651236&vendorItemId=95536506922": "https://link.coupang.com/a/h183DlHTRA",
"https://www.coupang.com/vp/products/9416670326?itemId=27983185520&vendorItemId=94940922620": "https://link.coupang.com/a/h183MFmaI0",
"https://www.coupang.com/vp/products/8357643532?itemId=24283933312&vendorItemId=91300241509": "https://link.coupang.com/a/h18ZFxCLPo",
"https://www.coupang.com/vp/products/7246420112?itemId=18423041484&vendorItemId=86317619889": "https://link.coupang.com/a/h184rInEXs",
"https://www.coupang.com/vp/products/344545583?itemId=1094463775&vendorItemId=5613043610": "https://link.coupang.com/a/h184FP5r5g",
"https://www.coupang.com/vp/products/9419139646?itemId=27992238029&vendorItemId=95005789791": "https://link.coupang.com/a/h184Pbnd7I",
"https://www.coupang.com/vp/products/8298261201?itemId=25157082472&vendorItemId=90958102326": "https://link.coupang.com/a/h184YcCwN2",
"https://www.coupang.com/vp/products/9449316676?itemId=28109550674&vendorItemId=95065566407": "https://link.coupang.com/a/h185bVi4MC",
"https://www.coupang.com/vp/products/7970251699?itemId=22071288450&vendorItemId=89118370452": "https://link.coupang.com/a/h185pA8EIS",
"https://www.coupang.com/vp/products/7867922320?itemId=21485787539&vendorItemId=88539889486": "https://link.coupang.com/a/h185DnQxNs",
"https://www.coupang.com/vp/products/7523365693?itemId=19736688919&vendorItemId=93300384795": "https://link.coupang.com/a/h19buoyXhQ",
"https://www.coupang.com/vp/products/9437985652?itemId=28068456753&vendorItemId=95025098123": "https://link.coupang.com/a/h19bDAxuto",
"https://www.coupang.com/vp/products/8611013813?itemId=24975575332&vendorItemId=91981093369": "https://link.coupang.com/a/h19bReVNUy",
"https://www.coupang.com/vp/products/8863441253?itemId=25848364927&vendorItemId=92835285860": "https://link.coupang.com/a/h19b4Uera8",
"https://www.coupang.com/vp/products/7813674294?itemId=21202585065&vendorItemId=88263849296": "https://link.coupang.com/a/h19cjepja0",
"https://www.coupang.com/vp/products/8715665087?itemId=25313761403&vendorItemId=92458074084": "https://link.coupang.com/a/h19cwssrXo",
"https://www.coupang.com/vp/products/9000382528?itemId=26383844454&vendorItemId=93837604710": "https://link.coupang.com/a/h19cFCbSwK",
"https://www.coupang.com/vp/products/9705923242?itemId=29037239908&vendorItemId=95964538245": "https://link.coupang.com/a/h19cTjM8QK",
"https://www.coupang.com/vp/products/8387887064?itemId=24244454131&vendorItemId=91261443527": "https://link.coupang.com/a/h19dtW9tF6",
"https://www.coupang.com/vp/products/6036978818?itemId=11025245483&vendorItemId=78304829905": "https://link.coupang.com/a/h19dDbm7tQ",
"https://www.coupang.com/vp/products/6868009336?itemId=16420793385&vendorItemId=83611697468": "https://link.coupang.com/a/h19dL8VDtk",
"https://www.coupang.com/vp/products/9037002777?itemId=26511939609&vendorItemId=96076023391": "https://link.coupang.com/a/h19dZZQydM",
"https://www.coupang.com/vp/products/7173524848?itemId=24997935273&vendorItemId=92003133553": "https://link.coupang.com/a/h19d801LiK",
"https://www.coupang.com/vp/products/8388133443?itemId=24245282976&vendorItemId=91262261240": "https://link.coupang.com/a/h19emREFlA",
"https://www.coupang.com/vp/products/9595583176?itemId=28644875752&vendorItemId=95588335668": "https://link.coupang.com/a/h19eAvSqw8",
"https://www.coupang.com/vp/products/6148982292?itemId=11854933258&vendorItemId=79148902025": "https://link.coupang.com/a/h19eOnDzvE",
"https://www.coupang.com/vp/products/7276574949?itemId=18569317477&vendorItemId=85706517483": "https://link.coupang.com/a/h19e18kAfs",
"https://www.coupang.com/vp/products/6540982046?itemId=14563217507&vendorItemId=81805477107": "https://link.coupang.com/a/h19fy2nF48",
"https://www.coupang.com/vp/products/6074019864?itemId=11226825748&vendorItemId=86635744663": "https://link.coupang.com/a/h19fMTjRGm",
"https://www.coupang.com/vp/products/9034440469?itemId=26502627172&vendorItemId=93477352052": "https://link.coupang.com/a/h19f0uFW8W",
"https://www.coupang.com/vp/products/9243526747?itemId=27335176700&vendorItemId=89821410709": "https://link.coupang.com/a/h19geooBBA",
"https://www.coupang.com/vp/products/7610297398?itemId=20153884897&vendorItemId=87246762745": "https://link.coupang.com/a/h19gsITkjY",
"https://www.coupang.com/vp/products/6976253068?itemId=17028676257&vendorItemId=93525256104": "https://link.coupang.com/a/h19gEc2D5o",
"https://www.coupang.com/vp/products/9690642354?itemId=28982761091&vendorItemId=95925239259": "https://link.coupang.com/a/h19gNjE3oa",
"https://www.coupang.com/vp/products/294181143?itemId=2256073177&vendorItemId=75876222328": "https://link.coupang.com/a/h19gWVbuhw",
"https://www.coupang.com/vp/products/6617073518?itemId=15029108872&vendorItemId=82251736044": "https://link.coupang.com/a/h19g98o6wu",
"https://www.coupang.com/vp/products/6480513476?itemId=14184729717&vendorItemId=81430545109": "https://link.coupang.com/a/h19hHh2REW",
"https://www.coupang.com/vp/products/9736542835?itemId=29138978370&vendorItemId=96062663082": "https://link.coupang.com/a/h19hUI9yqi",
"https://www.coupang.com/vp/products/9070017087?itemId=26636233242&vendorItemId=93608986171": "https://link.coupang.com/a/h19h8Bw0wC",
"https://www.coupang.com/vp/products/9693291381?itemId=28992181372&vendorItemId=95920898209": "https://link.coupang.com/a/h19imv78NM",
"https://www.coupang.com/vp/products/9312337431?itemId=27594793458&vendorItemId=96069812727": "https://link.coupang.com/a/h19izZNMTR",
"https://www.coupang.com/vp/products/9671660466?itemId=28917748890&vendorItemId=95849469222": "https://link.coupang.com/a/h19iI4XnNI",
"https://www.coupang.com/vp/products/9414310088?itemId=27973849557&vendorItemId=94934344397": "https://link.coupang.com/a/h19iUZ8GwC",
"https://www.coupang.com/vp/products/9523467354?itemId=28392517981&vendorItemId=95385217407": "https://link.coupang.com/a/h19i8pwvEO",
"https://www.coupang.com/vp/products/9449193175?itemId=28109119869&vendorItemId=95065137912": "https://link.coupang.com/a/h19jmmpHPg",
"https://www.coupang.com/vp/products/9770494560?itemId=29244703478&vendorItemId=96163044474": "https://link.coupang.com/a/h19jSGHlgO",
"https://www.coupang.com/vp/products/7956690144?itemId=21984420876&vendorItemId=89032012569": "https://link.coupang.com/a/h19j8cX5nE",
"https://www.coupang.com/vp/products/9263369868?itemId=27410439766&vendorItemId=94376063849": "https://link.coupang.com/a/h19kmbzruC",
"https://www.coupang.com/vp/products/8284345251?itemId=23886275470&vendorItemId=90957795217": "https://link.coupang.com/a/h19kBifs84",
"https://www.coupang.com/vp/products/8415267453?itemId=24334936605&vendorItemId=91350502674": "https://link.coupang.com/a/h19kKmQqWW",
"https://www.coupang.com/vp/products/6572072687?itemId=14756406002&vendorItemId=81996726159": "https://link.coupang.com/a/h19kYAL75o",
"https://www.coupang.com/vp/products/9371768520?itemId=27815840764&vendorItemId=94775616438": "https://link.coupang.com/a/h19lcJWarY",
"https://www.coupang.com/vp/products/8423151463?itemId=24451043573&vendorItemId=91464876586": "https://link.coupang.com/a/h19lpCmgUe",
"https://www.coupang.com/vp/products/9683996892?itemId=28959263073&vendorItemId=95889499954": "https://link.coupang.com/a/h19lDgiqXI",
"https://www.coupang.com/vp/products/9705934038?itemId=29037276899&vendorItemId=95964572917": "https://link.coupang.com/a/h19nFmqkxM",
"https://www.coupang.com/vp/products/9339627540?itemId=27697074371&vendorItemId=94658828344": "https://link.coupang.com/a/h19nSALDCm",
"https://www.coupang.com/vp/products/9735540094?itemId=29135237698&vendorItemId=96059064725": "https://link.coupang.com/a/h19n2PqsSa",
"https://www.coupang.com/vp/products/9769912619?itemId=29243116045&vendorItemId=96161530159": "https://link.coupang.com/a/h19w1ELnhc"
};
const P = (name, price, id, item, vendor, img, ok, hide) => {
  const long = "https://www.coupang.com/vp/products/" + id + "?itemId=" + item + "&vendorItemId=" + vendor;
  return { name, price, ok, hide: !!hide, url: PLINK[long] || long, img };
};
const EPISODES = [
  {
    tab: "EP001",
    pov: "은근 잘 보이고 싶을 때",
    looks: [
      { name: "와인 테니스 코디", imgs: IMGS[1], items: [
        P("7APRIL 여성용 브이넥 크롭 니트 가디건 (레드와인)", 15290, "8357643532","24283933312","91300241509", "ep1_p1_2b.jpg", true),
        P("A라인 밴딩 스판 골프 테니스 미니 스커트 (화이트)", 11320, "6629626563","15108568332","92003182581", "ep1_p1_1b.jpg", true),
        P("수스다 왕리본 새틴 머리핀", 3990, "7219802962","18292554862","85438221385", "ep1_p1_3.jpg", false),
        P("삭스핑 순면 자수 리본 중목 양말 4켤레", 9980, "9569061567","28559875483","95504481137", "ep1_p1_4.jpg", true),
        P("UPPERCUT 리본 밴딩 발레코어 스니커즈", 16900, "9309403316","28592651236","95536506922", "ep1_p1_5.jpg", true)
      ]},
      { name: "걸리시 데님 코디", imgs: IMGS[2], items: [
        P("cammello 콩단추 벌룬 셔링 리본 블라우스", 19500, "9416670326","27983185520","94940922620", "ep1_p2_1.jpg", true),
        P("구디프 큐트 데님 미니 스커트", 17670, "7246420112","18423041484","86317619889", "ep1_p2_2.jpg", true),
        P("슈즈앤 메리제인 미들 굽 펌프스", 15110, "344545583","1094463775","5613043610", "ep1_p2_3.jpg", true),
        P("콜콜러브 하트 포치 숄더백", 14900, "9419139646","27992238029","95005789791", "ep1_p2_4.jpg", true),
        P("수스다 페어리 리본 진주 집게핀", 3990, "7279087701","18580591312","85717246022", "ep1_p2_5.jpg", false, true)
      ]},
      { name: "다크 로맨틱 코디", imgs: IMGS[3], items: [
        P("PU 가죽 라이더 숏 재킷 F80131", 25800, "8298261201","25157082472","90958102326", "ep1_p3_1.jpg", true),
        P("위드후이린 뒷리본 슬림 퍼프 긴팔 블라우스", 15900, "9449316676","28109550674","95065566407", "ep1_p3_2.jpg", true),
        P("라라온 순면 캉캉 미니스커트", 15100, "7970251699","22071288450","89118370452", "ep1_p3_3.jpg", true),
        P("착한구두 체니 스트랩 키높이 메리제인", 28710, "7867922320","21485787539","88539889486", "ep1_p3_4.jpg", true),
        P("진주 초커 목걸이 블랙 리본", 9900, "9769912619","29243116045","96161530159", "ep1_p3_5b.jpg", true),
        P("거와스 대형 블랙 리본 집게핀", 7740, "7523365693","19736688919","93300384795", "ep1_p3_6.jpg", true)
      ]},
      { name: "하트 로맨틱 코디", imgs: IMGS[4], items: [
        P("ZIVIA 하트 버튼 니트 가디건", 16800, "9165863953","27005538365","93970930037", "ep1_p4_1.jpg", false, true),
        P("제이로그 프릴 퍼프 버튼 블라우스", 14900, "9437985652","28068456753","95025098123", "ep1_p4_2.jpg", true),
        P("펀칭 플라워 레이스 레이어드 미니 스커트", 15700, "8611013813","24975575332","91981093369", "ep1_p4_3.jpg", true),
        P("타니즈 올린 더블 스트랩 메리제인 플랫", 16900, "8863441253","25848364927","92835285860", "ep1_p4_4.jpg", true),
        P("진주 장식 미니 스카프 쁘띠 목걸이", 10800, "8357486882","24150011236","92620732660", "ep1_p4_5.jpg", false, true)
      ]},
      { name: "올리브 유틸리티 코디", imgs: IMGS[5], items: [
        P("아피나르 허리 스트링 후드 바람막이 점퍼", 26900, "7813674294","21202585065","88263849296", "ep1_p5_1.jpg", true),
        P("메이킹유 펀칭 레이스 캉캉 원피스", 25900, "8715665087","25313761403","92458074084", "ep1_p5_2.jpg", true),
        P("POMTOR 통굽 8.5cm 롱 부츠", 38270, "9000382528","26383844454","93837604710", "ep1_p5_3.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP002",
    pov: "가을 날씨 가장 이뻐 보일 때",
    looks: [
      { name: "클래식 트렌치 코디", imgs: ["ep2s_l1_1.jpg","ep2s_l1_2f.jpg","ep2s_l1_3.jpg"], items: [
        P("ZIVIA 여성 봄가을 롱 트렌치코트", 31550, "9705923242","29037239908","95964538245", "ep2_p1_1.jpg", true),
        P("YEON HOME 골지 브이넥 긴팔 니트", 17500, "8387887064","24244454131","91261443527", "ep2_p1_2.jpg", true),
        P("린다샵 체르나 체크 플리츠 미니 스커트", 10050, "6036978818","11025245483","78304829905", "ep2_p1_3.jpg", true),
        P("착한구두 샌더슨 페니 레더 로퍼", 34560, "6868009336","16420793385","83611697468", "ep2_p1_4.jpg", true)
      ]},
      { name: "프렌치 걸리시 코디", imgs: ["ep2s_l2_1.jpg","ep2s_l2_2f.jpg","ep2s_l2_3.jpg"], items: [
        P("플랜와이 라운드넥 베이직 니트 가디건", 15670, "9037002777","26511939609","96076023391", "ep2_p2_1.jpg", true),
        P("양놀 쉬폰 V넥 타이 긴팔 블라우스", 23060, "7173524848","24997935273","92003133553", "ep2_p2_2.jpg", true),
        P("이푼아이 하운드투스 잔체크 H라인 미니 스커트", 22900, "8388133443","24245282976","91262261240", "ep2_p2_3.jpg", true),
        P("타니즈 메데스 리본 메리제인 로퍼", 16900, "9595583176","28644875752","95588335668", "ep2_p2_4.jpg", true)
      ]},
      { name: "청청 캐주얼 코디", imgs: ["ep2s_l3_1.jpg","ep2s_l3_2f.jpg","ep2s_l3_3.jpg"], items: [
        P("밍키비 빈티지 연청 크롭 데님 자켓", 13320, "6148982292","11854933258","79148902025", "ep2_p3_1.jpg", true),
        P("베이직하우스 프리미엄 코튼 크롭 반팔 티셔츠", 9900, "7276574949","18569317477","85706517483", "ep2_p3_2.jpg", true),
        P("엘블로썸 H라인 스판 데님 스커트", 17200, "6540982046","14563217507","81805477107", "ep2_p3_3.jpg", true),
        P("홀리버니 데일리 스니커즈", 15900, "6074019864","11226825748","86635744663", "ep2_p3_4.jpg", true)
      ]},
      { name: "브라운 레더 코디", imgs: ["ep2s_l4_1.jpg","ep2s_l4_2f.jpg","ep2s_l4_3.jpg"], items: [
        P("네모엔룩 하이넥 레더 블루종 자켓", 38900, "9034440469","26502627172","93477352052", "ep2_p4_1.jpg", true),
        P("베이뮤 니트 터틀넥 목폴라", 17700, "9243526747","27335176700","89821410709", "ep2_p4_2.jpg", true),
        P("이푼아이 플레어 스판 A라인 미니 스커트", 25900, "7610297398","20153884897","87246762745", "ep2_p4_3.jpg", true),
        P("모넬로 통굽 첼시 롱부츠", 39900, "6976253068","17028676257","93525256104", "ep2_p4_4.jpg", true)
      ]},
      { name: "플로럴 원피스 코디", imgs: ["ep2s_l5_1.jpg","ep2s_l5_2f.jpg","ep2s_l5_3.jpg"], items: [
        P("ZAJA 쉬폰 롱원피스 꽃무늬", 33470, "9690642354","28982761091","95925239259", "ep2_p5_1.jpg", true),
        P("럽스 래이 루즈핏 브이넥 니트조끼", 20150, "294181143","2256073177","75876222328", "ep2_p5_2.jpg", true),
        P("소리달 디포네 데일리 숄더 토드백", 19000, "6617073518","15029108872","82251736044", "ep2_p5_3.jpg", true),
        P("아피나르 라운드토 골든 메리제인 플랫", 14990, "6480513476","14184729717","81430545109", "ep2_p5_4.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP003",
    pov: "해 질 녘 바다 앞에 혼자 서 있을 때",
    looks: [
      { name: "브라운 클래식 코디", imgs: ["ep3s_l1_1.jpg","ep3s_l1_2b.jpg","ep3s_l1_3.jpg"], items: [
        P("화이트 랩 니트 톱", 21960, "9736542835","29138978370","96062663082", "ep3_p1_1.jpg", true),
        P("브라운 코듀로이 벨티드 미니스커트", 24900, "9070017087","26636233242","93608986171", "ep3_p1_2.jpg", true),
        P("다크브라운 웨스턴 롱부츠", 20330, "9693291381","28992181372","95920898209", "ep3_p1_3.jpg", true),
        P("브라운 스웨이드 호보백", 24750, "9312337431","27594793458","96069812727", "ep3_p1_4.jpg", true)
      ]},
      { name: "새틴 스커트 코디", imgs: ["ep3s_l2_1.jpg","ep3s_l2_2.jpg","ep3s_l2_3.jpg"], items: [
        P("그레이 니트 가디건", 15700, "9671660466","28917748890","95849469222", "ep3_p2_1.jpg", true),
        P("그레이 슬림 캐미솔", 8900, "9414310088","27973849557","94934344397", "ep3_p2_2.jpg", true),
        P("샴페인 새틴 레이스 슬릿 스커트", 23280, "9523467354","28392517981","95385217407", "ep3_p2_3.jpg", true),
        P("블랙 리본 발레리나 플랫", 19500, "9449193175","28109119869","95065137912", "ep3_p2_4.jpg", true)
      ]},
      { name: "발레코어 코디", imgs: ["ep3s_l3_1.jpg","ep3s_l3_2.jpg","ep3s_l3_3.jpg"], items: [
        P("화이트 레이스 타이 블라우스", 42880, "9770494560","29244703478","96163044474", "ep3_p3_1.jpg", true),
        P("화이트 티어드 프릴 미니스커트", 17600, "7956690144","21984420876","89032012569", "ep3_p3_2.jpg", true),
        P("화이트 니삭스", 9900, "9263369868","27410439766","94376063849", "ep3_p3_3.jpg", true),
        P("핑크 벨벳 메리제인", 28500, "8284345251","23886275470","90957795217", "ep3_p3_4.jpg", true)
      ]},
      { name: "트위드 재킷 코디", imgs: ["ep3s_l4_1.jpg","ep3s_l4_2.jpg","ep3s_l4_3.jpg"], items: [
        P("블랙 트위드 재킷", 17010, "8415267453","24334936605","91350502674", "ep3_p4_1.jpg", true),
        P("크림 캐미 탑", 8900, "6572072687","14756406002","81996726159", "ep3_p4_2.jpg", true),
        P("화이트 프릴 레이어드 미니스커트", 17900, "9371768520","27815840764","94775616438", "ep3_p4_3.jpg", true),
        P("카멜 스웨이드 웨스턴 롱부츠", 32900, "8423151463","24451043573","91464876586", "ep3_p4_4.jpg", true),
        P("블랙 퀼팅 체인 숄더백", 21250, "9683996892","28959263073","95889499954", "ep3_p4_5.jpg", true)
      ]},
      { name: "노란 니트 코디", imgs: ["ep3s_l5_1.jpg","ep3s_l5_2.jpg","ep3s_l5_3.jpg"], items: [
        P("옐로 케이블 V넥 니트", 26800, "9705934038","29037276899","95964572917", "ep3_p5_1.jpg", true),
        P("화이트 벌룬 미니스커트", 15000, "9339627540","27697074371","94658828344", "ep3_p5_2.jpg", true),
        P("베이지 슬라우치 롱부츠", 39800, "9735540094","29135237698","96059064725", "ep3_p5_3.jpg", true)
      ]}
    ]
  }
];
