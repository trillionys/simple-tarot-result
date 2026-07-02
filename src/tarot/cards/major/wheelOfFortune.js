export const wheelOfFortune = {
  id: "wheel-of-fortune",
  number: "X",
  name: "Wheel of Fortune",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "X · WHEEL OF FORTUNE · UPRIGHT",
      title: "돌아가는 바퀴",
      text: [
        "당신은 거대한 바퀴 앞에서 눈을 떴다.",
        "바퀴에는 이름 없는 상징들이 새겨져 있었고, 그것은 멈춘 듯하면서도 천천히 돌고 있었다.",
        "어디선가 오래된 목소리가 말했다. 올라가는 것도, 내려가는 것도 영원하지 않다고."
      ],
      choices: [
        { text: "바퀴에 손을 올린다", next: "uprightTouch" },
        { text: "바퀴가 가리키는 방향을 본다", next: "uprightDirection" },
        { text: "바퀴 아래에 떨어진 조각을 줍는다", next: "uprightFragment" },
        { text: "바퀴가 멈추기를 기다린다", next: "uprightWait" }
      ]
    },

    nodes: {
      uprightTouch: {
        id: "uprightTouch",
        type: "story",
        label: "THE TOUCH",
        title: "움직인 손",
        text: [
          "당신이 손을 올리자 바퀴가 조금 더 빠르게 돌기 시작했다.",
          "움직인 것은 바퀴인지, 당신의 운명인지 알 수 없었다.",
          "기회는 때때로 기다리는 자가 아니라 만지는 자에게 반응한다."
        ],
        choices: [
          { text: "바퀴를 더 밀어본다", next: "endingMomentum" },
          { text: "손을 떼고 지켜본다", next: "endingLetTurn" }
        ]
      },

      uprightDirection: {
        id: "uprightDirection",
        type: "story",
        label: "THE DIRECTION",
        title: "가리키는 방향",
        text: [
          "바퀴의 화살표는 한 방향을 가리켰다.",
          "그러나 당신이 움직이려는 순간, 그 방향은 조금씩 바뀌었다.",
          "운은 고정된 표지가 아니라 움직이는 신호에 가까웠다."
        ],
        choices: [
          { text: "지금 보이는 방향으로 간다", next: "endingTiming" },
          { text: "방향이 바뀔 때까지 기다린다", next: "endingMissedTurn" }
        ]
      },

      uprightFragment: {
        id: "uprightFragment",
        type: "story",
        label: "THE FRAGMENT",
        title: "떨어진 조각",
        text: [
          "바퀴 아래에는 작은 금속 조각이 떨어져 있었다.",
          "그것은 부서진 것 같았지만, 바퀴는 여전히 돌아가고 있었다.",
          "모든 변화가 전체를 망가뜨리는 것은 아니었다."
        ],
        choices: [
          { text: "조각을 다시 끼운다", next: "endingRestoredCycle" },
          { text: "조각을 간직한다", next: "endingCarriedChance" }
        ]
      },

      uprightWait: {
        id: "uprightWait",
        type: "story",
        label: "THE WAIT",
        title: "멈추지 않는 바퀴",
        text: [
          "당신은 바퀴가 멈추기를 기다렸다.",
          "하지만 바퀴는 멈추지 않았고, 기다리는 동안 풍경만 계속 바뀌었다.",
          "변화는 허락을 구하지 않는다."
        ],
        choices: [
          { text: "움직임 속으로 들어간다", next: "endingEnteredCycle" },
          { text: "끝까지 기다린다", next: "endingStillWaiting" }
        ]
      }
    },

    endings: {
      endingMomentum: {
        id: "endingMomentum",
        type: "ending",
        title: "탄력",
        text: [
          "당신은 바퀴를 더 밀었다.",
          "처음에는 작은 힘이었지만, 곧 바퀴는 스스로 속도를 얻었다.",
          "운은 때때로 시작한 사람보다 멀리 굴러간다."
        ]
      },

      endingLetTurn: {
        id: "endingLetTurn",
        type: "ending",
        title: "돌아가게 둔 것",
        text: [
          "당신은 손을 떼고 바퀴를 지켜보았다.",
          "바퀴는 당신 없이도 돌았다.",
          "모든 흐름을 조종하지 않아도 그 안에 있을 수 있다."
        ]
      },

      endingTiming: {
        id: "endingTiming",
        type: "ending",
        title: "때맞춘 걸음",
        text: [
          "당신은 지금 보이는 방향으로 걸었다.",
          "잠시 뒤 화살표는 다른 곳을 가리켰지만, 당신은 이미 길 위에 있었다.",
          "기회는 영원히 열려 있지 않기에 기회다."
        ]
      },

      endingMissedTurn: {
        id: "endingMissedTurn",
        type: "ending",
        title: "지나간 차례",
        text: [
          "당신은 방향이 바뀌기를 기다렸다.",
          "바뀌었을 때에는 이미 처음의 길이 사라져 있었다.",
          "망설임은 때때로 선택하지 않은 운명이 된다."
        ]
      },

      endingRestoredCycle: {
        id: "endingRestoredCycle",
        type: "ending",
        title: "다시 맞물린 톱니",
        text: [
          "당신은 조각을 바퀴에 다시 끼웠다.",
          "작은 소리와 함께 회전이 부드러워졌다.",
          "사소해 보이는 회복이 전체의 흐름을 바꿀 수 있다."
        ]
      },

      endingCarriedChance: {
        id: "endingCarriedChance",
        type: "ending",
        title: "주머니 속의 우연",
        text: [
          "당신은 조각을 간직했다.",
          "그것은 쓸모없는 부품 같았지만 손안에서 묘하게 따뜻했다.",
          "우연도 품고 있으면 언젠가 열쇠처럼 맞물릴 수 있다."
        ]
      },

      endingEnteredCycle: {
        id: "endingEnteredCycle",
        type: "ending",
        title: "흐름 속으로",
        text: [
          "당신은 움직임 속으로 들어갔다.",
          "세상은 흔들렸지만, 곧 그 흔들림에도 리듬이 있다는 것을 알았다.",
          "변화는 적응한 사람에게 춤이 된다."
        ]
      },

      endingStillWaiting: {
        id: "endingStillWaiting",
        type: "ending",
        title: "아직 기다리는 사람",
        text: [
          "당신은 끝까지 기다렸다.",
          "바퀴는 멈추지 않았고, 당신의 발밑만 조금씩 낡아갔다.",
          "완벽한 때를 기다리는 동안, 때는 계속 지나간다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "X · WHEEL OF FORTUNE · REVERSED",
      title: "거꾸로 도는 바퀴",
      text: [
        "당신은 삐걱거리는 바퀴 앞에서 눈을 떴다.",
        "바퀴는 거꾸로 도는 것 같았고, 같은 상징들이 계속 같은 자리로 돌아왔다.",
        "이번에는 변화가 아니라 반복이 당신을 바라보고 있었다."
      ],
      choices: [
        { text: "바퀴를 멈추려 한다", next: "reversedStop" },
        { text: "반복되는 상징을 읽는다", next: "reversedSymbol" },
        { text: "바퀴에서 떨어져 나온 줄을 잡는다", next: "reversedThread" },
        { text: "같은 자리에 서 있는 자신을 본다", next: "reversedSelf" }
      ]
    },

    nodes: {
      reversedStop: {
        id: "reversedStop",
        type: "story",
        label: "THE STOP",
        title: "멈추려는 손",
        text: [
          "당신은 바퀴를 멈추려 했다.",
          "하지만 바퀴는 멈추는 대신 손바닥에 같은 문양을 새겼다.",
          "반복을 억지로 멈추려 할수록, 그것은 더 깊이 몸에 남는다."
        ],
        choices: [
          { text: "손을 떼고 이유를 본다", next: "endingPatternSeen" },
          { text: "끝까지 붙잡는다", next: "endingBurnedPalm" }
        ]
      },

      reversedSymbol: {
        id: "reversedSymbol",
        type: "story",
        label: "THE SYMBOL",
        title: "반복되는 상징",
        text: [
          "같은 상징이 계속 당신 앞에 돌아왔다.",
          "처음에는 우연처럼 보였고, 세 번째에는 경고처럼 보였다.",
          "삶은 이해하지 못한 문장을 여러 번 보여준다."
        ],
        choices: [
          { text: "상징의 의미를 받아들인다", next: "endingLearnedCycle" },
          { text: "우연이라고 넘긴다", next: "endingAgainAgain" }
        ]
      },

      reversedThread: {
        id: "reversedThread",
        type: "story",
        label: "THE THREAD",
        title: "풀린 실",
        text: [
          "바퀴에서 가느다란 실 하나가 풀려 있었다.",
          "당신이 그것을 당기자 바퀴의 회전이 잠시 느려졌다.",
          "반복도 어딘가에는 시작점이 있다."
        ],
        choices: [
          { text: "실의 시작을 찾는다", next: "endingOrigin" },
          { text: "실을 끊는다", next: "endingBrokenLoop" }
        ]
      },

      reversedSelf: {
        id: "reversedSelf",
        type: "story",
        label: "THE SAME PLACE",
        title: "같은 자리",
        text: [
          "당신은 같은 자리에 서 있었다.",
          "풍경은 몇 번이나 바뀌었지만 발은 그곳을 떠나지 않았다.",
          "운이 막힌 것처럼 보일 때, 사실은 자신이 같은 문 앞에 머물고 있을 때가 있다."
        ],
        choices: [
          { text: "한 걸음 옆으로 비켜선다", next: "endingSmallShift" },
          { text: "그 자리가 익숙하다고 말한다", next: "endingComfortLoop" }
        ]
      }
    },

    endings: {
      endingPatternSeen: {
        id: "endingPatternSeen",
        type: "ending",
        title: "보인 패턴",
        text: [
          "당신은 손을 떼고 바퀴를 보았다.",
          "반복은 벌이 아니라 아직 배워지지 않은 구조처럼 보였다.",
          "패턴을 보는 순간, 운명은 조금 느슨해진다."
        ]
      },

      endingBurnedPalm: {
        id: "endingBurnedPalm",
        type: "ending",
        title: "새겨진 손바닥",
        text: [
          "당신은 끝까지 바퀴를 붙잡았다.",
          "손바닥에는 뜨거운 문양이 남았다.",
          "억지로 통제한 반복은 멈추지 않고 흔적으로 남는다."
        ]
      },

      endingLearnedCycle: {
        id: "endingLearnedCycle",
        type: "ending",
        title: "배운 주기",
        text: [
          "당신은 반복되는 상징의 의미를 받아들였다.",
          "그 순간 바퀴는 같은 길을 돌면서도 조금 다른 소리를 냈다.",
          "배운 반복은 더 이상 같은 반복이 아니다."
        ]
      },

      endingAgainAgain: {
        id: "endingAgainAgain",
        type: "ending",
        title: "다시, 다시",
        text: [
          "당신은 그것을 우연이라고 넘겼다.",
          "바퀴는 다시 같은 상징을 데려왔다.",
          "외면한 신호는 사라지지 않고 빈도를 높인다."
        ]
      },

      endingOrigin: {
        id: "endingOrigin",
        type: "ending",
        title: "시작점",
        text: [
          "당신은 실의 시작을 찾았다.",
          "그곳에는 오래된 선택 하나가 매듭처럼 묶여 있었다.",
          "반복의 끝은 종종 그 시작을 인정하는 데서 온다."
        ]
      },

      endingBrokenLoop: {
        id: "endingBrokenLoop",
        type: "ending",
        title: "끊어진 고리",
        text: [
          "당신은 실을 끊었다.",
          "바퀴는 잠시 흔들리더니 다른 리듬으로 돌기 시작했다.",
          "모든 순환이 이해를 통해서만 끝나는 것은 아니다."
        ]
      },

      endingSmallShift: {
        id: "endingSmallShift",
        type: "ending",
        title: "작은 이동",
        text: [
          "당신은 한 걸음 옆으로 비켜섰다.",
          "바퀴는 여전히 돌았지만, 더 이상 당신을 같은 방식으로 치지 못했다.",
          "운명을 바꾸는 일은 때때로 거대한 결단보다 작은 위치 변화다."
        ]
      },

      endingComfortLoop: {
        id: "endingComfortLoop",
        type: "ending",
        title: "익숙한 반복",
        text: [
          "당신은 그 자리가 익숙하다고 말했다.",
          "바퀴는 부드럽게 돌았고, 당신도 덜 아팠다.",
          "익숙함은 고통을 줄여주지만, 길을 열어주지는 않는다."
        ]
      }
    }
  }
};