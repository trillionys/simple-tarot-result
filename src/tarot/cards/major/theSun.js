export const theSun = {
  id: "the-sun",
  number: "XIX",
  name: "The Sun",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XIX · THE SUN · UPRIGHT",
      title: "햇빛이 가득한 들판",
      text: [
        "당신은 끝없이 펼쳐진 들판에서 눈을 떴다.",
        "구름 하나 없는 하늘에서는 태양이 모든 것을 숨김없이 비추고 있었다.",
        "이곳에는 그림자조차 거짓말을 하지 못했다."
      ],
      choices: [
        { text: "태양을 올려다본다", next: "uprightSun" },
        { text: "들판을 달린다", next: "uprightField" },
        { text: "자신의 그림자를 바라본다", next: "uprightShadow" },
        { text: "멀리 보이는 해바라기로 간다", next: "uprightFlower" }
      ]
    },

    nodes: {
      uprightSun: {
        id: "uprightSun",
        type: "story",
        label: "THE SUN",
        title: "한낮의 태양",
        text: [
          "태양은 너무 밝아서 오래 바라볼 수 없었다.",
          "하지만 눈을 감고도 그 빛은 한동안 남아 있었다.",
          "진실은 언제나 설명보다 오래 머문다."
        ],
        choices: [
          { text: "눈을 감고 빛을 느낀다", next: "endingWarmTruth" },
          { text: "끝까지 태양을 바라본다", next: "endingBrightCourage" }
        ]
      },

      uprightField: {
        id: "uprightField",
        type: "story",
        label: "THE FIELD",
        title: "달리는 들판",
        text: [
          "당신은 이유도 없이 들판을 달렸다.",
          "도착해야 할 곳은 없었지만 발걸음은 가벼웠다.",
          "기쁨은 목적지가 아니라 움직임 속에서도 태어난다."
        ],
        choices: [
          { text: "계속 달린다", next: "endingJoyInMotion" },
          { text: "풀밭에 눕는다", next: "endingPeacefulRest" }
        ]
      },

      uprightShadow: {
        id: "uprightShadow",
        type: "story",
        label: "THE SHADOW",
        title: "정직한 그림자",
        text: [
          "태양 아래의 그림자는 숨지 않았다.",
          "당신은 자신의 어두운 부분까지도 선명하게 볼 수 있었다.",
          "빛은 어둠을 없애는 것이 아니라 함께 드러낸다."
        ],
        choices: [
          { text: "그림자 위에 선다", next: "endingWholeSelf" },
          { text: "그림자를 따라 걷는다", next: "endingAcceptedSelf" }
        ]
      },

      uprightFlower: {
        id: "uprightFlower",
        type: "story",
        label: "THE SUNFLOWERS",
        title: "해바라기",
        text: [
          "모든 해바라기는 같은 태양을 바라보고 있었다.",
          "그러나 어느 꽃도 완전히 같은 방향은 아니었다.",
          "같은 희망도 사람마다 다른 각도로 피어난다."
        ],
        choices: [
          { text: "꽃 사이에 선다", next: "endingSharedLight" },
          { text: "씨앗 하나를 가져간다", next: "endingFutureBloom" }
        ]
      }
    },

    endings: {
      endingWarmTruth: {
        id: "endingWarmTruth",
        type: "ending",
        title: "따뜻한 진실",
        text: [
          "당신은 눈을 감은 채 햇살을 느꼈다.",
          "빛은 보이지 않아도 분명히 존재했다.",
          "진실은 증명보다 먼저 삶을 따뜻하게 만든다."
        ]
      },

      endingBrightCourage: {
        id: "endingBrightCourage",
        type: "ending",
        title: "눈부신 용기",
        text: [
          "당신은 끝까지 태양을 바라보았다.",
          "눈물은 흘렀지만 시선은 피하지 않았다.",
          "용기는 어둠을 견디는 힘만이 아니라 빛을 받아들이는 힘이기도 하다."
        ]
      },

      endingJoyInMotion: {
        id: "endingJoyInMotion",
        type: "ending",
        title: "달리는 기쁨",
        text: [
          "당신은 계속 달렸다.",
          "도착한 곳은 처음과 크게 다르지 않았다.",
          "하지만 달리는 동안 당신은 이미 충분히 살아 있었다."
        ]
      },

      endingPeacefulRest: {
        id: "endingPeacefulRest",
        type: "ending",
        title: "햇살 아래의 쉼",
        text: [
          "당신은 풀밭에 누웠다.",
          "태양은 아무것도 요구하지 않았다.",
          "행복은 때때로 아무것도 증명하지 않아도 되는 순간에 머문다."
        ]
      },

      endingWholeSelf: {
        id: "endingWholeSelf",
        type: "ending",
        title: "온전한 나",
        text: [
          "당신은 자신의 그림자 위에 섰다.",
          "빛과 어둠이 같은 자리에서 만났다.",
          "자신을 사랑한다는 것은 밝은 부분만 선택하는 일이 아니다."
        ]
      },

      endingAcceptedSelf: {
        id: "endingAcceptedSelf",
        type: "ending",
        title: "함께 걷는 그림자",
        text: [
          "당신은 그림자를 따라 걸었다.",
          "그것은 점점 짧아졌지만 끝내 사라지지는 않았다.",
          "받아들인 그림자는 더 이상 삶을 이끌지 못한다."
        ]
      },

      endingSharedLight: {
        id: "endingSharedLight",
        type: "ending",
        title: "같은 햇빛",
        text: [
          "당신은 꽃들 사이에 섰다.",
          "모두가 같은 태양을 받았지만 각자의 빛으로 피어 있었다.",
          "행복은 비교가 아니라 자신만의 계절에서 완성된다."
        ]
      },

      endingFutureBloom: {
        id: "endingFutureBloom",
        type: "ending",
        title: "남겨진 씨앗",
        text: [
          "당신은 씨앗 하나를 품에 넣었다.",
          "지금은 작은 점에 불과했지만 언젠가 또 하나의 들판이 될 것이다.",
          "희망은 가장 밝은 순간에도 미래를 심는 일을 잊지 않는다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XIX · THE SUN · REVERSED",
      title: "구름 낀 한낮",
      text: [
        "당신은 태양이 구름 뒤에 숨은 들판에서 눈을 떴다.",
        "세상은 밝았지만 어딘가 부족했다.",
        "빛은 사라진 것이 아니라, 잠시 닿지 않고 있을 뿐이었다."
      ],
      choices: [
        { text: "구름을 바라본다", next: "reversedCloud" },
        { text: "희미한 그림자를 본다", next: "reversedShadow" },
        { text: "접힌 해바라기를 살핀다", next: "reversedFlower" },
        { text: "태양을 기다린다", next: "reversedWaiting" }
      ]
    },

    nodes: {
      reversedCloud: {
        id: "reversedCloud",
        type: "story",
        label: "THE CLOUD",
        title: "지나가는 구름",
        text: [
          "구름은 태양보다 훨씬 가까웠다.",
          "그래서 더 커 보였다.",
          "걱정은 종종 진실보다 가까이에 있기 때문에 세상을 가린다."
        ],
        choices: [
          { text: "구름이 지나가길 기다린다", next: "endingPassingCloud" },
          { text: "구름만 바라본다", next: "endingOnlyClouds" }
        ]
      },

      reversedShadow: {
        id: "reversedShadow",
        type: "story",
        label: "FAINT SHADOW",
        title: "희미한 그림자",
        text: [
          "빛이 약해지자 그림자도 희미해졌다.",
          "당신은 자신이 선명하지 않은 것 같았다.",
          "확신이 흐려질 때 사람은 자신의 모습도 함께 의심한다."
        ],
        choices: [
          { text: "천천히 자신을 바라본다", next: "endingRediscoveredSelf" },
          { text: "고개를 돌린다", next: "endingForgottenSelf" }
        ]
      },

      reversedFlower: {
        id: "reversedFlower",
        type: "story",
        label: "THE CLOSED FLOWER",
        title: "고개 숙인 꽃",
        text: [
          "해바라기는 햇빛이 없어 고개를 숙이고 있었다.",
          "하지만 줄기는 아직 살아 있었다.",
          "희망은 피지 않는 계절에도 뿌리부터 마르지는 않는다."
        ],
        choices: [
          { text: "꽃을 기다린다", next: "endingBloomAgain" },
          { text: "씨앗을 심는다", next: "endingFaithBeforeSpring" }
        ]
      },

      reversedWaiting: {
        id: "reversedWaiting",
        type: "story",
        label: "THE WAIT",
        title: "기다림",
        text: [
          "당신은 태양을 기다렸다.",
          "시간은 느리게 흘렀지만 하늘은 조금씩 밝아지고 있었다.",
          "희망은 갑자기 오는 것이 아니라 조금씩 돌아오는 경우가 더 많다."
        ],
        choices: [
          { text: "끝까지 기다린다", next: "endingMorning" },
          { text: "스스로 걸음을 옮긴다", next: "endingCarryLight" }
        ]
      }
    },

    endings: {
      endingPassingCloud: {
        id: "endingPassingCloud",
        type: "ending",
        title: "지나가는 구름",
        text: [
          "구름은 결국 흘러갔다.",
          "태양은 처음부터 그 자리에 있었다.",
          "희망은 사라진 것이 아니라 잠시 보이지 않았을 뿐이다."
        ]
      },

      endingOnlyClouds: {
        id: "endingOnlyClouds",
        type: "ending",
        title: "구름만 본 사람",
        text: [
          "당신은 구름만 바라보았다.",
          "하늘은 넓었지만 시선은 좁아졌다.",
          "걱정은 오래 바라볼수록 세상의 전부처럼 보인다."
        ]
      },

      endingRediscoveredSelf: {
        id: "endingRediscoveredSelf",
        type: "ending",
        title: "다시 만난 나",
        text: [
          "당신은 천천히 자신을 바라보았다.",
          "희미했던 윤곽이 조금씩 선명해졌다.",
          "자신을 믿는 일도 다시 배울 수 있다."
        ]
      },

      endingForgottenSelf: {
        id: "endingForgottenSelf",
        type: "ending",
        title: "돌린 시선",
        text: [
          "당신은 고개를 돌렸다.",
          "그림자는 더 흐려졌지만 완전히 사라지지는 않았다.",
          "외면한 자신은 언제나 조용히 기다린다."
        ]
      },

      endingBloomAgain: {
        id: "endingBloomAgain",
        type: "ending",
        title: "다시 피는 계절",
        text: [
          "당신은 꽃이 다시 피기를 기다렸다.",
          "햇빛은 늦었지만 계절은 약속을 잊지 않았다.",
          "회복은 늦을 수 있어도 방향을 잃지는 않는다."
        ]
      },

      endingFaithBeforeSpring: {
        id: "endingFaithBeforeSpring",
        type: "ending",
        title: "봄보다 먼저",
        text: [
          "당신은 아직 추운 땅에 씨앗을 심었다.",
          "싹은 보이지 않았지만 미래는 이미 시작되고 있었다.",
          "믿음은 꽃이 핀 뒤가 아니라 피기 전에 선택하는 것이다."
        ]
      },

      endingMorning: {
        id: "endingMorning",
        type: "ending",
        title: "아침",
        text: [
          "당신은 끝까지 기다렸다.",
          "구름 사이로 햇빛이 천천히 내려왔다.",
          "밤이 끝나는 것은 태양이 생겨서가 아니라, 다시 보이기 시작하기 때문이다."
        ]
      },

      endingCarryLight: {
        id: "endingCarryLight",
        type: "ending",
        title: "스스로의 빛",
        text: [
          "당신은 태양을 기다리지 않고 걸었다.",
          "몇 걸음 뒤, 구름이 걷히며 당신의 등을 비추기 시작했다.",
          "희망은 기다리는 사람보다 걸어가는 사람을 먼저 따라온다."
        ]
      }
    }
  }
};