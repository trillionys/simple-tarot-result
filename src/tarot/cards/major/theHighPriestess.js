export const theHighPriestess = {
  id: "the-high-priestess",
  number: "II",
  name: "The High Priestess",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "II · THE HIGH PRIESTESS · UPRIGHT",
      title: "푸른 장막의 방",
      text: [
        "당신은 푸른 장막이 드리운 방에서 눈을 떴다.",
        "방 안에는 책도 문도 없었지만, 모든 것이 무언가를 숨기고 있었다.",
        "어떤 진실은 발견되는 것이 아니라, 조용히 드러날 때까지 기다리는 것 같았다."
      ],
      choices: [
        { text: "장막 뒤를 바라본다", next: "uprightVeil" },
        { text: "고요한 물그릇을 들여다본다", next: "uprightWater" },
        { text: "들리지 않는 목소리에 귀 기울인다", next: "uprightVoice" },
        { text: "손에 쥔 열쇠를 살핀다", next: "uprightKey" }
      ]
    },

    nodes: {
      uprightVeil: {
        id: "uprightVeil",
        type: "story",
        label: "THE VEIL",
        title: "장막",
        text: [
          "장막은 얇았지만 쉽게 걷히지 않았다.",
          "당신이 가까이 다가갈수록 그 너머의 형상은 더 흐려졌다.",
          "비밀은 억지로 밝히려 할수록 더 깊은 곳으로 물러난다."
        ],
        choices: [
          { text: "장막을 그대로 둔다", next: "endingRevealedByWaiting" },
          { text: "손끝으로 살짝 걷는다", next: "endingHalfTruth" }
        ]
      },

      uprightWater: {
        id: "uprightWater",
        type: "story",
        label: "THE WATER",
        title: "고요한 물",
        text: [
          "물은 너무 고요해서 거울보다 더 깊어 보였다.",
          "당신의 얼굴 아래로 다른 표정들이 겹쳐졌다.",
          "알고 있는 것과 느끼는 것은 서로 다른 깊이에 있었다."
        ],
        choices: [
          { text: "물속의 얼굴을 본다", next: "endingInnerKnowing" },
          { text: "물결을 일으킨다", next: "endingDisturbedTruth" }
        ]
      },

      uprightVoice: {
        id: "uprightVoice",
        type: "story",
        label: "THE VOICE",
        title: "들리지 않는 목소리",
        text: [
          "목소리는 말하지 않았다.",
          "하지만 당신은 그것이 침묵 속에서 계속 문장을 만들고 있음을 알았다.",
          "직감은 때때로 소리가 아니라 방향으로 온다."
        ],
        choices: [
          { text: "그 방향을 따른다", next: "endingIntuition" },
          { text: "확실한 증거를 기다린다", next: "endingUnanswered" }
        ]
      },

      uprightKey: {
        id: "uprightKey",
        type: "story",
        label: "THE KEY",
        title: "손안의 열쇠",
        text: [
          "열쇠는 작고 차가웠다.",
          "하지만 이 방에는 열쇠구멍이 보이지 않았다.",
          "모든 열쇠가 문을 열기 위해 존재하는 것은 아니었다."
        ],
        choices: [
          { text: "열쇠를 품에 넣는다", next: "endingKeptSecret" },
          { text: "열쇠를 물그릇에 떨어뜨린다", next: "endingSunkenKey" }
        ]
      }
    },

    endings: {
      endingRevealedByWaiting: {
        id: "endingRevealedByWaiting",
        type: "ending",
        title: "기다림이 걷은 장막",
        text: [
          "당신은 장막을 그대로 두었다.",
          "시간이 지나자 천은 스스로 조금 투명해졌다.",
          "어떤 진실은 묻는 사람보다 기다릴 줄 아는 사람에게 먼저 열린다."
        ]
      },

      endingHalfTruth: {
        id: "endingHalfTruth",
        type: "ending",
        title: "반쯤 보인 것",
        text: [
          "당신은 장막을 살짝 걷었다.",
          "너머에는 답이 아니라 더 정확한 질문이 있었다.",
          "완전히 알지 못한 진실도 충분히 삶을 바꿀 수 있다."
        ]
      },

      endingInnerKnowing: {
        id: "endingInnerKnowing",
        type: "ending",
        title: "이미 알고 있던 것",
        text: [
          "당신은 물속의 얼굴을 보았다.",
          "그 얼굴은 낯설지 않았다.",
          "처음 알게 된 것이 아니라, 오래전부터 알고 있었음을 받아들인 것뿐이었다."
        ]
      },

      endingDisturbedTruth: {
        id: "endingDisturbedTruth",
        type: "ending",
        title: "흐려진 진실",
        text: [
          "당신은 물결을 일으켰다.",
          "얼굴들은 흩어졌고, 답은 잠시 사라졌다.",
          "서두른 확인은 때때로 직감보다 더 많은 것을 흐린다."
        ]
      },

      endingIntuition: {
        id: "endingIntuition",
        type: "ending",
        title: "소리 없는 방향",
        text: [
          "당신은 들리지 않는 목소리가 가리킨 방향으로 걸었다.",
          "길은 보이지 않았지만 발은 망설이지 않았다.",
          "직감은 설명보다 먼저 움직이는 지혜다."
        ]
      },

      endingUnanswered: {
        id: "endingUnanswered",
        type: "ending",
        title: "대답하지 않은 방",
        text: [
          "당신은 확실한 증거를 기다렸다.",
          "방은 끝내 아무것도 증명하지 않았다.",
          "그러나 증명되지 않은 것들이 모두 거짓인 것은 아니었다."
        ]
      },

      endingKeptSecret: {
        id: "endingKeptSecret",
        type: "ending",
        title: "간직한 열쇠",
        text: [
          "당신은 열쇠를 품에 넣었다.",
          "열 문은 없었지만, 당신은 조금 덜 흔들렸다.",
          "어떤 비밀은 풀기보다 간직할 때 힘이 된다."
        ]
      },

      endingSunkenKey: {
        id: "endingSunkenKey",
        type: "ending",
        title: "가라앉은 열쇠",
        text: [
          "당신은 열쇠를 물그릇에 떨어뜨렸다.",
          "열쇠는 가라앉았고 물은 다시 고요해졌다.",
          "열 수 있는 힘을 포기할 때 비로소 열리는 것들도 있다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "II · THE HIGH PRIESTESS · REVERSED",
      title: "찢어진 장막의 방",
      text: [
        "당신은 찢어진 푸른 장막 앞에서 눈을 떴다.",
        "숨겨져 있던 것들은 너무 많이 드러났고, 정작 중요한 것은 보이지 않았다.",
        "침묵은 깨졌지만, 이해는 아직 오지 않았다."
      ],
      choices: [
        { text: "찢어진 장막을 만진다", next: "reversedVeil" },
        { text: "흐린 물그릇을 들여다본다", next: "reversedWater" },
        { text: "머릿속의 소음을 듣는다", next: "reversedNoise" },
        { text: "잃어버린 열쇠를 찾는다", next: "reversedKey" }
      ]
    },

    nodes: {
      reversedVeil: {
        id: "reversedVeil",
        type: "story",
        label: "THE TORN VEIL",
        title: "찢어진 장막",
        text: [
          "장막은 이미 찢어져 있었다.",
          "하지만 찢어진 틈으로 보이는 것은 진실이 아니라 조각난 장면들이었다.",
          "비밀이 너무 빨리 드러나면 의미는 따라오지 못한다."
        ],
        choices: [
          { text: "장막을 다시 꿰맨다", next: "endingRestoredVeil" },
          { text: "남은 천까지 찢는다", next: "endingTooMuchTruth" }
        ]
      },

      reversedWater: {
        id: "reversedWater",
        type: "story",
        label: "MUDDY WATER",
        title: "흐린 물",
        text: [
          "물은 탁했고 아무것도 비추지 않았다.",
          "당신은 더 깊이 들여다보려 했지만, 볼수록 눈만 피로해졌다.",
          "혼란 속에서 억지로 답을 찾으면 불안이 먼저 얼굴을 만든다."
        ],
        choices: [
          { text: "물이 가라앉기를 기다린다", next: "endingSettling" },
          { text: "손으로 휘저어 찾는다", next: "endingConfusion" }
        ]
      },

      reversedNoise: {
        id: "reversedNoise",
        type: "story",
        label: "THE NOISE",
        title: "머릿속의 소음",
        text: [
          "생각들이 한꺼번에 말하기 시작했다.",
          "모두가 자신을 직감이라고 주장했다.",
          "하지만 진짜 직감은 이렇게 소란스럽지 않았다."
        ],
        choices: [
          { text: "가장 조용한 생각을 찾는다", next: "endingQuietSignal" },
          { text: "가장 큰 목소리를 따른다", next: "endingFalseVoice" }
        ]
      },

      reversedKey: {
        id: "reversedKey",
        type: "story",
        label: "THE LOST KEY",
        title: "잃어버린 열쇠",
        text: [
          "열쇠는 보이지 않았다.",
          "당신은 바닥을 뒤졌지만, 찾을수록 무엇을 열고 싶었는지조차 희미해졌다.",
          "목적을 잃은 탐색은 때때로 집착이 된다."
        ],
        choices: [
          { text: "찾는 일을 멈춘다", next: "endingStoppedSearch" },
          { text: "끝까지 찾는다", next: "endingObsession" }
        ]
      }
    },

    endings: {
      endingRestoredVeil: {
        id: "endingRestoredVeil",
        type: "ending",
        title: "다시 꿰맨 장막",
        text: [
          "당신은 장막을 다시 꿰맸다.",
          "모든 것이 감춰진 것은 아니었지만, 방은 숨을 쉴 수 있게 되었다.",
          "경계는 때때로 거짓이 아니라 회복을 위한 보호다."
        ]
      },

      endingTooMuchTruth: {
        id: "endingTooMuchTruth",
        type: "ending",
        title: "너무 많은 진실",
        text: [
          "당신은 남은 장막까지 찢었다.",
          "모든 것이 드러났지만 아무것도 이해되지 않았다.",
          "진실도 감당할 그릇이 없으면 빛이 아니라 눈부심이 된다."
        ]
      },

      endingSettling: {
        id: "endingSettling",
        type: "ending",
        title: "가라앉는 물",
        text: [
          "당신은 물이 가라앉기를 기다렸다.",
          "탁함은 천천히 아래로 내려갔고, 표면은 조금씩 맑아졌다.",
          "혼란은 해결되기 전에 먼저 멈출 시간을 필요로 한다."
        ]
      },

      endingConfusion: {
        id: "endingConfusion",
        type: "ending",
        title: "더 흐려진 물",
        text: [
          "당신은 손으로 물을 휘저었다.",
          "바닥의 침전물까지 떠올라 모든 것이 더 흐려졌다.",
          "불안한 확인은 종종 불안을 증명하는 증거만 더 만든다."
        ]
      },

      endingQuietSignal: {
        id: "endingQuietSignal",
        type: "ending",
        title: "가장 조용한 신호",
        text: [
          "당신은 가장 조용한 생각을 찾았다.",
          "그것은 주장하지 않았고, 다만 사라지지 않았다.",
          "진짜 앎은 설득하려 하지 않아도 오래 남는다."
        ]
      },

      endingFalseVoice: {
        id: "endingFalseVoice",
        type: "ending",
        title: "큰 목소리",
        text: [
          "당신은 가장 큰 목소리를 따랐다.",
          "길은 빠르게 열렸지만 곧 낯선 곳에서 끊어졌다.",
          "확신의 크기가 진실의 깊이를 보장하지는 않는다."
        ]
      },

      endingStoppedSearch: {
        id: "endingStoppedSearch",
        type: "ending",
        title: "멈춘 탐색",
        text: [
          "당신은 열쇠 찾기를 멈췄다.",
          "그 순간 손 안에 작고 차가운 감각이 돌아왔다.",
          "찾는 일을 멈추면, 잃어버린 줄 알았던 것들이 자신을 드러낼 때가 있다."
        ]
      },

      endingObsession: {
        id: "endingObsession",
        type: "ending",
        title: "찾는 사람",
        text: [
          "당신은 끝까지 열쇠를 찾았다.",
          "마침내 무언가를 손에 넣었지만 그것은 열쇠가 아니라 녹슨 못이었다.",
          "집착은 종종 원하는 것과 닮은 가짜를 건네준다."
        ]
      }
    }
  }
};