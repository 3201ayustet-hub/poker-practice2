const DATA = {
  "version": "7.0",
  "matrix": [
    [
      "AA",
      "AKs",
      "AQs",
      "AJs",
      "ATs",
      "A9s",
      "A8s",
      "A7s",
      "A6s",
      "A5s",
      "A4s",
      "A3s",
      "A2s"
    ],
    [
      "AKo",
      "KK",
      "KQs",
      "KJs",
      "KTs",
      "K9s",
      "K8s",
      "K7s",
      "K6s",
      "K5s",
      "K4s",
      "K3s",
      "K2s"
    ],
    [
      "AQo",
      "KQo",
      "QQ",
      "QJs",
      "QTs",
      "Q9s",
      "Q8s",
      "Q7s",
      "Q6s",
      "Q5s",
      "Q4s",
      "Q3s",
      "Q2s"
    ],
    [
      "AJo",
      "KJo",
      "QJo",
      "JJ",
      "JTs",
      "J9s",
      "J8s",
      "J7s",
      "J6s",
      "J5s",
      "J4s",
      "J3s",
      "J2s"
    ],
    [
      "ATo",
      "KTo",
      "QTo",
      "JTo",
      "TT",
      "T9s",
      "T8s",
      "T7s",
      "T6s",
      "T5s",
      "T4s",
      "T3s",
      "T2s"
    ],
    [
      "A9o",
      "K9o",
      "Q9o",
      "J9o",
      "T9o",
      "99",
      "98s",
      "97s",
      "96s",
      "95s",
      "94s",
      "93s",
      "92s"
    ],
    [
      "A8o",
      "K8o",
      "Q8o",
      "J8o",
      "T8o",
      "98o",
      "88",
      "87s",
      "86s",
      "85s",
      "84s",
      "83s",
      "82s"
    ],
    [
      "A7o",
      "K7o",
      "Q7o",
      "J7o",
      "T7o",
      "97o",
      "87o",
      "77",
      "76s",
      "75s",
      "74s",
      "73s",
      "72s"
    ],
    [
      "A6o",
      "K6o",
      "Q6o",
      "J6o",
      "T6o",
      "96o",
      "86o",
      "76o",
      "66",
      "65s",
      "64s",
      "63s",
      "62s"
    ],
    [
      "A5o",
      "K5o",
      "Q5o",
      "J5o",
      "T5o",
      "95o",
      "85o",
      "75o",
      "65o",
      "55",
      "54s",
      "53s",
      "52s"
    ],
    [
      "A4o",
      "K4o",
      "Q4o",
      "J4o",
      "T4o",
      "94o",
      "84o",
      "74o",
      "64o",
      "54o",
      "44",
      "43s",
      "42s"
    ],
    [
      "A3o",
      "K3o",
      "Q3o",
      "J3o",
      "T3o",
      "93o",
      "83o",
      "73o",
      "63o",
      "53o",
      "43o",
      "33",
      "32s"
    ],
    [
      "A2o",
      "K2o",
      "Q2o",
      "J2o",
      "T2o",
      "92o",
      "82o",
      "72o",
      "62o",
      "52o",
      "42o",
      "32o",
      "22"
    ]
  ],
  "preflopChoices": [
    "Value",
    "Mix Value",
    "Mix Bluff",
    "Call",
    "Fold"
  ],
  "boardAdvantageChoices": [
    "Dry / PFR有利",
    "Semi Dry / PFR有利",
    "Wet / ほぼ互角",
    "Low / Caller有利",
    "Paired / PFR有利"
  ],
  "preflopQuestions": [
    {
      "id": "PFO001",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "AA",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "UTGでもAAは当然オープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "AAは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO002",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "AQs",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "AQsはUTGの強いオープンレンジに入る。",
      "tags": [
        "open"
      ],
      "sharkTip": "AQsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO003",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "KQs",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "KQsはUTGからでも十分強い。",
      "tags": [
        "open"
      ],
      "sharkTip": "KQsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO004",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "A5s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "A5sはAブロッカーとホイール可能性があり、UTGでは混合。",
      "tags": [
        "open"
      ],
      "sharkTip": "A5sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO005",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "A4s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "A4sもAブロッカーを使えるが毎回ではない。",
      "tags": [
        "open"
      ],
      "sharkTip": "A4sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO006",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "KTs",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "KTsはプレイアビリティは高いがUTGでは境界。",
      "tags": [
        "open"
      ],
      "sharkTip": "KTsはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO007",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "76s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "76sはUTGではかなり境界寄り。",
      "tags": [
        "open"
      ],
      "sharkTip": "76sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO008",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "KJo",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "KJoはUTGでは支配されやすい。",
      "tags": [
        "open"
      ],
      "sharkTip": "KJoはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO009",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "QTo",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "QToはオフスートでUTGからは弱い。",
      "tags": [
        "open"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO010",
      "type": "preflop-open",
      "spot": "UTG Open",
      "heroPosition": "UTG",
      "hand": "44",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "小さいポケットはUTGでは無理しない簡略レンジ。",
      "tags": [
        "open"
      ],
      "sharkTip": "44はこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO011",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "BTNでもAAは当然オープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "AAは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO012",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "KTsはBTNでは十分強い。K2sより強いためValue Open側。",
      "tags": [
        "open"
      ],
      "sharkTip": "KTsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO013",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "K2s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "BTNは広く開けるためK2sもオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "K2sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO014",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "Q5s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "Q5sはBTNならオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "Q5sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO015",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "54s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "54sはポジション有利とプレイアビリティでオープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "54sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO016",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "Q4s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "Q4sはBTNでも境界ハンド。",
      "tags": [
        "open"
      ],
      "sharkTip": "Q4sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO017",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "A5o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "A5oはBTNで混合。相手次第で調整。",
      "tags": [
        "open"
      ],
      "sharkTip": "A5oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO018",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "K8o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "K8oはBTNの境界オフスート。",
      "tags": [
        "open"
      ],
      "sharkTip": "K8oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO019",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "J8o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "J8oはBTNの境界ハンド。",
      "tags": [
        "open"
      ],
      "sharkTip": "J8oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO020",
      "type": "preflop-open",
      "spot": "BTN Open",
      "heroPosition": "BTN",
      "hand": "72o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "72oはBTNでも弱い。",
      "tags": [
        "open"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO021",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "AA",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "SB First InでもAAは当然オープン。",
      "tags": [
        "open"
      ],
      "sharkTip": "AAは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO022",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A9s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "A9sはSBから強く使える。",
      "tags": [
        "open"
      ],
      "sharkTip": "A9sは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO023",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "KTs",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 1,
      "label": "Value Open",
      "practicalLabel": "Value Open",
      "frequencyHint": "Value Open",
      "explanation": "KTsはSB First Inでは強いオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "KTsは強いハンド。相手にコールされても利益が出やすいので、積極的に攻めよう。"
    },
    {
      "id": "PFO024",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "77",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "77はSBではオープン中心だが混合扱い。",
      "tags": [
        "open"
      ],
      "sharkTip": "77はオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO025",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "A5sはSBではBBにプレッシャーをかけられる。",
      "tags": [
        "open"
      ],
      "sharkTip": "A5sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO026",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "K2s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "K2sはSBでは境界だがオープン候補。",
      "tags": [
        "open"
      ],
      "sharkTip": "K2sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO027",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "65s",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "65sはプレイアビリティがある境界ハンド。",
      "tags": [
        "open"
      ],
      "sharkTip": "65sはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO028",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "K9o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Open",
      "practicalLabel": "Mix Open",
      "frequencyHint": "Mix Open",
      "explanation": "K9oはSB First Inで相手次第。",
      "tags": [
        "open"
      ],
      "sharkTip": "K9oはオープンとフォールドが混ざる境界ハンド。BTNなら広く、UTGなら慎重に使おう。"
    },
    {
      "id": "PFO029",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "Q5o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "Q5oはオフスートで弱くFold。",
      "tags": [
        "open"
      ],
      "sharkTip": "Q5oはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "PFO030",
      "type": "preflop-open",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "72o",
      "choices": [
        "Value Open",
        "Mix Open",
        "Fold"
      ],
      "answer": 3,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "72oは最弱級でFold。",
      "tags": [
        "open"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。降りる判断も立派な戦略だよ。"
    },
    {
      "id": "OLDPF001",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AAはUTG相手でも明確なバリュー3bet。最強レンジで大きくポットを作る。",
      "tags": [
        "value",
        "premium",
        "utg-btn"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF002",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KK",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "KKも明確なValue。AA以外には大きく有利。",
      "tags": [
        "value",
        "premium",
        "utg-btn"
      ],
      "sharkTip": "KKは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF003",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QQ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "QQはUTG相手でも十分強く、Valueに分類。",
      "tags": [
        "value",
        "premium",
        "utg-btn"
      ],
      "sharkTip": "QQは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF004",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AKsはA/Kブロッカーと高いエクイティがありValue。",
      "tags": [
        "value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AKsは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF005",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AKoは強いブロッカーと高カード価値でValue。",
      "tags": [
        "value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AKoは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF006",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "JJは強いが、UTGの上位レンジにぶつかるためMix Value。",
      "tags": [
        "mix-value",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "JJは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "OLDPF007",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "TT",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "TTは強いポケットだが、UTG相手には3bet固定ではなくMix。",
      "tags": [
        "mix-value",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "TTは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "OLDPF008",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AQsは強いスーテッドブロードウェイ。Callも3betも成立する。",
      "tags": [
        "mix-value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF009",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AQoは強いがAK/QQ+にぶつかるためMix Value。",
      "tags": [
        "mix-value",
        "broadway",
        "utg-btn"
      ],
      "sharkTip": "AQoは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "OLDPF010",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "KQsはプレイアビリティが高いが、UTG相手にはMix。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "KQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "OLDPF011",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはAブロッカーとホイール可能性があり、3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-btn"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF012",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A4s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A4sもAブロッカーを持ち、低頻度の3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-btn"
      ],
      "sharkTip": "A4sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF013",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A2s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A2sはAブロッカーとスーテッド価値でMix Bluffに使える。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-btn"
      ],
      "sharkTip": "A2sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF014",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "KTsはブロッカーとスーテッド価値があるが、実戦簡略化ではCallでも良い。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "OLDPF015",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "99は3bet Valueには足りないが、セットやミドルボードで戦える。",
      "tags": [
        "call",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "99はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF016",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "88",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "88はセットマインとショーダウン価値がありCall。",
      "tags": [
        "call",
        "pair",
        "utg-btn"
      ],
      "sharkTip": "88はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF017",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "AJsは強いスーテッドブロードウェイで、IPでCallしやすい。",
      "tags": [
        "call",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "AJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF018",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "QJsはスーテッド＋接続性があり、IPでプレイしやすい。",
      "tags": [
        "call",
        "suited-broadway",
        "utg-btn"
      ],
      "sharkTip": "QJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF019",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "中頻度Call",
      "explanation": "76sはIPで実現率が高く、ナッツを作れる。",
      "tags": [
        "call",
        "suited-connector",
        "utg-btn"
      ],
      "sharkTip": "76sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF020",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KJo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "KJoはUTGの強いKx/Axに支配されやすい。",
      "tags": [
        "fold",
        "offsuit",
        "utg-btn"
      ],
      "sharkTip": "KJoはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF021",
      "type": "preflop",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "QToはオフスートでドミネーションされやすくFold。",
      "tags": [
        "fold",
        "offsuit",
        "utg-btn"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF022",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNレンジは広いため、AAは明確なValue 3bet。",
      "tags": [
        "value",
        "premium",
        "btn-bb"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF023",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNオープンに対してJJは十分強いValue。",
      "tags": [
        "value",
        "pair",
        "btn-bb"
      ],
      "sharkTip": "JJは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF024",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AQo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNの広いレンジに対してAQoはValue 3bet。",
      "tags": [
        "value",
        "broadway",
        "btn-bb"
      ],
      "sharkTip": "AQoは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF025",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AJsは強いが、BBでは3betとCallが混ざる。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "AJsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF026",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "KQsはプレイアビリティが高く、Mix Value。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "KQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF027",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "3bet/Call混合",
      "explanation": "99は強いディフェンスハンドで、3betもCallもある。",
      "tags": [
        "mix-value",
        "pair",
        "btn-bb"
      ],
      "sharkTip": "99は強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "OLDPF028",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはAブロッカーでBTNを降ろす3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "btn-bb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF029",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "KTsはGTO寄りではMix Bluff。実戦簡略化ならCallでも自然。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "OLDPF030",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "QTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "QTsはスーテッド＋接続性があり、3betブラフにもCallにも使える。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "btn-bb"
      ],
      "sharkTip": "QTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "OLDPF031",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "76sはBBでコールも自然だが、低頻度3betブラフにも回せる。",
      "tags": [
        "mix-bluff",
        "suited-connector",
        "btn-bb"
      ],
      "sharkTip": "76sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "OLDPF032",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "55",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "BBはポットオッズが良く、55はCallで守りやすい。",
      "tags": [
        "call",
        "pair",
        "btn-bb"
      ],
      "sharkTip": "55はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF033",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "Q8s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "Q8sはスーテッドでBBの広いディフェンスに入る。",
      "tags": [
        "call",
        "suited",
        "btn-bb"
      ],
      "sharkTip": "Q8sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF034",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T8s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "T8sはプレイアビリティがあり、BBで守りやすい。",
      "tags": [
        "call",
        "suited-connector",
        "btn-bb"
      ],
      "sharkTip": "T8sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF035",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call寄り",
      "frequencyHint": "中頻度Call",
      "explanation": "A9oはBBで守れるが、ポストフロップは慎重に。",
      "tags": [
        "call",
        "offsuit",
        "btn-bb"
      ],
      "sharkTip": "A9oはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call寄り"
    },
    {
      "id": "OLDPF036",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "K4o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K4oはオフスートでプレイアビリティが低くFold。",
      "tags": [
        "fold",
        "offsuit",
        "btn-bb"
      ],
      "sharkTip": "K4oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF037",
      "type": "preflop",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T5o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "T5oは弱く、BBでも守りにくい。",
      "tags": [
        "fold",
        "offsuit",
        "btn-bb"
      ],
      "sharkTip": "T5oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF038",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "QQ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "UTG相手でもQQは非常に強いValue。",
      "tags": [
        "value",
        "premium",
        "utg-bb"
      ],
      "sharkTip": "QQは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF039",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "AKsは強いブロッカーとエクイティがあるValue。",
      "tags": [
        "value",
        "broadway",
        "utg-bb"
      ],
      "sharkTip": "AKsは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF040",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "JJは強いがUTGの上位レンジに注意し、Mix Value。",
      "tags": [
        "mix-value",
        "pair",
        "utg-bb"
      ],
      "sharkTip": "JJは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF041",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "AQsは強いがUTG相手では慎重に扱うMix Value。",
      "tags": [
        "mix-value",
        "broadway",
        "utg-bb"
      ],
      "sharkTip": "AQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF042",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはAブロッカーを使った3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "utg-bb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF043",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Callでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "KTsはバリューではないが、低頻度の3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "utg-bb"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Callでも可"
    },
    {
      "id": "OLDPF044",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "99はBBでCall中心。セットや低ボードで価値が出る。",
      "tags": [
        "call",
        "pair",
        "utg-bb"
      ],
      "sharkTip": "99はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF045",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "AJsは強いスーテッドでCall可能。",
      "tags": [
        "call",
        "suited-broadway",
        "utg-bb"
      ],
      "sharkTip": "AJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF046",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "中頻度Call",
      "explanation": "76sはBBでポットオッズとプレイアビリティがある。",
      "tags": [
        "call",
        "suited-connector",
        "utg-bb"
      ],
      "sharkTip": "76sはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF047",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "K9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K9oはUTGに支配されやすくFold。",
      "tags": [
        "fold",
        "offsuit",
        "utg-bb"
      ],
      "sharkTip": "K9oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF048",
      "type": "preflop",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "54o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "54oはオフスートで弱くFold。",
      "tags": [
        "fold",
        "offsuit",
        "utg-bb"
      ],
      "sharkTip": "54oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF049",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度4bet",
      "explanation": "3betを受けてもAAは明確な4bet Value。",
      "tags": [
        "value",
        "premium",
        "btn-vs-bb3b"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF050",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度4bet",
      "explanation": "AKsは4bet Valueとして十分強い。",
      "tags": [
        "value",
        "broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "AKsは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF051",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "4bet/Call混合",
      "explanation": "AQsは強いが、Callと4betが混ざる。",
      "tags": [
        "mix-value",
        "broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "AQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF052",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Call寄りMix",
      "frequencyHint": "4bet/Call混合",
      "explanation": "KQsはプレイアビリティが高く、Mix Value。",
      "tags": [
        "mix-value",
        "suited-broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "KQsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Call寄りMix"
    },
    {
      "id": "OLDPF053",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度4bet",
      "explanation": "A5sはAブロッカーを使った4betブラフ候補。",
      "tags": [
        "mix-bluff",
        "blocker",
        "wheel",
        "btn-vs-bb3b"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF054",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Fold寄りMix",
      "frequencyHint": "低頻度4bet",
      "explanation": "KTsは低頻度のブラフ候補だが、実戦では無理しない。",
      "tags": [
        "mix-bluff",
        "suited-broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "KTsは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Fold寄りMix"
    },
    {
      "id": "OLDPF055",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "99はIPでCallして戦える。",
      "tags": [
        "call",
        "pair",
        "btn-vs-bb3b"
      ],
      "sharkTip": "99はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF056",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call",
      "frequencyHint": "高頻度Call",
      "explanation": "QJsはIPでCallしやすいスーテッドブロードウェイ。",
      "tags": [
        "call",
        "suited-broadway",
        "btn-vs-bb3b"
      ],
      "sharkTip": "QJsはショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call"
    },
    {
      "id": "OLDPF057",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "A9oは3betポットで支配されやすくFold。",
      "tags": [
        "fold",
        "offsuit",
        "btn-vs-bb3b"
      ],
      "sharkTip": "A9oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF058",
      "type": "preflop",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "K9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K9sは3betに対して続けるには弱め。",
      "tags": [
        "fold",
        "suited",
        "btn-vs-bb3b"
      ],
      "sharkTip": "K9sはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF059",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Open",
      "frequencyHint": "100% Open",
      "explanation": "SB First InではValueは当然Open。",
      "tags": [
        "value",
        "sb"
      ],
      "sharkTip": "AAは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Open"
    },
    {
      "id": "OLDPF060",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Open",
      "frequencyHint": "Open中心",
      "explanation": "SB First InのMix Valueは基本Open頻度が高いという意味。Callではない。",
      "tags": [
        "mix-value",
        "sb"
      ],
      "sharkTip": "A9sは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Open"
    },
    {
      "id": "OLDPF061",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Open",
      "frequencyHint": "Open中心",
      "explanation": "SBはBBを降ろす価値があり、A5sはOpen候補。",
      "tags": [
        "mix-bluff",
        "sb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Open"
    },
    {
      "id": "OLDPF062",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "KTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Open/Fold",
      "frequencyHint": "Open寄り",
      "explanation": "KToはSBで攻撃的に使えるが、相手次第で調整。",
      "tags": [
        "mix-bluff",
        "sb"
      ],
      "sharkTip": "KToは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Open/Fold"
    },
    {
      "id": "OLDPF063",
      "type": "preflop",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "72o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "Fold",
      "explanation": "72oは最弱級でFold。",
      "tags": [
        "fold",
        "sb"
      ],
      "sharkTip": "72oはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF064",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "practicalLabel": "Value",
      "frequencyHint": "高頻度3bet",
      "explanation": "BTNの広いレンジに対してSBのJJはValue。",
      "tags": [
        "value",
        "btn-sb"
      ],
      "sharkTip": "JJは強いから攻めてOKだよ。相手にコールされても利益が出やすいハンドだね。",
      "practicalNote": "Value"
    },
    {
      "id": "OLDPF065",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "KJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "practicalLabel": "Mix Value",
      "frequencyHint": "3bet/Call混合",
      "explanation": "KJsはBTNに対して戦えるが、OOPなのでMix。",
      "tags": [
        "mix-value",
        "btn-sb"
      ],
      "sharkTip": "KJsは強いけど毎回レイズ固定ではないよ。レイズとコールを混ぜて、相手に読まれにくくしよう。",
      "practicalNote": "Mix Value"
    },
    {
      "id": "OLDPF066",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Mix Bluff",
      "frequencyHint": "低頻度3bet",
      "explanation": "A5sはSBからの3betブラフ候補。",
      "tags": [
        "mix-bluff",
        "btn-sb"
      ],
      "sharkTip": "A5sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Mix Bluff"
    },
    {
      "id": "OLDPF067",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "66",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "practicalLabel": "Call低頻度",
      "frequencyHint": "Call/Fold混合",
      "explanation": "SBはコールしすぎ注意だが、66は一部Call候補。",
      "tags": [
        "call",
        "btn-sb"
      ],
      "sharkTip": "66はショーダウン価値やセット価値を活かしたいハンド。無理にレイズして相手の強いレンジだけ残さないのが大事だよ。",
      "practicalNote": "Call低頻度"
    },
    {
      "id": "OLDPF068",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "practicalLabel": "Foldでも可",
      "frequencyHint": "低頻度3bet",
      "explanation": "SBはOOPなので76sはCallより3bet/Fold寄り。",
      "tags": [
        "mix-bluff",
        "btn-sb"
      ],
      "sharkTip": "76sは今の強さだけでなく、ブロッカーや将来性で勝負するハンドだよ。基本はレイズ寄り、相手や場面でコール/フォールドも考えよう。",
      "practicalNote": "Foldでも可"
    },
    {
      "id": "OLDPF069",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "QTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "QToはOOPで支配されやすくFold。",
      "tags": [
        "fold",
        "btn-sb"
      ],
      "sharkTip": "QToはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    },
    {
      "id": "OLDPF070",
      "type": "preflop",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "K4s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "practicalLabel": "Fold",
      "frequencyHint": "高頻度Fold",
      "explanation": "K4sはSBで無理に守らない。",
      "tags": [
        "fold",
        "btn-sb"
      ],
      "sharkTip": "K4sはこのスポットでは無理しない。弱いハンドを降りるのも立派な戦略だよ。",
      "practicalNote": "Fold"
    }
  ],
  "boardAdvantageQuestions": [
    {
      "id": "BA001",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Aハイでレインボー。UTGがAA/AK/AQを多く持つためPFR有利。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA002",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Kハイ・非連結。UTGがAK/KQs/KKを持ちやすい。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA003",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "Q74r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "ドローが少ない高カードボード。PFRの高カード優位が出る。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "Q74rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA004",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "AJ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "AとJが絡むがレインボー。UTGの強いAxが多い。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA005",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "KJ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "KJの高カードがPFRに多く、ドローは少なめ。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "KJ2rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA006",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "QT9r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "高い連結ボード。PFRもCallerも強くヒットするため互角寄り。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA007",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "JT8ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "連結＋ツートーン。BTNも強いが、PFRのブロードウェイも絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA008",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低く連結し、Caller側の小ポケット・コネクターが強い。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA009",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "765ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低中カードでツートーン。Caller側が非常に多く絡む。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "765ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA010",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BTN Call",
      "board": "QQ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードでPFRの高ポケット・Qxが活きやすい。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA011",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "BTNは広いが強いAxも多く、DryなAハイはPFR有利。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA012",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "KハイDryはBTNのKxと高カードが活きる。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA013",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "AJ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "BTNが強いAx/Jxを多く持つためPFR有利。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA014",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "QT9r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BTNもBBもKJ/QJ/JT/T9/98などが絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA015",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "JT8ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BBも多く絡むが、BTNも強いブロードウェイを持つ。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA016",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "BBは低いカードを広く守るためCaller有利。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA017",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "543r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低い連結ボードでBBの守備レンジに強く当たる。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "543rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA018",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB Call",
      "board": "QQ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードはPFRのレンジ優位が出やすい。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA019",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "A83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "UTGの強いAxが多く、BBは弱いペアも多い。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA020",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "K72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Kハイ・非連結でUTGのレンジが強い。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA021",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "AQ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "UTGがAA/QQ/AK/AQを多く持つ。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AQ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA022",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "T98r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BBのコネクターが強い一方、UTGのオーバーペアやブロードウェイもある。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "T98rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA023",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "987ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "BB側が強いが、PFR側も一部強いドローを持つ。学習上は互角寄り。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "987ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA024",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "652r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "BBは低いカードを広く守るためCaller有利。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "652rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA025",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "763ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低中カード＋ツートーンでBB側が強い。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "763ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA026",
      "type": "board-advantage-v5",
      "spot": "UTG Open → BB Call",
      "board": "KK3r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "KペアボードはUTGの強いKx/高ポケットが活きる。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "KK3rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA027",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "SBはAを多く含むためAハイDryはPFR有利。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA028",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "KハイDryはPFR側がCBしやすい。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA029",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "AJ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "SB側に強いAxが多い。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA030",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "QJ8r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "高いウェットボードで双方が強く絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QJ8rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA031",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "BBは広く守るため低い連結ボードに強い。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA032",
      "type": "board-advantage-v5",
      "spot": "SB First In → BB Call",
      "board": "772r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードはPFR側のレンジ優位が出やすい。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "772rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA033",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "ここでは3bet側SBをPFR扱い。強いAxを多く持つ。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA034",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "3bet側がAK/KK/KQsを多く持つ。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA035",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "KJ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "3bet側の強いブロードウェイが活きる。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "KJ2rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA036",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "JT8ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "3bet potでは低コネクターが減り、双方ブロードウェイが絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA037",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "654r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "3bet potでは差は小さいが、Call側の一部低カードが強く絡む。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA038",
      "type": "board-advantage-v5",
      "spot": "BTN Open → SB 3bet",
      "board": "QQ2r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "3bet側の高ポケット・強いQxが機能する。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA039",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "A72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "ここでは3bet側BBをPFR扱い。強いAxが多い。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA040",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "K83r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "3bet側はAK/KK/KQsを多く持つ。",
      "tags": [
        "dry",
        "PFR"
      ],
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "id": "BA041",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "AQ5r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 2,
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "label": "Semi Dry / PFR有利",
      "explanation": "3bet側のAA/QQ/AK/AQが強い。",
      "tags": [
        "semi-dry",
        "PFR"
      ],
      "sharkTip": "AQ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "id": "BA042",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "QT9r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "双方のブロードウェイが絡む。3bet potでは極端な差は小さい。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "id": "BA043",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "765ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "Call側に一部の低中カードが残り、低いボードはCaller寄り。",
      "tags": [
        "low",
        "Caller"
      ],
      "sharkTip": "765ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "id": "BA044",
      "type": "board-advantage-v5",
      "spot": "BTN Open → BB 3bet",
      "board": "AA4r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "Aペアボードは3bet側の強いAxが活きる。",
      "tags": [
        "paired",
        "PFR"
      ],
      "sharkTip": "AA4rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "id": "BA045",
      "type": "board-advantage-v7",
      "spot": "BTN Open → BB Call",
      "board": "K72r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Kハイで非連結。BTNのKxと高カードが活きる。",
      "tags": [
        "dry",
        "PFR有利"
      ],
      "sharkTip": "K72rはドローが少ないボード。PFRの強い高カードが活きやすいよ。"
    },
    {
      "id": "BA046",
      "type": "board-advantage-v7",
      "spot": "BTN Open → BB Call",
      "board": "QJ8r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "高いウェットボードでBTNもBBも強く絡む。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "QJ8rは双方が強くヒットしやすい。レンジ同士のぶつかりを意識しよう。"
    },
    {
      "id": "BA047",
      "type": "board-advantage-v7",
      "spot": "UTG Open → BTN Call",
      "board": "A93r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 1,
      "category": "Dry",
      "advantage": "PFR有利",
      "label": "Dry / PFR有利",
      "explanation": "Aハイ・レインボーでUTGのAxが強い。",
      "tags": [
        "dry",
        "PFR有利"
      ],
      "sharkTip": "A93rはドローが少ないボード。PFRの強い高カードが活きやすいよ。"
    },
    {
      "id": "BA048",
      "type": "board-advantage-v7",
      "spot": "UTG Open → BB Call",
      "board": "554r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 5,
      "category": "Paired",
      "advantage": "PFR有利",
      "label": "Paired / PFR有利",
      "explanation": "ペアボードはPFRのレンジ優位が出やすい。",
      "tags": [
        "paired",
        "PFR有利"
      ],
      "sharkTip": "554rはペアボード。PFRのレンジ優位が出やすい場面が多い。"
    },
    {
      "id": "BA049",
      "type": "board-advantage-v7",
      "spot": "SB First In → BB Call",
      "board": "986ss",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 3,
      "category": "Wet",
      "advantage": "ほぼ互角",
      "label": "Wet / ほぼ互角",
      "explanation": "連結＋ツートーンで双方に強いドローがある。",
      "tags": [
        "wet",
        "ほぼ互角"
      ],
      "sharkTip": "986ssは双方が強くヒットしやすい。レンジ同士のぶつかりを意識しよう。"
    },
    {
      "id": "BA050",
      "type": "board-advantage-v7",
      "spot": "SB First In → BB Call",
      "board": "432r",
      "choices": [
        "Dry / PFR有利",
        "Semi Dry / PFR有利",
        "Wet / ほぼ互角",
        "Low / Caller有利",
        "Paired / PFR有利"
      ],
      "answer": 4,
      "category": "Low",
      "advantage": "Caller有利",
      "label": "Low / Caller有利",
      "explanation": "低い連結ボードはBB側が強く絡みやすい。",
      "tags": [
        "low",
        "Caller有利"
      ],
      "sharkTip": "432rは低いカード中心。Callerのコネクターや小ポケットが強くなりやすい。"
    }
  ],
  "rangeLibrary": {
    "UTG Open": {
      "category": "Open",
      "actions": {
        "Value Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "AJo",
          "JJ",
          "JTs",
          "TT",
          "T9s",
          "99",
          "88",
          "77"
        ],
        "Mix Open": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "QTs",
          "98s",
          "87s",
          "76s"
        ],
        "Fold": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J9s",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T8s",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "66",
          "65s",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "55",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "44",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "33",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o",
          "22"
        ]
      }
    },
    "BTN Open": {
      "category": "Open",
      "actions": {
        "Value Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "KTs",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "QTs",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "AJo",
          "KJo",
          "QJo",
          "JJ",
          "JTs",
          "J9s",
          "J8s",
          "J7s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "TT",
          "T9s",
          "T8s",
          "T7s",
          "A9o",
          "99",
          "98s",
          "A8o",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "54s",
          "44",
          "33",
          "22"
        ],
        "Mix Open": [
          "Q4s",
          "Q3s",
          "Q2s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "K8o",
          "Q8o",
          "J8o",
          "98o",
          "86s",
          "A7o",
          "75s",
          "A6o",
          "64s",
          "A5o",
          "53s",
          "A4o",
          "43s",
          "A3o",
          "A2o"
        ],
        "Fold": [
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "T8o",
          "85s",
          "84s",
          "83s",
          "82s",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "74s",
          "73s",
          "72s",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "63s",
          "62s",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "52s",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "42s",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "SB First In": {
      "category": "Open",
      "actions": {
        "Value Open": [
          "AA",
          "AKs",
          "AQs",
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "AKo",
          "KK",
          "KQs",
          "KJs",
          "KTs",
          "AQo",
          "KQo",
          "QQ",
          "QJs",
          "QTs",
          "AJo",
          "JJ",
          "JTs",
          "TT",
          "99",
          "88"
        ],
        "Mix Open": [
          "A7s",
          "A6s",
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "KJo",
          "QJo",
          "J9s",
          "J8s",
          "J7s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T9s",
          "T8s",
          "T7s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "98s",
          "A8o",
          "87s",
          "A7o",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "54s",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "Q4s",
          "Q3s",
          "Q2s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "UTG Open → BTN": {
      "category": "vs Open",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix Value": [
          "AQs",
          "KQs",
          "AQo",
          "JJ",
          "TT"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs"
        ],
        "Call": [
          "AJs",
          "ATs",
          "KJs",
          "QJs",
          "QTs",
          "AJo",
          "JTs",
          "J9s",
          "T9s",
          "T8s",
          "99",
          "98s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "KQo",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "UTG Open → BB": {
      "category": "vs Open",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix Value": [
          "AQs",
          "KQs",
          "AQo",
          "JJ",
          "TT"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "QTs"
        ],
        "Call": [
          "AJs",
          "ATs",
          "KJs",
          "KQo",
          "QJs",
          "AJo",
          "JTs",
          "J9s",
          "T9s",
          "T8s",
          "99",
          "98s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "BTN Open → BB": {
      "category": "vs Open",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AQs",
          "AKo",
          "KK",
          "AQo",
          "QQ",
          "JJ",
          "TT"
        ],
        "Mix Value": [
          "AJs",
          "ATs",
          "KQs",
          "KJs",
          "KQo",
          "QJs",
          "JTs",
          "99",
          "88"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "K9s",
          "QTs",
          "J9s",
          "T9s",
          "76s",
          "65s",
          "54s"
        ],
        "Call": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "AJo",
          "KJo",
          "QJo",
          "J8s",
          "J7s",
          "J6s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T8s",
          "T7s",
          "A9o",
          "T9o",
          "98s",
          "97s",
          "A8o",
          "98o",
          "87s",
          "86s",
          "A7o",
          "77",
          "75s",
          "A6o",
          "66",
          "64s",
          "A5o",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "Q4s",
          "Q3s",
          "Q2s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "K9o",
          "Q9o",
          "J9o",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "85s",
          "84s",
          "83s",
          "82s",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "74s",
          "73s",
          "72s",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "63s",
          "62s",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "BTN Open → SB": {
      "category": "vs Open",
      "actions": {
        "3bet Value": [
          "AA",
          "AKs",
          "AQs",
          "AKo",
          "KK",
          "AQo",
          "QQ",
          "JJ",
          "TT"
        ],
        "Mix Value": [
          "AJs",
          "ATs",
          "KQs",
          "KJs",
          "KQo",
          "QJs",
          "AJo",
          "JTs",
          "99",
          "88",
          "77"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "K9s",
          "QTs",
          "Q9s",
          "J9s",
          "T9s",
          "98s",
          "87s",
          "76s",
          "65s"
        ],
        "Call": [
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "K8s",
          "K7s",
          "Q8s",
          "J8s",
          "T8s",
          "66",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "KJo",
          "QJo",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    },
    "UTG Open → BTN 3bet → UTG": {
      "category": "vs 3bet",
      "actions": {
        "4bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK"
        ],
        "Mix Value": [
          "AQs",
          "QQ",
          "JJ"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s"
        ],
        "Call": [
          "AJs",
          "KQs",
          "KJs",
          "AQo",
          "QJs",
          "JTs",
          "TT",
          "99"
        ],
        "Fold": [
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "KTs",
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "KQo",
          "QTs",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "AJo",
          "KJo",
          "QJo",
          "J9s",
          "J8s",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T9s",
          "T8s",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "98s",
          "97s",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "88",
          "87s",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "77",
          "76s",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "66",
          "65s",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "55",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "44",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "33",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o",
          "22"
        ]
      }
    },
    "BTN Open → BB 3bet → BTN": {
      "category": "vs 3bet",
      "actions": {
        "4bet Value": [
          "AA",
          "AKs",
          "AKo",
          "KK",
          "QQ"
        ],
        "Mix Value": [
          "AQs",
          "KQs",
          "AQo",
          "JJ",
          "TT"
        ],
        "Mix Bluff": [
          "A5s",
          "A4s",
          "A3s",
          "A2s",
          "KTs",
          "QTs",
          "J9s",
          "T9s"
        ],
        "Call": [
          "AJs",
          "ATs",
          "A9s",
          "A8s",
          "A7s",
          "A6s",
          "KJs",
          "KQo",
          "QJs",
          "KJo",
          "JTs",
          "J8s",
          "T8s",
          "99",
          "98s",
          "97s",
          "88",
          "87s",
          "77",
          "76s",
          "66",
          "65s",
          "55",
          "44",
          "33",
          "22"
        ],
        "Fold": [
          "K9s",
          "K8s",
          "K7s",
          "K6s",
          "K5s",
          "K4s",
          "K3s",
          "K2s",
          "Q9s",
          "Q8s",
          "Q7s",
          "Q6s",
          "Q5s",
          "Q4s",
          "Q3s",
          "Q2s",
          "AJo",
          "QJo",
          "J7s",
          "J6s",
          "J5s",
          "J4s",
          "J3s",
          "J2s",
          "ATo",
          "KTo",
          "QTo",
          "JTo",
          "T7s",
          "T6s",
          "T5s",
          "T4s",
          "T3s",
          "T2s",
          "A9o",
          "K9o",
          "Q9o",
          "J9o",
          "T9o",
          "96s",
          "95s",
          "94s",
          "93s",
          "92s",
          "A8o",
          "K8o",
          "Q8o",
          "J8o",
          "T8o",
          "98o",
          "86s",
          "85s",
          "84s",
          "83s",
          "82s",
          "A7o",
          "K7o",
          "Q7o",
          "J7o",
          "T7o",
          "97o",
          "87o",
          "75s",
          "74s",
          "73s",
          "72s",
          "A6o",
          "K6o",
          "Q6o",
          "J6o",
          "T6o",
          "96o",
          "86o",
          "76o",
          "64s",
          "63s",
          "62s",
          "A5o",
          "K5o",
          "Q5o",
          "J5o",
          "T5o",
          "95o",
          "85o",
          "75o",
          "65o",
          "54s",
          "53s",
          "52s",
          "A4o",
          "K4o",
          "Q4o",
          "J4o",
          "T4o",
          "94o",
          "84o",
          "74o",
          "64o",
          "54o",
          "43s",
          "42s",
          "A3o",
          "K3o",
          "Q3o",
          "J3o",
          "T3o",
          "93o",
          "83o",
          "73o",
          "63o",
          "53o",
          "43o",
          "32s",
          "A2o",
          "K2o",
          "Q2o",
          "J2o",
          "T2o",
          "92o",
          "82o",
          "72o",
          "62o",
          "52o",
          "42o",
          "32o"
        ]
      }
    }
  },
  "boardDictionary": [
    {
      "board": "A72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "Aハイ・レインボー。AA/AK/AQをPFRが多く持ち、CBしやすい。",
      "sharkTip": "A72rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "board": "K83r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "Kハイ・非連結・レインボー。PFRのAK/KQ/KKが強く機能。",
      "sharkTip": "K83rはドローが少ないボード。PFRの強い高カードレンジが活きやすいよ。"
    },
    {
      "board": "AJ5r",
      "category": "Semi Dry",
      "advantage": "PFR有利",
      "body": "AとJが絡むがレインボー。PFRの強いAxとセットが多い。",
      "sharkTip": "AJ5rは少し絡むけど、まだPFRが主導権を持ちやすいボードだよ。"
    },
    {
      "board": "QT9r",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "高い連結ボード。PFRもCallerもKJ/QJ/JT/T9などが絡む。",
      "sharkTip": "QT9rは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "board": "JT8ss",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "連結＋ツートーン。双方が強くヒットしやすい。",
      "sharkTip": "JT8ssは双方が強くヒットしやすい。『PFRだけ有利』と決めつけず、レンジ衝突を意識しよう。"
    },
    {
      "board": "654r",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "低く連結。Callerの小ポケットやスーテッドコネクターが強い。",
      "sharkTip": "654rは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "board": "765ss",
      "category": "Low",
      "advantage": "Caller有利",
      "body": "低中カード＋ツートーン。Caller側のドローとツーペアが多い。",
      "sharkTip": "765ssは低いカードが多い。Caller側の小ポケットやコネクターが強くなりやすいよ。"
    },
    {
      "board": "QQ2r",
      "category": "Paired",
      "advantage": "PFR有利",
      "body": "ペアボード。PFRの高いポケットやQxが活きやすい。",
      "sharkTip": "QQ2rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "board": "KK8r",
      "category": "Paired",
      "advantage": "PFR有利",
      "body": "Kペア。PFRの強いKxや高ポケットが有利。",
      "sharkTip": "KK8rはペアボード。PFRのレンジ優位が出やすく、CBしやすい場面が多いよ。"
    },
    {
      "board": "K72r",
      "category": "Dry",
      "advantage": "PFR有利",
      "body": "Kハイ・非連結。PFRの高カードが活きやすい。",
      "sharkTip": "K72rはドローが少ないボード。PFRの強い高カードが活きやすいよ。"
    },
    {
      "board": "QJ8r",
      "category": "Wet",
      "advantage": "ほぼ互角",
      "body": "高い連結ボード。双方のブロードウェイが強く絡む。",
      "sharkTip": "QJ8rは双方が強くヒットしやすい。レンジ同士のぶつかりを意識しよう。"
    }
  ],
  "terms": [
    {
      "term": "PFR",
      "body": "Pre Flop Raiser。プリフロップで最後にレイズした人。"
    },
    {
      "term": "Caller",
      "body": "プリフロップでコールして参加した側。低いカードやコネクターを多く含むことがある。"
    },
    {
      "term": "Dry",
      "body": "ドローが少ないボード。例：A72r、K83r。PFR有利になりやすい。"
    },
    {
      "term": "Semi Dry",
      "body": "少しだけ接続やドローがあるが、まだPFR有利になりやすいボード。例：AJ5r。"
    },
    {
      "term": "Wet",
      "body": "ストレートやフラッシュドローが多いボード。例：QT9r、JT8ss。"
    },
    {
      "term": "Low",
      "body": "低いカード中心のボード。Caller側の小ポケットやコネクターに強く当たりやすい。"
    },
    {
      "term": "Paired",
      "body": "同じランクが2枚あるボード。例：QQ2r。PFR側が有利になりやすい。"
    },
    {
      "term": "r / ss / m",
      "body": "rはRainbow、ssはTwo-tone、mはMonotone。A72rは3スート別、JT8ssは同スート2枚。"
    },
    {
      "term": "プレイアビリティ",
      "body": "フロップ以降でどれだけ戦いやすいか。スーテッド、連結、ポケットは高い。"
    },
    {
      "term": "ブロッカー",
      "body": "自分のカードが相手の強い役の組み合わせを減らすこと。A5sはAA/AK/AQを減らす。"
    },
    {
      "term": "スーテッドブロードウェイ",
      "body": "T以上のカード同士で同じスート。AKs, KQs, QJs, JTsなど。"
    },
    {
      "term": "Mix Open",
      "body": "OpenとFoldを混ぜるハンド。UTGのA5sなど、GTOでは開く頻度があるが、実戦では慣れるまで絞ってもよい。"
    },
    {
      "term": "Mix Bluffの考え方",
      "body": "Mix Bluffは強さ順ではなくアクション分類。基本はレイズ寄りだが、スポットによってコールやフォールドが混ざることもある。"
    },
    {
      "term": "レンジ整合性",
      "body": "後のアクションに出るハンドは、前段階のレンジにも必ず存在する必要がある。v6ではMix Openでこの矛盾を補正。"
    },
    {
      "term": "Value Open",
      "body": "ほぼ毎回オープンしてよいハンド。BTNでは広く、UTGでは狭くなる。"
    },
    {
      "term": "ハンド逆引き",
      "body": "1つのハンドが各スポットでどのアクションになるかを一覧で見る機能。"
    }
  ],
  "openChoices": [
    "Value Open",
    "Mix Open",
    "Fold"
  ],
  "reverseLookup": {
    "AA": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "4bet Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "4bet Value"
      }
    ],
    "AKs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "4bet Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "4bet Value"
      }
    ],
    "AQs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Value"
      }
    ],
    "AJs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "ATs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "AKo": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "4bet Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "4bet Value"
      }
    ],
    "KK": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "4bet Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "4bet Value"
      }
    ],
    "KQs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Value"
      }
    ],
    "KJs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "AQo": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Value"
      }
    ],
    "KQo": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "QQ": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "4bet Value"
      }
    ],
    "QJs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "AJo": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      }
    ],
    "JJ": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Value"
      }
    ],
    "JTs": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "TT": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB",
        "action": "3bet Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "3bet Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Value"
      }
    ],
    "T9s": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "99": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "88": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "77": [
      {
        "spot": "UTG Open",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Value"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "A5s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "A4s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "A3s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "A2s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BTN 3bet → UTG",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "KTs": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Mix Bluff"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "QTs": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "98s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "87s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "76s": [
      {
        "spot": "UTG Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "A9s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "A8s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Value Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "A7s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "A6s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "K9s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      }
    ],
    "K8s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      }
    ],
    "K7s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      }
    ],
    "K6s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "K5s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "K4s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "K3s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "K2s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "Q9s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      }
    ],
    "Q8s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      }
    ],
    "Q7s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "Q6s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "Q5s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "KJo": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "QJo": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "J9s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Mix Bluff"
      }
    ],
    "J8s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "J7s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "ATo": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "KTo": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "QTo": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "JTo": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "T8s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "T7s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "A9o": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "A8o": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "66": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "65s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Mix Bluff"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "55": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "54s": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Mix Bluff"
      }
    ],
    "44": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "33": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "22": [
      {
        "spot": "BTN Open",
        "action": "Value Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "UTG Open → BTN",
        "action": "Call"
      },
      {
        "spot": "UTG Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → SB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "Q4s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "Q3s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "Q2s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "J6s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "J5s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "J4s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "J3s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "J2s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "T6s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "T5s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "T4s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "T3s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "T2s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "K9o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      }
    ],
    "Q9o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      }
    ],
    "J9o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      }
    ],
    "T9o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "97s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      },
      {
        "spot": "BTN Open → BB 3bet → BTN",
        "action": "Call"
      }
    ],
    "K8o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "Q8o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "J8o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "98o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "86s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "A7o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "SB First In",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "75s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "A6o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "64s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "A5o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      },
      {
        "spot": "BTN Open → BB",
        "action": "Call"
      }
    ],
    "53s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "A4o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "43s": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "A3o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ],
    "A2o": [
      {
        "spot": "BTN Open",
        "action": "Mix Open"
      }
    ]
  },
  "beginner": {
    "positions": [
      {
        "name": "UTG",
        "body": "最初に行動するポジション。後ろに多くの相手がいるので一番タイト。"
      },
      {
        "name": "HJ",
        "body": "中盤ポジション。UTGより少し広く参加できる。"
      },
      {
        "name": "CO",
        "body": "BTNの1つ前。かなり攻めやすいポジション。"
      },
      {
        "name": "BTN",
        "body": "ポストフロップで最後に行動できる最強ポジション。"
      },
      {
        "name": "SB",
        "body": "半額ブラインドを払う位置。ポストフロップは不利になりやすい。"
      },
      {
        "name": "BB",
        "body": "1BBを払う位置。プリフロップでは最後に行動できる。"
      }
    ],
    "terms": [
      {
        "term": "Open",
        "body": "誰も参加していない状態で最初にレイズすること。"
      },
      {
        "term": "Call",
        "body": "相手のベットやレイズに同じ額を出してついていくこと。"
      },
      {
        "term": "Fold",
        "body": "勝負を降りること。損失を抑える大事なアクション。"
      },
      {
        "term": "3bet",
        "body": "Openに対する再レイズ。強い手やブラフで使う。"
      },
      {
        "term": "4bet",
        "body": "3betに対する再レイズ。かなり強いレンジになる。"
      },
      {
        "term": "Value",
        "body": "強いからベット・レイズすること。"
      },
      {
        "term": "Bluff",
        "body": "相手を降ろすためにベット・レイズすること。"
      }
    ],
    "hands": [
      "ロイヤルフラッシュ",
      "ストレートフラッシュ",
      "フォーカード",
      "フルハウス",
      "フラッシュ",
      "ストレート",
      "スリーカード",
      "ツーペア",
      "ワンペア",
      "ハイカード"
    ]
  }
};

let state = { mode: "preflop", order: [], index: 0, score: 0, total: 0, answered: false, selectedHand: null };
const refModes = ["rangeLibrary", "handLookup", "boardDictionary", "terms", "beginner"];

function getQuestions(mode) {
  if (mode === "preflop") return DATA.preflopQuestions;
  if (mode === "boardAdvantage") return DATA.boardAdvantageQuestions;
  return DATA.preflopQuestions;
}
function modeTitle(mode) {
  return {
    beginner:"はじめてのポーカー",
    preflop:"プリフロップ",
    boardAdvantage:"ボード有利不利",
    rangeLibrary:"レンジライブラリ",
    handLookup:"ハンド逆引き",
    boardDictionary:"ボード辞典",
    terms:"用語集"
  }[mode] || mode;
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function startMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  if (refModes.includes(mode)) { renderReference(mode); return; }
  const qs = getQuestions(mode);
  state.order = shuffleArray([...Array(qs.length).keys()]);
  state.index = 0; state.score = 0; state.total = 0; state.answered = false;
  renderQuiz();
}
function currentList(){ return getQuestions(state.mode); }
function currentQuestion(){ return currentList()[state.order[state.index]]; }
function choicesFor(q){ return q.choices || (q.type === "preflop" ? DATA.preflopChoices : DATA.boardAdvantageChoices); }

function renderQuiz(){
  document.querySelector("#quizArea").style.display = "block";
  document.querySelector("#refArea").style.display = "none";
  const q = currentQuestion(), list = currentList();
  document.querySelector("#modeTitle").textContent = modeTitle(state.mode);
  document.querySelector("#progress").textContent = `${state.index + 1} / ${list.length}`;
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
  document.querySelector("#phase").textContent = modeTitle(state.mode);
  document.querySelector("#spot").textContent = q.spot || "-";
  document.querySelector("#hero").textContent = q.heroPosition || "-";
  document.querySelector("#hand").innerHTML = q.hand ? cardHand(q.hand) : "-";
  document.querySelector("#board").innerHTML = q.board ? boardCards(q.board) : "-";
  document.querySelector("#feedback").innerHTML = "";
  document.querySelector("#explanation").innerHTML = "";
  document.querySelector("#nextBtn").disabled = true;
  state.answered = false;
  const box = document.querySelector("#choices");
  box.innerHTML = "";
  choicesFor(q).forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<span>${idx + 1}</span>${choice}`;
    btn.onclick = () => answer(idx + 1, btn);
    box.appendChild(btn);
  });
}
function answer(num, clicked){
  if(state.answered) return;
  const q = currentQuestion();
  const ok = num === q.answer;
  state.answered = true;
  state.total++;
  if(ok) state.score++;
  document.querySelectorAll(".choice").forEach((b, idx) => {
    b.disabled = true;
    if(idx + 1 === q.answer) b.classList.add("correct");
    if(b === clicked && !ok) b.classList.add("wrong");
  });
  document.querySelector("#feedback").innerHTML = ok ? "⭕ 正解！" : `❌ 不正解。正解は ${q.answer}. ${q.label}`;
  document.querySelector("#explanation").innerHTML = buildExplanation(q);
  document.querySelector("#nextBtn").disabled = false;
  document.querySelector("#nextBtn").textContent = state.index + 1 === currentList().length ? "もう一周する" : "次の問題へ";
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
}
function sharkBox(text){ return `<div class="shark-teacher"><div class="mini-shark">🦈</div><div><b>サメ先生</b><p>${text}</p></div></div>`; }
function buildExplanation(q){
  if(q.type && q.type.startsWith("preflop")){
    const practical = `<p class="hint"><b>実戦メモ：</b>${q.practicalLabel || q.label}<br><b>頻度目安：</b>${q.frequencyHint || "-"}</p>`;
    return `${sharkBox(q.sharkTip || "")}<h3>プリフロップ解説</h3><p>${q.explanation}</p>${practical}`;
  }
  return `${sharkBox(q.sharkTip || "")}<h3>ボード解説</h3><p>${q.explanation}</p><p class="hint"><b>分類：</b>${q.category}<br><b>有利不利：</b>${q.advantage}</p>`;
}
function next(){
  state.index++;
  if(state.index >= currentList().length){
    state.order = shuffleArray([...Array(currentList().length).keys()]);
    state.index = 0;
  }
  renderQuiz();
}
function randomNext(){
  state.order = shuffleArray([...Array(currentList().length).keys()]);
  state.index = 0; state.score = 0; state.total = 0; state.answered = false;
  renderQuiz();
}
function resetSession(){
  state.index = 0; state.score = 0; state.total = 0; state.answered = false;
  state.order = shuffleArray([...Array(currentList().length).keys()]);
  renderQuiz();
}

function renderReference(mode){
  document.querySelector("#quizArea").style.display = "none";
  document.querySelector("#refArea").style.display = "block";
  document.querySelector("#modeTitle").textContent = modeTitle(mode);
  document.querySelector("#progress").textContent = "-";
  document.querySelector("#score").textContent = "-";
  if(mode === "beginner") return renderBeginner();
  if(mode === "rangeLibrary") return renderRangeLibrary();
  if(mode === "handLookup") return renderHandLookup();
  if(mode === "boardDictionary") return renderBoardDictionary();
  if(mode === "terms") return renderTerms();
}
function renderBeginner(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `
    <section class="card">
      <h2>🎓 はじめてのポーカー</h2>
      <p class="note">ポジションと基本用語だけ押さえれば、このアプリを使い始められます。</p>
      <div class="poker-table">
        <div class="pos utg">UTG</div><div class="pos hj">HJ</div><div class="pos co">CO</div>
        <div class="pos btn">BTN</div><div class="pos sb">SB</div><div class="pos bb">BB</div>
        <div class="dealer">♠ ♥ ♦ ♣</div>
      </div>
      <h3>ポジション</h3>
      <div class="dictionary">${DATA.beginner.positions.map(p => `<div class="dict-card"><h3>${p.name}</h3><p>${p.body}</p></div>`).join("")}</div>
      ${sharkBox("BTNは一番有利、UTGは一番不利。だからBTNは広く、UTGは狭く参加するよ。")}
      <h3>基礎用語</h3>
      <div class="dictionary">${DATA.beginner.terms.map(t => `<div class="dict-card"><h3>${t.term}</h3><p>${t.body}</p></div>`).join("")}</div>
      <h3>役の強さ</h3>
      <ol class="hand-ranks">${DATA.beginner.hands.map(h => `<li>🃏 ${h}</li>`).join("")}</ol>
    </section>`;
}
function renderRangeLibrary(){
  const area = document.querySelector("#refArea");
  const spots = Object.keys(DATA.rangeLibrary);
  area.innerHTML = `
    <section class="card ref-controls">
      <h2>🃏 レンジライブラリ</h2>
      <p class="note">スポットごとの推奨レンジを確認できます。セルをタップすると、そのハンドの逆引きも表示します。</p>
      <label>スポット<select id="refSpot"></select></label>
      <label>アクション<select id="refAction"></select></label>
      <div id="rangeGrid"></div>
      <div id="reversePanel"></div>
    </section>`;
  const spotSel = document.querySelector("#refSpot");
  const actionSel = document.querySelector("#refAction");
  spots.forEach(s => spotSel.add(new Option(s, s)));
  function updateActions(){
    actionSel.innerHTML = "";
    Object.keys(DATA.rangeLibrary[spotSel.value].actions).forEach(a => actionSel.add(new Option(a, a)));
    updateGrid();
  }
  function updateGrid(){
    const keep = new Set(DATA.rangeLibrary[spotSel.value].actions[actionSel.value]);
    document.querySelector("#rangeGrid").innerHTML = makeRangeGrid(keep, true);
    document.querySelector("#reversePanel").innerHTML = "";
  }
  spotSel.onchange = updateActions; actionSel.onchange = updateGrid; updateActions();
}
function renderHandLookup(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `<section class="card"><h2>🔍 ハンド逆引き</h2><p class="note">ハンドをタップすると、各スポットでの推奨アクションを一覧表示します。</p>${makeRangeGrid(new Set(DATA.matrix.flat()), true)}<div id="reversePanel"></div></section>`;
}
function makeRangeGrid(keep, clickable=false){
  return `<div class="range-grid">${DATA.matrix.flat().map(h => `<div class="cell ${keep.has(h) ? "keep" : "gray"}" ${clickable ? `onclick="showReverse('${h}')"` : ""}>${h}</div>`).join("")}</div><p class="note">色付き＝対象レンジ / グレー＝対象外</p>`;
}
function showReverse(hand){
  const list = DATA.reverseLookup[hand] || [];
  const html = `<div class="reverse-card"><h3>${cardHand(hand)} の使い方</h3>` + 
    (list.length ? `<table><tr><th>スポット</th><th>アクション</th></tr>${list.map(x => `<tr><td>${x.spot}</td><td><b>${x.action}</b></td></tr>`).join("")}</table>` : `<p>主な推奨レンジには入っていません。</p>`) + `</div>`;
  const panel = document.querySelector("#reversePanel");
  if(panel) panel.innerHTML = html;
}
function renderBoardDictionary(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `<section class="card"><h2>📖 ボード辞典</h2><div class="dictionary">${DATA.boardDictionary.map(b => `<div class="dict-card"><h3>${boardCards(b.board)}</h3><p><b>${b.category}</b> / ${b.advantage}</p><p>${b.body}</p>${sharkBox(b.sharkTip || "")}</div>`).join("")}</div></section>`;
}
function renderTerms(){
  const area = document.querySelector("#refArea");
  area.innerHTML = `<section class="card"><h2>📘 用語集</h2>${DATA.terms.map(t => `<div class="term"><h3>${t.term}</h3><p>${t.body}</p></div>`).join("")}</section>`;
}
function cardHand(hand){
  const clean = hand.replace(/[so]/g,"");
  if(clean.length === 2 && clean[0] !== clean[1]){
    const suited = hand.endsWith("s");
    const suit = suited ? "♠" : "♠";
    const suit2 = suited ? "♠" : "♥";
    return `<span class="cards"><span class="mini-card">${clean[0]}${suit}</span><span class="mini-card red">${clean[1]}${suit2}</span></span> <span>${hand}</span>`;
  }
  if(clean.length === 2 && clean[0] === clean[1]){
    return `<span class="cards"><span class="mini-card">${clean[0]}♠</span><span class="mini-card red">${clean[1]}♥</span></span> <span>${hand}</span>`;
  }
  return hand;
}
function boardCards(board){
  const b = board.replace(/r|ss|m/g,"");
  const chars = b.split("");
  const suits = ["♠","♥","♦"];
  return `<span class="cards">${chars.map((c,i)=>`<span class="mini-card ${i==1?'red':''}">${c}${suits[i]||'♣'}</span>`).join("")}</span> <span>${board}</span>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mode-btn").forEach(btn => btn.onclick = () => startMode(btn.dataset.mode));
  document.querySelector("#nextBtn").onclick = next;
  document.querySelector("#shuffleBtn").onclick = randomNext;
  document.querySelector("#resetBtn").onclick = resetSession;
  startMode("beginner");
});
