export const theMagician = {
  id: "the-magician",
  number: "I",
  name: "The Magician",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "I · THE MAGICIAN · UPRIGHT",
      title: "네 도구의 탁자",
      text: [
        "당신은 하얀 탁자 앞에서 눈을 떴다.",
        "탁자 위에는 검, 잔, 동전, 지팡이가 정확한 간격으로 놓여 있었다.",
        "천장도 벽도 없었지만, 이상하게도 이곳은 작업실처럼 느껴졌다."
      ],
      choices: [
        { text: "지팡이를 집어 든다", next: "uprightWand" },
        { text: "검을 바라본다", next: "uprightSword" },
        { text: "잔 안을 들여다본다", next: "uprightCup" },
        { text: "동전을 손바닥에 올린다", next: "uprightCoin" }
      ]
    },

    nodes: {
      uprightWand: {
        id: "uprightWand",
        type: "story",
        label: "THE WAND",
        title: "시작의 지팡이",
        text: [
          "지팡이는 가볍고 따뜻했다.",
          "당신이 그것을 들어 올리자 허공에 아직 존재하지 않는 선 하나가 그어졌다.",
          "의지는 세계보다 먼저 움직일 수 있었다."
        ],
        choices: [
          { text: "허공에 첫 문장을 쓴다", next: "endingFirstSpell" },
          { text: "지팡이를 다시 내려놓는다", next: "endingHeldBackPower" }
        ]
      },

      uprightSword: {
        id: "uprightSword",
        type: "story",
        label: "THE SWORD",
        title: "분명한 검",
        text: [
          "검은 빛보다 날카로웠다.",
          "그것은 무언가를 해치기보다 흐릿한 것을 가르기 위해 놓여 있는 듯했다.",
          "가능성은 선택될 때 비로소 형태를 얻는다."
        ],
        choices: [
          { text: "망설임을 자른다", next: "endingClearWill" },
          { text: "검을 칼집에 넣는다", next: "endingUnspokenDecision" }
        ]
      },

      uprightCup: {
        id: "uprightCup",
        type: "story",
        label: "THE CUP",
        title: "비어 있지 않은 잔",
        text: [
          "잔은 비어 보였지만 흔들 때마다 안쪽에서 물소리가 났다.",
          "보이지 않는 감정이 이미 준비되어 있었다.",
          "무언가를 만들기 위해서는 손뿐 아니라 마음도 필요했다."
        ],
        choices: [
          { text: "잔을 마신다", next: "endingMovedHeart" },
          { text: "잔을 탁자 중앙에 둔다", next: "endingCenteredFeeling" }
        ]
      },

      uprightCoin: {
        id: "uprightCoin",
        type: "story",
        label: "THE COIN",
        title: "손바닥의 동전",
        text: [
          "동전은 작았지만 확실한 무게가 있었다.",
          "꿈은 이토록 가벼운 금속 위에도 현실의 몸을 얻을 수 있었다.",
          "가능성은 손에 잡힐 때 책임이 된다."
        ],
        choices: [
          { text: "동전을 심는다", next: "endingMaterialSeed" },
          { text: "동전을 던진다", next: "endingChosenChance" }
        ]
      }
    },

    endings: {
      endingFirstSpell: {
        id: "endingFirstSpell",
        type: "ending",
        title: "첫 번째 주문",
        text: [
          "당신은 허공에 첫 문장을 썼다.",
          "문장은 빛나지 않았지만 사라지지도 않았다.",
          "창조는 언제나 보이지 않는 곳에서 먼저 시작된다."
        ]
      },

      endingHeldBackPower: {
        id: "endingHeldBackPower",
        type: "ending",
        title: "아직 쓰지 않은 힘",
        text: [
          "당신은 지팡이를 다시 내려놓았다.",
          "힘은 사라지지 않았다.",
          "사용하지 않은 가능성도 언젠가의 자신을 조용히 기다린다."
        ]
      },

      endingClearWill: {
        id: "endingClearWill",
        type: "ending",
        title: "분명해진 의지",
        text: [
          "당신은 망설임을 잘랐다.",
          "잘린 것은 두려움이 아니라 핑계였다.",
          "의지는 늘 단순해진 뒤에야 움직인다."
        ]
      },

      endingUnspokenDecision: {
        id: "endingUnspokenDecision",
        type: "ending",
        title: "말하지 않은 결정",
        text: [
          "당신은 검을 칼집에 넣었다.",
          "결정은 내려졌지만 아직 선언되지 않았다.",
          "모든 시작이 소리를 내야 하는 것은 아니다."
        ]
      },

      endingMovedHeart: {
        id: "endingMovedHeart",
        type: "ending",
        title: "움직인 마음",
        text: [
          "당신은 잔을 마셨다.",
          "물은 목이 아니라 가슴에서 퍼졌다.",
          "마음이 움직인 뒤에야 손은 진짜 일을 시작한다."
        ]
      },

      endingCenteredFeeling: {
        id: "endingCenteredFeeling",
        type: "ending",
        title: "중앙에 놓인 감정",
        text: [
          "당신은 잔을 탁자 중앙에 두었다.",
          "다른 도구들이 그 주위를 향해 조금씩 돌아섰다.",
          "감정은 방해가 아니라 방향이 될 수 있다."
        ]
      },

      endingMaterialSeed: {
        id: "endingMaterialSeed",
        type: "ending",
        title: "현실에 심은 씨앗",
        text: [
          "당신은 동전을 탁자 아래에 심었다.",
          "나무는 자라지 않았지만 바닥이 단단해졌다.",
          "꿈은 뿌리를 내릴 때부터 현실이 된다."
        ]
      },

      endingChosenChance: {
        id: "endingChosenChance",
        type: "ending",
        title: "선택된 우연",
        text: [
          "당신은 동전을 던졌다.",
          "동전은 앞면도 뒷면도 아닌 모서리로 섰다.",
          "우연도 준비된 손 위에서는 하나의 도구가 된다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "I · THE MAGICIAN · REVERSED",
      title: "흩어진 도구의 방",
      text: [
        "당신은 어지럽게 흩어진 탁자 앞에서 눈을 떴다.",
        "검은 바닥에 떨어져 있었고, 잔은 엎질러졌으며, 지팡이는 금이 가 있었다.",
        "동전만이 이상하게도 탁자 끝에서 당신을 바라보고 있었다."
      ],
      choices: [
        { text: "금 간 지팡이를 집는다", next: "reversedWand" },
        { text: "떨어진 검을 줍는다", next: "reversedSword" },
        { text: "엎질러진 잔을 세운다", next: "reversedCup" },
        { text: "탁자 끝의 동전을 본다", next: "reversedCoin" }
      ]
    },

    nodes: {
      reversedWand: {
        id: "reversedWand",
        type: "story",
        label: "CRACKED WAND",
        title: "금 간 지팡이",
        text: [
          "지팡이는 부러지지 않았지만 금이 가 있었다.",
          "그 안쪽에서 작은 불빛이 새어 나오고 있었다.",
          "힘은 사라진 것이 아니라 통제되지 못한 채 새고 있었다."
        ],
        choices: [
          { text: "틈을 감싼다", next: "endingRepairedWill" },
          { text: "그 힘을 억지로 쓴다", next: "endingMisusedPower" }
        ]
      },

      reversedSword: {
        id: "reversedSword",
        type: "story",
        label: "FALLEN SWORD",
        title: "떨어진 검",
        text: [
          "검은 바닥에 떨어져 있었고 날은 흐려져 있었다.",
          "무언가를 자르기엔 부족했지만, 자신을 다치게 하기엔 충분했다.",
          "분명하지 않은 판단은 때때로 가장 가까운 사람을 베어낸다."
        ],
        choices: [
          { text: "날을 닦는다", next: "endingRestoredClarity" },
          { text: "흐린 채로 휘두른다", next: "endingConfusedAction" }
        ]
      },

      reversedCup: {
        id: "reversedCup",
        type: "story",
        label: "SPILLED CUP",
        title: "엎질러진 잔",
        text: [
          "잔은 이미 엎질러져 있었다.",
          "바닥에 고인 물은 당신의 얼굴을 왜곡해서 비추었다.",
          "감정이 쏟아진 뒤에는 항상 현실도 조금 달라져 보인다."
        ],
        choices: [
          { text: "흘린 물을 닦는다", next: "endingCleanedFeeling" },
          { text: "그 물에 손을 담근다", next: "endingOverwhelmedHeart" }
        ]
      },

      reversedCoin: {
        id: "reversedCoin",
        type: "story",
        label: "THE EDGE COIN",
        title: "탁자 끝의 동전",
        text: [
          "동전은 탁자 끝에서 떨어질 듯 말 듯 멈춰 있었다.",
          "당신이 숨을 쉴 때마다 조금씩 흔들렸다.",
          "현실은 아직 시작되지 않은 가능성을 오래 기다려주지 않는다."
        ],
        choices: [
          { text: "동전을 붙잡는다", next: "endingSavedChance" },
          { text: "떨어지게 둔다", next: "endingLostChance" }
        ]
      }
    },

    endings: {
      endingRepairedWill: {
        id: "endingRepairedWill",
        type: "ending",
        title: "감싼 의지",
        text: [
          "당신은 지팡이의 틈을 조심스럽게 감쌌다.",
          "불빛은 더 이상 새지 않고 안쪽에서 천천히 안정되었다.",
          "힘은 커지는 것보다 먼저 다뤄지는 법을 배워야 한다."
        ]
      },

      endingMisusedPower: {
        id: "endingMisusedPower",
        type: "ending",
        title: "잘못 쓴 힘",
        text: [
          "당신은 금 간 지팡이를 억지로 휘둘렀다.",
          "빛은 터졌지만 아무것도 만들지 못했다.",
          "준비되지 않은 힘은 창조보다 소모에 가깝다."
        ]
      },

      endingRestoredClarity: {
        id: "endingRestoredClarity",
        type: "ending",
        title: "다시 선명해진 날",
        text: [
          "당신은 검의 날을 닦았다.",
          "빛이 돌아오자 먼저 보인 것은 적이 아니라 자신의 손이었다.",
          "명확함은 바깥을 가르기 전에 자신을 보게 만든다."
        ]
      },

      endingConfusedAction: {
        id: "endingConfusedAction",
        type: "ending",
        title: "흐린 행동",
        text: [
          "당신은 흐린 검을 휘둘렀다.",
          "아무것도 제대로 베이지 않았지만 방 안에는 상처가 생겼다.",
          "혼란 속의 행동은 방향보다 흔적을 먼저 남긴다."
        ]
      },

      endingCleanedFeeling: {
        id: "endingCleanedFeeling",
        type: "ending",
        title: "닦아낸 물",
        text: [
          "당신은 흘린 물을 닦았다.",
          "바닥은 마르지 않았지만 더 이상 미끄럽지 않았다.",
          "감정을 정리한다는 것은 없애는 것이 아니라 걸을 수 있게 만드는 일이다."
        ]
      },

      endingOverwhelmedHeart: {
        id: "endingOverwhelmedHeart",
        type: "ending",
        title: "잠긴 손",
        text: [
          "당신은 고인 물에 손을 담갔다.",
          "물은 차가웠고 생각보다 깊었다.",
          "쏟아진 감정에 오래 머물면, 손부터 자신의 형태를 잊는다."
        ]
      },

      endingSavedChance: {
        id: "endingSavedChance",
        type: "ending",
        title: "붙잡은 기회",
        text: [
          "당신은 떨어지기 직전의 동전을 붙잡았다.",
          "손바닥 안에서 작은 무게가 다시 현실이 되었다.",
          "기회는 때로 위대함보다 빠른 손을 요구한다."
        ]
      },

      endingLostChance: {
        id: "endingLostChance",
        type: "ending",
        title: "떨어진 동전",
        text: [
          "당신은 동전이 떨어지게 두었다.",
          "소리는 생각보다 오래 울렸다.",
          "놓친 가능성도 때로는 다음 선택의 리듬이 된다."
        ]
      }
    }
  }
};