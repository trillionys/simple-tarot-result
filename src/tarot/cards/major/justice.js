export const justice = {
  id: "justice",
  number: "XI",
  name: "Justice",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XI · JUSTICE · UPRIGHT",
      title: "저울의 방",
      text: [
        "당신은 거대한 저울이 놓인 방에서 눈을 떴다.",
        "양쪽 접시는 비어 있었지만, 방 전체는 이미 무게를 재고 있는 듯했다.",
        "누군가는 당신의 선택이 아니라, 선택의 이유를 기다리고 있었다."
      ],
      choices: [
        { text: "검을 바라본다", next: "uprightSword" },
        { text: "저울에 손을 올린다", next: "uprightScale" },
        { text: "방 한가운데에 선다", next: "uprightCenter" },
        { text: "벽에 새겨진 판결문을 읽는다", next: "uprightVerdict" }
      ]
    },

    nodes: {
      uprightSword: {
        id: "uprightSword",
        type: "story",
        label: "THE SWORD",
        title: "베이지 않는 검",
        text: [
          "검은 날카로웠지만 피를 원하지 않았다.",
          "그것은 사람보다 거짓을 먼저 베는 검이었다.",
          "진실은 상처보다 조용했다."
        ],
        choices: [
          { text: "검을 든다", next: "endingTruth" },
          { text: "검을 내려놓는다", next: "endingMercy" }
        ]
      },

      uprightScale: {
        id: "uprightScale",
        type: "story",
        label: "THE SCALE",
        title: "무게",
        text: [
          "당신이 손을 올리자 저울은 움직이지 않았다.",
          "무게를 재는 것은 몸이 아니라 마음이었다.",
          "가벼운 것은 죄가 아니라 변명이었다."
        ],
        choices: [
          { text: "진실을 올린다", next: "endingBalance" },
          { text: "후회를 올린다", next: "endingRegret" }
        ]
      },

      uprightCenter: {
        id: "uprightCenter",
        type: "story",
        label: "THE CENTER",
        title: "가운데",
        text: [
          "당신은 방 한가운데에 섰다.",
          "어느 쪽에도 기울지 않은 자리는 생각보다 외로웠다.",
          "균형은 중립이 아니라 책임이었다."
        ],
        choices: [
          { text: "끝까지 선다", next: "endingCenter" },
          { text: "한쪽으로 기운다", next: "endingChoice" }
        ]
      },

      uprightVerdict: {
        id: "uprightVerdict",
        type: "story",
        label: "THE VERDICT",
        title: "판결문",
        text: [
          "판결문에는 당신의 이름이 적혀 있었다.",
          "하지만 죄목은 비어 있었다.",
          "빈칸은 스스로 채우라는 뜻이었다."
        ],
        choices: [
          { text: "빈칸을 채운다", next: "endingSentence" },
          { text: "그대로 둔다", next: "endingBlank" }
        ]
      }
    },

    endings: {
      endingTruth: {
        id: "endingTruth",
        type: "ending",
        title: "진실의 무게",
        text: [
          "검은 아무도 베지 않았다.",
          "대신 거짓 하나가 조용히 사라졌다.",
          "진실은 언제나 가장 적은 소리를 낸다."
        ]
      },

      endingMercy: {
        id: "endingMercy",
        type: "ending",
        title: "남겨둔 검",
        text: [
          "당신은 검을 내려놓았다.",
          "용서는 판결의 반대가 아니었다.",
          "그것은 판결 이후에도 남는 선택이었다."
        ]
      },

      endingBalance: {
        id: "endingBalance",
        type: "ending",
        title: "균형",
        text: [
          "저울은 처음으로 움직였다.",
          "양쪽은 완전히 같지 않았지만 충분히 평형이었다.",
          "공정함은 완벽함보다 현실적이었다."
        ]
      },

      endingRegret: {
        id: "endingRegret",
        type: "ending",
        title: "후회의 접시",
        text: [
          "후회는 생각보다 무거웠다.",
          "하지만 오래 들고 있을수록 점점 가벼워졌다.",
          "놓지 못한 것이 가장 큰 짐이었다."
        ]
      },

      endingCenter: {
        id: "endingCenter",
        type: "ending",
        title: "가운데 선 사람",
        text: [
          "당신은 끝까지 가운데에 남았다.",
          "양쪽 모두 당신을 이해하지 못했다.",
          "균형은 종종 외로운 자리다."
        ]
      },

      endingChoice: {
        id: "endingChoice",
        type: "ending",
        title: "기울어진 정의",
        text: [
          "당신은 한쪽으로 기울었다.",
          "저울도 함께 움직였다.",
          "선택에는 언제나 방향이 남는다."
        ]
      },

      endingSentence: {
        id: "endingSentence",
        type: "ending",
        title: "스스로 내린 판결",
        text: [
          "당신은 빈칸을 채웠다.",
          "판결은 생각보다 짧았다.",
          "자신에게 정직한 사람은 긴 문장이 필요 없다."
        ]
      },

      endingBlank: {
        id: "endingBlank",
        type: "ending",
        title: "비워둔 판결",
        text: [
          "당신은 아무것도 쓰지 않았다.",
          "빈칸은 그대로 남았다.",
          "모든 판단이 지금 당장 끝나야 하는 것은 아니다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XI · JUSTICE · REVERSED",
      title: "기울어진 방",
      text: [
        "방은 처음부터 한쪽으로 기울어져 있었다.",
        "저울은 움직이기도 전에 이미 답을 정한 것 같았다.",
        "당신은 공정함보다 변명을 먼저 떠올렸다."
      ],
      choices: [
        { text: "기울어진 저울을 바로잡는다", next: "reversedScale" },
        { text: "검을 숨긴다", next: "reversedSword" },
        { text: "판결을 거부한다", next: "reversedVerdict" },
        { text: "방을 떠난다", next: "reversedExit" }
      ]
    },

    nodes: {
      reversedScale: {
        id: "reversedScale",
        type: "story",
        label: "THE SCALE",
        title: "기울어진 저울",
        text: [
          "아무리 맞추려 해도 저울은 다시 기울었다.",
          "균형을 잃은 것은 저울이 아니라 바라보는 사람이었다.",
          "편견은 가장 무거운 추였다."
        ],
        choices: [
          { text: "계속 맞춘다", next: "endingPatience" },
          { text: "포기한다", next: "endingCollapse" }
        ]
      },

      reversedSword: {
        id: "reversedSword",
        type: "story",
        label: "THE HIDDEN SWORD",
        title: "숨겨진 검",
        text: [
          "검을 감추자 방은 더 조용해졌다.",
          "그러나 감춘 진실은 점점 더 큰 그림자를 만들었다.",
          "보이지 않는다고 없어지는 것은 아니었다."
        ],
        choices: [
          { text: "검을 다시 꺼낸다", next: "endingConfession" },
          { text: "끝까지 숨긴다", next: "endingSecret" }
        ]
      },

      reversedVerdict: {
        id: "reversedVerdict",
        type: "story",
        label: "THE REFUSAL",
        title: "거부된 판결",
        text: [
          "당신은 판결을 찢어버렸다.",
          "종이는 찢어졌지만 결과는 그대로 남아 있었다.",
          "현실은 종이보다 질겼다."
        ],
        choices: [
          { text: "다시 읽는다", next: "endingAcceptance" },
          { text: "불태운다", next: "endingAshes" }
        ]
      },

      reversedExit: {
        id: "reversedExit",
        type: "story",
        label: "THE EXIT",
        title: "도망친 방",
        text: [
          "당신은 방을 나갔다.",
          "하지만 복도 끝에는 똑같은 방이 기다리고 있었다.",
          "피한 판단은 다른 얼굴로 돌아온다."
        ],
        choices: [
          { text: "다시 들어간다", next: "endingReturn" },
          { text: "계속 걷는다", next: "endingMaze" }
        ]
      }
    },

    endings: {
      endingPatience: {
        id: "endingPatience",
        type: "ending",
        title: "늦은 균형",
        text: [
          "저울은 아주 늦게 평형을 찾았다.",
          "시간도 정의를 돕는 저울추였다.",
          "늦었다고 해서 틀린 것은 아니다."
        ]
      },

      endingCollapse: {
        id: "endingCollapse",
        type: "ending",
        title: "무너진 저울",
        text: [
          "당신이 손을 떼자 저울은 쓰러졌다.",
          "공정함은 사라지지 않았다.",
          "다만 누군가 다시 세워주길 기다렸다."
        ]
      },

      endingConfession: {
        id: "endingConfession",
        type: "ending",
        title: "고백",
        text: [
          "당신은 검을 다시 꺼냈다.",
          "방은 더 밝아졌다.",
          "진실은 늦게 드러나도 여전히 진실이다."
        ]
      },

      endingSecret: {
        id: "endingSecret",
        type: "ending",
        title: "감춰진 무게",
        text: [
          "당신은 끝까지 숨겼다.",
          "비밀은 점점 무거워졌다.",
          "감춘 진실은 결국 숨긴 사람을 먼저 누른다."
        ]
      },

      endingAcceptance: {
        id: "endingAcceptance",
        type: "ending",
        title: "받아들인 판결",
        text: [
          "당신은 판결을 다시 읽었다.",
          "내용은 바뀌지 않았지만 당신은 달라져 있었다.",
          "수용은 패배가 아니라 시작이다."
        ]
      },

      endingAshes: {
        id: "endingAshes",
        type: "ending",
        title: "재가 된 문장",
        text: [
          "판결문은 재가 되었다.",
          "하지만 재는 바람을 타고 다시 방 안에 흩어졌다.",
          "태운다고 사라지는 진실은 없다."
        ]
      },

      endingReturn: {
        id: "endingReturn",
        type: "ending",
        title: "다시 열린 방",
        text: [
          "당신은 방으로 돌아왔다.",
          "이번에는 저울이 먼저 당신을 기다리고 있었다.",
          "피했던 질문은 가장 오래 기억된다."
        ]
      },

      endingMaze: {
        id: "endingMaze",
        type: "ending",
        title: "판단의 미로",
        text: [
          "당신은 계속 걸었다.",
          "복도는 끝나지 않았다.",
          "결정을 미루는 것도 하나의 결정이었다."
        ]
      }
    }
  }
};