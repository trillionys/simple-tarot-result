export const theHangedMan = {
  id: "the-hanged-man",
  number: "XII",
  name: "The Hanged Man",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XII · THE HANGED MAN · UPRIGHT",
      title: "거꾸로 매달린 나무",
      text: [
        "당신은 거대한 나무 아래에서 눈을 떴다.",
        "누군가 당신을 거꾸로 매달아 두었지만 이상하게도 고통은 없었다.",
        "세상은 뒤집혀 있었고, 처음으로 하늘보다 땅이 더 넓어 보였다."
      ],
      choices: [
        { text: "거꾸로 세상을 바라본다", next: "uprightView" },
        { text: "밧줄을 만져본다", next: "uprightRope" },
        { text: "눈을 감는다", next: "uprightEyes" },
        { text: "나무를 올려다본다", next: "uprightTree" }
      ]
    },

    nodes: {
      uprightView: {
        id: "uprightView",
        type: "story",
        label: "THE VIEW",
        title: "뒤집힌 풍경",
        text: [
          "길은 강처럼 보였고 강은 하늘처럼 보였다.",
          "당신은 처음으로 익숙한 것들이 얼마나 한쪽 방향에서만 보였는지 깨달았다.",
          "세상은 변하지 않았지만 바라보는 방향이 달라졌다."
        ],
        choices: [
          { text: "계속 바라본다", next: "endingPerspective" },
          { text: "다시 원래대로 생각하려 한다", next: "endingResistance" }
        ]
      },

      uprightRope: {
        id: "uprightRope",
        type: "story",
        label: "THE ROPE",
        title: "묶인 발",
        text: [
          "밧줄은 단단했지만 아프지 않았다.",
          "당신은 그 밧줄이 자신을 붙잡는 것이 아니라 떠나지 못하게 기다려주는 것 같다고 느꼈다.",
          "멈춤은 감옥이 아니라 준비일 수도 있었다."
        ],
        choices: [
          { text: "밧줄을 믿는다", next: "endingTrust" },
          { text: "억지로 끊으려 한다", next: "endingForce" }
        ]
      },

      uprightEyes: {
        id: "uprightEyes",
        type: "story",
        label: "THE EYES",
        title: "감은 눈",
        text: [
          "눈을 감자 바람 소리가 훨씬 선명해졌다.",
          "보이지 않자 오히려 더 많은 것들이 다가왔다.",
          "모든 깨달음이 눈으로 오는 것은 아니었다."
        ],
        choices: [
          { text: "끝까지 감고 있는다", next: "endingInsight" },
          { text: "천천히 눈을 뜬다", next: "endingAwareness" }
        ]
      },

      uprightTree: {
        id: "uprightTree",
        type: "story",
        label: "THE TREE",
        title: "오래된 나무",
        text: [
          "나무는 당신보다 오래 기다려온 존재였다.",
          "나뭇가지는 움직이지 않았지만 계절은 계속 흘렀다.",
          "성장은 언제나 빠르게 이루어지는 것이 아니었다."
        ],
        choices: [
          { text: "계절을 기다린다", next: "endingSeason" },
          { text: "지금 내려오려 한다", next: "endingImpatience" }
        ]
      }
    },

    endings: {
      endingPerspective: {
        id: "endingPerspective",
        type: "ending",
        title: "새로운 시선",
        text: [
          "당신은 충분히 오래 거꾸로 세상을 바라보았다.",
          "세상은 그대로였지만 당신은 더 이상 같은 사람이 아니었다.",
          "깨달음은 새로운 길이 아니라 새로운 시선에서 시작된다."
        ]
      },

      endingResistance: {
        id: "endingResistance",
        type: "ending",
        title: "익숙함의 무게",
        text: [
          "당신은 원래대로 생각하려 애썼다.",
          "하지만 뒤집힌 세상은 쉽게 돌아오지 않았다.",
          "한 번 넓어진 시야는 다시 좁아지기를 거부한다."
        ]
      },

      endingTrust: {
        id: "endingTrust",
        type: "ending",
        title: "기다림",
        text: [
          "당신은 밧줄을 믿었다.",
          "시간은 아무 말 없이 흘렀다.",
          "기다림은 아무것도 하지 않는 시간이 아니라 변화가 자라는 시간이었다."
        ]
      },

      endingForce: {
        id: "endingForce",
        type: "ending",
        title: "서두른 자유",
        text: [
          "당신은 밧줄을 끊었다.",
          "땅에 발을 디뎠지만 마음은 아직 거꾸로 매달려 있었다.",
          "몸보다 먼저 풀려야 하는 것은 생각일지도 모른다."
        ]
      },

      endingInsight: {
        id: "endingInsight",
        type: "ending",
        title: "안쪽의 빛",
        text: [
          "눈을 감은 채 오래 머물렀다.",
          "어둠은 점점 밝아졌다.",
          "진짜 빛은 밖보다 안에서 먼저 켜질 때가 있다."
        ]
      },

      endingAwareness: {
        id: "endingAwareness",
        type: "ending",
        title: "다시 뜬 눈",
        text: [
          "당신은 천천히 눈을 떴다.",
          "아무것도 달라지지 않았지만 모든 것이 다르게 보였다.",
          "깨달음은 세상을 바꾸지 않고 보는 사람을 바꾼다."
        ]
      },

      endingSeason: {
        id: "endingSeason",
        type: "ending",
        title: "계절",
        text: [
          "당신은 계절이 지나가기를 기다렸다.",
          "꽃은 피고 졌으며 잎은 다시 자랐다.",
          "성장은 움직임보다 시간이 더 잘 알고 있다."
        ]
      },

      endingImpatience: {
        id: "endingImpatience",
        type: "ending",
        title: "아직 아닌 때",
        text: [
          "당신은 너무 일찍 내려왔다.",
          "길은 있었지만 방향은 없었다.",
          "때를 기다리지 못한 출발은 목적지를 서두르게 만든다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XII · THE HANGED MAN · REVERSED",
      title: "내려오지 못한 사람",
      text: [
        "당신은 이미 밧줄이 풀려 있었지만 여전히 거꾸로 매달려 있었다.",
        "아무도 붙잡지 않았는데도 몸은 움직이지 않았다.",
        "익숙해진 시선은 자유보다 편안했다."
      ],
      choices: [
        { text: "땅을 바라본다", next: "reversedGround" },
        { text: "밧줄을 확인한다", next: "reversedRope" },
        { text: "나무에게 말을 건다", next: "reversedTree" },
        { text: "눈을 감는다", next: "reversedEyes" }
      ]
    },

    nodes: {
      reversedGround: {
        id: "reversedGround",
        type: "story",
        label: "THE GROUND",
        title: "가까운 땅",
        text: [
          "땅은 손을 뻗으면 닿을 만큼 가까웠다.",
          "하지만 당신은 끝내 손을 뻗지 않았다.",
          "두려움은 거리보다 상상에서 자란다."
        ],
        choices: [
          { text: "땅을 향해 손을 뻗는다", next: "endingReach" },
          { text: "계속 바라만 본다", next: "endingWatching" }
        ]
      },

      reversedRope: {
        id: "reversedRope",
        type: "story",
        label: "THE KNOT",
        title: "풀린 매듭",
        text: [
          "매듭은 이미 풀려 있었다.",
          "당신은 그것을 몰랐던 것이 아니라 믿지 못했던 것이다.",
          "가장 오래된 감옥은 습관이다."
        ],
        choices: [
          { text: "스스로 내려온다", next: "endingFreedom" },
          { text: "다시 묶는다", next: "endingHabit" }
        ]
      },

      reversedTree: {
        id: "reversedTree",
        type: "story",
        label: "THE TREE",
        title: "침묵하는 나무",
        text: [
          "나무는 아무 말도 하지 않았다.",
          "하지만 오래된 껍질 사이로 새로운 싹이 자라고 있었다.",
          "멈춰 있는 것처럼 보여도 생명은 계속 움직인다."
        ],
        choices: [
          { text: "싹을 바라본다", next: "endingGrowth" },
          { text: "나무를 떠난다", next: "endingDeparture" }
        ]
      },

      reversedEyes: {
        id: "reversedEyes",
        type: "story",
        label: "THE CLOSED EYES",
        title: "감은 눈",
        text: [
          "당신은 다시 눈을 감았다.",
          "이번에는 깨달음을 위해서가 아니라 현실을 피하기 위해서였다.",
          "같은 행동도 이유에 따라 전혀 다른 길이 된다."
        ],
        choices: [
          { text: "다시 눈을 뜬다", next: "endingReality" },
          { text: "계속 감고 있는다", next: "endingEscape" }
        ]
      }
    },

    endings: {
      endingReach: {
        id: "endingReach",
        type: "ending",
        title: "닿은 손",
        text: [
          "당신의 손끝이 땅에 닿았다.",
          "생각보다 아무 일도 일어나지 않았다.",
          "가장 두려운 순간은 대개 현실보다 상상 속에 있다."
        ]
      },

      endingWatching: {
        id: "endingWatching",
        type: "ending",
        title: "망설임",
        text: [
          "당신은 계속 바라만 보았다.",
          "시간은 흘렀지만 자세는 그대로였다.",
          "결정을 미루는 것도 하나의 선택이다."
        ]
      },

      endingFreedom: {
        id: "endingFreedom",
        type: "ending",
        title: "스스로 내려온 사람",
        text: [
          "당신은 조용히 땅에 발을 디뎠다.",
          "세상은 더 이상 거꾸로 보이지 않았다.",
          "해방은 누군가 풀어줄 때보다 스스로 믿을 때 시작된다."
        ]
      },

      endingHabit: {
        id: "endingHabit",
        type: "ending",
        title: "다시 묶인 발",
        text: [
          "당신은 스스로 다시 매듭을 만들었다.",
          "익숙함은 언제나 안전해 보인다.",
          "하지만 편안함은 때때로 가장 오래된 족쇄다."
        ]
      },

      endingGrowth: {
        id: "endingGrowth",
        type: "ending",
        title: "새로운 싹",
        text: [
          "당신은 작은 싹을 오래 바라보았다.",
          "아무도 보지 않는 곳에서도 생명은 자란다.",
          "희망은 큰 변화보다 작은 시작을 더 닮아 있다."
        ]
      },

      endingDeparture: {
        id: "endingDeparture",
        type: "ending",
        title: "떠나는 나무",
        text: [
          "당신은 나무를 떠났다.",
          "이번에는 누구도 붙잡지 않았다.",
          "배움을 마친 자리에는 미련보다 감사가 남는다."
        ]
      },

      endingReality: {
        id: "endingReality",
        type: "ending",
        title: "현실을 보는 눈",
        text: [
          "당신은 다시 눈을 떴다.",
          "세상은 여전히 쉽지 않았지만 더 이상 피하고 싶지는 않았다.",
          "용기는 진실을 바꾸는 것이 아니라 진실을 바라보는 일이다."
        ]
      },

      endingEscape: {
        id: "endingEscape",
        type: "ending",
        title: "눈감은 자유",
        text: [
          "당신은 끝내 눈을 감고 있었다.",
          "세상은 조용했고 두려움도 잠잠했다.",
          "그러나 닫힌 눈은 풍경뿐 아니라 가능성도 함께 가린다."
        ]
      }
    }
  }
};