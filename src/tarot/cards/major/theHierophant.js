export const theHierophant = {
  id: "the-hierophant",
  number: "V",
  name: "The Hierophant",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "V · THE HIEROPHANT · UPRIGHT",
      title: "말 없는 성전",
      text: [
        "당신은 오래된 성전의 중앙에서 눈을 떴다.",
        "수백 개의 촛불이 타고 있었지만 누구도 기도하지 않았다.",
        "제단 위에는 오래된 책 한 권이 조용히 펼쳐져 있었다."
      ],
      choices: [
        { text: "책을 펼친다", next: "uprightBook" },
        { text: "촛불을 바라본다", next: "uprightCandle" },
        { text: "빈 제단 앞에 선다", next: "uprightAltar" },
        { text: "성전 밖으로 걸어간다", next: "uprightDoor" }
      ]
    },

    nodes: {
      uprightBook: {
        id: "uprightBook",
        type: "story",
        label: "THE BOOK",
        title: "오래된 책",
        text: [
          "책에는 수많은 규칙이 적혀 있었다.",
          "하지만 마지막 장은 비어 있었다.",
          "배움은 끝에서 암기가 아니라 질문이 된다."
        ],
        choices: [
          { text: "마지막 장을 읽는다", next: "endingBlankPage" },
          { text: "책을 덮는다", next: "endingClosedBook" }
        ]
      },

      uprightCandle: {
        id: "uprightCandle",
        type: "story",
        label: "THE CANDLES",
        title: "촛불",
        text: [
          "수백 개의 촛불은 모두 같은 불꽃이었다.",
          "그러나 하나도 똑같이 흔들리지 않았다.",
          "같은 진실도 각자의 삶에서 다른 모양으로 타오른다."
        ],
        choices: [
          { text: "촛불 하나를 든다", next: "endingSharedLight" },
          { text: "모두를 바라본다", next: "endingManyFlames" }
        ]
      },

      uprightAltar: {
        id: "uprightAltar",
        type: "story",
        label: "THE ALTAR",
        title: "비어 있는 제단",
        text: [
          "제단은 비어 있었다.",
          "누군가 떠난 것이 아니라, 누군가 오기를 기다리는 자리였다.",
          "가르침은 항상 채워지는 것이 아니라 이어지는 것이다."
        ],
        choices: [
          { text: "제단 앞에 무릎을 꿇는다", next: "endingRespect" },
          { text: "제단 위에 손을 올린다", next: "endingInheritance" }
        ]
      },

      uprightDoor: {
        id: "uprightDoor",
        type: "story",
        label: "THE GATE",
        title: "성전의 문",
        text: [
          "성전 밖에도 길은 이어지고 있었다.",
          "배움은 건물 안에서 시작되지만, 완성은 바깥에서 이루어진다.",
          "지혜는 머무는 장소가 아니라 살아가는 방식이다."
        ],
        choices: [
          { text: "밖으로 나간다", next: "endingJourney" },
          { text: "한 번 더 뒤돌아본다", next: "endingGratitude" }
        ]
      }
    },

    endings: {
      endingBlankPage: {
        id: "endingBlankPage",
        type: "ending",
        title: "마지막 페이지",
        text: [
          "마지막 장은 끝내 비어 있었다.",
          "그 빈칸은 실수가 아니었다.",
          "모든 가르침은 결국 누군가의 삶으로 완성된다."
        ]
      },

      endingClosedBook: {
        id: "endingClosedBook",
        type: "ending",
        title: "덮인 책",
        text: [
          "당신은 책을 덮었다.",
          "내용은 기억나지 않았지만 손끝에는 종이의 감촉이 남아 있었다.",
          "배움은 지식보다 태도로 오래 남는다."
        ]
      },

      endingSharedLight: {
        id: "endingSharedLight",
        type: "ending",
        title: "이어진 불꽃",
        text: [
          "당신은 촛불 하나를 들었다.",
          "불은 줄어들지 않았고 또 하나의 빛이 생겼다.",
          "지혜는 나눌수록 작아지지 않는다."
        ]
      },

      endingManyFlames: {
        id: "endingManyFlames",
        type: "ending",
        title: "수많은 불빛",
        text: [
          "당신은 모든 불꽃을 바라보았다.",
          "같은 빛은 하나도 없었다.",
          "공동체는 같은 사람이 모인 곳이 아니라 같은 불을 지키는 사람들의 자리다."
        ]
      },

      endingRespect: {
        id: "endingRespect",
        type: "ending",
        title: "이어지는 예식",
        text: [
          "당신은 조용히 무릎을 꿇었다.",
          "성전은 아무 말도 하지 않았다.",
          "존중은 답을 믿는 것이 아니라, 답이 태어난 시간을 인정하는 일이다."
        ]
      },

      endingInheritance: {
        id: "endingInheritance",
        type: "ending",
        title: "전해진 손",
        text: [
          "당신은 제단 위에 손을 올렸다.",
          "오래된 온기가 아직 남아 있었다.",
          "계승은 과거를 복사하는 것이 아니라 미래까지 이어지는 책임이다."
        ]
      },

      endingJourney: {
        id: "endingJourney",
        type: "ending",
        title: "성전 밖",
        text: [
          "당신은 성전을 떠났다.",
          "등 뒤에서 종소리가 한 번 울렸다.",
          "배움은 끝나는 순간부터 삶이 된다."
        ]
      },

      endingGratitude: {
        id: "endingGratitude",
        type: "ending",
        title: "뒤돌아본 성전",
        text: [
          "당신은 마지막으로 성전을 바라보았다.",
          "문은 여전히 열려 있었다.",
          "떠날 줄 아는 사람만이 다시 돌아올 수 있다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "V · THE HIEROPHANT · REVERSED",
      title: "닫힌 성전",
      text: [
        "성전의 문은 잠겨 있었다.",
        "안에서는 기도가 계속되었지만 아무도 밖을 바라보지 않았다.",
        "책은 남아 있었고 질문만 사라져 있었다."
      ],
      choices: [
        { text: "잠긴 문을 두드린다", next: "reversedDoor" },
        { text: "책을 펼친다", next: "reversedBook" },
        { text: "촛불을 끈다", next: "reversedCandle" },
        { text: "성전을 떠난다", next: "reversedLeave" }
      ]
    },

    nodes: {
      reversedDoor: {
        id: "reversedDoor",
        type: "story",
        label: "THE CLOSED DOOR",
        title: "닫힌 문",
        text: [
          "문은 열리지 않았다.",
          "안보다 밖이 더 조용했다.",
          "닫힌 믿음은 스스로를 가장 먼저 가둔다."
        ],
        choices: [
          { text: "계속 두드린다", next: "endingWaiting" },
          { text: "돌아서 떠난다", next: "endingNewPath" }
        ]
      },

      reversedBook: {
        id: "reversedBook",
        type: "story",
        label: "THE OLD BOOK",
        title: "변하지 않는 문장",
        text: [
          "모든 문장은 오래전 그대로였다.",
          "하지만 당신만 달라져 있었다.",
          "같은 글도 다른 사람이 읽으면 다른 의미가 된다."
        ],
        choices: [
          { text: "다시 읽는다", next: "endingReread" },
          { text: "빈 여백에 적는다", next: "endingOwnTruth" }
        ]
      },

      reversedCandle: {
        id: "reversedCandle",
        type: "story",
        label: "THE EXTINGUISHED FLAME",
        title: "꺼진 불",
        text: [
          "촛불 하나가 꺼졌다.",
          "성전은 어두워지지 않았다.",
          "형식은 남았지만 의미는 오래전에 떠난 듯했다."
        ],
        choices: [
          { text: "다시 불을 붙인다", next: "endingRenewal" },
          { text: "그대로 둔다", next: "endingAshes" }
        ]
      },

      reversedLeave: {
        id: "reversedLeave",
        type: "story",
        label: "THE ROAD",
        title: "성전 밖의 길",
        text: [
          "당신은 성전을 떠났다.",
          "길 위에는 스승도 규칙도 없었다.",
          "하지만 처음으로 자신의 발소리가 들렸다."
        ],
        choices: [
          { text: "혼자 걷는다", next: "endingOwnWay" },
          { text: "새로운 사람들을 만난다", next: "endingNewTeacher" }
        ]
      }
    },

    endings: {
      endingWaiting: {
        id: "endingWaiting",
        type: "ending",
        title: "닫힌 문 앞",
        text: [
          "문은 끝내 열리지 않았다.",
          "그러나 기다린 시간은 당신을 조금 다르게 만들었다.",
          "모든 문은 들어가기 위해 존재하는 것은 아니다."
        ]
      },

      endingNewPath: {
        id: "endingNewPath",
        type: "ending",
        title: "새로운 길",
        text: [
          "당신은 돌아섰다.",
          "뒤에서는 아무도 붙잡지 않았다.",
          "의심은 믿음의 적이 아니라, 더 깊은 믿음으로 향하는 길이 될 수 있다."
        ]
      },

      endingReread: {
        id: "endingReread",
        type: "ending",
        title: "다시 읽은 책",
        text: [
          "책은 변하지 않았다.",
          "하지만 이번에는 문장이 아니라 침묵이 읽혔다.",
          "성장은 책보다 독자를 먼저 바꾼다."
        ]
      },

      endingOwnTruth: {
        id: "endingOwnTruth",
        type: "ending",
        title: "여백의 문장",
        text: [
          "당신은 빈 여백에 자신의 문장을 적었다.",
          "오래된 책은 처음으로 완성된 것처럼 보였다.",
          "계승의 마지막 단계는 새로운 시작을 쓰는 일이다."
        ]
      },

      endingRenewal: {
        id: "endingRenewal",
        type: "ending",
        title: "다시 켜진 불",
        text: [
          "당신은 다시 불을 붙였다.",
          "불꽃은 이전과 같았지만 이유는 달라져 있었다.",
          "전통은 반복될 때가 아니라 이해될 때 살아난다."
        ]
      },

      endingAshes: {
        id: "endingAshes",
        type: "ending",
        title: "재",
        text: [
          "촛불은 그대로 꺼져 있었다.",
          "재는 차가웠지만 아직 형태를 기억하고 있었다.",
          "의미를 잃은 의식은 결국 껍질만 남는다."
        ]
      },

      endingOwnWay: {
        id: "endingOwnWay",
        type: "ending",
        title: "스스로의 길",
        text: [
          "당신은 혼자 걸었다.",
          "길은 아무도 가르쳐주지 않았다.",
          "자신의 믿음은 가장 늦게 배우는 가르침이다."
        ]
      },

      endingNewTeacher: {
        id: "endingNewTeacher",
        type: "ending",
        title: "새로운 스승",
        text: [
          "길 위에서 새로운 사람들을 만났다.",
          "그들은 스승처럼 말하지 않았지만 많은 것을 가르쳐 주었다.",
          "지혜는 때때로 성전 밖에서 가장 조용히 자란다."
        ]
      }
    }
  }
};