export const theEmpress = {
  id: "the-empress",
  number: "III",
  name: "The Empress",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "III · THE EMPRESS · UPRIGHT",
      title: "살아 있는 정원",
      text: [
        "당신은 꽃이 너무 많이 핀 정원에서 눈을 떴다.",
        "흙은 따뜻했고, 공기는 익은 과일의 향기로 가득했다.",
        "어딘가에서 무언가가 자라고 있었다. 당신이 돌보지 않아도, 당신 때문에."
      ],
      choices: [
        { text: "흙에 손을 묻는다", next: "uprightSoil" },
        { text: "열매가 열린 나무로 간다", next: "uprightTree" },
        { text: "정원 한가운데의 샘을 들여다본다", next: "uprightSpring" },
        { text: "꽃으로 덮인 의자에 앉는다", next: "uprightSeat" }
      ]
    },

    nodes: {
      uprightSoil: {
        id: "uprightSoil",
        type: "story",
        label: "THE SOIL",
        title: "따뜻한 흙",
        text: [
          "흙은 손바닥보다 따뜻했다.",
          "그 안에는 아직 싹트지 않은 것들이 조용히 숨을 고르고 있었다.",
          "기다림은 게으름이 아니라, 자라기 위한 어둠이었다."
        ],
        choices: [
          { text: "씨앗을 심는다", next: "endingSeed" },
          { text: "흙을 그대로 덮어준다", next: "endingPatience" }
        ]
      },

      uprightTree: {
        id: "uprightTree",
        type: "story",
        label: "THE TREE",
        title: "열매 맺은 나무",
        text: [
          "나무에는 붉은 열매들이 가득했다.",
          "손을 뻗자 가장 낮은 가지가 스스로 내려왔다.",
          "풍요는 때때로 빼앗는 것이 아니라 받아들일 준비가 되었는지를 묻는다."
        ],
        choices: [
          { text: "열매를 하나 딴다", next: "endingFruit" },
          { text: "열매를 남겨둔다", next: "endingAbundance" }
        ]
      },

      uprightSpring: {
        id: "uprightSpring",
        type: "story",
        label: "THE SPRING",
        title: "정원의 샘",
        text: [
          "샘물은 맑았지만 당신의 얼굴만 비추지는 않았다.",
          "물속에는 어린 시절의 손, 잊은 목소리, 아직 태어나지 않은 하루가 함께 흔들렸다.",
          "생명은 늘 과거와 미래를 동시에 품고 있었다."
        ],
        choices: [
          { text: "샘물을 마신다", next: "endingNourishment" },
          { text: "물에 손을 씻는다", next: "endingCleansing" }
        ]
      },

      uprightSeat: {
        id: "uprightSeat",
        type: "story",
        label: "THE SEAT",
        title: "꽃의 의자",
        text: [
          "당신은 꽃으로 덮인 의자에 앉았다.",
          "쉬는 순간에도 정원은 멈추지 않았다.",
          "돌봄은 항상 움직이는 일이 아니라, 생명이 스스로 자라도록 자리를 내어주는 일이었다."
        ],
        choices: [
          { text: "그 자리에서 쉰다", next: "endingRest" },
          { text: "다시 일어나 정원을 돌본다", next: "endingCare" }
        ]
      }
    },

    endings: {
      endingSeed: {
        id: "endingSeed",
        type: "ending",
        title: "심어진 가능성",
        text: [
          "당신은 씨앗을 심었다.",
          "아무 일도 일어나지 않았다.",
          "그러나 흙 아래에서 미래는 이미 방향을 정하고 있었다."
        ]
      },

      endingPatience: {
        id: "endingPatience",
        type: "ending",
        title: "덮어준 흙",
        text: [
          "당신은 흙을 그대로 덮어주었다.",
          "싹은 아직 나오지 않았다.",
          "모든 성장은 보이기 전에 먼저 보호받아야 한다."
        ]
      },

      endingFruit: {
        id: "endingFruit",
        type: "ending",
        title: "받아든 열매",
        text: [
          "당신은 열매를 하나 땄다.",
          "단맛은 혀보다 먼저 마음에 닿았다.",
          "받아들이는 것도 하나의 능력이다."
        ]
      },

      endingAbundance: {
        id: "endingAbundance",
        type: "ending",
        title: "남겨둔 풍요",
        text: [
          "당신은 열매를 남겨두었다.",
          "나무는 더 무거워졌지만 꺾이지 않았다.",
          "풍요는 소유하지 않아도 곁에 있을 수 있다."
        ]
      },

      endingNourishment: {
        id: "endingNourishment",
        type: "ending",
        title: "마신 샘물",
        text: [
          "당신은 샘물을 마셨다.",
          "목이 축여지는 동시에 오래 말라 있던 무언가도 함께 젖었다.",
          "돌봄은 몸보다 깊은 곳에서 시작될 때가 있다."
        ]
      },

      endingCleansing: {
        id: "endingCleansing",
        type: "ending",
        title: "씻긴 손",
        text: [
          "당신은 물에 손을 씻었다.",
          "손은 깨끗해졌지만 손금 사이에 작은 씨앗 하나가 남았다.",
          "정화는 비워내는 일만이 아니라, 다시 품을 준비이기도 하다."
        ]
      },

      endingRest: {
        id: "endingRest",
        type: "ending",
        title: "허락된 쉼",
        text: [
          "당신은 그 자리에서 쉬었다.",
          "정원은 당신 없이도 자랐다.",
          "모든 것을 돌보려는 마음도 때로는 돌봄을 받아야 한다."
        ]
      },

      endingCare: {
        id: "endingCare",
        type: "ending",
        title: "다시 돌보는 손",
        text: [
          "당신은 다시 일어나 정원을 돌보았다.",
          "꽃들은 당신에게 감사하지 않았다.",
          "하지만 당신이 지나간 자리마다 조금 더 살아 있었다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "III · THE EMPRESS · REVERSED",
      title: "시든 정원",
      text: [
        "당신은 꽃이 너무 오래 피어 있던 정원에서 눈을 떴다.",
        "향기는 달콤했지만 조금 썩어 있었고, 흙은 젖어 있었지만 숨을 쉬지 못했다.",
        "무언가가 자라고 있었지만, 그것이 살아 있는지는 확신할 수 없었다."
      ],
      choices: [
        { text: "썩은 열매를 집어 든다", next: "reversedFruit" },
        { text: "물에 잠긴 흙을 파본다", next: "reversedSoil" },
        { text: "시든 꽃들을 묶는다", next: "reversedFlowers" },
        { text: "정원을 떠나려 한다", next: "reversedLeave" }
      ]
    },

    nodes: {
      reversedFruit: {
        id: "reversedFruit",
        type: "story",
        label: "ROTTEN FRUIT",
        title: "썩은 열매",
        text: [
          "열매는 겉으로는 아름다웠다.",
          "하지만 손에 쥐자 안쪽이 무너져 내렸다.",
          "너무 오래 붙잡은 풍요는 때때로 부패가 된다."
        ],
        choices: [
          { text: "열매를 버린다", next: "endingLetGo" },
          { text: "상한 부분만 도려낸다", next: "endingSalvage" }
        ]
      },

      reversedSoil: {
        id: "reversedSoil",
        type: "story",
        label: "DROWNED SOIL",
        title: "물에 잠긴 흙",
        text: [
          "흙은 젖어 있었지만 생기를 잃고 있었다.",
          "너무 많은 물은 씨앗을 깨우지 않고 숨 막히게 했다.",
          "돌봄도 지나치면 자라는 힘을 빼앗는다."
        ],
        choices: [
          { text: "물을 빼낸다", next: "endingDrain" },
          { text: "더 많은 물을 준다", next: "endingOvercare" }
        ]
      },

      reversedFlowers: {
        id: "reversedFlowers",
        type: "story",
        label: "WITHERED FLOWERS",
        title: "시든 꽃다발",
        text: [
          "당신은 시든 꽃들을 묶었다.",
          "꽃다발은 완성되었지만 향기는 더 탁해졌다.",
          "이미 끝난 아름다움을 억지로 묶어두면, 그 끝도 함께 갇힌다."
        ],
        choices: [
          { text: "꽃다발을 내려놓는다", next: "endingReleaseFlowers" },
          { text: "꽃다발을 품에 안는다", next: "endingCling" }
        ]
      },

      reversedLeave: {
        id: "reversedLeave",
        type: "story",
        label: "THE EXIT",
        title: "정원을 떠나는 길",
        text: [
          "당신은 정원을 떠나려 했다.",
          "그러나 덩굴이 발목을 조용히 감았다.",
          "당신이 돌봤던 것들이 이제 당신을 놓아주지 않으려 했다."
        ],
        choices: [
          { text: "덩굴을 끊는다", next: "endingCutVine" },
          { text: "덩굴을 설득한다", next: "endingSoftGoodbye" }
        ]
      }
    },

    endings: {
      endingLetGo: {
        id: "endingLetGo",
        type: "ending",
        title: "버린 열매",
        text: [
          "당신은 썩은 열매를 버렸다.",
          "손에는 냄새가 남았지만 무게는 사라졌다.",
          "놓아야 하는 풍요도 있다."
        ]
      },

      endingSalvage: {
        id: "endingSalvage",
        type: "ending",
        title: "도려낸 단맛",
        text: [
          "당신은 상한 부분을 도려냈다.",
          "남은 조각은 작았지만 아직 먹을 수 있었다.",
          "모든 상처가 전체를 망치는 것은 아니다."
        ]
      },

      endingDrain: {
        id: "endingDrain",
        type: "ending",
        title: "숨 쉬는 흙",
        text: [
          "당신은 고인 물을 빼냈다.",
          "흙은 천천히 갈라졌고, 그 틈으로 공기가 들어갔다.",
          "부족함이 아니라 여백이 생명을 살릴 때가 있다."
        ]
      },

      endingOvercare: {
        id: "endingOvercare",
        type: "ending",
        title: "과한 돌봄",
        text: [
          "당신은 더 많은 물을 주었다.",
          "정원은 잠시 반짝였고, 곧 더 깊이 가라앉았다.",
          "사랑이라는 이름의 과잉도 뿌리를 썩게 할 수 있다."
        ]
      },

      endingReleaseFlowers: {
        id: "endingReleaseFlowers",
        type: "ending",
        title: "내려놓은 꽃다발",
        text: [
          "당신은 꽃다발을 내려놓았다.",
          "꽃들은 흩어졌고, 이상하게도 더 편안해 보였다.",
          "끝난 아름다움은 묶어둘 때보다 흩어질 때 더 오래 남는다."
        ]
      },

      endingCling: {
        id: "endingCling",
        type: "ending",
        title: "품에 안은 시듦",
        text: [
          "당신은 시든 꽃다발을 품에 안았다.",
          "옷에 향이 배었고, 향은 점점 무거워졌다.",
          "붙잡은 것은 꽃이 아니라, 꽃이던 시간이었다."
        ]
      },

      endingCutVine: {
        id: "endingCutVine",
        type: "ending",
        title: "끊어진 덩굴",
        text: [
          "당신은 덩굴을 끊었다.",
          "발목은 풀렸지만 정원은 잠시 흔들렸다.",
          "떠남은 때로 다정하지 않지만, 반드시 잔인한 것도 아니다."
        ]
      },

      endingSoftGoodbye: {
        id: "endingSoftGoodbye",
        type: "ending",
        title: "부드러운 작별",
        text: [
          "당신은 덩굴을 억지로 끊지 않았다.",
          "조용히 기다리자 덩굴은 스스로 힘을 풀었다.",
          "모든 이별이 칼을 필요로 하지는 않는다."
        ]
      }
    }
  }
};