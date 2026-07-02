export const theTower = {
  id: "the-tower",
  number: "XVI",
  name: "The Tower",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XVI · THE TOWER · UPRIGHT",
      title: "번개 맞은 탑",
      text: [
        "당신은 하늘을 찌를 듯 높은 탑 안에서 눈을 떴다.",
        "벽은 견고했고 계단은 위로만 이어져 있었다.",
        "그 순간, 번개가 탑의 꼭대기를 갈라놓았다."
      ],
      choices: [
        { text: "무너지는 계단을 내려간다", next: "uprightStairs" },
        { text: "갈라진 벽을 바라본다", next: "uprightWall" },
        { text: "탑 꼭대기의 불빛으로 간다", next: "uprightFlame" },
        { text: "창밖으로 떨어지는 돌을 본다", next: "uprightFalling" }
      ]
    },

    nodes: {
      uprightStairs: {
        id: "uprightStairs",
        type: "story",
        label: "THE STAIRS",
        title: "무너지는 계단",
        text: [
          "계단은 아래로 이어지기보다 무너져 내리고 있었다.",
          "당신은 내려가는 것이 아니라, 더 이상 올라갈 수 없다는 사실을 받아들이고 있었다.",
          "붕괴는 때로 방향을 강제로 바꾼다."
        ],
        choices: [
          { text: "남은 계단을 밟는다", next: "endingDescent" },
          { text: "멈춰서 무너짐을 본다", next: "endingWitnessCollapse" }
        ]
      },

      uprightWall: {
        id: "uprightWall",
        type: "story",
        label: "THE CRACK",
        title: "갈라진 벽",
        text: [
          "벽에는 길고 선명한 금이 가 있었다.",
          "그 틈으로 바깥의 바람이 처음 들어왔다.",
          "완벽했던 구조는 한 번의 균열로 숨을 쉬기 시작했다."
        ],
        choices: [
          { text: "그 틈을 넓힌다", next: "endingBrokenOpen" },
          { text: "금 간 벽을 붙잡는다", next: "endingHoldingRuin" }
        ]
      },

      uprightFlame: {
        id: "uprightFlame",
        type: "story",
        label: "THE FLAME",
        title: "꼭대기의 불",
        text: [
          "탑 꼭대기의 불은 모든 것을 태우고 있었다.",
          "하지만 그 불길 속에서 오래 숨겨진 문양들이 드러났다.",
          "파괴는 때로 가장 거친 방식의 폭로다."
        ],
        choices: [
          { text: "불길 속으로 손을 뻗는다", next: "endingRevelation" },
          { text: "불을 끄려 한다", next: "endingTooLate" }
        ]
      },

      uprightFalling: {
        id: "uprightFalling",
        type: "story",
        label: "THE FALL",
        title: "떨어지는 돌",
        text: [
          "돌들은 하늘에서 떨어지는 것처럼 보였다.",
          "사실 그것들은 원래부터 탑의 일부였다.",
          "무너지는 것은 외부의 공격만이 아니라, 오래 버텨온 내부의 무게였다."
        ],
        choices: [
          { text: "떨어지는 돌을 피한다", next: "endingSurvivor" },
          { text: "돌 하나를 손에 쥔다", next: "endingFragment" }
        ]
      }
    },

    endings: {
      endingDescent: {
        id: "endingDescent",
        type: "ending",
        title: "강제된 하강",
        text: [
          "당신은 남은 계단을 밟고 내려갔다.",
          "한 층씩 낮아질수록 숨은 더 쉬워졌다.",
          "높이 쌓은 것이 모두 자신을 위한 것은 아니었다."
        ]
      },

      endingWitnessCollapse: {
        id: "endingWitnessCollapse",
        type: "ending",
        title: "붕괴의 목격자",
        text: [
          "당신은 멈춰 서서 탑이 무너지는 것을 보았다.",
          "두려웠지만 이상하게도 거짓은 더 이상 남아 있지 않았다.",
          "무너짐을 본 사람은 같은 방식으로 다시 쌓지 않는다."
        ]
      },

      endingBrokenOpen: {
        id: "endingBrokenOpen",
        type: "ending",
        title: "열린 균열",
        text: [
          "당신은 벽의 틈을 넓혔다.",
          "탑은 더 크게 흔들렸지만 바람은 자유롭게 들어왔다.",
          "부서진 곳은 약점이 아니라 출구가 될 수 있다."
        ]
      },

      endingHoldingRuin: {
        id: "endingHoldingRuin",
        type: "ending",
        title: "붙잡은 폐허",
        text: [
          "당신은 금 간 벽을 붙잡았다.",
          "손아귀에 돌가루가 묻어났다.",
          "이미 무너지는 것을 붙잡으면, 손부터 폐허가 된다."
        ]
      },

      endingRevelation: {
        id: "endingRevelation",
        type: "ending",
        title: "불 속의 진실",
        text: [
          "당신은 불길 속으로 손을 뻗었다.",
          "타는 고통보다 먼저 숨겨진 문장이 보였다.",
          "진실은 때때로 안전한 방식으로 오지 않는다."
        ]
      },

      endingTooLate: {
        id: "endingTooLate",
        type: "ending",
        title: "늦은 진화",
        text: [
          "당신은 불을 끄려 했다.",
          "그러나 불은 이미 탑의 중심까지 내려가 있었다.",
          "너무 늦은 통제는 파괴를 멈추기보다 지연시킬 뿐이다."
        ]
      },

      endingSurvivor: {
        id: "endingSurvivor",
        type: "ending",
        title: "살아남은 사람",
        text: [
          "당신은 떨어지는 돌을 피했다.",
          "탑은 무너졌고, 당신은 먼지 속에 서 있었다.",
          "살아남는다는 것은 이전의 세계로 돌아가는 일이 아니다."
        ]
      },

      endingFragment: {
        id: "endingFragment",
        type: "ending",
        title: "손에 남은 조각",
        text: [
          "당신은 돌 하나를 손에 쥐었다.",
          "그 조각은 무너진 탑의 일부였지만, 동시에 새 기초가 될 수도 있었다.",
          "폐허는 끝난 건축이 아니라 다음 구조의 재료다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XVI · THE TOWER · REVERSED",
      title: "무너지지 않는 탑",
      text: [
        "당신은 금이 간 탑 안에서 눈을 떴다.",
        "번개는 이미 지나갔지만, 탑은 끝내 무너지지 않은 채 기울어져 있었다.",
        "무너져야 할 것이 버티고 있을 때, 공기는 더 위험하게 고요해진다."
      ],
      choices: [
        { text: "갈라진 천장을 올려다본다", next: "reversedCeiling" },
        { text: "벽의 균열을 가린다", next: "reversedCrack" },
        { text: "탑의 중심 기둥을 만진다", next: "reversedPillar" },
        { text: "밖으로 나가는 문을 찾는다", next: "reversedExit" }
      ]
    },

    nodes: {
      reversedCeiling: {
        id: "reversedCeiling",
        type: "story",
        label: "THE CEILING",
        title: "갈라진 천장",
        text: [
          "천장은 무너질 듯하면서도 끝내 버티고 있었다.",
          "그 아래에 있는 것이 안전한지, 아직 운이 좋은 것인지 알 수 없었다.",
          "미뤄진 붕괴는 종종 공포를 더 오래 살게 한다."
        ],
        choices: [
          { text: "그 아래에 그대로 선다", next: "endingDelayedCollapse" },
          { text: "천장 아래에서 물러난다", next: "endingStepAway" }
        ]
      },

      reversedCrack: {
        id: "reversedCrack",
        type: "story",
        label: "THE HIDDEN CRACK",
        title: "가려진 균열",
        text: [
          "당신은 벽의 균열을 천으로 가렸다.",
          "방은 잠시 멀쩡해 보였다.",
          "하지만 천 뒤에서 돌은 계속 갈라지고 있었다."
        ],
        choices: [
          { text: "천을 다시 걷는다", next: "endingAdmittedCrack" },
          { text: "더 두껍게 덮는다", next: "endingDenialWall" }
        ]
      },

      reversedPillar: {
        id: "reversedPillar",
        type: "story",
        label: "THE PILLAR",
        title: "중심 기둥",
        text: [
          "탑의 중심 기둥은 아직 서 있었다.",
          "하지만 그 안쪽은 텅 빈 소리를 냈다.",
          "겉으로 버틴 구조가 반드시 살아 있는 구조는 아니었다."
        ],
        choices: [
          { text: "기둥을 보강한다", next: "endingRepair" },
          { text: "기둥을 직접 무너뜨린다", next: "endingChosenCollapse" }
        ]
      },

      reversedExit: {
        id: "reversedExit",
        type: "story",
        label: "THE EXIT",
        title: "찾을 수 없는 문",
        text: [
          "당신은 밖으로 나가는 문을 찾았다.",
          "문은 있었지만 탑이 기울어진 탓에 열리지 않았다.",
          "너무 오래 미룬 변화는 탈출구마저 비틀어버린다."
        ],
        choices: [
          { text: "문을 억지로 연다", next: "endingForcedExit" },
          { text: "창문을 깨고 나간다", next: "endingWindow" }
        ]
      }
    },

    endings: {
      endingDelayedCollapse: {
        id: "endingDelayedCollapse",
        type: "ending",
        title: "미뤄진 붕괴",
        text: [
          "당신은 갈라진 천장 아래에 그대로 섰다.",
          "아무 일도 일어나지 않았다.",
          "그러나 아무 일도 일어나지 않았다는 사실이 더 불안했다."
        ]
      },

      endingStepAway: {
        id: "endingStepAway",
        type: "ending",
        title: "한 걸음 물러남",
        text: [
          "당신은 천장 아래에서 물러났다.",
          "그 순간 작은 돌 하나가 떨어졌다.",
          "변화를 피하는 것이 아니라, 위험한 자리에서 벗어나는 것도 지혜다."
        ]
      },

      endingAdmittedCrack: {
        id: "endingAdmittedCrack",
        type: "ending",
        title: "인정된 균열",
        text: [
          "당신은 천을 다시 걷었다.",
          "균열은 보기보다 깊었지만, 이제 고칠 수 있는 것이 되었다.",
          "드러난 문제만이 수리될 수 있다."
        ]
      },

      endingDenialWall: {
        id: "endingDenialWall",
        type: "ending",
        title: "덮은 벽",
        text: [
          "당신은 균열을 더 두껍게 덮었다.",
          "방은 아름다워졌고, 벽은 더 위험해졌다.",
          "부정은 무너짐을 없애지 않고 장식한다."
        ]
      },

      endingRepair: {
        id: "endingRepair",
        type: "ending",
        title: "늦은 보강",
        text: [
          "당신은 중심 기둥을 보강했다.",
          "탑은 완전히 안전하지 않았지만, 더는 즉시 무너지지 않았다.",
          "늦은 수리도 방치보다 낫다."
        ]
      },

      endingChosenCollapse: {
        id: "endingChosenCollapse",
        type: "ending",
        title: "선택한 붕괴",
        text: [
          "당신은 중심 기둥을 직접 무너뜨렸다.",
          "탑은 결국 쓰러졌지만, 이번에는 당신이 밖에 서 있었다.",
          "스스로 끝낸 구조는 폐허가 아니라 해방이 될 수 있다."
        ]
      },

      endingForcedExit: {
        id: "endingForcedExit",
        type: "ending",
        title: "억지로 열린 문",
        text: [
          "당신은 문을 억지로 열었다.",
          "문틀은 부서졌고, 겨우 몸 하나 빠져나갈 틈이 생겼다.",
          "너무 늦은 탈출은 늘 상처를 남긴다."
        ]
      },

      endingWindow: {
        id: "endingWindow",
        type: "ending",
        title: "깨진 창",
        text: [
          "당신은 창문을 깨고 나갔다.",
          "손에는 유리 조각이 박혔지만 바깥 공기는 진짜였다.",
          "모든 출구가 문일 필요는 없다."
        ]
      }
    }
  }
};