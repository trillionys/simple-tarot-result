export const theEmperor = {
  id: "the-emperor",
  number: "IV",
  name: "The Emperor",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "IV · THE EMPEROR · UPRIGHT",
      title: "돌의 왕좌",
      text: [
        "당신은 거대한 석조 궁전에서 눈을 떴다.",
        "천장은 너무 높아 끝이 보이지 않았고, 정면에는 비어 있는 왕좌 하나가 놓여 있었다.",
        "누군가는 이 자리에 앉아야 한다고 말하는 듯했다."
      ],
      choices: [
        { text: "왕좌에 앉는다", next: "uprightThrone" },
        { text: "기둥을 살펴본다", next: "uprightPillars" },
        { text: "왕관을 집어 든다", next: "uprightCrown" },
        { text: "궁전 밖으로 나간다", next: "uprightOutside" }
      ]
    },

    nodes: {
      uprightThrone: {
        id: "uprightThrone",
        type: "story",
        label: "THE THRONE",
        title: "비어 있는 왕좌",
        text: [
          "왕좌는 차가웠다.",
          "앉는 순간 궁전 전체가 아주 작게 흔들렸다.",
          "권력은 높아지는 일이 아니라, 무게를 견디는 일임을 깨달았다."
        ],
        choices: [
          { text: "끝까지 앉아 있는다", next: "endingBurden" },
          { text: "다시 일어난다", next: "endingChoice" }
        ]
      },

      uprightPillars: {
        id: "uprightPillars",
        type: "story",
        label: "THE PILLARS",
        title: "기둥",
        text: [
          "궁전은 네 개의 거대한 기둥 위에 서 있었다.",
          "하나라도 무너지면 왕좌 역시 존재할 수 없었다.",
          "모든 권위는 보이지 않는 기반 위에 세워진다."
        ],
        choices: [
          { text: "기둥을 지킨다", next: "endingFoundation" },
          { text: "기둥 하나를 허문다", next: "endingCrack" }
        ]
      },

      uprightCrown: {
        id: "uprightCrown",
        type: "story",
        label: "THE CROWN",
        title: "왕관",
        text: [
          "왕관은 금으로 만들어졌지만 생각보다 무거웠다.",
          "그것은 영광보다 책임의 무게를 닮아 있었다.",
          "머리 위에 올리는 순간 시선이 달라졌다."
        ],
        choices: [
          { text: "왕관을 쓴다", next: "endingResponsibility" },
          { text: "왕관을 내려놓는다", next: "endingHumbleKing" }
        ]
      },

      uprightOutside: {
        id: "uprightOutside",
        type: "story",
        label: "THE KINGDOM",
        title: "성 밖",
        text: [
          "궁전 밖에는 평범한 사람들이 살아가고 있었다.",
          "왕좌는 궁전 안에 있었지만 책임은 바깥에 있었다.",
          "통치는 벽 안이 아니라 벽 밖에서 완성된다."
        ],
        choices: [
          { text: "사람들 속으로 간다", next: "endingPeople" },
          { text: "궁전으로 돌아간다", next: "endingReturn" }
        ]
      }
    },

    endings: {
      endingBurden: {
        id: "endingBurden",
        type: "ending",
        title: "왕좌의 무게",
        text: [
          "당신은 끝까지 왕좌를 지켰다.",
          "아무도 박수를 치지 않았다.",
          "진짜 권위는 인정받는 것이 아니라 끝까지 책임지는 것이다."
        ]
      },

      endingChoice: {
        id: "endingChoice",
        type: "ending",
        title: "스스로 내려온 왕",
        text: [
          "당신은 왕좌에서 일어났다.",
          "왕좌는 비었지만 무너지지 않았다.",
          "권력은 떠날 수 있을 때 가장 건강하다."
        ]
      },

      endingFoundation: {
        id: "endingFoundation",
        type: "ending",
        title: "기반",
        text: [
          "당신은 기둥을 지켰다.",
          "궁전은 조용히 제자리를 유지했다.",
          "사람들은 기둥을 보지 못하지만 그 위에서 살아간다."
        ]
      },

      endingCrack: {
        id: "endingCrack",
        type: "ending",
        title: "첫 균열",
        text: [
          "기둥 하나가 갈라졌다.",
          "궁전은 당장 무너지지 않았다.",
          "붕괴는 언제나 작은 균열에서 시작된다."
        ]
      },

      endingResponsibility: {
        id: "endingResponsibility",
        type: "ending",
        title: "왕관",
        text: [
          "당신은 왕관을 썼다.",
          "머리는 무거워졌지만 시야는 넓어졌다.",
          "책임은 사람을 눌러앉히기도 하지만, 더 멀리 보게도 한다."
        ]
      },

      endingHumbleKing: {
        id: "endingHumbleKing",
        type: "ending",
        title: "내려놓은 왕관",
        text: [
          "당신은 왕관을 내려놓았다.",
          "궁전은 아무 일도 없었다는 듯 조용했다.",
          "왕관이 없어도 책임은 남을 수 있다."
        ]
      },

      endingPeople: {
        id: "endingPeople",
        type: "ending",
        title: "왕국",
        text: [
          "당신은 사람들 사이를 걸었다.",
          "아무도 당신을 왕이라 부르지 않았다.",
          "그러나 모두가 당신의 선택을 살아가고 있었다."
        ]
      },

      endingReturn: {
        id: "endingReturn",
        type: "ending",
        title: "돌아온 통치자",
        text: [
          "당신은 다시 궁전으로 돌아왔다.",
          "이번에는 왕좌가 목적지가 아니라 출발점처럼 보였다.",
          "질서는 사람을 위해 존재할 때 가장 오래 지속된다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "IV · THE EMPEROR · REVERSED",
      title: "무너지는 궁전",
      text: [
        "궁전은 아직 서 있었지만 벽마다 금이 가 있었다.",
        "왕좌는 비어 있지 않았다.",
        "그러나 그 위에 앉은 사람은 끊임없이 두려워하고 있었다."
      ],
      choices: [
        { text: "왕좌를 바라본다", next: "reversedThrone" },
        { text: "잠긴 문을 연다", next: "reversedDoor" },
        { text: "금 간 벽을 만진다", next: "reversedWall" },
        { text: "왕관을 빼앗는다", next: "reversedCrown" }
      ]
    },

    nodes: {
      reversedThrone: {
        id: "reversedThrone",
        type: "story",
        label: "THE THRONE",
        title: "놓지 못하는 왕",
        text: [
          "왕은 왕좌를 꽉 붙잡고 있었다.",
          "잃을 것이 많을수록 손은 더 굳어진다.",
          "두려움은 종종 권위의 얼굴을 하고 나타난다."
        ],
        choices: [
          { text: "왕좌를 놓게 한다", next: "endingRelease" },
          { text: "그를 그대로 둔다", next: "endingFearRule" }
        ]
      },

      reversedDoor: {
        id: "reversedDoor",
        type: "story",
        label: "THE LOCKED DOOR",
        title: "잠긴 문",
        text: [
          "문은 안에서 잠겨 있었다.",
          "밖을 막기 위해 잠근 문은 결국 안에 있는 사람도 가둔다."
        ],
        choices: [
          { text: "문을 연다", next: "endingOpenGate" },
          { text: "더 단단히 잠근다", next: "endingFortress" }
        ]
      },

      reversedWall: {
        id: "reversedWall",
        type: "story",
        label: "THE WALL",
        title: "금 간 벽",
        text: [
          "벽은 겉보기엔 튼튼했지만 안쪽은 비어 있었다.",
          "겉으로만 유지되는 질서는 오래 버티지 못한다."
        ],
        choices: [
          { text: "안을 채운다", next: "endingRepair" },
          { text: "겉만 덧칠한다", next: "endingFacade" }
        ]
      },

      reversedCrown: {
        id: "reversedCrown",
        type: "story",
        label: "THE CROWN",
        title: "탐낸 왕관",
        text: [
          "왕관은 누구에게도 어울리지 않았다.",
          "욕망으로 얻은 권력은 늘 자신을 먼저 의심한다."
        ],
        choices: [
          { text: "왕관을 돌려준다", next: "endingReturnedCrown" },
          { text: "끝까지 쓴다", next: "endingFalseKing" }
        ]
      }
    },

    endings: {
      endingRelease: {
        id: "endingRelease",
        type: "ending",
        title: "놓아진 왕좌",
        text: [
          "왕은 마침내 손을 놓았다.",
          "궁전은 무너지지 않았다.",
          "권력을 내려놓는 순간 비로소 권위가 시작되었다."
        ]
      },

      endingFearRule: {
        id: "endingFearRule",
        type: "ending",
        title: "두려움의 통치",
        text: [
          "왕은 끝내 왕좌를 놓지 않았다.",
          "왕국은 유지되었지만 아무도 웃지 않았다.",
          "두려움은 질서를 만들 수 있지만 신뢰는 만들지 못한다."
        ]
      },

      endingOpenGate: {
        id: "endingOpenGate",
        type: "ending",
        title: "열린 성문",
        text: [
          "문이 열리자 바람이 궁전을 통과했다.",
          "오래 닫혀 있던 공기가 처음으로 움직였다.",
          "권위는 닫힌 문보다 열린 문에서 더 오래 살아남는다."
        ]
      },

      endingFortress: {
        id: "endingFortress",
        type: "ending",
        title: "요새",
        text: [
          "성은 더욱 견고해졌다.",
          "하지만 그 안에는 점점 사람이 사라졌다.",
          "완벽한 방어는 결국 완벽한 고립이 된다."
        ]
      },

      endingRepair: {
        id: "endingRepair",
        type: "ending",
        title: "안에서 세운 벽",
        text: [
          "당신은 안쪽부터 다시 쌓기 시작했다.",
          "시간은 오래 걸렸지만 궁전은 다시 숨을 쉬었다.",
          "기반을 고치는 일은 항상 겉을 꾸미는 일보다 느리다."
        ]
      },

      endingFacade: {
        id: "endingFacade",
        type: "ending",
        title: "겉모습",
        text: [
          "금은 보이지 않게 되었다.",
          "하지만 벽은 계속 안쪽에서 갈라지고 있었다.",
          "숨겨진 균열은 사라진 균열이 아니다."
        ]
      },

      endingReturnedCrown: {
        id: "endingReturnedCrown",
        type: "ending",
        title: "돌려준 왕관",
        text: [
          "왕관은 제자리로 돌아갔다.",
          "당신은 빈손이 되었지만 더 가벼워졌다.",
          "모든 자리가 자신의 자리는 아니다."
        ]
      },

      endingFalseKing: {
        id: "endingFalseKing",
        type: "ending",
        title: "가짜 왕",
        text: [
          "왕관은 당신 머리에 있었지만 마음에는 없었다.",
          "사람들은 고개를 숙였지만 믿지는 않았다.",
          "권력은 빌릴 수 있어도 권위는 빌릴 수 없다."
        ]
      }
    }
  }
};