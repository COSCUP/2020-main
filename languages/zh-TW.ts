import { Language } from './index'

const language: Language = {
  languageSwitch: 'En',
  menu: {
    home: 'COSCUP 2020',
    agenda: '議程表',
    map: '會場地圖',
    venue: '交通',
    sponsor: '贊助',
    staff: '工作人員',
    blog: '部落格',
    'press-release': '媒體專區',
    coc: '社群守則'
  },
  home: {
    info: {
      venue: '國立臺灣科技大學',
      tabs: {
        announcement: '最新公告'
      }
    },
    notice: {
      title: 'COSCUP 2020 須知',
      content: '今年 COSCUP2020 首次嘗試不用報名、自由入場的方式進行。但因為疫情的關係，需要在活動日 2020-08-01 出示「健康聲明表」才可以進場。\n「健康聲明表」開放填寫的時間為：2020-07-20\n\n※如果怕忘記填寫時間，可以訂閱 COSCUP 的活動電子報，我們會在合適的時間點提醒你！\n\n[馬上訂閱！](https://secretary.coscup.org/subscribe/coscup)\n\n別忘了，今年的進場方式是「不用報名」+「健康聲明表」\n\n對了，還有 COSCUP 前夜派對，我們預計在 2020-07-15 開放購票，詳細的活動地點與時間會在 2020-07-04 公告！'
    },
    about: {
      title: '關於 COSCUP',
      content: 'COSCUP 是由台灣開放原始碼社群聯合推動的年度研討會，起源於 2006 年，是台灣自由軟體運動 (FOSSM) 重要的推動者之一。活動包括有講座、攤位、社團同樂會等，除了邀請國際的重量級演講者之外，台灣本土的自由軟體推動者也經常在此發表演說，會議的發起人、工作人員與講者都是志願參與的志工。COSCUP 的宗旨在於提供一個聯結開放原始碼開發者、使用者與推廣者的平台。希望藉由每年一度的研討會，來推動自由及開放原始碼軟體 (FLOSS)。由於有許多贊助商及熱心捐助者，所有議程都是免費參加，但因會場人數限制，通常在一開放網路報名後就會立刻額滿。\n\n開放原始碼 (Open source) 是在 1998 年出現的名詞，大家早已耳熟能詳。這種在網路上已經進行二、三十年的軟體開發模式之所以能成功，有許多原因。其中一個極為關鍵的因素，就是開發者與使用者的直接接觸。無屏障的交流加速了問題的回報和修補機制，而當這個機制被網路效應放大到極限時，Linus 定律就出現了：「臭蟲難逃眾人法眼」(With enough eyeballs, all bugs are shallow)，軟體品質因此顯著提昇。在開放原始碼的模式中，開發者和使用者中間的人不再是銷售員或客服，而是讓軟體更容易被接受的推廣者 (Promoters)，他們打包套件讓軟體更好裝、寫說明文件讓軟體更易學、辦推廣活動讓更多人接觸到好軟體、在網路上回答問題解決使用者的疑惑，而且不會把開發者藏在背後產生資訊的不對稱。\n\n開發者 (Coders)、使用者 (Users) 和推廣者 (Promoters) 是讓自由及開放原始碼軟體發光發熱的三大支柱，這個研討會就是專為這三種人舉辦的：你可以是 A 軟體的開發者、B 軟體的推廣者、C 軟體的使用者，不論你是已經踏入自由及開放原始碼軟體領域，還是一直站在門口不知如何入門，歡迎你來參加 COSCUP — Conference for Open Source Coders, Users and Promoters!\n'
    }
  },
  sponsor: {
    callForSponsorship: {
      title: '贊助我們',
      content: '請聯絡'
    },
    level: {
      titanium: '鈦金級贊助',
      diamond: '鑽石級贊助',
      gold: '黃金級贊助',
      silver: '白銀級贊助',
      bronze: '青銅級贊助',
      'co-organizer': '協辦單位',
      'special-thanks': '特別感謝'
    }
  },
  venue: {
    title: '交通',
    name: '國立臺灣科技大學',
    address: '106 台北市大安區基隆路四段 43 號',
    plans: {
      臺北捷運: '- 搭乘捷運松山新店線：\n  - 由公館站 2 號「銘傳國小」出口左轉，沿台大舟山路步行，於鹿鳴堂右轉，過基隆路後左行即可達\n  - 於公館站1號「水源市場」出口，往基隆路方向，轉乘公車： 1、673、907、綠 11、棕 12。\n- 搭乘捷運文湖線：\n  - 於捷運六張犁站任意出口，往公館方向，轉乘公車：1、207、672 或基隆路幹線。',
      公車: '1、207、254、275、275 副線、275 區間車、672、673、907、綠 11、棕 12、敦化幹線或基隆路幹線。',
      自行開車: '- 由中山高速公路下圓山交流道，接台北市建國南北高架道路，下辛亥路往木柵方向行駛，於辛亥路二段與基隆路交叉口（台大校園旁）右轉，過長興街後即可到達台灣科技大學。\n- 由北二高接台北聯絡道，於辛亥路三段與基隆路交叉口左轉，過長興街後即可到達台灣科技大學。',
      停車資訊: '- 台灣科技大學國際大樓停車場\n  - 地址：台北市大安區基隆路四段41巷\n  - 收費：40 元/hr （30分鐘內不計費；過30分未滿1小時以1小時計）\n- 台灣科技大學研揚大樓停車場\n  - 地址：台北市大安區基隆路三段155巷\n  - 收費：40 元/hr （30分鐘內不計費；過30分未滿1小時以1小時計）',
      桃園機場: '台北車站為臺鐵、台灣高鐵、臺北捷運與桃園機場捷運四大交通方式的共站的車站，COSCUP 為您提供桃園機場至台北車站的交通方式。\n\n- 桃園機場捷運線直達台北車站\n  - 進入接機大廳後，前往 B1 搭乘『桃園機場捷運 - 直達專車』至台北車站。\n- 搭乘高鐵至台北車站\n  - 進入接機大廳後，前往 B1 搭乘『桃園機場捷運 - 普通車』至高鐵桃園站，搭乘高鐵至台北車站\n  - 進入接機大廳後，前往客運購票處，搭乘『統聯 705 接駁巴士』，抵達高鐵桃園站，換乘高鐵至台北車站。'
    }
  },
  staff: {
    groups: {
      secretary: '行政組',
      coordinator: '總召組',
      program: '議程組',
      field: '場務組',
      streaming: '紀錄組',
      finance: '財務組',
      marketing: '行銷組',
      it: '資訊組',
      photo: '攝影組',
      sponsor: '贊助組'
    }
  },
  footer: {
    websites: '歷年網站',
    social: '社群媒體'
  }
}

export default language
