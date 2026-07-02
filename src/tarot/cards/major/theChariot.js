export const theChariot = {
  id: "the-chariot",
  number: "VII",
  name: "The Chariot",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "VII · THE CHARIOT · UPRIGHT",
      title: "움직이는 도시",
      text: [
        "당신은 거대한 전차 위에서 눈을 떴다.",
        "바퀴는 멈춰 있었지만 도시 전체가 천천히 앞으로 움직이고 있었다.",
        "두 마리의 짐승은 서로 다른 방향을 바라보고 있었다."
      ],
      choices: [
        { text: "고삐를 잡는다", next: "uprightReins" },
        { text: "도시를 내려다본다", next: "uprightCity" },
        { text: "두 짐승을 바라본다", next: "uprightBeasts" },
        { text: "전차에서 내려선다", next: "uprightGround" }
      ]
    },

    nodes: {
      uprightReins: {
        id: "uprightReins",
        type: "story",
        label: "THE REINS",
        title: "고삐",
        text: [
          "고삐는 생각보다 가벼웠다.",
          "짐승을 움직이는 것은 힘이 아니라 방향이었다.",
          "당신의 손끝에서 전차가 숨을 쉬기 시작했다."
        ],
        choices: [
          { text: "힘껏 당긴다", next: "endingControl" },
          { text: "조금 느슨하게 둔다", next: "endingTrust" }
        ]
      },

      uprightCity: {
        id: "uprightCity",
        type: "story",
        label: "THE CITY",
        title: "움직이는 도시",
        text: [
          "도시는 멈춰 있는 것처럼 보였지만 끊임없이 앞으로 흘러가고 있었다.",
          "누구도 그것을 눈치채지 못했다.",
          "움직임은 항상 속도로 증명되는 것은 아니었다."
        ],
        choices: [
          { text: "도시와 함께 간다", next: "endingJourney" },
          { text: "혼자 앞으로 달린다", next: "endingAhead" }
        ]
      },

      uprightBeasts: {
        id: "uprightBeasts",
        type: "story",
        label: "THE BEASTS",
        title: "두 짐승",
        text: [
          "한 마리는 빛을 향했고 다른 하나는 그림자를 바라보고 있었다.",
          "둘 다 당신의 명령을 기다리고 있었다.",
          "어느 쪽도 틀리지 않았다."
        ],
        choices: [
          { text: "둘을 함께 이끈다", next: "endingUnity" },
          { text: "한 마리만 선택한다", next: "endingDivision" }
        ]
      },

      uprightGround: {
        id: "uprightGround",
        type: "story",
        label: "THE ROAD",
        title: "전차 아래",
        text: [
          "당신은 전차에서 내려섰다.",
          "땅은 조용했지만 전차보다 훨씬 빠르게 움직이고 있었다.",
          "위에서 보이지 않던 길이 발밑에 있었다."
        ],
        choices: [
          { text: "다시 전차에 오른다", next: "endingReturn" },
          { text: "걸어서 간다", next: "endingWalk" }
        ]
      }
    },

    endings: {
      endingControl: {
        id: "endingControl",
        type: "ending",
        title: "의지",
        text: [
          "전차는 곧장 앞으로 나아갔다.",
          "짐승들은 더 이상 싸우지 않았다.",
          "진짜 통제는 억압이 아니라 방향을 만드는 일이다."
        ]
      },

      endingTrust: {
        id: "endingTrust",
        type: "ending",
        title: "맡겨진 길",
        text: [
          "당신은 고삐를 조금 놓았다.",
          "짐승들은 스스로 균형을 찾았다.",
          "믿음은 통제의 반대가 아니라 완성이다."
        ]
      },

      endingJourney: {
        id: "endingJourney",
        type: "ending",
        title: "도시의 속도",
        text: [
          "당신은 도시와 함께 움직였다.",
          "천천히 가는 것은 멈춘 것이 아니었다.",
          "모든 여정은 각자의 속도를 가지고 있다."
        ]
      },

      endingAhead: {
        id: "endingAhead",
        type: "ending",
        title: "너무 앞선 사람",
        text: [
          "당신은 도시보다 앞질러 달렸다.",
          "그러나 도착한 곳에는 아무도 없었다.",
          "혼자 가장 먼저 도착하는 것이 항상 승리는 아니다."
        ]
      },

      endingUnity: {
        id: "endingUnity",
        type: "ending",
        title: "하나의 전차",
        text: [
          "빛과 그림자는 같은 방향으로 걸었다.",
          "전차는 흔들리지 않았다.",
          "상반된 힘이 함께 움직일 때 가장 멀리 간다."
        ]
      },

      endingDivision: {
        id: "endingDivision",
        type: "ending",
        title: "갈라진 길",
        text: [
          "한 짐승만 움직였다.",
          "전차는 제자리에서 회전하기 시작했다.",
          "한쪽만 이끄는 의지는 결국 원을 그린다."
        ]
      },

      endingReturn: {
        id: "endingReturn",
        type: "ending",
        title: "다시 오른 자리",
        text: [
          "당신은 전차로 돌아왔다.",
          "이번에는 길이 아니라 자신을 알게 되었다.",
          "출발점은 종종 가장 늦게 이해된다."
        ]
      },

      endingWalk: {
        id: "endingWalk",
        type: "ending",
        title: "걸어가는 승리",
        text: [
          "당신은 걸어서 길을 갔다.",
          "전차보다 느렸지만 한 번도 방향을 잃지 않았다.",
          "승리는 속도가 아니라 끝까지 가는 힘이다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "VII · THE CHARIOT · REVERSED",
      title: "멈춘 전차",
      text: [
        "전차는 움직이지 않았다.",
        "두 짐승은 서로 반대 방향으로 몸을 굳히고 있었다.",
        "당신은 앞으로 가고 싶었지만 무엇을 이끌어야 하는지 알 수 없었다."
      ],
      choices: [
        { text: "억지로 출발한다", next: "reversedForce" },
        { text: "짐승들을 달랜다", next: "reversedCalm" },
        { text: "전차를 버린다", next: "reversedLeave" },
        { text: "움직이지 않은 이유를 찾는다", next: "reversedReason" }
      ]
    },

    nodes: {
      reversedForce: {
        id: "reversedForce",
        type: "story",
        label: "FORCE",
        title: "억지",
        text: [
          "전차는 잠깐 움직였다.",
          "곧 서로 다른 힘이 바퀴를 비틀기 시작했다.",
          "의지는 힘보다 오래 버티지 못했다."
        ],
        choices: [
          { text: "계속 밀어붙인다", next: "endingCrash" },
          { text: "멈춘다", next: "endingPause" }
        ]
      },

      reversedCalm: {
        id: "reversedCalm",
        type: "story",
        label: "CALM",
        title: "진정",
        text: [
          "짐승들은 조금씩 숨을 고르기 시작했다.",
          "당신도 그제야 자신의 호흡을 들었다.",
          "멈춤은 후퇴가 아니었다."
        ],
        choices: [
          { text: "조금 더 기다린다", next: "endingBreath" },
          { text: "다시 출발한다", next: "endingRestart" }
        ]
      },

      reversedLeave: {
        id: "reversedLeave",
        type: "story",
        label: "LEAVE",
        title: "버려진 전차",
        text: [
          "당신은 전차를 떠났다.",
          "하지만 얼마 지나지 않아 같은 전차가 다시 길 위에 서 있었다.",
          "피한 문제는 늘 조금 앞에서 기다린다."
        ],
        choices: [
          { text: "돌아간다", next: "endingReturnAgain" },
          { text: "계속 떠난다", next: "endingLostRoad" }
        ]
      },

      reversedReason: {
        id: "reversedReason",
        type: "story",
        label: "THE REASON",
        title: "멈춘 이유",
        text: [
          "전차가 멈춘 것은 바퀴 때문이 아니었다.",
          "두 짐승 모두 당신의 결정을 기다리고 있었다.",
          "움직이지 못하는 이유는 종종 밖보다 안에 있다."
        ],
        choices: [
          { text: "결정을 내린다", next: "endingDecision" },
          { text: "계속 망설인다", next: "endingCircle" }
        ]
      }
    },

    endings: {
      endingCrash: {
        id: "endingCrash",
        type: "ending",
        title: "무너진 전차",
        text: [
          "전차는 결국 부서졌다.",
          "속도는 남았지만 방향은 사라졌다.",
          "서두름은 종종 목적지보다 먼저 도착한다."
        ]
      },

      endingPause: {
        id: "endingPause",
        type: "ending",
        title: "멈춘 용기",
        text: [
          "당신은 멈췄다.",
          "이상하게도 그 순간 전차가 가장 안정적이었다.",
          "멈출 줄 아는 사람만이 다시 출발할 수 있다."
        ]
      },

      endingBreath: {
        id: "endingBreath",
        type: "ending",
        title: "같은 호흡",
        text: [
          "짐승과 당신의 숨이 같은 리듬이 되었다.",
          "그제야 전차는 스스로 움직이기 시작했다.",
          "조화는 명령보다 강하다."
        ]
      },

      endingRestart: {
        id: "endingRestart",
        type: "ending",
        title: "두 번째 출발",
        text: [
          "이번 출발은 처음보다 느렸다.",
          "하지만 이번에는 흔들리지 않았다.",
          "늦은 시작은 종종 가장 오래 간다."
        ]
      },

      endingReturnAgain: {
        id: "endingReturnAgain",
        type: "ending",
        title: "돌아온 전차",
        text: [
          "당신은 결국 다시 전차에 올랐다.",
          "도망친 길은 결국 다시 자신의 길이 된다.",
          "회피는 여정을 끝내지 못한다."
        ]
      },

      endingLostRoad: {
        id: "endingLostRoad",
        type: "ending",
        title: "길 없는 발걸음",
        text: [
          "당신은 계속 걸었다.",
          "길은 있었지만 목적지는 사라졌다.",
          "방향 없는 이동은 가장 긴 방황이다."
        ]
      },

      endingDecision: {
        id: "endingDecision",
        type: "ending",
        title: "결정된 방향",
        text: [
          "당신은 하나의 방향을 선택했다.",
          "두 짐승은 동시에 움직였다.",
          "결정은 항상 모든 답을 아는 사람에게 오는 것이 아니다."
        ]
      },

      endingCircle: {
        id: "endingCircle",
        type: "ending",
        title: "원을 도는 전차",
        text: [
          "당신은 끝내 결정하지 못했다.",
          "전차는 같은 자리를 계속 맴돌았다.",
          "망설임은 가장 조용한 형태의 정지다."
        ]
      }
    }
  }
};