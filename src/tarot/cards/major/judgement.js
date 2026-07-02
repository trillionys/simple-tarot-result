export const judgement = {
  id: "judgement",
  number: "XX",
  name: "Judgement",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XX · JUDGEMENT · UPRIGHT",
      title: "다시 불리는 이름",
      text: [
        "당신은 거대한 종소리 아래에서 눈을 떴다.",
        "하늘은 열려 있었고, 오래된 이름들이 먼지처럼 위로 떠올랐다.",
        "누군가 당신을 부르고 있었다. 아주 오래전의 목소리로.",
      ],
      choices: [
        { text: "부름에 대답한다", next: "uprightAnswer" },
        { text: "묻혀 있던 이름을 꺼낸다", next: "uprightName" },
        { text: "하늘을 향해 고개를 든다", next: "uprightSky" },
        { text: "귀를 막고 침묵한다", next: "uprightSilence" },
      ],
    },

    nodes: {
      uprightAnswer: {
        id: "uprightAnswer",
        type: "story",
        label: "THE CALL",
        title: "응답",
        text: [
          "당신은 대답했다.",
          "목소리는 당신의 대답을 기다리고 있었던 것이 아니라, 당신이 대답할 수 있는 사람이 되었는지를 확인하고 있었다.",
          "부름은 바깥에서 온 것이 아니었다.",
        ],
        choices: [
          { text: "다시 한 번 대답한다", next: "endingAwakening" },
          { text: "목소리의 주인을 찾는다", next: "endingInnerVoice" },
        ],
      },

      uprightName: {
        id: "uprightName",
        type: "story",
        label: "THE NAME",
        title: "꺼내진 이름",
        text: [
          "흙 아래에서 이름 하나가 드러났다.",
          "그것은 낯설었지만, 이상하게도 당신의 입모양을 알고 있었다.",
          "오래 묻힌 이름은 발굴되는 순간 심판이 아니라 귀환이 된다.",
        ],
        choices: [
          { text: "그 이름을 받아들인다", next: "endingReturnedName" },
          { text: "다시 묻어준다", next: "endingMercy" },
        ],
      },

      uprightSky: {
        id: "uprightSky",
        type: "story",
        label: "THE OPEN SKY",
        title: "열린 하늘",
        text: [
          "하늘은 문처럼 열려 있었다.",
          "빛은 내려오지 않았다.",
          "오히려 당신 안쪽의 어둠이 천천히 위로 올라가고 있었다.",
        ],
        choices: [
          { text: "빛을 향해 선다", next: "endingRising" },
          { text: "그림자까지 함께 올려보낸다", next: "endingWhole" },
        ],
      },

      uprightSilence: {
        id: "uprightSilence",
        type: "story",
        label: "THE SILENCE",
        title: "막힌 귀",
        text: [
          "당신은 귀를 막았다.",
          "하지만 종소리는 귀가 아니라 기억 속에서 울리고 있었다.",
          "듣지 않으려는 것들은 때때로 가장 깊은 곳에서 반복된다.",
        ],
        choices: [
          { text: "결국 귀를 연다", next: "endingDelayedAnswer" },
          { text: "끝까지 듣지 않는다", next: "endingUnheard" },
        ],
      },
    },

    endings: {
      endingAwakening: {
        id: "endingAwakening",
        type: "ending",
        title: "깨어난 자",
        text: [
          "당신은 다시 대답했다.",
          "이번에는 목소리가 멈췄다.",
          "깨어남은 누군가의 부름이 아니라, 더 이상 부름이 필요 없는 상태였다.",
        ],
      },

      endingInnerVoice: {
        id: "endingInnerVoice",
        type: "ending",
        title: "안쪽의 나팔",
        text: [
          "당신은 목소리의 주인을 찾았다.",
          "그곳에는 아무도 없었다.",
          "다만 당신이 오래 미뤄둔 대답이 나팔처럼 서 있었다.",
        ],
      },

      endingReturnedName: {
        id: "endingReturnedName",
        type: "ending",
        title: "돌아온 이름",
        text: [
          "당신은 그 이름을 받아들였다.",
          "이름은 당신에게 붙지 않았다.",
          "대신 당신이 그 이름에 천천히 가까워졌다.",
        ],
      },

      endingMercy: {
        id: "endingMercy",
        type: "ending",
        title: "다시 묻어준 것",
        text: [
          "당신은 이름을 다시 묻어주었다.",
          "모든 진실이 드러나야 하는 것은 아니었다.",
          "어떤 용서는 기억하는 것이 아니라, 더 이상 파헤치지 않는 일이다.",
        ],
      },

      endingRising: {
        id: "endingRising",
        type: "ending",
        title: "올라가는 빛",
        text: [
          "당신은 빛을 향해 섰다.",
          "빛은 당신을 데려가지 않았다.",
          "다만 당신이 스스로 일어날 때까지 조용히 기다렸다.",
        ],
      },

      endingWhole: {
        id: "endingWhole",
        type: "ending",
        title: "함께 오른 그림자",
        text: [
          "당신은 그림자까지 함께 올려보냈다.",
          "하늘은 그것을 거절하지 않았다.",
          "구원은 깨끗해지는 일이 아니라, 버리지 않고 올라가는 일이었다.",
        ],
      },

      endingDelayedAnswer: {
        id: "endingDelayedAnswer",
        type: "ending",
        title: "늦은 응답",
        text: [
          "당신은 뒤늦게 귀를 열었다.",
          "종소리는 이미 끝나 있었다.",
          "하지만 울림은 아직 당신 안에서 대답을 기다리고 있었다.",
        ],
      },

      endingUnheard: {
        id: "endingUnheard",
        type: "ending",
        title: "듣지 않은 심판",
        text: [
          "당신은 끝까지 듣지 않았다.",
          "그래서 아무 일도 일어나지 않았다.",
          "그러나 아무 일도 일어나지 않은 채로, 당신은 조금 달라져 있었다.",
        ],
      },
    },
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XX · JUDGEMENT · REVERSED",
      title: "대답하지 못한 부름",
      text: [
        "당신은 울리지 않는 종 아래에서 눈을 떴다.",
        "하늘은 닫혀 있었고, 이름들은 흙 속에서 입을 다물고 있었다.",
        "부름은 있었지만, 당신은 그것이 자신을 향한 것인지 알 수 없었다.",
      ],
      choices: [
        { text: "울리지 않는 종을 만진다", next: "reversedBell" },
        { text: "닫힌 하늘을 바라본다", next: "reversedSky" },
        { text: "묻힌 이름들을 그냥 지나친다", next: "reversedNames" },
        { text: "스스로를 심판한다", next: "reversedSelf" },
      ],
    },

    nodes: {
      reversedBell: {
        id: "reversedBell",
        type: "story",
        label: "THE SILENT BELL",
        title: "울리지 않는 종",
        text: [
          "종은 차가웠다.",
          "아무리 흔들어도 소리는 나지 않았다.",
          "아직 울릴 때가 아닌 것인지, 이미 너무 오래전에 울린 것인지 알 수 없었다.",
        ],
        choices: [
          { text: "종을 계속 흔든다", next: "endingForcedCall" },
          { text: "손을 뗀다", next: "endingNotYet" },
        ],
      },

      reversedSky: {
        id: "reversedSky",
        type: "story",
        label: "THE CLOSED SKY",
        title: "닫힌 하늘",
        text: [
          "하늘은 단단한 천장처럼 닫혀 있었다.",
          "당신은 위를 보았지만, 위라는 방향이 사라진 것 같았다.",
          "올라갈 수 없는 날에는, 깊어지는 것만이 남는다.",
        ],
        choices: [
          { text: "위로 가려 한다", next: "endingCeiling" },
          { text: "아래를 파기 시작한다", next: "endingDescent" },
        ],
      },

      reversedNames: {
        id: "reversedNames",
        type: "story",
        label: "BURIED NAMES",
        title: "지나친 이름들",
        text: [
          "당신은 묻힌 이름들을 지나쳤다.",
          "그러나 등 뒤에서 아주 작은 소리들이 흙을 밀어 올렸다.",
          "지나친 것들은 사라지지 않고, 보이지 않는 곳에서 자란다.",
        ],
        choices: [
          { text: "돌아가 이름을 읽는다", next: "endingReturn" },
          { text: "더 빨리 걷는다", next: "endingAvoidance" },
        ],
      },

      reversedSelf: {
        id: "reversedSelf",
        type: "story",
        label: "SELF JUDGEMENT",
        title: "스스로 내린 판결",
        text: [
          "당신은 스스로를 심판했다.",
          "판결은 빨랐고, 너무 익숙했다.",
          "하지만 익숙한 죄책감이 언제나 진실인 것은 아니다.",
        ],
        choices: [
          { text: "판결문을 찢는다", next: "endingAppeal" },
          { text: "그 판결을 받아들인다", next: "endingSentence" },
        ],
      },
    },

    endings: {
      endingForcedCall: {
        id: "endingForcedCall",
        type: "ending",
        title: "억지로 울린 종",
        text: [
          "당신은 종을 계속 흔들었다.",
          "마침내 소리가 났다.",
          "그러나 그 소리는 부름이 아니라 균열에 가까웠다.",
        ],
      },

      endingNotYet: {
        id: "endingNotYet",
        type: "ending",
        title: "아직 아닌 시간",
        text: [
          "당신은 종에서 손을 뗐다.",
          "침묵은 실패가 아니었다.",
          "아직 대답하지 않는 것도 하나의 준비였다.",
        ],
      },

      endingCeiling: {
        id: "endingCeiling",
        type: "ending",
        title: "천장에 닿은 기도",
        text: [
          "당신은 위로 가려 했다.",
          "기도는 닫힌 하늘에 닿고 조용히 되돌아왔다.",
          "돌아온 기도는 처음보다 더 당신의 목소리를 닮아 있었다.",
        ],
      },

      endingDescent: {
        id: "endingDescent",
        type: "ending",
        title: "아래로 내려간 구원",
        text: [
          "당신은 아래를 파기 시작했다.",
          "흙 아래에는 무덤이 아니라 계단이 있었다.",
          "모든 상승이 위로 향하는 것은 아니었다.",
        ],
      },

      endingReturn: {
        id: "endingReturn",
        type: "ending",
        title: "되돌아 읽은 이름",
        text: [
          "당신은 돌아가 이름을 읽었다.",
          "몇몇은 너무 늦었고, 몇몇은 아직 기다리고 있었다.",
          "늦게 읽힌 이름도 끝내 무의미해지지는 않는다.",
        ],
      },

      endingAvoidance: {
        id: "endingAvoidance",
        type: "ending",
        title: "빠르게 지나친 곳",
        text: [
          "당신은 더 빨리 걸었다.",
          "하지만 발걸음이 빨라질수록 이름들은 더 선명해졌다.",
          "회피는 때때로 가장 긴 형태의 응시다.",
        ],
      },

      endingAppeal: {
        id: "endingAppeal",
        type: "ending",
        title: "항소",
        text: [
          "당신은 판결문을 찢었다.",
          "종이 조각들은 흩어지지 않고 새 문장이 되었다.",
          "자기 자신에게 내린 판결도 다시 쓸 수 있다.",
        ],
      },

      endingSentence: {
        id: "endingSentence",
        type: "ending",
        title: "받아들인 형",
        text: [
          "당신은 그 판결을 받아들였다.",
          "그러자 형벌은 조금 가벼워졌다.",
          "인정은 항상 구원이 아니지만, 때로는 감옥의 문을 보이게 한다.",
        ],
      },
    },
  },
};