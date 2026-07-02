export const temperance = {
  id: "temperance",
  number: "XIV",
  name: "Temperance",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XIV · TEMPERANCE · UPRIGHT",
      title: "두 잔 사이의 강",
      text: [
        "당신은 얕은 강가에서 눈을 떴다.",
        "양손에는 서로 다른 온도의 잔이 들려 있었고, 물은 한쪽에서 다른 쪽으로 조용히 흐르고 있었다.",
        "무언가를 섞어야 했지만, 무엇도 완전히 잃어서는 안 될 것 같았다.",
      ],
      choices: [
        { text: "뜨거운 잔을 차가운 잔에 붓는다", next: "uprightPour" },
        { text: "강물에 발을 담근다", next: "uprightRiver" },
        { text: "두 잔을 모두 내려놓는다", next: "uprightCups" },
        { text: "물의 흐름을 따라간다", next: "uprightFlow" },
      ],
    },

    nodes: {
      uprightPour: {
        id: "uprightPour",
        type: "story",
        label: "THE POURING",
        title: "섞이는 물",
        text: [
          "두 물은 부딪히지 않았다.",
          "뜨거움은 차가움을 이기려 하지 않았고, 차가움도 뜨거움을 지우려 하지 않았다.",
          "서로 다른 것들이 천천히 한 온도를 찾아갔다.",
        ],
        choices: [
          { text: "끝까지 천천히 붓는다", next: "endingBlend" },
          { text: "중간에서 멈춘다", next: "endingHalfway" },
        ],
      },

      uprightRiver: {
        id: "uprightRiver",
        type: "story",
        label: "THE RIVER",
        title: "얕은 강",
        text: [
          "강물은 깊지 않았다.",
          "하지만 발을 담그자 당신 안쪽의 소란이 조금씩 낮아졌다.",
          "균형은 높은 곳이 아니라 낮은 곳에서 시작되고 있었다.",
        ],
        choices: [
          { text: "강 한가운데에 선다", next: "endingMiddleWater" },
          { text: "물살에 몸을 맡긴다", next: "endingFlowTrust" },
        ],
      },

      uprightCups: {
        id: "uprightCups",
        type: "story",
        label: "THE CUPS",
        title: "내려놓은 두 잔",
        text: [
          "당신은 두 잔을 내려놓았다.",
          "잔들은 비어 있지 않았지만, 더 이상 당신의 손을 요구하지 않았다.",
          "조절한다는 것은 늘 쥐고 있는 일이 아니었다.",
        ],
        choices: [
          { text: "잔들이 스스로 섞이게 둔다", next: "endingPatience" },
          { text: "둘 중 하나만 다시 든다", next: "endingChoiceOfCup" },
        ],
      },

      uprightFlow: {
        id: "uprightFlow",
        type: "story",
        label: "THE FLOW",
        title: "흐름의 길",
        text: [
          "물은 길을 묻지 않았다.",
          "다만 막힌 곳에서는 돌아가고, 낮은 곳에서는 머물렀다.",
          "당신은 처음으로 서두르지 않는 움직임을 보았다.",
        ],
        choices: [
          { text: "물처럼 돌아간다", next: "endingDetour" },
          { text: "낮은 곳에 머문다", next: "endingStillPool" },
        ],
      },
    },

    endings: {
      endingBlend: {
        id: "endingBlend",
        type: "ending",
        title: "하나의 온도",
        text: [
          "당신은 끝까지 천천히 부었다.",
          "두 물은 서로를 잃지 않은 채 하나의 온도가 되었다.",
          "조화란 같아지는 것이 아니라, 함께 머물 수 있을 만큼 달라지는 일이다.",
        ],
      },

      endingHalfway: {
        id: "endingHalfway",
        type: "ending",
        title: "중간의 잔",
        text: [
          "당신은 중간에서 멈췄다.",
          "잔 속에는 아직 두 온도가 남아 있었다.",
          "완성되지 않은 섞임도 때로는 가장 정확한 균형이다.",
        ],
      },

      endingMiddleWater: {
        id: "endingMiddleWater",
        type: "ending",
        title: "강 한가운데",
        text: [
          "당신은 강 한가운데에 섰다.",
          "양쪽 기슭은 모두 가까웠고, 모두 멀었다.",
          "중간은 도망치는 자리가 아니라, 양쪽을 동시에 견디는 자리였다.",
        ],
      },

      endingFlowTrust: {
        id: "endingFlowTrust",
        type: "ending",
        title: "맡겨진 흐름",
        text: [
          "당신은 물살에 몸을 맡겼다.",
          "강은 당신을 데려가지 않고 천천히 움직이는 법을 가르쳤다.",
          "흐름을 믿는다는 것은 사라지는 것이 아니라 덜 버티는 일이다.",
        ],
      },

      endingPatience: {
        id: "endingPatience",
        type: "ending",
        title: "스스로 섞인 것들",
        text: [
          "당신은 아무것도 하지 않았다.",
          "시간이 잔 사이를 오가며 당신보다 조심스럽게 물을 섞었다.",
          "기다림도 하나의 손길이 될 수 있다.",
        ],
      },

      endingChoiceOfCup: {
        id: "endingChoiceOfCup",
        type: "ending",
        title: "하나만 든 잔",
        text: [
          "당신은 둘 중 하나만 다시 들었다.",
          "남겨진 잔은 비난하지 않았다.",
          "균형은 모든 것을 동시에 들고 있는 것이 아니라, 지금 들 것을 아는 일이다.",
        ],
      },

      endingDetour: {
        id: "endingDetour",
        type: "ending",
        title: "돌아가는 길",
        text: [
          "당신은 물처럼 돌아갔다.",
          "직선은 아니었지만 길은 끊기지 않았다.",
          "우회는 실패가 아니라, 부서지지 않는 방식의 전진이다.",
        ],
      },

      endingStillPool: {
        id: "endingStillPool",
        type: "ending",
        title: "고인 물의 평화",
        text: [
          "당신은 낮은 곳에 머물렀다.",
          "물은 고였지만 썩지 않았다.",
          "멈춤도 충분히 맑다면 하나의 흐름이 된다.",
        ],
      },
    },
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XIV · TEMPERANCE · REVERSED",
      title: "넘쳐 흐르는 잔",
      text: [
        "당신은 물이 넘치는 방에서 눈을 떴다.",
        "한쪽 잔은 비어 있었고, 다른 한쪽 잔은 끝없이 흘러넘치고 있었다.",
        "섞이지 못한 것들이 방 전체를 천천히 적시고 있었다.",
      ],
      choices: [
        { text: "넘치는 잔을 막는다", next: "reversedOverflow" },
        { text: "비어 있는 잔을 들여다본다", next: "reversedEmpty" },
        { text: "젖은 바닥을 닦는다", next: "reversedFloor" },
        { text: "두 잔을 멀리 떼어놓는다", next: "reversedSeparate" },
      ],
    },

    nodes: {
      reversedOverflow: {
        id: "reversedOverflow",
        type: "story",
        label: "OVERFLOW",
        title: "넘치는 잔",
        text: [
          "당신은 넘치는 잔을 막으려 했다.",
          "하지만 물은 손가락 사이로 계속 새어 나왔다.",
          "너무 많은 것은 때때로 부족한 것만큼이나 사람을 지치게 한다.",
        ],
        choices: [
          { text: "손으로 계속 막는다", next: "endingExhaustion" },
          { text: "흘러넘치게 둔다", next: "endingFlood" },
        ],
      },

      reversedEmpty: {
        id: "reversedEmpty",
        type: "story",
        label: "EMPTY CUP",
        title: "빈 잔",
        text: [
          "빈 잔 안에는 아무것도 없었다.",
          "그러나 그 비어 있음은 쉼이 아니라 오래 방치된 결핍에 가까웠다.",
          "받지 못한 것들은 언젠가 소리 없이 무게가 된다.",
        ],
        choices: [
          { text: "빈 잔을 채운다", next: "endingRefill" },
          { text: "빈 잔을 깨뜨린다", next: "endingBrokenCup" },
        ],
      },

      reversedFloor: {
        id: "reversedFloor",
        type: "story",
        label: "WET FLOOR",
        title: "젖은 바닥",
        text: [
          "당신은 바닥을 닦기 시작했다.",
          "그러나 닦는 속도보다 물이 차오르는 속도가 더 빨랐다.",
          "문제의 흔적만 지우는 일은 문제를 더 오래 살게 한다.",
        ],
        choices: [
          { text: "계속 닦는다", next: "endingEndlessCleaning" },
          { text: "물이 새는 곳을 찾는다", next: "endingSource" },
        ],
      },

      reversedSeparate: {
        id: "reversedSeparate",
        type: "story",
        label: "SEPARATION",
        title: "떨어진 두 잔",
        text: [
          "당신은 두 잔을 멀리 떼어놓았다.",
          "방은 잠시 조용해졌지만, 두 잔 사이의 공기가 팽팽해졌다.",
          "섞이지 않는 것들도 서로를 계속 의식한다.",
        ],
        choices: [
          { text: "둘 사이에 선다", next: "endingTension" },
          { text: "하나를 방 밖으로 내보낸다", next: "endingLoss" },
        ],
      },
    },

    endings: {
      endingExhaustion: {
        id: "endingExhaustion",
        type: "ending",
        title: "막느라 지친 손",
        text: [
          "당신은 손으로 물을 계속 막았다.",
          "마침내 물은 멈췄지만 손은 더 이상 펴지지 않았다.",
          "무너짐을 막는 일만으로는 삶이 회복되지 않는다.",
        ],
      },

      endingFlood: {
        id: "endingFlood",
        type: "ending",
        title: "흘러넘친 방",
        text: [
          "당신은 물이 흘러넘치게 두었다.",
          "방은 잠겼고, 오래된 먼지들이 떠올랐다.",
          "넘침은 때때로 숨겨진 것들을 강제로 드러낸다.",
        ],
      },

      endingRefill: {
        id: "endingRefill",
        type: "ending",
        title: "다시 채운 잔",
        text: [
          "당신은 빈 잔을 채웠다.",
          "그러나 잔은 한 번에 모든 물을 받아들이지 못했다.",
          "결핍은 채워지는 데에도 시간을 요구한다.",
        ],
      },

      endingBrokenCup: {
        id: "endingBrokenCup",
        type: "ending",
        title: "깨진 빈 잔",
        text: [
          "당신은 빈 잔을 깨뜨렸다.",
          "조각들은 물을 담지 못했지만 빛을 나누어 가졌다.",
          "비워진 그릇이 깨질 때, 때로는 새로운 형태의 수용이 시작된다.",
        ],
      },

      endingEndlessCleaning: {
        id: "endingEndlessCleaning",
        type: "ending",
        title: "끝없는 청소",
        text: [
          "당신은 계속 바닥을 닦았다.",
          "바닥은 깨끗해지는 듯했지만 다시 젖었다.",
          "표면만 관리하는 삶은 언제나 같은 자리로 돌아온다.",
        ],
      },

      endingSource: {
        id: "endingSource",
        type: "ending",
        title: "새는 곳",
        text: [
          "당신은 물이 새는 곳을 찾았다.",
          "그곳은 잔이 아니라 벽의 작은 금이었다.",
          "균형이 무너진 이유는 때로 가장 예상하지 못한 틈에 있다.",
        ],
      },

      endingTension: {
        id: "endingTension",
        type: "ending",
        title: "사이의 긴장",
        text: [
          "당신은 두 잔 사이에 섰다.",
          "둘 다 당신을 향해 기울었다.",
          "중재자는 때때로 양쪽의 무게를 동시에 견디는 사람이 된다.",
        ],
      },

      endingLoss: {
        id: "endingLoss",
        type: "ending",
        title: "내보낸 잔",
        text: [
          "당신은 하나의 잔을 방 밖으로 내보냈다.",
          "방은 조용해졌지만 균형은 단순해졌다.",
          "갈등이 사라진 자리에는 종종 빈자리의 모양이 남는다.",
        ],
      },
    },
  },
};