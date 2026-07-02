export const theDevil = {
  id: "the-devil",
  number: "XV",
  name: "The Devil",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XV · THE DEVIL · UPRIGHT",
      title: "사슬이 놓인 방",
      text: [
        "당신은 붉은 불빛이 낮게 깔린 방에서 눈을 떴다.",
        "벽에는 아무 문도 없었지만, 바닥에는 여러 개의 사슬이 놓여 있었다.",
        "이상한 것은, 그 사슬들이 당신을 묶고 있지 않다는 점이었다."
      ],
      choices: [
        { text: "가장 가까운 사슬을 집어 든다", next: "uprightChain" },
        { text: "방 한가운데의 그림자를 바라본다", next: "uprightShadow" },
        { text: "붉은 촛불을 끈다", next: "uprightCandle" },
        { text: "사슬이 이어진 끝을 따라간다", next: "uprightEnd" }
      ]
    },

    nodes: {
      uprightChain: {
        id: "uprightChain",
        type: "story",
        label: "THE CHAIN",
        title: "가벼운 사슬",
        text: [
          "사슬은 생각보다 가벼웠다.",
          "당신은 그것이 자신을 묶고 있다고 믿었지만, 손을 놓으면 언제든 떨어질 것 같았다.",
          "감옥은 때로 쇠보다 믿음으로 만들어진다."
        ],
        choices: [
          { text: "사슬을 놓는다", next: "endingReleased" },
          { text: "사슬을 더 세게 쥔다", next: "endingChosenBond" }
        ]
      },

      uprightShadow: {
        id: "uprightShadow",
        type: "story",
        label: "THE SHADOW",
        title: "웃는 그림자",
        text: [
          "그림자는 당신을 닮아 있었다.",
          "하지만 당신보다 더 솔직했고, 당신보다 덜 부끄러워했다.",
          "그것은 유혹이라기보다 숨겨둔 욕망의 얼굴에 가까웠다."
        ],
        choices: [
          { text: "그림자에게 이름을 묻는다", next: "endingNamedDesire" },
          { text: "그림자를 부정한다", next: "endingDeniedShadow" }
        ]
      },

      uprightCandle: {
        id: "uprightCandle",
        type: "story",
        label: "THE CANDLE",
        title: "붉은 촛불",
        text: [
          "촛불은 작은데 방 전체를 붉게 만들고 있었다.",
          "당신이 불을 끄자 어둠이 온 것이 아니라, 색이 빠져나갔다.",
          "욕망이 사라진 자리에는 이상하게도 형태들이 더 선명해졌다."
        ],
        choices: [
          { text: "어둠 속에서 기다린다", next: "endingClearShape" },
          { text: "다시 불을 붙인다", next: "endingReturnFlame" }
        ]
      },

      uprightEnd: {
        id: "uprightEnd",
        type: "story",
        label: "THE END OF CHAIN",
        title: "사슬의 끝",
        text: [
          "사슬의 끝에는 아무것도 묶여 있지 않았다.",
          "다만 빈 고리가 당신을 기다리고 있었다.",
          "당신은 처음부터 묶인 것이 아니라, 스스로 걸어 들어간 것인지도 몰랐다."
        ],
        choices: [
          { text: "빈 고리를 지나친다", next: "endingEmptyRing" },
          { text: "그 고리에 손목을 넣는다", next: "endingWillingCaptive" }
        ]
      }
    },

    endings: {
      endingReleased: {
        id: "endingReleased",
        type: "ending",
        title: "놓아버린 사슬",
        text: [
          "당신은 사슬을 놓았다.",
          "바닥에 떨어진 소리는 생각보다 작았다.",
          "당신을 묶고 있던 것은 사슬이 아니라, 그것이 무겁다는 믿음이었다."
        ]
      },

      endingChosenBond: {
        id: "endingChosenBond",
        type: "ending",
        title: "선택한 속박",
        text: [
          "당신은 사슬을 더 세게 쥐었다.",
          "손바닥에 자국이 남았고, 이상하게도 마음은 조금 편해졌다.",
          "사람은 때때로 자유보다 익숙한 감옥을 먼저 선택한다."
        ]
      },

      endingNamedDesire: {
        id: "endingNamedDesire",
        type: "ending",
        title: "이름 붙은 욕망",
        text: [
          "당신은 그림자에게 이름을 물었다.",
          "그림자는 당신의 목소리로 대답했다.",
          "이름 붙인 욕망은 더 이상 괴물이 아니었지만, 여전히 당신을 바라보고 있었다."
        ]
      },

      endingDeniedShadow: {
        id: "endingDeniedShadow",
        type: "ending",
        title: "부정된 그림자",
        text: [
          "당신은 그림자를 부정했다.",
          "그림자는 사라지지 않았다.",
          "다만 당신의 등 뒤로 가서 더 길어졌다."
        ]
      },

      endingClearShape: {
        id: "endingClearShape",
        type: "ending",
        title: "색이 빠진 방",
        text: [
          "당신은 어둠 속에서 기다렸다.",
          "붉은빛이 사라지자 방의 윤곽이 드러났다.",
          "유혹이 걷힌 뒤에도 남아 있는 것만이 진짜 욕망이었다."
        ]
      },

      endingReturnFlame: {
        id: "endingReturnFlame",
        type: "ending",
        title: "다시 붙인 불",
        text: [
          "당신은 다시 촛불을 붙였다.",
          "방은 다시 붉어졌고, 당신은 익숙한 열기를 느꼈다.",
          "돌아간다는 것은 실패가 아니라, 아직 배워야 할 것이 남았다는 표시일 수 있다."
        ]
      },

      endingEmptyRing: {
        id: "endingEmptyRing",
        type: "ending",
        title: "비어 있는 고리",
        text: [
          "당신은 빈 고리를 지나쳤다.",
          "고리는 당신을 붙잡지 않았다.",
          "모든 유혹이 손을 뻗는 것은 아니다. 어떤 것은 지나가기를 기다린다."
        ]
      },

      endingWillingCaptive: {
        id: "endingWillingCaptive",
        type: "ending",
        title: "스스로 찬 고리",
        text: [
          "당신은 고리에 손목을 넣었다.",
          "그 순간 아무도 당신을 비난하지 않았다.",
          "스스로 선택한 속박은 가장 풀기 어려운 형태의 계약이다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XV · THE DEVIL · REVERSED",
      title: "풀린 사슬의 방",
      text: [
        "당신은 식어버린 방에서 눈을 떴다.",
        "바닥에는 끊어진 사슬들이 흩어져 있었고, 붉은 촛불은 이미 꺼져 있었다.",
        "자유는 찾아왔지만, 당신은 어디로 가야 할지 알 수 없었다."
      ],
      choices: [
        { text: "끊어진 사슬을 살핀다", next: "reversedBrokenChain" },
        { text: "꺼진 촛불을 바라본다", next: "reversedCandle" },
        { text: "방 밖으로 나가려 한다", next: "reversedExit" },
        { text: "남아 있는 그림자를 찾는다", next: "reversedShadow" }
      ]
    },

    nodes: {
      reversedBrokenChain: {
        id: "reversedBrokenChain",
        type: "story",
        label: "BROKEN CHAIN",
        title: "끊어진 사슬",
        text: [
          "사슬은 끊어져 있었다.",
          "하지만 손목에는 아직 차가운 감각이 남아 있었다.",
          "풀려난 몸이 풀려난 마음보다 먼저 밖으로 나가는 법은 드물다."
        ],
        choices: [
          { text: "손목의 자국을 문지른다", next: "endingScar" },
          { text: "끊어진 사슬을 버린다", next: "endingAfterBond" }
        ]
      },

      reversedCandle: {
        id: "reversedCandle",
        type: "story",
        label: "EXTINGUISHED CANDLE",
        title: "꺼진 촛불",
        text: [
          "촛불은 꺼져 있었다.",
          "열기는 사라졌지만, 방은 아직 붉은 기억을 품고 있었다.",
          "욕망이 끝난 뒤에도 몸은 한동안 그 온도를 기억한다."
        ],
        choices: [
          { text: "촛농을 만진다", next: "endingCoolWax" },
          { text: "촛대를 치운다", next: "endingCleanAltar" }
        ]
      },

      reversedExit: {
        id: "reversedExit",
        type: "story",
        label: "THE EXIT",
        title: "나가는 문",
        text: [
          "방 밖으로 이어지는 문은 열려 있었다.",
          "그러나 문 앞에서 당신의 발은 잠시 멈췄다.",
          "떠나는 일도 하나의 책임이었다."
        ],
        choices: [
          { text: "문밖으로 나간다", next: "endingFreedom" },
          { text: "한 번 더 방을 돌아본다", next: "endingLastLook" }
        ]
      },

      reversedShadow: {
        id: "reversedShadow",
        type: "story",
        label: "THE REMAINING SHADOW",
        title: "남은 그림자",
        text: [
          "그림자는 거의 사라져 있었다.",
          "하지만 완전히 없어지지는 않았다.",
          "해방은 그림자를 죽이는 일이 아니라, 그림자와의 계약을 끝내는 일이다."
        ],
        choices: [
          { text: "그림자에게 작별을 고한다", next: "endingFarewell" },
          { text: "그림자를 데리고 간다", next: "endingIntegratedShadow" }
        ]
      }
    },

    endings: {
      endingScar: {
        id: "endingScar",
        type: "ending",
        title: "남은 자국",
        text: [
          "당신은 손목의 자국을 문질렀다.",
          "자국은 사라지지 않았지만 더 이상 아프지 않았다.",
          "상처가 남아도 속박이 계속되는 것은 아니다."
        ]
      },

      endingAfterBond: {
        id: "endingAfterBond",
        type: "ending",
        title: "사슬 이후",
        text: [
          "당신은 끊어진 사슬을 버렸다.",
          "바닥은 조용했고, 손은 가벼웠다.",
          "끝난 계약은 더 이상 당신의 이름을 부르지 못한다."
        ]
      },

      endingCoolWax: {
        id: "endingCoolWax",
        type: "ending",
        title: "식은 촛농",
        text: [
          "당신은 식은 촛농을 만졌다.",
          "그것은 더 이상 뜨겁지 않았지만, 한때 불이었다는 사실은 남아 있었다.",
          "가라앉은 욕망도 기억으로는 존재한다."
        ]
      },

      endingCleanAltar: {
        id: "endingCleanAltar",
        type: "ending",
        title: "치워진 제단",
        text: [
          "당신은 촛대를 치웠다.",
          "방은 조금 낯설어졌다.",
          "비워낸 자리에는 처음으로 다른 빛이 들어올 수 있었다."
        ]
      },

      endingFreedom: {
        id: "endingFreedom",
        type: "ending",
        title: "문밖의 자유",
        text: [
          "당신은 문밖으로 나갔다.",
          "자유는 생각보다 조용했다.",
          "아무도 붙잡지 않는다는 사실이 처음에는 조금 두려웠다."
        ]
      },

      endingLastLook: {
        id: "endingLastLook",
        type: "ending",
        title: "마지막으로 돌아본 방",
        text: [
          "당신은 한 번 더 방을 돌아보았다.",
          "그곳은 감옥이었지만, 당신이 오래 살아남은 장소이기도 했다.",
          "떠난다는 것은 미워하는 것과 같은 뜻이 아니었다."
        ]
      },

      endingFarewell: {
        id: "endingFarewell",
        type: "ending",
        title: "그림자와의 작별",
        text: [
          "당신은 그림자에게 작별을 고했다.",
          "그림자는 대답하지 않았지만 더 이상 따라오지 않았다.",
          "어떤 작별은 말보다 방향으로 증명된다."
        ]
      },

      endingIntegratedShadow: {
        id: "endingIntegratedShadow",
        type: "ending",
        title: "함께 걷는 그림자",
        text: [
          "당신은 그림자를 데리고 갔다.",
          "그림자는 더 이상 앞서지도, 뒤에서 끌어당기지도 않았다.",
          "통합된 어둠은 때때로 가장 현실적인 빛이 된다."
        ]
      }
    }
  }
};