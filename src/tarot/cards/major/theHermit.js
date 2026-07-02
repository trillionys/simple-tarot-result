export const theHermit = {
  id: "the-hermit",
  number: "IX",
  name: "The Hermit",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "IX · THE HERMIT · UPRIGHT",
      title: "등불을 든 산",
      text: [
        "당신은 눈 덮인 산길 위에서 눈을 떴다.",
        "손에는 작은 등불 하나가 들려 있었고, 그 빛은 앞길보다 당신의 발밑을 더 밝히고 있었다.",
        "멀리 아래쪽에서는 많은 목소리들이 들렸지만, 이곳까지 따라오지는 못했다."
      ],
      choices: [
        { text: "등불을 들어 올린다", next: "uprightLantern" },
        { text: "산길을 따라 더 올라간다", next: "uprightPath" },
        { text: "아래쪽의 목소리에 귀 기울인다", next: "uprightVoices" },
        { text: "눈 위에 앉아 멈춘다", next: "uprightStillness" }
      ]
    },

    nodes: {
      uprightLantern: {
        id: "uprightLantern",
        type: "story",
        label: "THE LANTERN",
        title: "작은 등불",
        text: [
          "등불은 멀리까지 비추지 않았다.",
          "하지만 가까운 돌 하나, 다음 발자국 하나는 정확히 보여주었다.",
          "지혜는 때때로 전체 길이 아니라 다음 한 걸음을 밝히는 것이다."
        ],
        choices: [
          { text: "빛을 따라 한 걸음 걷는다", next: "endingNextStep" },
          { text: "빛을 다른 곳으로 비춘다", next: "endingInnerLight" }
        ]
      },

      uprightPath: {
        id: "uprightPath",
        type: "story",
        label: "THE PATH",
        title: "혼자의 길",
        text: [
          "산길은 좁았다.",
          "누군가와 함께 걷기엔 부족했지만, 혼자 걷기엔 충분했다.",
          "고독은 비어 있는 것이 아니라, 자신이 들리는 만큼 조용해지는 일이었다."
        ],
        choices: [
          { text: "끝까지 혼자 걷는다", next: "endingSolitude" },
          { text: "뒤따라올 사람을 위해 표시를 남긴다", next: "endingGuideMark" }
        ]
      },

      uprightVoices: {
        id: "uprightVoices",
        type: "story",
        label: "THE VOICES",
        title: "아래쪽의 목소리",
        text: [
          "아래쪽에서는 사람들이 서로를 부르고 있었다.",
          "그 소리는 따뜻했지만, 당신이 내려가야 한다는 뜻은 아니었다.",
          "모든 부름에 응답하는 것은 자신을 잃는 일일 수도 있다."
        ],
        choices: [
          { text: "목소리를 듣고도 남는다", next: "endingChosenSilence" },
          { text: "짧게 대답하고 다시 오른다", next: "endingDistantAnswer" }
        ]
      },

      uprightStillness: {
        id: "uprightStillness",
        type: "story",
        label: "THE STILLNESS",
        title: "눈 위의 정지",
        text: [
          "당신은 눈 위에 앉았다.",
          "차가움은 곧 통증이 아니라 감각이 되었다.",
          "오래 멈춰 있으니, 당신이 찾던 답이 다가오는 것이 아니라 가라앉고 있었다."
        ],
        choices: [
          { text: "침묵 속에 머문다", next: "endingQuietAnswer" },
          { text: "눈 위에 질문을 쓴다", next: "endingWrittenQuestion" }
        ]
      }
    },

    endings: {
      endingNextStep: {
        id: "endingNextStep",
        type: "ending",
        title: "다음 한 걸음",
        text: [
          "당신은 빛이 닿는 만큼만 걸었다.",
          "멀리 보이지 않아도 길은 사라지지 않았다.",
          "지혜는 모든 답을 아는 것이 아니라, 모르는 채로도 한 걸음 가는 법을 아는 것이다."
        ]
      },

      endingInnerLight: {
        id: "endingInnerLight",
        type: "ending",
        title: "안쪽을 비춘 등불",
        text: [
          "당신은 등불을 바깥이 아니라 자신에게 비추었다.",
          "어둠은 생각보다 낯설지 않았다.",
          "오래 피한 곳에 가장 오래 기다린 답이 있었다."
        ]
      },

      endingSolitude: {
        id: "endingSolitude",
        type: "ending",
        title: "선택한 고독",
        text: [
          "당신은 끝까지 혼자 걸었다.",
          "외롭지 않았다고 말할 수는 없었다.",
          "하지만 그 외로움 안에서 당신은 처음으로 자신의 목소리를 들었다."
        ]
      },

      endingGuideMark: {
        id: "endingGuideMark",
        type: "ending",
        title: "남겨둔 표시",
        text: [
          "당신은 뒤따라올 누군가를 위해 작은 표시를 남겼다.",
          "그 사람을 만나지는 못했다.",
          "그래도 길은 혼자 걸었지만, 완전히 혼자만의 것이 아니게 되었다."
        ]
      },

      endingChosenSilence: {
        id: "endingChosenSilence",
        type: "ending",
        title: "선택한 침묵",
        text: [
          "당신은 목소리들을 듣고도 그 자리에 남았다.",
          "침묵은 무관심이 아니었다.",
          "때로는 대답하지 않는 것이 자신을 지키는 가장 정직한 방식이다."
        ]
      },

      endingDistantAnswer: {
        id: "endingDistantAnswer",
        type: "ending",
        title: "멀리서 한 대답",
        text: [
          "당신은 아래쪽을 향해 짧게 대답했다.",
          "목소리들은 잦아들었고, 산길은 다시 조용해졌다.",
          "연결은 반드시 가까이 있는 것으로만 증명되지 않는다."
        ]
      },

      endingQuietAnswer: {
        id: "endingQuietAnswer",
        type: "ending",
        title: "조용히 가라앉은 답",
        text: [
          "당신은 침묵 속에 오래 머물렀다.",
          "답은 떠오르지 않았다.",
          "대신 질문이 더 이상 당신을 찌르지 않게 되었다."
        ]
      },

      endingWrittenQuestion: {
        id: "endingWrittenQuestion",
        type: "ending",
        title: "눈 위의 질문",
        text: [
          "당신은 눈 위에 질문을 썼다.",
          "글자는 곧 희미해졌다.",
          "사라진 질문이야말로 때로 가장 깊이 이해된 질문이다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "IX · THE HERMIT · REVERSED",
      title: "꺼진 등불의 산",
      text: [
        "당신은 어두운 산길 위에서 눈을 떴다.",
        "손에는 등불이 있었지만 불은 꺼져 있었고, 아래쪽의 목소리도 더 이상 들리지 않았다.",
        "혼자 있는 것이 아니라, 너무 오래 혼자 있었던 것 같았다."
      ],
      choices: [
        { text: "꺼진 등불을 흔든다", next: "reversedLantern" },
        { text: "아래쪽으로 내려간다", next: "reversedDescent" },
        { text: "자신의 발자국을 따라 되돌아간다", next: "reversedFootprints" },
        { text: "아무에게도 들리지 않을 말을 한다", next: "reversedVoice" }
      ]
    },

    nodes: {
      reversedLantern: {
        id: "reversedLantern",
        type: "story",
        label: "THE UNLIT LANTERN",
        title: "꺼진 등불",
        text: [
          "당신은 등불을 흔들었다.",
          "불꽃은 돌아오지 않았지만, 유리 안쪽에 오래된 그을음이 보였다.",
          "빛이 없는 것이 문제가 아니라, 너무 오래 닦지 않은 어둠이 문제일지도 몰랐다."
        ],
        choices: [
          { text: "유리를 닦는다", next: "endingCleanGlass" },
          { text: "등불을 버린다", next: "endingThrownLight" }
        ]
      },

      reversedDescent: {
        id: "reversedDescent",
        type: "story",
        label: "THE DESCENT",
        title: "내려가는 길",
        text: [
          "당신은 산 아래로 내려가기 시작했다.",
          "하지만 내려갈수록 길은 더 낯설어졌다.",
          "너무 오래 멀리 떠나 있으면, 돌아가는 길도 처음 가는 길이 된다."
        ],
        choices: [
          { text: "계속 내려간다", next: "endingReturnToPeople" },
          { text: "중간에서 멈춘다", next: "endingBetweenWorlds" }
        ]
      },

      reversedFootprints: {
        id: "reversedFootprints",
        type: "story",
        label: "FOOTPRINTS",
        title: "되돌아가는 발자국",
        text: [
          "눈 위의 발자국은 모두 당신의 것이었다.",
          "그런데 어떤 발자국은 너무 깊었고, 어떤 것은 거의 남지 않았다.",
          "고독도 계절처럼 흔적의 깊이가 달라진다."
        ],
        choices: [
          { text: "가장 깊은 발자국에 선다", next: "endingOldLoneliness" },
          { text: "발자국을 지운다", next: "endingNewSnow" }
        ]
      },

      reversedVoice: {
        id: "reversedVoice",
        type: "story",
        label: "THE VOICE",
        title: "들리지 않는 말",
        text: [
          "당신은 아무에게도 들리지 않을 말을 했다.",
          "말은 공중에서 얼어붙지 않고, 당신의 입김처럼 잠깐 보였다 사라졌다.",
          "표현되지 않은 마음은 존재하지 않는 것이 아니라, 아직 닿을 곳을 찾지 못한 것이다."
        ],
        choices: [
          { text: "다시 말한다", next: "endingFirstCall" },
          { text: "그 말을 삼킨다", next: "endingSwallowedWords" }
        ]
      }
    },

    endings: {
      endingCleanGlass: {
        id: "endingCleanGlass",
        type: "ending",
        title: "닦인 유리",
        text: [
          "당신은 등불의 유리를 닦았다.",
          "아주 작은 불씨가 아직 남아 있었다.",
          "완전히 꺼진 줄 알았던 빛도 돌봄을 받으면 자신을 기억한다."
        ]
      },

      endingThrownLight: {
        id: "endingThrownLight",
        type: "ending",
        title: "버려진 등불",
        text: [
          "당신은 등불을 눈 속에 던졌다.",
          "길은 더 어두워졌지만 두 손은 자유로워졌다.",
          "어떤 도구는 잃어야만 의지하고 있었다는 걸 알게 된다."
        ]
      },

      endingReturnToPeople: {
        id: "endingReturnToPeople",
        type: "ending",
        title: "사람들 곁으로",
        text: [
          "당신은 끝내 산 아래로 내려왔다.",
          "사람들의 목소리는 낯설고 조금 시끄러웠다.",
          "하지만 오래된 침묵은 그 소음 속에서 천천히 녹기 시작했다."
        ]
      },

      endingBetweenWorlds: {
        id: "endingBetweenWorlds",
        type: "ending",
        title: "중간의 쉼터",
        text: [
          "당신은 산 중턱에서 멈췄다.",
          "위에도 아래에도 완전히 속하지 않는 자리였다.",
          "돌아감과 머묾 사이에도 잠시 살아갈 수 있는 공간이 있다."
        ]
      },

      endingOldLoneliness: {
        id: "endingOldLoneliness",
        type: "ending",
        title: "오래된 외로움",
        text: [
          "당신은 가장 깊은 발자국 위에 섰다.",
          "그곳에서 오래전의 자신이 잠시 당신을 바라보았다.",
          "외로움은 사라지는 것이 아니라 이해되기를 기다리는 시간일 수 있다."
        ]
      },

      endingNewSnow: {
        id: "endingNewSnow",
        type: "ending",
        title: "새 눈",
        text: [
          "당신은 발자국을 지웠다.",
          "눈은 다시 고르게 덮였고, 길은 처음처럼 보였다.",
          "처음부터 다시 시작하는 것은 잊는 일이 아니라, 다른 방식으로 기억하는 일이다."
        ]
      },

      endingFirstCall: {
        id: "endingFirstCall",
        type: "ending",
        title: "처음 낸 목소리",
        text: [
          "당신은 다시 말했다.",
          "이번에는 아주 멀리서 작은 메아리가 돌아왔다.",
          "누군가에게 닿는 말은 먼저 자기 안의 벽을 지나야 한다."
        ]
      },

      endingSwallowedWords: {
        id: "endingSwallowedWords",
        type: "ending",
        title: "삼킨 말",
        text: [
          "당신은 그 말을 삼켰다.",
          "말은 사라지지 않고 가슴 안쪽에서 작은 돌처럼 남았다.",
          "하지 않은 말도 삶의 무게가 된다."
        ]
      }
    }
  }
};