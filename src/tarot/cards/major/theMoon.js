export const theMoon = {
  id: "the-moon",
  number: "XVIII",
  name: "The Moon",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XVIII · THE MOON · UPRIGHT",
      title: "달빛의 늪",
      text: [
        "당신은 푸른 달빛이 고인 늪가에서 눈을 떴다.",
        "물 위에는 길처럼 보이는 빛이 떠 있었지만, 발을 디딜 수 있는지는 알 수 없었다.",
        "멀리서 개와 늑대가 동시에 울었다."
      ],
      choices: [
        { text: "달빛이 만든 길을 따라간다", next: "uprightMoonPath" },
        { text: "늪물을 들여다본다", next: "uprightWater" },
        { text: "울음소리가 나는 쪽으로 간다", next: "uprightHowl" },
        { text: "두 탑 사이의 어둠을 바라본다", next: "uprightTowers" }
      ]
    },

    nodes: {
      uprightMoonPath: {
        id: "uprightMoonPath",
        type: "story",
        label: "THE MOON PATH",
        title: "달빛의 길",
        text: [
          "달빛은 길처럼 보였지만 밟을 때마다 흔들렸다.",
          "당신은 앞으로 가고 있는지, 같은 자리를 맴도는지 알 수 없었다.",
          "불확실한 길은 때때로 가장 깊은 감각을 깨운다."
        ],
        choices: [
          { text: "흔들리는 길을 믿는다", next: "endingMoonTrust" },
          { text: "빛이 아닌 발밑을 본다", next: "endingSmallGround" }
        ]
      },

      uprightWater: {
        id: "uprightWater",
        type: "story",
        label: "THE WATER",
        title: "늪물",
        text: [
          "물속에는 당신의 얼굴이 보이지 않았다.",
          "대신 당신이 두려워하는 얼굴들이 차례로 떠올랐다.",
          "두려움은 미래를 예언하는 것이 아니라, 아직 보지 않은 안쪽을 비춘다."
        ],
        choices: [
          { text: "가장 무서운 얼굴을 마주 본다", next: "endingFacedFear" },
          { text: "물을 흐린다", next: "endingBlurredReflection" }
        ]
      },

      uprightHowl: {
        id: "uprightHowl",
        type: "story",
        label: "THE HOWL",
        title: "두 울음소리",
        text: [
          "개는 길들여진 목소리로 울었고, 늑대는 오래된 밤의 목소리로 울었다.",
          "둘은 서로 다른 것 같았지만 같은 달을 향해 있었다.",
          "당신 안에도 두 개의 본능이 같은 방향을 바라보고 있었다."
        ],
        choices: [
          { text: "개를 따른다", next: "endingTamedInstinct" },
          { text: "늑대를 따른다", next: "endingWildInstinct" }
        ]
      },

      uprightTowers: {
        id: "uprightTowers",
        type: "story",
        label: "THE TOWERS",
        title: "두 탑 사이",
        text: [
          "두 탑은 서로 마주 보고 서 있었다.",
          "그 사이의 길은 너무 어두워서 오히려 진실해 보였다.",
          "달빛은 모든 것을 밝히지 않고, 필요한 만큼만 숨긴다."
        ],
        choices: [
          { text: "두 탑 사이로 들어간다", next: "endingBetweenTowers" },
          { text: "탑 위의 달을 기다린다", next: "endingMoonWaiting" }
        ]
      }
    },

    endings: {
      endingMoonTrust: {
        id: "endingMoonTrust",
        type: "ending",
        title: "흔들리는 믿음",
        text: [
          "당신은 흔들리는 달빛의 길을 믿었다.",
          "길은 끝내 단단해지지 않았지만, 당신은 빠지지 않았다.",
          "믿음은 확실함 위가 아니라 흔들림 위에서 배워질 때가 있다."
        ]
      },

      endingSmallGround: {
        id: "endingSmallGround",
        type: "ending",
        title: "작은 땅",
        text: [
          "당신은 빛이 아니라 발밑을 보았다.",
          "아주 작은 돌 하나가 늪 위에 놓여 있었다.",
          "불안을 견디는 일은 종종 거대한 답이 아니라 작은 발판에서 시작된다."
        ]
      },

      endingFacedFear: {
        id: "endingFacedFear",
        type: "ending",
        title: "마주 본 두려움",
        text: [
          "당신은 가장 무서운 얼굴을 마주 보았다.",
          "그 얼굴은 당신을 삼키지 않았다.",
          "두려움은 바라보는 순간, 예언이 아니라 감정이 된다."
        ]
      },

      endingBlurredReflection: {
        id: "endingBlurredReflection",
        type: "ending",
        title: "흐려진 반영",
        text: [
          "당신은 물을 흐렸다.",
          "얼굴들은 사라졌지만 물속의 어둠은 그대로 남았다.",
          "보지 않는다고 두려움이 끝나는 것은 아니다."
        ]
      },

      endingTamedInstinct: {
        id: "endingTamedInstinct",
        type: "ending",
        title: "길들여진 본능",
        text: [
          "당신은 개를 따랐다.",
          "길은 안전했지만 낯선 냄새마다 걸음이 멈췄다.",
          "길들여진 본능도 여전히 밤을 기억한다."
        ]
      },

      endingWildInstinct: {
        id: "endingWildInstinct",
        type: "ending",
        title: "야생의 감각",
        text: [
          "당신은 늑대를 따랐다.",
          "길은 없었지만 몸은 방향을 알고 있었다.",
          "야생은 무질서가 아니라, 말보다 오래된 지혜다."
        ]
      },

      endingBetweenTowers: {
        id: "endingBetweenTowers",
        type: "ending",
        title: "두 탑 사이",
        text: [
          "당신은 두 탑 사이로 들어갔다.",
          "어둠은 당신을 막지 않았다.",
          "모호함은 때때로 진실이 지나갈 수 있는 유일한 문이다."
        ]
      },

      endingMoonWaiting: {
        id: "endingMoonWaiting",
        type: "ending",
        title: "달을 기다림",
        text: [
          "당신은 달이 더 높이 오르기를 기다렸다.",
          "빛은 조금 더 밝아졌지만 모든 것을 보여주지는 않았다.",
          "기다림도 완전한 확신을 보장하지는 않는다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XVIII · THE MOON · REVERSED",
      title: "사라지는 안개",
      text: [
        "당신은 안개가 걷히는 늪가에서 눈을 떴다.",
        "밤은 아직 끝나지 않았지만, 몇몇 그림자들은 더 이상 괴물처럼 보이지 않았다.",
        "멀리서 울음소리가 끊겼고, 그 침묵이 오히려 더 낯설었다."
      ],
      choices: [
        { text: "걷히는 안개를 따라간다", next: "reversedMist" },
        { text: "늪 바닥에 드러난 것을 본다", next: "reversedBottom" },
        { text: "울음이 멈춘 곳으로 간다", next: "reversedSilence" },
        { text: "달빛이 닿지 않는 곳을 살핀다", next: "reversedShadow" }
      ]
    },

    nodes: {
      reversedMist: {
        id: "reversedMist",
        type: "story",
        label: "THE LIFTING MIST",
        title: "걷히는 안개",
        text: [
          "안개는 천천히 걷히고 있었다.",
          "하지만 모든 것이 선명해질수록, 당신은 몇몇 착각이 자신을 보호해왔음을 깨달았다.",
          "진실이 다가올 때도 사람은 준비가 필요하다."
        ],
        choices: [
          { text: "끝까지 안개가 걷히게 둔다", next: "endingClearNight" },
          { text: "조금의 안개를 남겨둔다", next: "endingMercifulMist" }
        ]
      },

      reversedBottom: {
        id: "reversedBottom",
        type: "story",
        label: "THE BOTTOM",
        title: "드러난 바닥",
        text: [
          "늪의 바닥이 드러났다.",
          "그곳에는 괴물이 아니라 오래전에 떨어뜨린 작은 물건들이 있었다.",
          "무의식은 때때로 공포보다 분실물에 가깝다."
        ],
        choices: [
          { text: "잃어버린 것을 줍는다", next: "endingRecoveredThing" },
          { text: "그대로 두고 떠난다", next: "endingLeftBelow" }
        ]
      },

      reversedSilence: {
        id: "reversedSilence",
        type: "story",
        label: "THE SILENCE",
        title: "멈춘 울음",
        text: [
          "개도 늑대도 더 이상 울지 않았다.",
          "침묵 속에서 당신 자신의 숨소리가 지나치게 크게 들렸다.",
          "외부의 소음이 사라지면, 안쪽의 소리가 더 분명해진다."
        ],
        choices: [
          { text: "자신의 숨을 듣는다", next: "endingOwnBreath" },
          { text: "다시 울음소리를 찾는다", next: "endingNeedNoise" }
        ]
      },

      reversedShadow: {
        id: "reversedShadow",
        type: "story",
        label: "THE LAST SHADOW",
        title: "마지막 그림자",
        text: [
          "달빛이 닿지 않는 곳에는 작은 그림자 하나가 남아 있었다.",
          "그것은 도망치지 않았고, 당신도 더 이상 그것을 괴물이라 부르지 않았다.",
          "마지막 어둠은 사라지기보다 인정받기를 기다리고 있었다."
        ],
        choices: [
          { text: "그림자 곁에 앉는다", next: "endingAcceptedShadow" },
          { text: "빛을 비춘다", next: "endingForcedLight" }
        ]
      }
    },

    endings: {
      endingClearNight: {
        id: "endingClearNight",
        type: "ending",
        title: "맑아진 밤",
        text: [
          "안개는 끝내 모두 걷혔다.",
          "밤은 여전히 밤이었지만 더 이상 낯설지 않았다.",
          "명확함은 어둠을 없애는 것이 아니라 어둠의 모양을 알게 하는 일이다."
        ]
      },

      endingMercifulMist: {
        id: "endingMercifulMist",
        type: "ending",
        title: "남겨둔 안개",
        text: [
          "당신은 조금의 안개를 남겨두었다.",
          "그것은 거짓이 아니라 숨 쉴 공간처럼 보였다.",
          "모든 진실이 한꺼번에 도착해야 하는 것은 아니다."
        ]
      },

      endingRecoveredThing: {
        id: "endingRecoveredThing",
        type: "ending",
        title: "되찾은 것",
        text: [
          "당신은 늪 바닥에서 작은 물건 하나를 주웠다.",
          "무엇에 쓰는지 알 수 없었지만, 이상하게도 오래 그리워했던 무게였다.",
          "잃어버린 자신은 대개 완전한 모습이 아니라 작은 조각으로 돌아온다."
        ]
      },

      endingLeftBelow: {
        id: "endingLeftBelow",
        type: "ending",
        title: "아래에 둔 것",
        text: [
          "당신은 그것들을 그대로 두고 떠났다.",
          "모든 것을 되찾는 것이 회복은 아니었다.",
          "어떤 것은 바닥에 남아 있을 때 더 이상 당신을 끌어당기지 않는다."
        ]
      },

      endingOwnBreath: {
        id: "endingOwnBreath",
        type: "ending",
        title: "자신의 숨",
        text: [
          "당신은 자신의 숨소리를 들었다.",
          "그 소리는 불안정했지만 살아 있었다.",
          "두려움이 멈춘 뒤에도 삶은 작고 규칙적인 소리로 계속된다."
        ]
      },

      endingNeedNoise: {
        id: "endingNeedNoise",
        type: "ending",
        title: "다시 찾은 소음",
        text: [
          "당신은 다시 울음소리를 찾았다.",
          "침묵보다 익숙한 불안이 더 편하게 느껴졌기 때문이다.",
          "사람은 때때로 평온보다 익숙한 혼란을 먼저 찾는다."
        ]
      },

      endingAcceptedShadow: {
        id: "endingAcceptedShadow",
        type: "ending",
        title: "인정된 그림자",
        text: [
          "당신은 그림자 곁에 앉았다.",
          "그림자는 점점 작아졌지만 사라지지는 않았다.",
          "받아들인 어둠은 더 이상 밤 전체를 차지하지 못한다."
        ]
      },

      endingForcedLight: {
        id: "endingForcedLight",
        type: "ending",
        title: "억지로 비춘 빛",
        text: [
          "당신은 그림자 위에 빛을 비췄다.",
          "그림자는 사라졌지만, 동시에 깊이도 사라졌다.",
          "모든 어둠을 없애면 풍경은 평평해진다."
        ]
      }
    }
  }
};