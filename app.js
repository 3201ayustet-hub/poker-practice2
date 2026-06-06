const DATA = {
  "preflopChoices": [
    "Value",
    "Mix Value",
    "Mix Bluff",
    "Call",
    "Fold"
  ],
  "boardCategoryChoices": [
    "Dry",
    "Semi Dry",
    "Wet",
    "Low",
    "Paired"
  ],
  "boardAdvantageChoices": [
    "PFR有利",
    "Caller有利",
    "ほぼ互角"
  ],
  "preflop": [
    {
      "id": "PF001",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "AAはUTG相手でも明確なバリュー3bet。最強レンジで大きくポットを作れる。"
    },
    {
      "id": "PF002",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "AKsはブロッカーとエクイティが非常に高く、Valueに分類。"
    },
    {
      "id": "PF003",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "AQsは強いがUTG相手ではCallも3betも成立するMix Value。"
    },
    {
      "id": "PF004",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQo",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：AQo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "AQoは十分強いが、AK/QQ+にぶつかるためMix Value。"
    },
    {
      "id": "PF005",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "KQsは強いスーテッドブロードウェイ。3betとCallが混ざる。"
    },
    {
      "id": "PF006",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "JJ",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "JJは強いが、UTG相手では4betを受けると難しくMix Value。"
    },
    {
      "id": "PF007",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "A5sはAブロッカーとホイール可能性があり、Mix Bluff向き。"
    },
    {
      "id": "PF008",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A2s",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：A2s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "A2sもAブロッカーを使える3betブラフ候補。"
    },
    {
      "id": "PF009",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "99はセットマインとミドルボードで戦えるためCall中心。"
    },
    {
      "id": "PF010",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "76s",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "76sはIPで実現率が高く、ナッツを作れるためCall候補。"
    },
    {
      "id": "PF011",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KJo",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：KJo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "KJoはUTGレンジにドミネートされやすく、基本Fold。"
    },
    {
      "id": "PF012",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QTo",
      "question": "UTG Open → BTN / あなたはBTN / ハンド：QTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "QToはオフスートでドミネーションされやすく、Fold。"
    },
    {
      "id": "PF013",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "question": "BTN Open → BB / あなたはBB / ハンド：JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "BTNレンジは広いので、BBのJJはValue 3bet。"
    },
    {
      "id": "PF014",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AQo",
      "question": "BTN Open → BB / あなたはBB / ハンド：AQo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "BTNオープンに対してAQoは十分強く、Valueに分類。"
    },
    {
      "id": "PF015",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "question": "BTN Open → BB / あなたはBB / ハンド：AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "AJsは強いが、3betとCallを混ぜやすいMix Value。"
    },
    {
      "id": "PF016",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KQs",
      "question": "BTN Open → BB / あなたはBB / ハンド：KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "KQsは高い実現率を持つMix Value。"
    },
    {
      "id": "PF017",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "question": "BTN Open → BB / あなたはBB / ハンド：99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "99はBBで3bet/Callが混ざる強めのディフェンス。"
    },
    {
      "id": "PF018",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "question": "BTN Open → BB / あなたはBB / ハンド：A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "A5sはAブロッカーがあり、BTNを降ろす3betブラフ候補。"
    },
    {
      "id": "PF019",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "K9s",
      "question": "BTN Open → BB / あなたはBB / ハンド：K9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "K9sはブロッカーとスーテッド価値がありMix Bluff候補。"
    },
    {
      "id": "PF020",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "question": "BTN Open → BB / あなたはBB / ハンド：76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "76sはコールもあるが、低頻度で3betブラフに使える。"
    },
    {
      "id": "PF021",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "55",
      "question": "BTN Open → BB / あなたはBB / ハンド：55",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "BBはポットオッズが良く、55はCallで守りやすい。"
    },
    {
      "id": "PF022",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "Q8s",
      "question": "BTN Open → BB / あなたはBB / ハンド：Q8s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "Q8sはBBで広く守るレンジに入るCall候補。"
    },
    {
      "id": "PF023",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "K4o",
      "question": "BTN Open → BB / あなたはBB / ハンド：K4o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "K4oはオフスートでプレイアビリティが低くFold。"
    },
    {
      "id": "PF024",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "T5o",
      "question": "BTN Open → BB / あなたはBB / ハンド：T5o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "T5oは弱く、BBでも守りにくいFold。"
    },
    {
      "id": "PF025",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "QQ",
      "question": "UTG Open → BB / あなたはBB / ハンド：QQ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "UTG相手でもQQは非常に強くValue。"
    },
    {
      "id": "PF026",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AQs",
      "question": "UTG Open → BB / あなたはBB / ハンド：AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "AQsは強いがUTG相手では慎重に扱うMix Value。"
    },
    {
      "id": "PF027",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "question": "UTG Open → BB / あなたはBB / ハンド：JJ",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "JJは強いがUTGの上位レンジに注意しMix Value。"
    },
    {
      "id": "PF028",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "question": "UTG Open → BB / あなたはBB / ハンド：A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "A5sはブロッカーを使った3betブラフ候補。"
    },
    {
      "id": "PF029",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "question": "UTG Open → BB / あなたはBB / ハンド：KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "KTsはスーテッドで戦えるがバリューではなくMix Bluff。"
    },
    {
      "id": "PF030",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "question": "UTG Open → BB / あなたはBB / ハンド：99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "99はBBでCall中心。セットや低ボードで価値が出る。"
    },
    {
      "id": "PF031",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "question": "UTG Open → BB / あなたはBB / ハンド：AJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "AJsは強いスーテッドでCall可能。"
    },
    {
      "id": "PF032",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "question": "UTG Open → BB / あなたはBB / ハンド：76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "76sはBBでポットオッズとプレイアビリティによりCall候補。"
    },
    {
      "id": "PF033",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "K9o",
      "question": "UTG Open → BB / あなたはBB / ハンド：K9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "K9oはUTGに支配されやすくFold。"
    },
    {
      "id": "PF034",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "54o",
      "question": "UTG Open → BB / あなたはBB / ハンド：54o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "54oはオフスートで弱くFold。"
    },
    {
      "id": "PF035",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AA",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "3betを受けてもAAは明確な4bet Value。"
    },
    {
      "id": "PF036",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AKs",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：AKs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "AKsは4bet Valueとして十分強い。"
    },
    {
      "id": "PF037",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：AQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "AQsは強いが、Callと4betが混ざるMix Value。"
    },
    {
      "id": "PF038",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：KQs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "KQsはプレイアビリティが高くMix Value。"
    },
    {
      "id": "PF039",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "A5sはAブロッカーを使った4betブラフ候補。"
    },
    {
      "id": "PF040",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：KTs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "KTsは低頻度のブラフ候補として扱える。"
    },
    {
      "id": "PF041",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：99",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "99はIPでCallして戦える。"
    },
    {
      "id": "PF042",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：QJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 4,
      "label": "Call",
      "explanation": "QJsはIPでCallしやすいスーテッドブロードウェイ。"
    },
    {
      "id": "PF043",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "A9o",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：A9o",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "A9oは3betポットで支配されやすくFold。"
    },
    {
      "id": "PF044",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → BB 3bet → BTN",
      "heroPosition": "BTN",
      "hand": "K9s",
      "question": "BTN Open → BB 3bet → BTN / あなたはBTN / ハンド：K9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 5,
      "label": "Fold",
      "explanation": "K9sは3betに対して続けるには弱めでFold。"
    },
    {
      "id": "PF045",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "AA",
      "question": "SB First In / あなたはSB / ハンド：AA",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 1,
      "label": "Value",
      "explanation": "SB first inでAAは当然Open Value。"
    },
    {
      "id": "PF046",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A9s",
      "question": "SB First In / あなたはSB / ハンド：A9s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "A9sはSBで開けるが、強いバリューほどではなくMix Value。"
    },
    {
      "id": "PF047",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "A5s",
      "question": "SB First In / あなたはSB / ハンド：A5s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "SBのA5sはBBを降ろす目的でも価値が高い。"
    },
    {
      "id": "PF048",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "SB First In",
      "heroPosition": "SB",
      "hand": "KTo",
      "question": "SB First In / あなたはSB / ハンド：KTo",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "KToはSBから攻撃的に使う候補だが慎重に。"
    },
    {
      "id": "PF049",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "KJs",
      "question": "BTN Open → SB / あなたはSB / ハンド：KJs",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 2,
      "label": "Mix Value",
      "explanation": "BTNレンジに対してKJsは戦えるMix Value。"
    },
    {
      "id": "PF050",
      "type": "preflop",
      "mode": "プリフロップ",
      "spot": "BTN Open → SB",
      "heroPosition": "SB",
      "hand": "76s",
      "question": "BTN Open → SB / あなたはSB / ハンド：76s",
      "choices": [
        "Value",
        "Mix Value",
        "Mix Bluff",
        "Call",
        "Fold"
      ],
      "answer": 3,
      "label": "Mix Bluff",
      "explanation": "SBはコールしすぎず、76sはMix BluffまたはFold寄りで扱う。"
    }
  ],
  "boardCategory": [
    {
      "id": "BC001",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "A72r",
      "question": "フロップ：A72r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Aハイでレインボー。ドローが少なく典型的なDry。"
    },
    {
      "id": "BC002",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "K83r",
      "question": "フロップ：K83r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Kハイ・レインボー・非連結。Dry。"
    },
    {
      "id": "BC003",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "Q74r",
      "question": "フロップ：Q74r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "レインボーで接続が弱く、Dry。"
    },
    {
      "id": "BC004",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "A94r",
      "question": "フロップ：A94r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Aハイでドローが少ないDry。"
    },
    {
      "id": "BC005",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "K72r",
      "question": "フロップ：K72r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Kハイの非連結レインボー。Dry。"
    },
    {
      "id": "BC006",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "J72r",
      "question": "フロップ：J72r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Jハイで低カード非連結。Dry。"
    },
    {
      "id": "BC007",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "A62r",
      "question": "フロップ：A62r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Aハイ・レインボーでDry。"
    },
    {
      "id": "BC008",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "K94r",
      "question": "フロップ：K94r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Kハイでストレートドローが少ないDry。"
    },
    {
      "id": "BC009",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "Q83r",
      "question": "フロップ：Q83r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Qハイ・レインボー・非連結。Dry。"
    },
    {
      "id": "BC010",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "T72r",
      "question": "フロップ：T72r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 1,
      "label": "Dry",
      "explanation": "Tハイで低い非連結。やや低いがDry寄り。"
    },
    {
      "id": "BC011",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "AJ5r",
      "question": "フロップ：AJ5r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "AとJが絡むがレインボーでドローは少なめ。Semi Dry。"
    },
    {
      "id": "BC012",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "KJ2r",
      "question": "フロップ：KJ2r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "ブロードウェイ2枚で少し絡むがレインボー。Semi Dry。"
    },
    {
      "id": "BC013",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "QT4r",
      "question": "フロップ：QT4r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "QとTがあるため少し接続。Semi Dry。"
    },
    {
      "id": "BC014",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "AQ5r",
      "question": "フロップ：AQ5r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "高カード2枚のレインボー。Semi Dry。"
    },
    {
      "id": "BC015",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "KQ4r",
      "question": "フロップ：KQ4r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "ブロードウェイ2枚でやや接続。Semi Dry。"
    },
    {
      "id": "BC016",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "AJ8r",
      "question": "フロップ：AJ8r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "高カード中心で少しだけ接続。Semi Dry。"
    },
    {
      "id": "BC017",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "KJ7r",
      "question": "フロップ：KJ7r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "KJがあり、完全Dryより少し絡む。"
    },
    {
      "id": "BC018",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "QT8r",
      "question": "フロップ：QT8r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "ストレート関連はあるがssではないためSemi Dry寄り。"
    },
    {
      "id": "BC019",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "AT6r",
      "question": "フロップ：AT6r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "A高でTが絡み、完全Dryではない。"
    },
    {
      "id": "BC020",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "K92ss",
      "question": "フロップ：K92ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 2,
      "label": "Semi Dry",
      "explanation": "ツートーンでFDはあるが、ランク接続は弱め。Semi Dry。"
    },
    {
      "id": "BC021",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "JT8ss",
      "question": "フロップ：JT8ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "連結＋ツートーン。ストレート/フラッシュドロー多数。Wet。"
    },
    {
      "id": "BC022",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "QT9r",
      "question": "フロップ：QT9r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "ブロードウェイ連結でストレート関連が多い。Wet。"
    },
    {
      "id": "BC023",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "987ss",
      "question": "フロップ：987ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "低中カード連結＋ツートーン。Wet。"
    },
    {
      "id": "BC024",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "T98r",
      "question": "フロップ：T98r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "T98は強いストレート関連。Wet。"
    },
    {
      "id": "BC025",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "J98ss",
      "question": "フロップ：J98ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "連結＋ツートーン。Wet。"
    },
    {
      "id": "BC026",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "QJTss",
      "question": "フロップ：QJTss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "高カード連結＋ツートーン。非常にWet。"
    },
    {
      "id": "BC027",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "876ss",
      "question": "フロップ：876ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "連結＋ツートーン。Wet。"
    },
    {
      "id": "BC028",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "T87ss",
      "question": "フロップ：T87ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "多くのドローが存在するWet。"
    },
    {
      "id": "BC029",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "986ss",
      "question": "フロップ：986ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "ガットやOESD、FDが多いWet。"
    },
    {
      "id": "BC030",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "JT9r",
      "question": "フロップ：JT9r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 3,
      "label": "Wet",
      "explanation": "ブロードウェイ連結。Wet。"
    },
    {
      "id": "BC031",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "654r",
      "question": "フロップ：654r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低く連結したLow。"
    },
    {
      "id": "BC032",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "765ss",
      "question": "フロップ：765ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低中カードで連結。Wetでもあるが分類はLow。"
    },
    {
      "id": "BC033",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "543r",
      "question": "フロップ：543r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低く連結。Low。"
    },
    {
      "id": "BC034",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "652r",
      "question": "フロップ：652r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低カード中心。Low。"
    },
    {
      "id": "BC035",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "763ss",
      "question": "フロップ：763ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低めでBB/Callerに絡みやすいLow。"
    },
    {
      "id": "BC036",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "754r",
      "question": "フロップ：754r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低く連結。Low。"
    },
    {
      "id": "BC037",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "643r",
      "question": "フロップ：643r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低カード連結。Low。"
    },
    {
      "id": "BC038",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "864ss",
      "question": "フロップ：864ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低中カード中心でLow。"
    },
    {
      "id": "BC039",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "653r",
      "question": "フロップ：653r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低カードでCaller側が絡みやすい。"
    },
    {
      "id": "BC040",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "542ss",
      "question": "フロップ：542ss",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 4,
      "label": "Low",
      "explanation": "低く接続し、ツートーンもあるLow。"
    },
    {
      "id": "BC041",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "QQ2r",
      "question": "フロップ：QQ2r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "QがペアになったPairedボード。"
    },
    {
      "id": "BC042",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "QQ7r",
      "question": "フロップ：QQ7r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "同ランク2枚があるためPaired。"
    },
    {
      "id": "BC043",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "KK3r",
      "question": "フロップ：KK3r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "KペアのPaired。"
    },
    {
      "id": "BC044",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "AA4r",
      "question": "フロップ：AA4r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "AペアのPaired。"
    },
    {
      "id": "BC045",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "TT4r",
      "question": "フロップ：TT4r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "TペアのPaired。"
    },
    {
      "id": "BC046",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "772r",
      "question": "フロップ：772r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "7ペアのPaired。"
    },
    {
      "id": "BC047",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "882r",
      "question": "フロップ：882r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "8ペアのPaired。"
    },
    {
      "id": "BC048",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "JJ5r",
      "question": "フロップ：JJ5r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "JペアのPaired。"
    },
    {
      "id": "BC049",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "993r",
      "question": "フロップ：993r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "9ペアのPaired。"
    },
    {
      "id": "BC050",
      "type": "board-category",
      "mode": "ボード分類",
      "board": "KK8r",
      "question": "フロップ：KK8r",
      "choices": [
        "Dry",
        "Semi Dry",
        "Wet",
        "Low",
        "Paired"
      ],
      "answer": 5,
      "label": "Paired",
      "explanation": "KペアのPaired。"
    }
  ],
  "boardAdvantage": [
    {
      "id": "BA001",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "A72r",
      "question": "UTG Open → BTN Call / フロップ：A72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGはAA/AK/AQを多く持つため、DryなAハイはPFR有利。"
    },
    {
      "id": "BA002",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "K83r",
      "question": "UTG Open → BTN Call / フロップ：K83r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGはAK/KQs/KKを持ちやすく、KハイDryはPFR有利。"
    },
    {
      "id": "BA003",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "Q74r",
      "question": "UTG Open → BTN Call / フロップ：Q74r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "高カードDryはPFRの強いレンジが活きやすい。"
    },
    {
      "id": "BA004",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "AJ5r",
      "question": "UTG Open → BTN Call / フロップ：AJ5r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGはAA/JJ/AK/AQ/AJを多く持つ。"
    },
    {
      "id": "BA005",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "JT8ss",
      "question": "UTG Open → BTN Call / フロップ：JT8ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BTN側がJTs/T9s/98s/87sなどを多く持つ。"
    },
    {
      "id": "BA006",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "QT9r",
      "question": "UTG Open → BTN Call / フロップ：QT9r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BTNのスーテッドブロードウェイやコネクターが強く絡む。"
    },
    {
      "id": "BA007",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "654r",
      "question": "UTG Open → BTN Call / フロップ：654r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BTNは低いポケットやコネクターを多く持つ。"
    },
    {
      "id": "BA008",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "765ss",
      "question": "UTG Open → BTN Call / フロップ：765ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BTN側の76s/65s/87sが強く機能。"
    },
    {
      "id": "BA009",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "QQ2r",
      "question": "UTG Open → BTN Call / フロップ：QQ2r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "PFRは高いポケットやQxを多く持つ。"
    },
    {
      "id": "BA010",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "TT4r",
      "question": "UTG Open → BTN Call / フロップ：TT4r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "ペアボードはPFRのオーバーペアが活きやすい。"
    },
    {
      "id": "BA011",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "A72r",
      "question": "BTN Open → BB Call / フロップ：A72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "BTNは広いが強いAxも多く、AハイDryはPFR有利。"
    },
    {
      "id": "BA012",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "K83r",
      "question": "BTN Open → BB Call / フロップ：K83r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "BTNはKxも多く、DryなKハイはPFR有利寄り。"
    },
    {
      "id": "BA013",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "962r",
      "question": "BTN Open → BB Call / フロップ：962r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは広く守るため9x/6x/小ポケットを多く持つ。"
    },
    {
      "id": "BA014",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "654r",
      "question": "BTN Open → BB Call / フロップ：654r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは低いコネクターや2ペア/セットを多く持つ。"
    },
    {
      "id": "BA015",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "JT8ss",
      "question": "BTN Open → BB Call / フロップ：JT8ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBの広いディフェンスレンジが多くヒットする。"
    },
    {
      "id": "BA016",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "Q72r",
      "question": "BTN Open → BB Call / フロップ：Q72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "QハイDryはPFR側のレンジが活きやすい。"
    },
    {
      "id": "BA017",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "QQ2r",
      "question": "BTN Open → BB Call / フロップ：QQ2r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "ペアボードはPFRのレンジ優位が出やすい。"
    },
    {
      "id": "BA018",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "987ss",
      "question": "BTN Open → BB Call / フロップ：987ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBのコネクターが非常に強く絡む。"
    },
    {
      "id": "BA019",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "AJ5r",
      "question": "BTN Open → BB Call / フロップ：AJ5r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "BTNは強いAx/Jxを多く持つ。"
    },
    {
      "id": "BA020",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "543r",
      "question": "BTN Open → BB Call / フロップ：543r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは低いカードを広く守るためCaller有利。"
    },
    {
      "id": "BA021",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "A72r",
      "question": "UTG Open → BB Call / フロップ：A72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGのAA/AK/AQが強く、PFR有利。"
    },
    {
      "id": "BA022",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "K83r",
      "question": "UTG Open → BB Call / フロップ：K83r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGは強いKxと高ポケットが多い。"
    },
    {
      "id": "BA023",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "962r",
      "question": "UTG Open → BB Call / フロップ：962r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは広く守り、低めボードに多く絡む。"
    },
    {
      "id": "BA024",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "654r",
      "question": "UTG Open → BB Call / フロップ：654r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは低いコネクター・小ポケットを多く持つ。"
    },
    {
      "id": "BA025",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "QQ2r",
      "question": "UTG Open → BB Call / フロップ：QQ2r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGは高ポケットやQxを持ちやすい。"
    },
    {
      "id": "BA026",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "AJ5r",
      "question": "UTG Open → BB Call / フロップ：AJ5r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGはAA/JJ/AK/AQ/AJが多い。"
    },
    {
      "id": "BA027",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "765ss",
      "question": "UTG Open → BB Call / フロップ：765ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBの広い守備レンジが強くヒットする。"
    },
    {
      "id": "BA028",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "QT9r",
      "question": "UTG Open → BB Call / フロップ：QT9r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BB側のJTs/T9s/98sなどが強く絡む。"
    },
    {
      "id": "BA029",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "KK3r",
      "question": "UTG Open → BB Call / フロップ：KK3r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "KペアボードはPFRの強レンジが活きる。"
    },
    {
      "id": "BA030",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "872r",
      "question": "UTG Open → BB Call / フロップ：872r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは8x/7x/小ポケットが多い。"
    },
    {
      "id": "BA031",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "3bet Pot: UTG Open → BTN 3bet",
      "board": "A72r",
      "question": "3bet Pot: UTG Open → BTN 3bet / フロップ：A72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "この表記ではPFR=UTGだが、3bet側BTNが強いAxを多く持つ。3bet側有利と考える。"
    },
    {
      "id": "BA032",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "3bet Pot: UTG Open → BTN 3bet",
      "board": "K83r",
      "question": "3bet Pot: UTG Open → BTN 3bet / フロップ：K83r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BTNの3betレンジはAK/KQs/KKを多く含みやすい。"
    },
    {
      "id": "BA033",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "3bet Pot: UTG Open → BTN 3bet",
      "board": "QQ2r",
      "question": "3bet Pot: UTG Open → BTN 3bet / フロップ：QQ2r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "UTGもBTNも強いQx/高ポケットを持ち、極端な差は小さい。"
    },
    {
      "id": "BA034",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "3bet Pot: UTG Open → BTN 3bet",
      "board": "654r",
      "question": "3bet Pot: UTG Open → BTN 3bet / フロップ：654r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "3betポットでは低いコネクターが減り、SRPほどCaller有利ではない。"
    },
    {
      "id": "BA035",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "3bet Pot: UTG Open → BTN 3bet",
      "board": "JT8ss",
      "question": "3bet Pot: UTG Open → BTN 3bet / フロップ：JT8ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "両者の強いブロードウェイが絡むが、SRPほどBTN一方有利ではない。"
    },
    {
      "id": "BA036",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → SB 3bet",
      "board": "A72r",
      "question": "BTN Open → SB 3bet / フロップ：A72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "この表記ではPFR=BTNだが、SBの3bet側が強いAxを多く持つ。"
    },
    {
      "id": "BA037",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → SB 3bet",
      "board": "K83r",
      "question": "BTN Open → SB 3bet / フロップ：K83r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "SBの3betレンジがAK/KQs/KKを多く含む。"
    },
    {
      "id": "BA038",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → SB 3bet",
      "board": "654r",
      "question": "BTN Open → SB 3bet / フロップ：654r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "3betポットでは低いコネクターが減るため互角寄り。"
    },
    {
      "id": "BA039",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → SB 3bet",
      "board": "QQ2r",
      "question": "BTN Open → SB 3bet / フロップ：QQ2r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "両者が強い高カードを持ちやすい。"
    },
    {
      "id": "BA040",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → SB 3bet",
      "board": "JT8ss",
      "question": "BTN Open → SB 3bet / フロップ：JT8ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "強いブロードウェイ同士がぶつかるボード。"
    },
    {
      "id": "BA041",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "SB First In → BB Call",
      "board": "A72r",
      "question": "SB First In → BB Call / フロップ：A72r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "SBはAを多く含むためAハイDryはPFR有利。"
    },
    {
      "id": "BA042",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "SB First In → BB Call",
      "board": "654r",
      "question": "SB First In → BB Call / フロップ：654r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBは広く守るため低いボードに強い。"
    },
    {
      "id": "BA043",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "SB First In → BB Call",
      "board": "JT8ss",
      "question": "SB First In → BB Call / フロップ：JT8ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBのディフェンスレンジが多く絡む。"
    },
    {
      "id": "BA044",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "SB First In → BB Call",
      "board": "QQ2r",
      "question": "SB First In → BB Call / フロップ：QQ2r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "ペアボードはPFR側が有利になりやすい。"
    },
    {
      "id": "BA045",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "SB First In → BB Call",
      "board": "K83r",
      "question": "SB First In → BB Call / フロップ：K83r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "KハイDryはPFR側がCBしやすい。"
    },
    {
      "id": "BA046",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "987ss",
      "question": "UTG Open → BTN Call / フロップ：987ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BTNのコネクターが非常に強く絡む。"
    },
    {
      "id": "BA047",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BTN Call",
      "board": "AA4r",
      "question": "UTG Open → BTN Call / フロップ：AA4r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "AペアボードはUTGの強いAxレンジが活きる。"
    },
    {
      "id": "BA048",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "QT8r",
      "question": "BTN Open → BB Call / フロップ：QT8r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 3,
      "label": "ほぼ互角",
      "explanation": "BTNの高カードもBBの広い守備も絡み、互角寄り。"
    },
    {
      "id": "BA049",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "UTG Open → BB Call",
      "board": "KQ4r",
      "question": "UTG Open → BB Call / フロップ：KQ4r",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 1,
      "label": "PFR有利",
      "explanation": "UTGがAK/KQ/AA/KK/QQを持ちやすい。"
    },
    {
      "id": "BA050",
      "type": "board-advantage",
      "mode": "有利不利",
      "spot": "BTN Open → BB Call",
      "board": "T87ss",
      "question": "BTN Open → BB Call / フロップ：T87ss",
      "choices": [
        "PFR有利",
        "Caller有利",
        "ほぼ互角"
      ],
      "answer": 2,
      "label": "Caller有利",
      "explanation": "BBの広いコネクター・ドローが強く機能する。"
    }
  ],
  "integrated": [
    {
      "id": "IQ001",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "A72r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "A5sはAブロッカー＋ホイール可能性がありMix Bluff。",
      "explainBoard": "A72rはUTGがAA/AK/AQを多く持つ。",
      "explainHand": "A5sはAヒットだがキッカーに注意。"
    },
    {
      "id": "IQ002",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "99",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "962r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "99はセットマインとミドルボードで戦えるためCall。",
      "explainBoard": "962rはBTN側が99/66/22を持ちやすい。",
      "explainHand": "99はトップセット。"
    },
    {
      "id": "IQ003",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQo",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "K83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AQoはUTG相手にMix Value。",
      "explainBoard": "K83rはUTGがAK/KQs/KKを多く持つ。",
      "explainHand": "AQoはAハイで慎重に。"
    },
    {
      "id": "IQ004",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KTs",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "JT8ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "KTsは低頻度のMix Bluff候補。",
      "explainBoard": "JT8ssはBTN側の接続ハンドが強い。",
      "explainHand": "KTsはドローに絡みやすい。"
    },
    {
      "id": "IQ005",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "88",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "654r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "88はCall中心。",
      "explainBoard": "654rはBTN側が低いコネクターを多く持つ。",
      "explainHand": "88はオーバーペア。"
    },
    {
      "id": "IQ006",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "JJ",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "QQ2r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "JJはMix Value。",
      "explainBoard": "QQ2rはPFR側が有利。",
      "explainHand": "Qxに注意。"
    },
    {
      "id": "IQ007",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AJs",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "AJ5r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AJsはCall中心。",
      "explainBoard": "AJ5rはUTGの強いAxが多い。",
      "explainHand": "ツーペア級だがレンジではPFR有利。"
    },
    {
      "id": "IQ008",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "76s",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "765ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "76sはIPでCall候補。",
      "explainBoard": "765ssはBTN側が強い。",
      "explainHand": "76sは強く絡む。"
    },
    {
      "id": "IQ009",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KQo",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "A83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "KQoはMix Value寄り。",
      "explainBoard": "A83rはPFR有利。",
      "explainHand": "KQoはこのボードでは弱め。"
    },
    {
      "id": "IQ010",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "QJs",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "QT9r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "QJsはCall。",
      "explainBoard": "QT9rはBTN側が強く絡む。",
      "explainHand": "トップペア＋ストレート関連。"
    },
    {
      "id": "IQ011",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "A72r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "A5sはBBのMix Bluff候補。",
      "explainBoard": "A72rはBTNが強いAxを多く持つ。",
      "explainHand": "キッカーに注意。"
    },
    {
      "id": "IQ012",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "962r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "99はMix Value。",
      "explainBoard": "962rはBBが強くヒット。",
      "explainHand": "トップセット。"
    },
    {
      "id": "IQ013",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AQo",
      "preflopAnswer": 1,
      "preflopLabel": "Value",
      "flop": "K83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AQoはBBのValue。",
      "explainBoard": "K83rはPFR有利。",
      "explainHand": "Aハイで慎重に。"
    },
    {
      "id": "IQ014",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "JT8ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "KTsはMix Bluff。",
      "explainBoard": "JT8ssはCaller側が絡む。",
      "explainHand": "強いドロー候補。"
    },
    {
      "id": "IQ015",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "88",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "654r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "88はMix Value。",
      "explainBoard": "654rはBB側が強い。",
      "explainHand": "オーバーペア。"
    },
    {
      "id": "IQ016",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "preflopAnswer": 1,
      "preflopLabel": "Value",
      "flop": "QQ2r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "JJはValue。",
      "explainBoard": "QQ2rはPFR有利。",
      "explainHand": "Qxに注意。"
    },
    {
      "id": "IQ017",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "AJ5r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AJsはMix Value。",
      "explainBoard": "AJ5rはPFR有利。",
      "explainHand": "強いがレンジではPFR有利。"
    },
    {
      "id": "IQ018",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "765ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "76sはMix Bluff候補。",
      "explainBoard": "765ssはBB側が強い。",
      "explainHand": "かなり強く絡む。"
    },
    {
      "id": "IQ019",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "KQo",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "A83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "KQoはMix Value。",
      "explainBoard": "A83rはPFR有利。",
      "explainHand": "無理しない。"
    },
    {
      "id": "IQ020",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "BTN Open → BB",
      "heroPosition": "BB",
      "hand": "QJs",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "QT9r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "QJsはMix Value。",
      "explainBoard": "QT9rはCaller側有利。",
      "explainHand": "相性が良い。"
    },
    {
      "id": "IQ021",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "A5s",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "A72r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "A5sはMix Bluff。",
      "explainBoard": "A72rはUTGが強いAxを持つ。",
      "explainHand": "キッカーに注意。"
    },
    {
      "id": "IQ022",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "99",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "962r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "99はCall。",
      "explainBoard": "低ボードはBBが強い。",
      "explainHand": "トップセット。"
    },
    {
      "id": "IQ023",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AQo",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "K83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AQoはMix Value。",
      "explainBoard": "K83rはPFR有利。",
      "explainHand": "Aハイ。"
    },
    {
      "id": "IQ024",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "KTs",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "JT8ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "KTsはMix Bluff。",
      "explainBoard": "JT8ssはBB側が絡む。",
      "explainHand": "ドローに絡みやすい。"
    },
    {
      "id": "IQ025",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "88",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "654r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "88はCall。",
      "explainBoard": "654rはBB側が強い。",
      "explainHand": "オーバーペア。"
    },
    {
      "id": "IQ026",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "JJ",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "QQ2r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "JJはMix Value。",
      "explainBoard": "QQ2rはPFR有利。",
      "explainHand": "慎重に。"
    },
    {
      "id": "IQ027",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "AJs",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "AJ5r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AJsはCall。",
      "explainBoard": "AJ5rはPFR有利。",
      "explainHand": "自分は強いがレンジはPFR。"
    },
    {
      "id": "IQ028",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "76s",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "765ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "76sはCall。",
      "explainBoard": "765ssはBB側が強い。",
      "explainHand": "ツーペア・ドロー。"
    },
    {
      "id": "IQ029",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "KQo",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "A83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "KQoはCall候補。",
      "explainBoard": "A83rはPFR有利。",
      "explainHand": "弱め。"
    },
    {
      "id": "IQ030",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BB",
      "heroPosition": "BB",
      "hand": "QJs",
      "preflopAnswer": 4,
      "preflopLabel": "Call",
      "flop": "QT9r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "QJsはCall。",
      "explainBoard": "QT9rはCaller側有利。",
      "explainHand": "相性が良い。"
    },
    {
      "id": "IQ031",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "AQs",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "A72r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "AQsはMix Value。",
      "explainBoard": "A72rはUTG有利。",
      "explainHand": "トップペア強キッカー。"
    },
    {
      "id": "IQ032",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "JJ",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "QQ2r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "JJはMix Value。",
      "explainBoard": "QQ2rはPFR有利。",
      "explainHand": "Qxに注意。"
    },
    {
      "id": "IQ033",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "A5s",
      "preflopAnswer": 3,
      "preflopLabel": "Mix Bluff",
      "flop": "K83r",
      "boardAnswer": 1,
      "boardLabel": "PFR有利",
      "explainPreflop": "A5sはMix Bluff。",
      "explainBoard": "K83rはPFR有利。",
      "explainHand": "Aハイで無理しない。"
    },
    {
      "id": "IQ034",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "KQs",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "JT8ss",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "KQsはMix Value。",
      "explainBoard": "JT8ssはBTN側が強い。",
      "explainHand": "ドローに絡む。"
    },
    {
      "id": "IQ035",
      "type": "integrated",
      "mode": "2ステップ実戦",
      "spot": "UTG Open → BTN",
      "heroPosition": "BTN",
      "hand": "TT",
      "preflopAnswer": 2,
      "preflopLabel": "Mix Value",
      "flop": "654r",
      "boardAnswer": 2,
      "boardLabel": "BTN/Caller有利",
      "explainPreflop": "TTはMix Value。",
      "explainBoard": "654rはBTN側が強い。",
      "explainHand": "オーバーペアだが注意。"
    }
  ]
};

const STORAGE_KEY = "pokerRangeTrainerV3";
let state = {
  mode: "integrated",
  order: [],
  index: 0,
  step: "preflop",
  score: 0,
  total: 0,
  answered: false
};

function loadStore(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {stats:{}, mistakes:[]}; }
  catch { return {stats:{}, mistakes:[]}; }
}
function saveStore(s){ localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
function getQuestions(mode){
  if(mode === "integrated") return DATA.integrated;
  if(mode === "preflop") return DATA.preflop;
  if(mode === "boardCategory") return DATA.boardCategory;
  if(mode === "boardAdvantage") return DATA.boardAdvantage;
  if(mode === "mistakes"){
    const store = loadStore();
    const ids = new Set(store.mistakes || []);
    return [...DATA.integrated, ...DATA.preflop, ...DATA.boardCategory, ...DATA.boardAdvantage].filter(q => ids.has(q.id));
  }
  return DATA.integrated;
}
function startMode(mode){
  const qs = getQuestions(mode);
  if(qs.length === 0 && mode === "mistakes"){
    alert("復習する間違い問題はまだありません。");
    return;
  }
  state.mode = mode;
  state.order = [...Array(qs.length).keys()];
  state.index = 0;
  state.step = mode === "integrated" ? "preflop" : "single";
  state.score = 0; state.total = 0; state.answered = false;
  render();
}
function shuffle(){
  for(let i = state.order.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
  state.index = 0; state.step = state.mode === "integrated" ? "preflop" : "single";
  state.score = 0; state.total = 0; state.answered = false;
  render();
}
function currentList(){ return getQuestions(state.mode); }
function currentQuestion(){ return currentList()[state.order[state.index]]; }
function choicesFor(q){
  if(q.type === "preflop") return DATA.preflopChoices;
  if(q.type === "board-category") return DATA.boardCategoryChoices;
  if(q.type === "board-advantage") return DATA.boardAdvantageChoices;
  if(q.type === "integrated") return state.step === "preflop" ? DATA.preflopChoices : DATA.boardAdvantageChoices;
  return [];
}
function answerFor(q){
  if(q.type === "integrated") return state.step === "preflop" ? q.preflopAnswer : q.boardAnswer;
  return q.answer;
}
function labelFor(q){
  if(q.type === "integrated") return state.step === "preflop" ? q.preflopLabel : q.boardLabel;
  return q.label;
}
function modeTitle(mode){
  return {
    integrated:"2ステップ実戦",
    preflop:"プリフロップ",
    boardCategory:"ボード分類",
    boardAdvantage:"有利不利",
    mistakes:"間違い復習"
  }[mode] || mode;
}
function render(){
  const q = currentQuestion();
  const list = currentList();
  document.querySelector("#modeTitle").textContent = modeTitle(state.mode);
  document.querySelector("#progress").textContent = `${state.index + 1} / ${list.length}`;
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b.dataset.mode === state.mode));

  const isInt = q.type === "integrated";
  let phase = "";
  if(isInt) phase = state.step === "preflop" ? "STEP1：プリフロップアクション" : "STEP2：フロップ有利不利";
  else phase = q.mode;
  document.querySelector("#phase").textContent = phase;

  document.querySelector("#spot").textContent = q.spot || "-";
  document.querySelector("#hero").textContent = q.heroPosition || "-";
  document.querySelector("#hand").textContent = q.hand || "-";
  document.querySelector("#board").textContent = isInt ? (state.step === "board" ? q.flop : "STEP1正解後") : (q.board || "-");

  document.querySelector("#feedback").innerHTML = "";
  document.querySelector("#explanation").innerHTML = "";
  document.querySelector("#nextBtn").disabled = true;
  renderChoices(q);
}
function renderChoices(q){
  const box = document.querySelector("#choices");
  box.innerHTML = "";
  choicesFor(q).forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `<span>${idx+1}</span>${choice}`;
    btn.onclick = () => answer(idx+1, btn);
    box.appendChild(btn);
  });
}
function addMistake(id){
  const store = loadStore();
  const set = new Set(store.mistakes || []);
  set.add(id); store.mistakes = [...set]; saveStore(store);
}
function removeMistake(id){
  const store = loadStore();
  store.mistakes = (store.mistakes || []).filter(x => x !== id);
  saveStore(store);
}
function recordStat(correct){
  const store = loadStore();
  const key = state.mode;
  store.stats[key] = store.stats[key] || {ok:0,total:0};
  store.stats[key].total++;
  if(correct) store.stats[key].ok++;
  saveStore(store);
}
function answer(num, clicked){
  if(state.answered) return;
  const q = currentQuestion();
  const correct = answerFor(q);
  const ok = num === correct;
  state.answered = true;
  state.total++;
  if(ok) state.score++;
  recordStat(ok);
  if(ok) removeMistake(q.id); else addMistake(q.id);

  document.querySelectorAll(".choice").forEach((b, idx) => {
    b.disabled = true;
    if(idx+1 === correct) b.classList.add("correct");
    if(b === clicked && !ok) b.classList.add("wrong");
  });

  document.querySelector("#feedback").innerHTML = ok ? "⭕ 正解！" : `❌ 不正解。正解は ${correct}. ${labelFor(q)}`;
  document.querySelector("#explanation").innerHTML = buildExplanation(q);
  document.querySelector("#nextBtn").disabled = false;
  document.querySelector("#nextBtn").textContent = (q.type === "integrated" && state.step === "preflop") ? "フロップ問題へ" : (state.index + 1 === currentList().length ? "最初に戻る" : "次の問題へ");
  document.querySelector("#score").textContent = `${state.score} / ${state.total}`;
}
function buildExplanation(q){
  if(q.type === "integrated"){
    if(state.step === "preflop") return `<h3>プリフロップ解説</h3><p>${q.explainPreflop}</p>`;
    return `<h3>プリフロップ解説</h3><p>${q.explainPreflop}</p><h3>ボード解説</h3><p>${q.explainBoard}</p><h3>ハンド解説</h3><p>${q.explainHand}</p>`;
  }
  return `<h3>解説</h3><p>${q.explanation}</p>`;
}
function next(){
  const q = currentQuestion();
  if(q.type === "integrated" && state.step === "preflop"){
    state.step = "board"; state.answered = false; render(); return;
  }
  state.index++;
  if(state.index >= currentList().length) state.index = 0;
  state.step = state.mode === "integrated" ? "preflop" : "single";
  state.answered = false;
  render();
}
function resetStats(){
  if(confirm("成績と間違い復習リストをリセットしますか？")){
    localStorage.removeItem(STORAGE_KEY);
    state.score = 0; state.total = 0; render();
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mode-btn").forEach(btn => btn.onclick = () => startMode(btn.dataset.mode));
  document.querySelector("#shuffleBtn").onclick = shuffle;
  document.querySelector("#nextBtn").onclick = next;
  document.querySelector("#resetBtn").onclick = resetStats;
  startMode("integrated");
});
