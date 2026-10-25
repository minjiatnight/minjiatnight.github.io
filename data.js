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
"https://www.coupang.com/vp/products/9769912619?itemId=29243116045&vendorItemId=96161530159": "https://link.coupang.com/a/h19w1ELnhc",
"https://www.coupang.com/vp/products/9174439520?itemId=27043977091&vendorItemId=94012413021": "https://link.coupang.com/a/h3L9NwSlPi",
"https://www.coupang.com/vp/products/8606839174?itemId=24960465891&vendorItemId=91966215348": "https://link.coupang.com/a/h3L9WHTxD2",
"https://www.coupang.com/vp/products/7856039319?itemId=21425818521&vendorItemId=91021719391": "https://link.coupang.com/a/h3L91eA8Rw",
"https://www.coupang.com/vp/products/7563062886?itemId=19929716691&vendorItemId=87029283719": "https://link.coupang.com/a/h3MaatKMU0",
"https://www.coupang.com/vp/products/8723437347?itemId=25340902384&vendorItemId=92515479039": "https://link.coupang.com/a/h3MajBI6gK",
"https://www.coupang.com/vp/products/7910721348?itemId=23980109638&vendorItemId=91001293914": "https://link.coupang.com/a/h3Mas0bZa8",
"https://www.coupang.com/vp/products/7655849401?itemId=20382510946&vendorItemId=91386951959": "https://link.coupang.com/a/h3MaxqouPs",
"https://www.coupang.com/vp/products/8323410071?itemId=26580838304&vendorItemId=93554247977": "https://link.coupang.com/a/h3MaBRylQy",
"https://www.coupang.com/vp/products/8552726718?itemId=4083869763&vendorItemId=93170933263": "https://link.coupang.com/a/h3MbhatnmC",
"https://www.coupang.com/vp/products/7910205840?itemId=21702609963&vendorItemId=91954556644": "https://link.coupang.com/a/h3MbqvGrro",
"https://www.coupang.com/vp/products/9302927485?itemId=27559821477&vendorItemId=94523883524": "https://link.coupang.com/a/h3MeDTffqe",
"https://www.coupang.com/vp/products/9152197200?itemId=26949792027&vendorItemId=93918873343": "https://link.coupang.com/a/h3MJMFAXDw",
"https://www.coupang.com/vp/products/9129046789?itemId=26859645504&vendorItemId=93829341117": "https://link.coupang.com/a/h3MO7DA1Js",
"https://www.coupang.com/vp/products/9304854568?itemId=27566493290&vendorItemId=94530502046": "https://link.coupang.com/a/h3MJVQq6iO",
"https://www.coupang.com/vp/products/8349404281?itemId=26818905215&vendorItemId=93789109694": "https://link.coupang.com/a/h3MKec4I0a",
"https://www.coupang.com/vp/products/9701022570?itemId=29019791933&vendorItemId=95947538909": "https://link.coupang.com/a/h3MKwxcMhw",
"https://www.coupang.com/vp/products/9302927485?itemId=27559821414&vendorItemId=94523883504": "https://link.coupang.com/a/h3MIFQKyoC",
"https://www.coupang.com/vp/products/9264905410?itemId=27416094712&vendorItemId=94381663249": "https://link.coupang.com/a/h3MKOInTNI",
"https://www.coupang.com/vp/products/8952726300?itemId=26188951599&vendorItemId=93168370284": "https://link.coupang.com/a/h3MKTpTWnY",
"https://www.coupang.com/vp/products/9771570132?itemId=29248838436&vendorItemId=96167036793": "https://link.coupang.com/a/h3MK2sOZPM",
"https://www.coupang.com/vp/products/9099623568?itemId=26748846509&vendorItemId=93741502462": "https://link.coupang.com/a/h3MLkW7M2S",
"https://www.coupang.com/vp/products/9302927485?itemId=27559821444&vendorItemId=94523883535": "https://link.coupang.com/a/h3MJpRtdC0",
"https://www.coupang.com/vp/products/8287892182?itemId=23900321428&vendorItemId=90922874022": "https://link.coupang.com/a/h3MLDje2eG",
"https://www.coupang.com/vp/products/9776920466?itemId=29268063828&vendorItemId=96185423157": "https://link.coupang.com/a/h3MI7f7tHE",
"https://www.coupang.com/vp/products/9328317762?itemId=27653994076&vendorItemId=94921926484": "https://link.coupang.com/a/h3MLVW7kjI",
"https://www.coupang.com/vp/products/9766562679?itemId=29231813844&vendorItemId=96150843852": "https://link.coupang.com/a/h3MMdG9vki",
"https://www.coupang.com/vp/products/8971720618?itemId=26258122344&vendorItemId=93236486009": "https://link.coupang.com/a/h3MMJKTHgq",
"https://www.coupang.com/vp/products/8657689478?itemId=25127789895&vendorItemId=92175125368": "https://link.coupang.com/a/h3MM6HfN2O",
"https://www.coupang.com/vp/products/7579095839?itemId=20003432455&vendorItemId=87068071716": "https://link.coupang.com/a/h3MNo6Utci",
"https://www.coupang.com/vp/products/9779933479?itemId=29278586559&vendorItemId=96195311236": "https://link.coupang.com/a/h3MIPukS96",
"https://www.coupang.com/vp/products/8971720618?itemId=26258122341&vendorItemId=93236485994": "https://link.coupang.com/a/h3Pu76sv3Q",
"https://www.coupang.com/vp/products/7635144862?itemId=20272760679&vendorItemId=87359755483": "https://link.coupang.com/a/h4yuTuplWm",
"https://www.coupang.com/vp/products/7689388170?itemId=20559040486&vendorItemId=93235167770": "https://link.coupang.com/a/h4yu2531eC",
"https://www.coupang.com/vp/products/9727555034?itemId=29109746532&vendorItemId=96034530618": "https://link.coupang.com/a/h4yu69cjn2",
"https://www.coupang.com/vp/products/9366772787?itemId=27796177207&vendorItemId=94756319737": "https://link.coupang.com/a/h4yvbEr4Wi",
"https://www.coupang.com/vp/products/8953120363?itemId=26190436097&vendorItemId=93169823495": "https://link.coupang.com/a/h4yvkVxos0",
"https://www.coupang.com/vp/products/9302927485?itemId=27559821444&vendorItemId=94523883535": "https://link.coupang.com/a/h3MJpRtdC0",
"https://www.coupang.com/vp/products/9183352823?itemId=27085754392&vendorItemId=94465290207": "https://link.coupang.com/a/h4yvyy8qXc",
"https://www.coupang.com/vp/products/7930084076?itemId=21809459190&vendorItemId=88857966882": "https://link.coupang.com/a/h4yCmrlocu",
"https://www.coupang.com/vp/products/9754936339?itemId=29207842928&vendorItemId=96127861866": "https://link.coupang.com/a/h4yvHQ4xR6",
"https://www.coupang.com/vp/products/8755066801?itemId=25452859109&vendorItemId=86662807454": "https://link.coupang.com/a/h4yCz3uKB2",
"https://www.coupang.com/vp/products/7809906965?itemId=21180689717&vendorItemId=88242108376": "https://link.coupang.com/a/h4yVZuBjHw",
"https://www.coupang.com/vp/products/9764246902?itemId=29223937240&vendorItemId=96143462815": "https://link.coupang.com/a/h4yvVqgeGa",
"https://www.coupang.com/vp/products/9693291381?itemId=28992181372&vendorItemId=95920898209": "https://link.coupang.com/a/h4yv4BARDU",
"https://www.coupang.com/vp/products/9706023876?itemId=29037570380&vendorItemId=95964848688": "https://link.coupang.com/a/h4yv9k4f7J",
"https://www.coupang.com/vp/products/9341863308?itemId=27705898884&vendorItemId=94667521835": "https://link.coupang.com/a/h4yD0ADJXE",
"https://www.coupang.com/vp/products/8891334198?itemId=25956469714&vendorItemId=92939264257": "https://link.coupang.com/a/h4yEjq6VJ6",
"https://www.coupang.com/vp/products/9129046789?itemId=26859645509&vendorItemId=93829341114": "https://link.coupang.com/a/h4yEwSZHVY",
"https://www.coupang.com/vp/products/8422865063?itemId=24679299661&vendorItemId=92194371971": "https://link.coupang.com/a/h4yEKoTJTw",
"https://www.coupang.com/vp/products/7802103536?itemId=21133080630&vendorItemId=88187119087": "https://link.coupang.com/a/h4yE7iZddY",
"https://www.coupang.com/vp/products/9472433110?itemId=28195372884&vendorItemId=95149776278": "https://link.coupang.com/a/h4yFlaMcdo",
"https://www.coupang.com/vp/products/6696891375?itemId=15496862015&vendorItemId=82716200430": "https://link.coupang.com/a/h4yFDpHCRE",
"https://www.coupang.com/vp/products/9391294222?itemId=27888906485&vendorItemId=94847897071": "https://link.coupang.com/a/h4yFVGOt6i",
"https://www.coupang.com/vp/products/9076944625?itemId=26662196447&vendorItemId=93634579792": "https://link.coupang.com/a/h4yF9pCQUe",
"https://www.coupang.com/vp/products/7967516887?itemId=22052595976&vendorItemId=89099854456": "https://link.coupang.com/a/h4yGrOBLO0",
"https://www.coupang.com/vp/products/7168225958?itemId=18053478941&vendorItemId=85207439907": "https://link.coupang.com/a/h4X9D91xZc",
"https://www.coupang.com/vp/products/9217261085?itemId=27233083492&vendorItemId=94200215269": "https://link.coupang.com/a/h4X3BmePp6",
"https://www.coupang.com/vp/products/9138294948?itemId=26898153844&vendorItemId=93867611266": "https://link.coupang.com/a/h4X3GdAhz2",
"https://www.coupang.com/vp/products/8457521343?itemId=24463547558&vendorItemId=91477190810": "https://link.coupang.com/a/h4YkxvsCaW",
"https://www.coupang.com/vp/products/7714264262?itemId=20686530753&vendorItemId=87743382011": "https://link.coupang.com/a/h4X3OtbZWS",
"https://www.coupang.com/vp/products/9715201596?itemId=29070031034&vendorItemId=95997008907": "https://link.coupang.com/a/h4X3Sp1ANE",
"https://www.coupang.com/vp/products/9113221703?itemId=26797871629&vendorItemId=93804127729": "https://link.coupang.com/a/h4X9ZquCKy",
"https://www.coupang.com/vp/products/9328319111?itemId=27653999534&vendorItemId=95908089472": "https://link.coupang.com/a/h4X31GBevs",
"https://www.coupang.com/vp/products/9205547805?itemId=27185438499&vendorItemId=94152975705": "https://link.coupang.com/a/h4X93Egi7g",
"https://www.coupang.com/vp/products/6868009336?itemId=16420793351&vendorItemId=83611697259": "https://link.coupang.com/a/h4X39uxtgy",
"https://www.coupang.com/vp/products/9138274023?itemId=26898058804&vendorItemId=93867516661": "https://link.coupang.com/a/h4X4dPr9qe",
"https://www.coupang.com/vp/products/6908689237?itemId=16641950587&vendorItemId=83826099581": "https://link.coupang.com/a/h4X4h7ZuyO",
"https://www.coupang.com/vp/products/2211376600?itemId=3764709065&vendorItemId=90889279588": "https://link.coupang.com/a/h4X4miz33A",
"https://www.coupang.com/vp/products/7183430839?itemId=18121492206&vendorItemId=85285276543": "https://link.coupang.com/a/h4X4qQCNm8",
"https://www.coupang.com/vp/products/9395957365?itemId=27904965570&vendorItemId=94863734167": "https://link.coupang.com/a/h4YapnH9zw",
"https://www.coupang.com/vp/products/7335131904?itemId=18840289129&vendorItemId=85969987476": "https://link.coupang.com/a/h4X4zmi6a4",
"https://www.coupang.com/vp/products/7571631091?itemId=19969629795&vendorItemId=87068162804": "https://link.coupang.com/a/h4YatBEobQ",
"https://www.coupang.com/vp/products/8620974140?itemId=25011174901&vendorItemId=92016084011": "https://link.coupang.com/a/h4X4HKDFCe",
"https://www.coupang.com/vp/products/9783383816?itemId=29290143006&vendorItemId=96206334204": "https://link.coupang.com/a/h4X4L6EUhg",
"https://www.coupang.com/vp/products/8017012235?itemId=22391719376&vendorItemId=92731969059": "https://link.coupang.com/a/h4YaKH7L8S",
"https://www.coupang.com/vp/products/9180846358?itemId=27074707949&vendorItemId=94043231291": "https://link.coupang.com/a/h4X4UyeARo",
"https://www.coupang.com/vp/products/8599553600?itemId=24935292129&vendorItemId=91941391436": "https://link.coupang.com/a/h4X4YRUkwe",
"https://www.coupang.com/vp/products/7214723152?itemId=18267520181&vendorItemId=93359496716": "https://link.coupang.com/a/h4X43kNsJ2"
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
  },
  {
    tab: "EP004",
    pov: "가을 가기 전에 인생샷 건져야 할 때",
    looks: [
      { name: "보라 니트 코디", imgs: ["ep4s_l1_1.jpg","ep4s_l1_2.jpg","ep4s_l1_3.jpg"], items: [
        P("보라 꽈배기 크롭 니트", 18100, "7635144862","20272760679","87359755483", "ep4_p1_1.jpg", true),
        P("슬림스판 블랙 미니스커트", 9200, "7689388170","20559040486","93235167770", "ep4_p1_2.jpg", true),
        P("레이스업 통굽 롱부츠", 20920, "9727555034","29109746532","96034530618", "ep4_p1_3.jpg", true)
      ]},
      { name: "가죽 재킷 코디", imgs: ["ep4s_l2_1.jpg","ep4s_l2_2.jpg","ep4s_l2_3.jpg"], items: [
        P("차이나넥 크롭 레더 자켓", 24000, "9366772787","27796177207","94756319737", "ep4_p2_1.jpg", true),
        P("U넥 슬림핏 화이트 티셔츠", 7800, "8953120363","26190436097","93169823495", "ep4_p2_2.jpg", true),
        P("그레이 플리츠 미니스커트", 15740, "9302927485","27559821444","94523883535", "ep4_p2_3.jpg", true),
        P("스판 니하이 롱부츠", 39900, "9183352823","27085754392","94465290207", "ep4_p2_4.jpg", true)
      ]},
      { name: "네이비 셔츠원피스 코디", imgs: ["ep4s_l3_1.jpg","ep4s_l3_2.jpg","ep4s_l3_3.jpg"], items: [
        P("네이비 카라 셔츠 미니 원피스(벨트 세트)", 12710, "7930084076","21809459190","88857966882", "ep4_p3_1.jpg", true),
        P("러블리 청키 메리제인 슈즈", 42900, "9754936339","29207842928","96127861866", "ep4_p3_2.jpg", true),
        P("화이트 중목 양말", 9660, "8755066801","25452859109","86662807454", "ep4_p3_3.jpg", true)
      ]},
      { name: "베이지 트렌치 코디", imgs: ["ep4s_l4_1.jpg","ep4s_l4_2.jpg","ep4s_l4_3.jpg"], items: [
        P("베이지 벨티드 롱 트렌치코트", 47570, "7809906965","21180689717","88242108376", "ep4_p4_1.jpg", true),
        P("블랙 골지 터틀넥 니트", 20900, "9764246902","29223937240","96143462815", "ep4_p4_2.jpg", true),
        P("브라운 롱부츠", 20330, "9693291381","28992181372","95920898209", "ep4_p4_3.jpg", true)
      ]},
      { name: "물방울 원피스 코디", imgs: ["ep4s_l5_1.jpg","ep4s_l5_2.jpg","ep4s_l5_3.jpg"], items: [
        P("블랙 도트 V넥 미니원피스", 20200, "9706023876","29037570380","95964848688", "ep4_p5_1.jpg", true),
        P("러블리 청키 메리제인 슈즈", 42900, "9754936339","29207842928","96127861866", "ep4_p5_2.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP005",
    pov: "옷장 앞에서 한 시간 고민하다 이 코디로 정함",
    looks: [
      { name: "카멜 하프코트 코디", imgs: ["ep5s_l1_1.jpg","ep5s_l1_2.jpg","ep5s_l1_3.jpg"], items: [
        P("하이넥 벨트 하프 모직 코트", 39500, "9779933479","29278586559","96195311236", "ep5_p1_0.jpg", true),
        P("슬림핏 라운드넥 이너 긴팔 티셔츠", 9610, "9174439520","27043977091","94012413021", "ep5_p1_1.jpg", true),
        P("일자 와이드 데님 팬츠", 28900, "8606839174","24960465891","91966215348", "ep5_p1_2.jpg", true),
        P("스퀘어코 통굽 청키힐 로퍼", 39900, "7856039319","21425818521","91021719391", "ep5_p1_3.jpg", true)
      ]},
      { name: "레더 재킷 코디", imgs: ["ep5s_l2_1.jpg","ep5s_l2_2.jpg","ep5s_l2_3.jpg"], items: [
        P("페이크레더 크롭 라이더 자켓", 19800, "7563062886","19929716691","87029283719", "ep5_p2_1.jpg", true),
        P("슬림 라운드넥 반팔 티셔츠", 10800, "8723437347","25340902384","92515479039", "ep5_p2_2.jpg", true),
        P("일자핏 팬츠", 13800, "7910721348","23980109638","91001293914", "ep5_p2_3.jpg", true),
        P("스퀘어 통굽 롱부츠", 31900, "7655849401","20382510946","91386951959", "ep5_p2_4.jpg", true)
      ]},
      { name: "그레이 블레이저 코디", imgs: ["ep5s_l3_1.jpg","ep5s_l3_2.jpg","ep5s_l3_3.jpg"], items: [
        P("더블 원버튼 자켓", 44800, "8323410071","26580838304","93554247977", "ep5_p3_1.jpg", true),
        P("심플 플리츠 스커트", 18360, "9129046789","26859645504","93829341117", "ep5_p3_2.jpg", true)
      ]},
      { name: "와인 니트 원피스 코디", imgs: ["ep5s_l4_1.jpg","ep5s_l4_2.jpg","ep5s_l4_3.jpg"], items: [
        P("슬림 골지 브이넥 니트원피스", 21510, "8552726718","4083869763","93170933263", "ep5_p4_1.jpg", true)
      ]},
      { name: "셔츠 플리츠 코디", imgs: ["ep5s_l5_1.jpg","ep5s_l5_2.jpg","ep5s_l5_3.jpg"], items: [
        P("오버핏 롱셔츠 블라우스", 15900, "7910205840","21702609963","91954556644", "ep5_p5_1.jpg", true),
        P("네이비 하이웨스트 플리츠 미니스커트", 15740, "9302927485","27559821477","94523883524", "ep5_p5_2.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP006",
    pov: "낙엽 길만 걸어도 화보 되는 가을 코디",
    looks: [
      { name: "러스트 코듀로이 코디", imgs: ["ep6s_l1_1.jpg","ep6s_l1_2.jpg","ep6s_l1_3.jpg"], items: [
        P("코듀로이 크롭 포켓 자켓", 31900, "9152197200","26949792027","93918873343", "ep6_p1_1.jpg", true),
        P("심플 플리츠 스커트", 18360, "9129046789","26859645504","93829341117", "ep6_p1_2.jpg", true),
        P("통굽 슬림핏 하이부츠", 30400, "9304854568","27566493290","94530502046", "ep6_p1_3.jpg", true)
      ]},
      { name: "올리브 트렌치 코디", imgs: ["ep6s_l2_1.jpg","ep6s_l2_2.jpg","ep6s_l2_3.jpg"], items: [
        P("더블 벨티드 롱 트렌치 코트", 54700, "8349404281","26818905215","93789109694", "ep6_p2_1.jpg", true),
        P("통굽 슬림핏 하이부츠", 30400, "9304854568","27566493290","94530502046", "ep6_p2_2.jpg", true)
      ]},
      { name: "버건디 가디건 코디", imgs: ["ep6s_l3_1.jpg","ep6s_l3_2.jpg","ep6s_l3_3.jpg"], items: [
        P("브이넥 소프트 니트 가디건", 19800, "9701022570","29019791933","95947538909", "ep6_p3_1.jpg", true),
        P("캐주얼 플리츠 스커트", 15740, "9302927485","27559821414","94523883504", "ep6_p3_2.jpg", true),
        P("통굽 슬림핏 하이부츠", 30400, "9304854568","27566493290","94530502046", "ep6_p3_3.jpg", true)
      ]},
      { name: "레드 체크 원피스 코디", imgs: ["ep6s_l4_1.jpg","ep6s_l4_2.jpg","ep6s_l4_3.jpg"], items: [
        P("빈티지 체크 셔츠 미니 원피스", 40110, "9264905410","27416094712","94381663249", "ep6_p4_1.jpg", true),
        P("통굽 슬림핏 하이부츠", 30400, "9304854568","27566493290","94530502046", "ep6_p4_2.jpg", true)
      ]},
      { name: "그린 니트 코디", imgs: ["ep6s_l5_1.jpg","ep6s_l5_2.jpg","ep6s_l5_3.jpg"], items: [
        P("라운드 데일리 니트", 14480, "8952726300","26188951599","93168370284", "ep6_p5_1.jpg", true),
        P("H라인 데님 미니스커트", 20900, "9771570132","29248838436","96167036793", "ep6_p5_2.jpg", true),
        P("통굽 슬림핏 하이부츠", 30400, "9304854568","27566493290","94530502046", "ep6_p5_3.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP007",
    pov: "겨울 오기 전에 호수 가야 하는 인생 코디",
    looks: [
      { name: "블랙 숏 패딩 코디", imgs: ["ep7s_l1_1.jpg","ep7s_l1_2.jpg","ep7s_l1_3.jpg"], items: [
        P("베이직 숏 패딩 점퍼", 19500, "9099623568","26748846509","93741502462", "ep7_p1_1.jpg", true),
        P("캐주얼 플리츠 스커트(그레이)", 15740, "9302927485","27559821444","94523883535", "ep7_p1_2.jpg", true),
        P("니하이 스판 롱부츠", 52100, "8287892182","23900321428","90922874022", "ep7_p1_3.jpg", true)
      ]},
      { name: "퍼 칼라 랩코트 코디", imgs: ["ep7s_l2_1.jpg","ep7s_l2_2.jpg","ep7s_l2_3.jpg"], items: [
        P("퍼트리밍 벨트 하프코트", 42600, "9776920466","29268063828","96185423157", "ep7_p2_1.jpg", true),
        P("니하이 스판 롱부츠", 52100, "8287892182","23900321428","90922874022", "ep7_p2_2.jpg", true)
      ]},
      { name: "그레이 터틀 원피스 코디", imgs: ["ep7s_l3_1.jpg","ep7s_l3_2.jpg","ep7s_l3_3.jpg"], items: [
        P("터틀넥 셔링 원피스", 16900, "9328317762","27653994076","94921926484", "ep7_p3_1.jpg", true),
        P("니하이 스판 롱부츠", 52100, "8287892182","23900321428","90922874022", "ep7_p3_2.jpg", true)
      ]},
      { name: "베이지 니트 코디", imgs: ["ep7s_l4_1.jpg","ep7s_l4_2.jpg","ep7s_l4_3.jpg"], items: [
        P("울 랩 스타일 롱 코트", 104000, "9766562679","29231813844","96150843852", "ep7_p4_1.jpg", true),
        P("오프넥 니트 슬림 원피스(베이지)", 27180, "8971720618","26258122341","93236485994", "ep7_p4_2.jpg", true),
        P("니하이 스판 롱부츠", 52100, "8287892182","23900321428","90922874022", "ep7_p4_3.jpg", true)
      ]},
      { name: "핑크 가디건 코디", imgs: ["ep7s_l5_1.jpg","ep7s_l5_2.jpg","ep7s_l5_3.jpg"], items: [
        P("보송 폭닥 라운드넥 니트 가디건", 18900, "8657689478","25127789895","92175125368", "ep7_p5_1.jpg", true),
        P("니트 플레어 스커트", 27000, "7579095839","20003432455","87068071716", "ep7_p5_2.jpg", true),
        P("니하이 스판 롱부츠", 52100, "8287892182","23900321428","90922874022", "ep7_p5_3.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP008",
    pov: "비 그치면 입으려고 아껴둔 코디 꺼냄",
    looks: [
      { name: "네이비 더블 코트 코디", imgs: ["ep8s_l1_1.jpg","ep8s_l1_2.jpg","ep8s_l1_3.jpg"], items: [
        P("네이비 벨트 롱 트렌치 코트", 47820, "9341863308","27705898884","94667521835", "ep8_p1_1.jpg", true),
        P("그레이 라운드넥 니트 티셔츠", 13140, "8891334198","25956469714","92939264257", "ep8_p1_2.jpg", true),
        P("블랙 플리츠 스커트", 18360, "9129046789","26859645509","93829341114", "ep8_p1_3.jpg", true),
        P("블랙 롱부츠", 41540, "8422865063","24679299661","92194371971", "ep8_p1_4.jpg", true)
      ]},
      { name: "블랙 리브 니트 원피스 코디", imgs: ["ep8s_l2_1.jpg","ep8s_l2_2.jpg","ep8s_l2_3.jpg"], items: [
        P("블랙 브이넥 니트 롱 원피스", 34200, "7802103536","21133080630","88187119087", "ep8_p2_1.jpg", true),
        P("블랙 롱부츠", 41540, "8422865063","24679299661","92194371971", "ep8_p2_2.jpg", true)
      ]},
      { name: "아이보리 니트 세트 코디", imgs: ["ep8s_l3_1.jpg","ep8s_l3_2.jpg","ep8s_l3_3.jpg"], items: [
        P("아이보리 니트 원피스 가디건 세트", 35820, "9472433110","28195372884","95149776278", "ep8_p3_1.jpg", true),
        P("베이지 삭스 롱부츠", 52200, "6696891375","15496862015","82716200430", "ep8_p3_2.jpg", true)
      ]},
      { name: "라이트블루 트위드 코디", imgs: ["ep8s_l4_1.jpg","ep8s_l4_2.jpg","ep8s_l4_3.jpg"], items: [
        P("라이트블루 트위드 자켓 스커트 세트", 39970, "9391294222","27888906485","94847897071", "ep8_p4_1.jpg", true),
        P("블랙 롱부츠", 41540, "8422865063","24679299661","92194371971", "ep8_p4_2.jpg", true)
      ]},
      { name: "브라운 스웨이드 재킷 코디", imgs: ["ep8s_l5_1.jpg","ep8s_l5_2.jpg","ep8s_l5_3.jpg"], items: [
        P("브라운 스웨이드 자켓", 34900, "9076944625","26662196447","93634579792", "ep8_p5_1.jpg", true),
        P("베이지 골지 니트 티셔츠", 24900, "7967516887","22052595976","89099854456", "ep8_p5_2.jpg", true),
        P("블랙 플리츠 스커트", 18360, "9129046789","26859645509","93829341114", "ep8_p5_3.jpg", true),
        P("브라운 롱부츠", 20330, "9693291381","28992181372","95920898209", "ep8_p5_4.jpg", true)
      ]}
    ]
  },
  {
    tab: "EP009",
    pov: "일교차 큰 날 카페 거리 나갈 때 입는 코디",
    looks: [
      { name: "블랙 레더 재킷 코디", imgs: ["ep9s_l1_1.jpg"], items: [
        {name:"블랙 오버핏 레더 자켓", price:44500, ok:true, hide:false, url:"https://link.coupang.com/a/h6uHuIuc0G", img:"ep9f_l1_1.jpg"},
        {name:"화이트 슬림핏 긴팔 티셔츠", price:7900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uJuWeIQS", img:"ep9f_l1_2.jpg"},
        {name:"블랙 플리츠 미니스커트", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQqkMWnR", img:"ep9f_l1_3.jpg"},
        {name:"레드 머플러 스카프", price:23900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uJ6vw4ei", img:"ep9f_l1_4.jpg"},
        {name:"블랙 청키 숏부츠", price:29900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uKoOo2Gy", img:"ep9f_l1_5.jpg"},
        {name:"블랙 퀼팅 체인 크로스백", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/h8bJ32AEgK", img:"ep9f_l1_6.jpg"}
      ]},
      { name: "헤어리 니트 코디", imgs: ["ep9s_l2_1.jpg"], items: [
        {name:"아이보리 헤어리 롱 니트", price:25250, ok:true, hide:false, url:"https://link.coupang.com/a/h6uKHlrhdI", img:"ep9f_l2_1.jpg"},
        {name:"레드 블랙 체크 플리츠 미니", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uKZ1AvVQ", img:"ep9f_l2_2.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep9f_l2_3.jpg"},
        {name:"블랙 롱부츠", price:41320, ok:true, hide:false, url:"https://link.coupang.com/a/h6uLAGton6", img:"ep9f_l2_4.jpg"},
        {name:"블랙 퀼팅 체인 크로스백", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/h8bJ32AEgK", img:"ep9f_l2_5.jpg"}
      ]},
      { name: "핑크 가디건 코디", imgs: ["ep9s_l3_1.jpg"], items: [
        {name:"핑크 라운드넥 니트 가디건", price:18900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uMgcEQ3w", img:"ep9f_l3_1.jpg"},
        {name:"화이트 레이스 캐미솔", price:12500, ok:true, hide:false, url:"https://link.coupang.com/a/h6uMyEP4mG", img:"ep9f_l3_2.jpg"},
        {name:"블랙 리본 벌룬 미니스커트", price:16110, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQ8BHyCW", img:"ep9f_l3_3.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep9f_l3_4.jpg"},
        {name:"블랙 청키 로퍼", price:27900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uM9Dutxs", img:"ep9f_l3_5.jpg"},
        {name:"블랙 퀼팅 체인 크로스백", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/h8bJ32AEgK", img:"ep9f_l3_6.jpg"}
      ]},
      { name: "가지색 니트 코디", imgs: ["ep9s_l4_1.jpg"], items: [
        {name:"퍼플(가지색) 라운드넥 니트", price:14500, ok:true, hide:false, url:"https://link.coupang.com/a/h6uNr5Y7ZA", img:"ep9f_l4_1.jpg"},
        {name:"블랙 플리츠 미니스커트", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQqkMWnR", img:"ep9f_l4_2.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep9f_l4_3.jpg"},
        {name:"블랙 청키 로퍼", price:27900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uM9Dutxs", img:"ep9f_l4_4.jpg"},
        {name:"블랙 퀼팅 체인 크로스백", price:19900, ok:true, hide:false, url:"https://link.coupang.com/a/h8bJ32AEgK", img:"ep9f_l4_5.jpg"}
      ]},
      { name: "퍼 재킷 코디", imgs: ["ep9s_l5_1.jpg"], items: [
        {name:"브라운 페이크 퍼 자켓", price:49410, ok:true, hide:false, url:"https://link.coupang.com/a/h6uNKykpIy", img:"ep9f_l5_1.jpg"},
        {name:"화이트 목폴라 니트", price:13190, ok:true, hide:false, url:"https://link.coupang.com/a/h6uN27dBLg", img:"ep9f_l5_2.jpg"},
        {name:"블랙 플리츠 미니스커트", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQqkMWnR", img:"ep9f_l5_3.jpg"},
        {name:"블랙 롱부츠", price:41320, ok:true, hide:false, url:"https://link.coupang.com/a/h6uLAGton6", img:"ep9f_l5_4.jpg"},
        {name:"레드 미니 크로스백", price:14950, ok:true, hide:false, url:"https://link.coupang.com/a/h6uOlqUHbo", img:"ep9f_l5_5.jpg"}
      ]}
    ]
  },
  {
    tab: "EP010",
    pov: "연말 약속 코디 고르다 옷장 다 꺼내놓음",
    looks: [
      { name: "크림 헤어리 니트 코디", imgs: ["ep10s_l1_1.jpg"], items: [
        {name:"아이보리 헤어리 롱 니트", price:25250, ok:true, hide:false, url:"https://link.coupang.com/a/h6uKHlrhdI", img:"ep10f_l1_1.jpg"},
        {name:"레드 블랙 체크 플리츠 미니", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uKZ1AvVQ", img:"ep10f_l1_2.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep10f_l1_3.jpg"},
        {name:"블랙 롱부츠", price:41320, ok:true, hide:false, url:"https://link.coupang.com/a/h6uLAGton6", img:"ep10f_l1_4.jpg"}
      ]},
      { name: "레더 재킷·레드 스카프 코디", imgs: ["ep10s_l2_1.jpg"], items: [
        {name:"블랙 오버핏 레더 자켓", price:44500, ok:true, hide:false, url:"https://link.coupang.com/a/h6uHuIuc0G", img:"ep10f_l2_1.jpg"},
        {name:"화이트 슬림핏 긴팔 티셔츠", price:7900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uJuWeIQS", img:"ep10f_l2_2.jpg"},
        {name:"블랙 플리츠 미니스커트", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQqkMWnR", img:"ep10f_l2_3.jpg"},
        {name:"레드 머플러 스카프", price:23900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uJ6vw4ei", img:"ep10f_l2_4.jpg"},
        {name:"블랙 청키 로퍼", price:27900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uM9Dutxs", img:"ep10f_l2_5.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep10f_l2_6.jpg"}
      ]},
      { name: "핑크 가디건 코디", imgs: ["ep10s_l3_1.jpg"], items: [
        {name:"핑크 라운드넥 니트 가디건", price:18900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uMgcEQ3w", img:"ep10f_l3_1.jpg"},
        {name:"화이트 레이스 캐미솔", price:12500, ok:true, hide:false, url:"https://link.coupang.com/a/h6uMyEP4mG", img:"ep10f_l3_2.jpg"},
        {name:"블랙 리본 벌룬 미니스커트", price:16110, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQ8BHyCW", img:"ep10f_l3_3.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep10f_l3_4.jpg"},
        {name:"블랙 롱부츠", price:41320, ok:true, hide:false, url:"https://link.coupang.com/a/h6uLAGton6", img:"ep10f_l3_5.jpg"}
      ]},
      { name: "가지색 니트 코디", imgs: ["ep10s_l4_1.jpg"], items: [
        {name:"퍼플(가지색) 라운드넥 니트", price:14500, ok:true, hide:false, url:"https://link.coupang.com/a/h6uNr5Y7ZA", img:"ep10f_l4_1.jpg"},
        {name:"레드 블랙 체크 플리츠 미니", price:17900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uKZ1AvVQ", img:"ep10f_l4_2.jpg"},
        {name:"블랙 150D 스타킹", price:12800, ok:true, hide:false, url:"https://link.coupang.com/a/h6uUSdOu0O", img:"ep10f_l4_3.jpg"},
        {name:"블랙 롱부츠", price:41320, ok:true, hide:false, url:"https://link.coupang.com/a/h6uLAGton6", img:"ep10f_l4_4.jpg"}
      ]},
      { name: "퍼 재킷 코디", imgs: ["ep10s_l5_1.jpg"], items: [
        {name:"브라운 페이크 퍼 자켓", price:49410, ok:true, hide:false, url:"https://link.coupang.com/a/h6uNKykpIy", img:"ep10f_l5_1.jpg"},
        {name:"화이트 목폴라 니트", price:13190, ok:true, hide:false, url:"https://link.coupang.com/a/h6uN27dBLg", img:"ep10f_l5_2.jpg"},
        {name:"블랙 플리츠 미니스커트", price:14900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uQqkMWnR", img:"ep10f_l5_3.jpg"},
        {name:"블랙 청키 로퍼", price:27900, ok:true, hide:false, url:"https://link.coupang.com/a/h6uM9Dutxs", img:"ep10f_l5_4.jpg"},
        {name:"레드 미니 크로스백", price:14950, ok:true, hide:false, url:"https://link.coupang.com/a/h6uOlqUHbo", img:"ep10f_l5_5.jpg"}
      ]}
    ]
  }
];
