export const theLovers = {
  id: "the-lovers",
  number: "VI",
  name: "The Lovers",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "VI · THE LOVERS · UPRIGHT",
      title: "두 길이 만나는 정원",
      text: [
        "당신은 두 갈래 길이 만나는 정원에서 눈을 떴다.",
        "왼쪽 길에는 익숙한 온기가 있었고, 오른쪽 길에는 낯선 빛이 있었다.",
        "어디선가 속삭임이 들렸다. 선택은 누군가를 고르는 일이 아니라, 자신이 어떤 사람이 될지를 고르는 일이라고."
      ],
      choices: [
        { text: "왼쪽 길의 온기를 따른다", next: "uprightWarmth" },
        { text: "오른쪽 길의 빛을 따른다", next: "uprightLight" },
        { text: "두 길 사이에 선다", next: "uprightBetween" },
        { text: "정원의 중앙에 놓인 사과를 본다", next: "uprightApple" }
      ]
    },

    nodes: {
      uprightWarmth: {
        id: "uprightWarmth",
        type: "story",
        label: "THE WARMTH",
        title: "익숙한 온기",
        text: [
          "왼쪽 길은 오래전부터 당신을 알고 있었던 것처럼 따뜻했다.",
          "그 길에는 약속과 기억, 그리고 이미 여러 번 되돌아본 발자국이 있었다.",
          "사랑은 때때로 새로움보다 오래 머문 것의 얼굴을 하고 있다."
        ],
        choices: [
          { text: "그 온기 안으로 들어간다", next: "endingSharedHome" },
          { text: "온기 앞에서 멈춘다", next: "endingTenderDistance" }
        ]
      },

      uprightLight: {
        id: "uprightLight",
        type: "story",
        label: "THE LIGHT",
        title: "낯선 빛",
        text: [
          "오른쪽 길은 눈부셨다.",
          "당신은 그곳에 무엇이 있는지 알지 못했지만, 이상하게도 더 솔직해지는 느낌이 들었다.",
          "끌림은 때때로 아직 모르는 자신에게서 오는 신호다."
        ],
        choices: [
          { text: "빛을 향해 걷는다", next: "endingBraveChoice" },
          { text: "눈부심에 눈을 감는다", next: "endingUnchosenLight" }
        ]
      },

      uprightBetween: {
        id: "uprightBetween",
        type: "story",
        label: "BETWEEN",
        title: "두 길 사이",
        text: [
          "당신은 두 길 사이에 섰다.",
          "둘 중 하나만 옳은 것은 아닌 듯했다.",
          "하지만 아무것도 고르지 않는 일도 결국 하나의 선택이었다."
        ],
        choices: [
          { text: "마음이 먼저 기우는 쪽을 따른다", next: "endingHeartLeans" },
          { text: "아직 선택하지 않는다", next: "endingSuspendedChoice" }
        ]
      },

      uprightApple: {
        id: "uprightApple",
        type: "story",
        label: "THE APPLE",
        title: "정원의 사과",
        text: [
          "정원 중앙에는 붉은 사과 하나가 놓여 있었다.",
          "그것은 유혹처럼 보였지만, 동시에 진실처럼 보였다.",
          "어떤 선택은 금지되었기 때문이 아니라, 선택한 뒤의 자신을 감당해야 하기 때문에 어렵다."
        ],
        choices: [
          { text: "사과를 베어 문다", next: "endingAcceptedDesire" },
          { text: "사과를 그대로 둔다", next: "endingUntouchedDesire" }
        ]
      }
    },

    endings: {
      endingSharedHome: {
        id: "endingSharedHome",
        type: "ending",
        title: "함께 머문 자리",
        text: [
          "당신은 익숙한 온기 안으로 들어갔다.",
          "그곳은 완벽하지 않았지만, 당신의 이름을 알고 있었다.",
          "사랑은 때때로 새 문을 여는 일이 아니라, 오래된 방에 다시 불을 켜는 일이다."
        ]
      },

      endingTenderDistance: {
        id: "endingTenderDistance",
        type: "ending",
        title: "다정한 거리",
        text: [
          "당신은 온기 앞에서 멈췄다.",
          "가까워지지 않았지만 외면하지도 않았다.",
          "모든 사랑이 닿아야만 진실해지는 것은 아니다."
        ]
      },

      endingBraveChoice: {
        id: "endingBraveChoice",
        type: "ending",
        title: "눈부신 선택",
        text: [
          "당신은 빛을 향해 걸었다.",
          "길은 낯설었고, 그래서 당신은 조금 더 깨어 있었다.",
          "선택은 확신이 아니라, 불확실함 속에서도 자신을 배반하지 않는 일이다."
        ]
      },

      endingUnchosenLight: {
        id: "endingUnchosenLight",
        type: "ending",
        title: "고르지 않은 빛",
        text: [
          "당신은 눈을 감았다.",
          "빛은 사라지지 않았고, 눈꺼풀 안쪽에서 오래 남았다.",
          "선택하지 않은 것도 삶의 어딘가에서 계속 빛난다."
        ]
      },

      endingHeartLeans: {
        id: "endingHeartLeans",
        type: "ending",
        title: "기운 마음",
        text: [
          "당신은 마음이 먼저 기우는 쪽으로 걸었다.",
          "이유는 뒤늦게 따라왔다.",
          "가끔 마음은 논리보다 먼저 도착한 지혜다."
        ]
      },

      endingSuspendedChoice: {
        id: "endingSuspendedChoice",
        type: "ending",
        title: "유예된 선택",
        text: [
          "당신은 아직 선택하지 않았다.",
          "정원은 사라지지 않았고 두 길도 그대로 남았다.",
          "미뤄진 선택도 조용히 당신의 모습을 바꾸고 있었다."
        ]
      },

      endingAcceptedDesire: {
        id: "endingAcceptedDesire",
        type: "ending",
        title: "베어 문 사과",
        text: [
          "당신은 사과를 베어 물었다.",
          "단맛 뒤에 아주 작은 두려움이 따라왔다.",
          "욕망을 인정하는 순간, 선택은 더 이상 남의 이야기가 아니게 된다."
        ]
      },

      endingUntouchedDesire: {
        id: "endingUntouchedDesire",
        type: "ending",
        title: "그대로 둔 사과",
        text: [
          "당신은 사과를 그대로 두었다.",
          "먹지 않은 열매는 오래도록 붉었다.",
          "절제도 하나의 선택이지만, 선택하지 않은 욕망은 기억 속에서 익어간다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "VI · THE LOVERS · REVERSED",
      title: "갈라진 정원",
      text: [
        "당신은 두 길이 서로 등을 돌린 정원에서 눈을 떴다.",
        "왼쪽 길은 너무 익숙해서 답답했고, 오른쪽 길은 너무 밝아서 믿기 어려웠다.",
        "정원 한가운데에는 깨진 거울이 놓여 있었다."
      ],
      choices: [
        { text: "깨진 거울을 들여다본다", next: "reversedMirror" },
        { text: "왼쪽 길을 의심한다", next: "reversedWarmth" },
        { text: "오른쪽 빛을 피한다", next: "reversedLight" },
        { text: "두 길 모두 거부한다", next: "reversedRefusal" }
      ]
    },

    nodes: {
      reversedMirror: {
        id: "reversedMirror",
        type: "story",
        label: "THE BROKEN MIRROR",
        title: "깨진 거울",
        text: [
          "거울 속 당신은 여러 조각으로 나뉘어 있었다.",
          "각 조각은 서로 다른 사람을 원했고, 서로 다른 미래를 두려워했다.",
          "갈등은 두 사람 사이에만 생기는 것이 아니었다."
        ],
        choices: [
          { text: "가장 아픈 조각을 바라본다", next: "endingInnerSplit" },
          { text: "조각들을 다시 맞춘다", next: "endingImperfectUnion" }
        ]
      },

      reversedWarmth: {
        id: "reversedWarmth",
        type: "story",
        label: "DOUBTED WARMTH",
        title: "의심받는 온기",
        text: [
          "익숙한 온기는 갑자기 습관처럼 느껴졌다.",
          "당신은 그것이 사랑인지, 오래된 두려움인지 구분할 수 없었다.",
          "편안함과 정체는 때때로 같은 옷을 입는다."
        ],
        choices: [
          { text: "온기의 이름을 묻는다", next: "endingNamedComfort" },
          { text: "그곳에서 물러난다", next: "endingLeavingFamiliar" }
        ]
      },

      reversedLight: {
        id: "reversedLight",
        type: "story",
        label: "AVOIDED LIGHT",
        title: "피한 빛",
        text: [
          "당신은 오른쪽의 빛을 피했다.",
          "그러나 피할수록 그 빛은 등 뒤에서 더 길게 그림자를 만들었다.",
          "끌림을 부정하면, 그것은 종종 불안의 형태로 남는다."
        ],
        choices: [
          { text: "뒤돌아 빛을 본다", next: "endingFacingDesire" },
          { text: "그림자만 따라간다", next: "endingShadowChoice" }
        ]
      },

      reversedRefusal: {
        id: "reversedRefusal",
        type: "story",
        label: "REFUSAL",
        title: "거부",
        text: [
          "당신은 두 길 모두 거부했다.",
          "정원은 조용해졌지만, 당신의 발밑에서 새로운 갈림길이 생겨났다.",
          "선택을 거부하는 순간에도 삶은 다른 방식으로 선택지를 만든다."
        ],
        choices: [
          { text: "새 갈림길을 본다", next: "endingNewConflict" },
          { text: "그 자리에서 눈을 감는다", next: "endingClosedHeart" }
        ]
      }
    },

    endings: {
      endingInnerSplit: {
        id: "endingInnerSplit",
        type: "ending",
        title: "갈라진 마음",
        text: [
          "당신은 가장 아픈 조각을 바라보았다.",
          "그 안의 당신은 사랑받고 싶어 하면서도 선택되기를 두려워했다.",
          "갈라진 마음도 자신을 이해해줄 때부터 천천히 하나가 된다."
        ]
      },

      endingImperfectUnion: {
        id: "endingImperfectUnion",
        type: "ending",
        title: "완벽하지 않은 결합",
        text: [
          "당신은 거울 조각들을 다시 맞췄다.",
          "금은 남았지만 얼굴은 다시 보였다.",
          "진짜 결합은 흠이 없는 상태가 아니라, 금이 간 채로도 서로를 비추는 일이다."
        ]
      },

      endingNamedComfort: {
        id: "endingNamedComfort",
        type: "ending",
        title: "이름 붙은 편안함",
        text: [
          "당신은 온기의 이름을 물었다.",
          "그것은 사랑이라고도, 습관이라고도 대답하지 않았다.",
          "어떤 감정은 이름보다 오래 관찰해야 진짜 모습을 드러낸다."
        ]
      },

      endingLeavingFamiliar: {
        id: "endingLeavingFamiliar",
        type: "ending",
        title: "익숙함을 떠남",
        text: [
          "당신은 익숙한 길에서 물러났다.",
          "따뜻함은 멀어졌지만 숨이 조금 쉬워졌다.",
          "떠남은 배신이 아니라, 자신에게 돌아가는 방식일 때도 있다."
        ]
      },

      endingFacingDesire: {
        id: "endingFacingDesire",
        type: "ending",
        title: "마주 본 끌림",
        text: [
          "당신은 뒤돌아 빛을 보았다.",
          "눈은 아팠지만, 도망치던 이유가 조금 선명해졌다.",
          "욕망을 보는 일은 곧 그것에 굴복하는 일이 아니다."
        ]
      },

      endingShadowChoice: {
        id: "endingShadowChoice",
        type: "ending",
        title: "그림자의 선택",
        text: [
          "당신은 빛이 아니라 그림자만 따라갔다.",
          "길은 어둡지 않았지만, 계속 빛의 모양을 닮아 있었다.",
          "부정한 선택도 결국 원래의 욕망을 따라 걷는다."
        ]
      },

      endingNewConflict: {
        id: "endingNewConflict",
        type: "ending",
        title: "새로운 갈림길",
        text: [
          "당신은 새로 생긴 갈림길을 바라보았다.",
          "두 길을 거부했지만, 선택은 더 많아졌을 뿐이었다.",
          "삶은 결정을 피한 사람에게도 계속 방향을 묻는다."
        ]
      },

      endingClosedHeart: {
        id: "endingClosedHeart",
        type: "ending",
        title: "닫힌 마음",
        text: [
          "당신은 그 자리에서 눈을 감았다.",
          "정원도 길도 잠시 사라졌다.",
          "하지만 닫힌 마음 안에서도 작은 문 하나는 끝내 잠기지 않았다."
        ]
      }
    }
  }
};