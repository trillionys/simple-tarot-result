export const theStar = {
  id: "the-star",
  number: "XVII",
  name: "The Star",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XVII · THE STAR · UPRIGHT",
      title: "별이 내리는 물가",
      text: [
        "당신은 고요한 물가에서 눈을 떴다.",
        "하늘에는 유난히 밝은 별 하나가 떠 있었고, 그 빛은 물 위에 부서지지 않고 그대로 내려앉아 있었다.",
        "당신의 손에는 두 개의 물병이 들려 있었다."
      ],
      choices: [
        { text: "물병 하나를 강에 붓는다", next: "uprightRiver" },
        { text: "다른 물병을 땅에 붓는다", next: "uprightEarth" },
        { text: "별빛이 닿은 물을 바라본다", next: "uprightReflection" },
        { text: "하늘의 별에게 소원을 말한다", next: "uprightWish" }
      ]
    },

    nodes: {
      uprightRiver: {
        id: "uprightRiver",
        type: "story",
        label: "THE RIVER",
        title: "흐르는 물",
        text: [
          "당신은 물병 하나를 강에 부었다.",
          "물은 강물과 섞였지만 사라지지 않았다.",
          "희망은 붙잡는 것이 아니라 흐르게 할 때 더 멀리 간다."
        ],
        choices: [
          { text: "흐름을 지켜본다", next: "endingFlowingHope" },
          { text: "물을 다시 담으려 한다", next: "endingUnheldHope" }
        ]
      },

      uprightEarth: {
        id: "uprightEarth",
        type: "story",
        label: "THE EARTH",
        title: "젖은 흙",
        text: [
          "당신은 다른 물병을 땅에 부었다.",
          "마른 흙이 천천히 물을 받아들였고, 아주 작은 새싹 하나가 고개를 들었다.",
          "회복은 종종 눈에 띄지 않을 만큼 작게 시작된다."
        ],
        choices: [
          { text: "새싹 곁에 머문다", next: "endingSmallHealing" },
          { text: "다른 마른 땅을 찾는다", next: "endingSharedHealing" }
        ]
      },

      uprightReflection: {
        id: "uprightReflection",
        type: "story",
        label: "THE REFLECTION",
        title: "물 위의 별",
        text: [
          "물 위의 별은 하늘의 별과 똑같이 빛났다.",
          "당신은 위에 있는 것과 아래에 비친 것 중 어느 쪽이 진짜인지 알 수 없었다.",
          "희망은 때때로 현실이 아니라 반영으로 먼저 도착한다."
        ],
        choices: [
          { text: "물 위의 별을 만진다", next: "endingTouchedReflection" },
          { text: "하늘의 별을 바라본다", next: "endingDistantStar" }
        ]
      },

      uprightWish: {
        id: "uprightWish",
        type: "story",
        label: "THE WISH",
        title: "말해진 소원",
        text: [
          "당신은 별에게 소원을 말했다.",
          "별은 대답하지 않았지만, 말하고 난 뒤 당신의 목소리가 조금 가벼워졌다.",
          "소원은 이루어지기 전에도 사람을 앞으로 움직이게 한다."
        ],
        choices: [
          { text: "소원을 간직한다", next: "endingKeptWish" },
          { text: "소원을 물에 흘려보낸다", next: "endingReleasedWish" }
        ]
      }
    },

    endings: {
      endingFlowingHope: {
        id: "endingFlowingHope",
        type: "ending",
        title: "흐르는 희망",
        text: [
          "당신은 물이 흘러가는 것을 지켜보았다.",
          "그 물은 당신에게서 멀어졌지만, 세계 어딘가를 적시기 시작했다.",
          "놓아준 희망은 사라지는 것이 아니라 여행을 시작한다."
        ]
      },

      endingUnheldHope: {
        id: "endingUnheldHope",
        type: "ending",
        title: "붙잡을 수 없는 빛",
        text: [
          "당신은 물을 다시 담으려 했다.",
          "하지만 손에 남은 것은 차가운 감각뿐이었다.",
          "희망은 붙잡기보다 믿을 때 오래 남는다."
        ]
      },

      endingSmallHealing: {
        id: "endingSmallHealing",
        type: "ending",
        title: "작은 회복",
        text: [
          "당신은 새싹 곁에 머물렀다.",
          "아무 일도 급하게 일어나지 않았다.",
          "그러나 살아 있는 것은 언제나 조용히 다음 날을 준비한다."
        ]
      },

      endingSharedHealing: {
        id: "endingSharedHealing",
        type: "ending",
        title: "나누어진 물",
        text: [
          "당신은 다른 마른 땅을 찾아 걸었다.",
          "물병은 비어 있었지만, 손은 이상하게도 더 가벼웠다.",
          "회복은 혼자 간직할 때보다 나눌 때 더 넓어진다."
        ]
      },

      endingTouchedReflection: {
        id: "endingTouchedReflection",
        type: "ending",
        title: "만진 반영",
        text: [
          "당신은 물 위의 별을 만졌다.",
          "파문이 일었고 별은 여러 조각으로 흩어졌다.",
          "흩어진 빛도 여전히 빛이었다."
        ]
      },

      endingDistantStar: {
        id: "endingDistantStar",
        type: "ending",
        title: "멀리 있는 별",
        text: [
          "당신은 하늘의 별을 바라보았다.",
          "그 별은 멀었지만 방향을 잃지 않게 했다.",
          "닿을 수 없는 것들도 때로는 길을 밝혀준다."
        ]
      },

      endingKeptWish: {
        id: "endingKeptWish",
        type: "ending",
        title: "간직한 소원",
        text: [
          "당신은 소원을 마음속에 간직했다.",
          "소원은 무겁지 않았다.",
          "희망은 때때로 이루어지기보다 살아 있게 하는 힘이다."
        ]
      },

      endingReleasedWish: {
        id: "endingReleasedWish",
        type: "ending",
        title: "흘려보낸 소원",
        text: [
          "당신은 소원을 물에 흘려보냈다.",
          "물은 대답하지 않았지만 별빛을 조금 더 멀리 데려갔다.",
          "기도는 돌아오기 위해서가 아니라 닿기 위해 떠난다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XVII · THE STAR · REVERSED",
      title: "흐린 별의 밤",
      text: [
        "당신은 흐린 하늘 아래의 물가에서 눈을 떴다.",
        "별은 보이지 않았고, 물병은 비어 있었다.",
        "희망이 사라진 것은 아닌데, 어디에 두었는지 기억나지 않았다."
      ],
      choices: [
        { text: "빈 물병을 흔든다", next: "reversedBottle" },
        { text: "구름 낀 하늘을 본다", next: "reversedSky" },
        { text: "마른 강바닥을 걷는다", next: "reversedRiverbed" },
        { text: "꺼져가는 작은 빛을 찾는다", next: "reversedLight" }
      ]
    },

    nodes: {
      reversedBottle: {
        id: "reversedBottle",
        type: "story",
        label: "EMPTY BOTTLE",
        title: "빈 물병",
        text: [
          "물병은 비어 있었다.",
          "하지만 안쪽 벽에는 아직 물방울 몇 개가 남아 있었다.",
          "완전히 사라진 줄 알았던 것들도 흔적의 형태로 버틴다."
        ],
        choices: [
          { text: "남은 물방울을 모은다", next: "endingRemainingDrop" },
          { text: "물병을 내려놓는다", next: "endingRestFromHope" }
        ]
      },

      reversedSky: {
        id: "reversedSky",
        type: "story",
        label: "CLOUDY SKY",
        title: "구름 낀 하늘",
        text: [
          "하늘은 두꺼운 구름으로 덮여 있었다.",
          "별은 보이지 않았지만, 구름 뒤 어딘가에 있다는 사실만은 부정할 수 없었다.",
          "보이지 않는다고 사라진 것은 아니다."
        ],
        choices: [
          { text: "구름 뒤의 별을 믿는다", next: "endingHiddenStar" },
          { text: "하늘 보기를 멈춘다", next: "endingNoLookingUp" }
        ]
      },

      reversedRiverbed: {
        id: "reversedRiverbed",
        type: "story",
        label: "DRY RIVERBED",
        title: "마른 강바닥",
        text: [
          "강은 말라 있었다.",
          "바닥에는 오래전 물이 지나간 흔적들이 굳어 있었다.",
          "흐르지 않는 시간도 한때는 분명히 살아 있었다."
        ],
        choices: [
          { text: "마른 흔적을 따라간다", next: "endingOldFlow" },
          { text: "새 물길을 판다", next: "endingNewChannel" }
        ]
      },

      reversedLight: {
        id: "reversedLight",
        type: "story",
        label: "FAINT LIGHT",
        title: "희미한 빛",
        text: [
          "당신은 풀숲 아래에서 작은 빛을 발견했다.",
          "그것은 별이 아니라 반딧불처럼 작고 불안정했다.",
          "하지만 어둠 속에서는 작은 빛도 충분히 방향이 될 수 있었다."
        ],
        choices: [
          { text: "그 빛을 손으로 감싼다", next: "endingProtectedLight" },
          { text: "더 큰 별을 찾아 떠난다", next: "endingMissedSmallLight" }
        ]
      }
    },

    endings: {
      endingRemainingDrop: {
        id: "endingRemainingDrop",
        type: "ending",
        title: "남은 한 방울",
        text: [
          "당신은 물병 안의 물방울들을 모았다.",
          "그것은 강이 되기엔 부족했지만, 입술을 적시기엔 충분했다.",
          "회복은 때때로 아주 작은 충분함에서 시작된다."
        ]
      },

      endingRestFromHope: {
        id: "endingRestFromHope",
        type: "ending",
        title: "희망에서 쉬기",
        text: [
          "당신은 빈 물병을 내려놓았다.",
          "희망하려 애쓰지 않자, 밤이 조금 덜 무거워졌다.",
          "때로는 희망조차 잠시 내려놓아야 다시 들 수 있다."
        ]
      },

      endingHiddenStar: {
        id: "endingHiddenStar",
        type: "ending",
        title: "가려진 별",
        text: [
          "당신은 구름 뒤의 별을 믿기로 했다.",
          "증거는 없었지만, 마음이 완전히 꺼지지는 않았다.",
          "믿음은 보이는 것을 붙잡는 일이 아니라, 보이지 않아도 사라지지 않음을 견디는 일이다."
        ]
      },

      endingNoLookingUp: {
        id: "endingNoLookingUp",
        type: "ending",
        title: "올려다보지 않는 밤",
        text: [
          "당신은 하늘 보기를 멈췄다.",
          "별은 여전히 보이지 않았지만 목은 덜 아팠다.",
          "희망을 잃은 것이 아니라, 잠시 다른 방향으로 숨을 고른 것일 수도 있다."
        ]
      },

      endingOldFlow: {
        id: "endingOldFlow",
        type: "ending",
        title: "오래된 물길",
        text: [
          "당신은 마른 흔적을 따라 걸었다.",
          "물이 없어진 자리에도 길은 남아 있었다.",
          "한때 흘렀던 것은 완전히 무의미해지지 않는다."
        ]
      },

      endingNewChannel: {
        id: "endingNewChannel",
        type: "ending",
        title: "새 물길",
        text: [
          "당신은 마른 강바닥에 새 물길을 팠다.",
          "아직 물은 오지 않았지만 방향은 생겼다.",
          "희망은 때로 물보다 먼저 길을 만든다."
        ]
      },

      endingProtectedLight: {
        id: "endingProtectedLight",
        type: "ending",
        title: "감싼 빛",
        text: [
          "당신은 작은 빛을 손으로 감쌌다.",
          "빛은 커지지 않았지만 꺼지지도 않았다.",
          "지금은 빛나는 것보다 꺼지지 않는 것이 더 중요할 때가 있다."
        ]
      },

      endingMissedSmallLight: {
        id: "endingMissedSmallLight",
        type: "ending",
        title: "지나친 작은 빛",
        text: [
          "당신은 더 큰 별을 찾아 떠났다.",
          "뒤에 남겨둔 작은 빛은 한동안 당신의 그림자를 비추었다.",
          "작은 희망을 지나치면, 큰 희망도 길을 잃을 수 있다."
        ]
      }
    }
  }
};