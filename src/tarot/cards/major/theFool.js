export const theFool = {
  id: "the-fool",
  number: "0",
  name: "The Fool",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "0 · THE FOOL · UPRIGHT",
      title: "아직 이름 없는 길",
      text: [
        "당신은 절벽 끝에서 눈을 떴다.",
        "앞에는 길이 없었지만, 이상하게도 한 걸음 내딛을 수 있을 것 같았다.",
        "하늘은 너무 밝아서 아직 어떤 결말도 정하지 못한 얼굴을 하고 있었다.",
      ],
      choices: [
        { text: "절벽 너머로 첫걸음을 내딛는다", next: "uprightLeap" },
        { text: "발밑의 하얀 길을 따라간다", next: "uprightRoad" },
        { text: "멀리 날아가는 새를 바라본다", next: "uprightBird" },
        { text: "가지고 있던 작은 보따리를 연다", next: "uprightBundle" },
      ],
    },

    nodes: {
      uprightLeap: {
        id: "uprightLeap",
        type: "story",
        label: "THE LEAP",
        title: "떨어지지 않는 추락",
        text: [
          "당신은 발을 내디뎠다.",
          "땅은 사라지지 않았다.",
          "대신 당신이 알던 아래라는 감각이 조용히 사라졌다.",
        ],
        choices: [
          { text: "눈을 감고 계속 나아간다", next: "endingTrust" },
          { text: "뒤늦게 발밑을 확인한다", next: "endingGround" },
        ],
      },

      uprightRoad: {
        id: "uprightRoad",
        type: "story",
        label: "THE ROAD",
        title: "하얀 길",
        text: [
          "길은 너무 깨끗해서 누구의 발자국도 남아 있지 않았다.",
          "그러나 당신이 걸을 때마다 길은 조금씩 뒤에서 생겨났다.",
          "이 길은 목적지에서 시작되는 종류의 길이었다.",
        ],
        choices: [
          { text: "뒤돌아 발자국을 본다", next: "endingFootprints" },
          { text: "길이 생기기 전에 먼저 걷는다", next: "endingFirstStep" },
        ],
      },

      uprightBird: {
        id: "uprightBird",
        type: "story",
        label: "THE BIRD",
        title: "소리 없는 새",
        text: [
          "새는 울지 않았다.",
          "하지만 당신은 그것이 무언가를 부르고 있다는 걸 알았다.",
          "날개가 향한 곳은 하늘이 아니라 아직 선택되지 않은 방향이었다.",
        ],
        choices: [
          { text: "새를 따라간다", next: "endingInvitation" },
          { text: "새가 사라질 때까지 기다린다", next: "endingWaiting" },
        ],
      },

      uprightBundle: {
        id: "uprightBundle",
        type: "story",
        label: "THE BUNDLE",
        title: "작은 보따리",
        text: [
          "보따리 안에는 아무것도 없었다.",
          "하지만 이상하게도 무겁다.",
          "비어 있는 것들은 때때로 가장 많은 가능성을 품는다.",
        ],
        choices: [
          { text: "빈 보따리를 다시 멘다", next: "endingPossibility" },
          { text: "보따리를 절벽 아래로 던진다", next: "endingLightness" },
        ],
      },
    },

    endings: {
      endingTrust: {
        id: "endingTrust",
        type: "ending",
        title: "믿음의 아래",
        text: [
          "당신은 떨어지지 않았다.",
          "당신이 믿은 것은 길이 아니라 자신의 무게였다.",
          "그날 이후 절벽은 더 이상 끝을 의미하지 않았다.",
        ],
      },

      endingGround: {
        id: "endingGround",
        type: "ending",
        title: "늦게 생긴 땅",
        text: [
          "당신이 내려다보자 그제야 땅이 생겼다.",
          "세상은 항상 먼저 존재하는 것은 아니었다.",
          "때로는 바라보는 순간 만들어진다.",
        ],
      },

      endingFootprints: {
        id: "endingFootprints",
        type: "ending",
        title: "뒤늦은 발자국",
        text: [
          "당신이 지나온 곳에 발자국이 남아 있었다.",
          "그런데 그중 몇 개는 당신보다 먼저 찍혀 있었다.",
          "시작은 늘 처음 오는 자의 것이 아니었다.",
        ],
      },

      endingFirstStep: {
        id: "endingFirstStep",
        type: "ending",
        title: "첫걸음 이전",
        text: [
          "당신은 길보다 먼저 걸었다.",
          "그러자 길은 당신을 따라오기로 했다.",
          "방향은 목적지가 아니라 움직임의 그림자였다.",
        ],
      },

      endingInvitation: {
        id: "endingInvitation",
        type: "ending",
        title: "초대받은 미지",
        text: [
          "새는 당신을 데려가지 않았다.",
          "다만 당신이 스스로 따라오게 만들었다.",
          "초대란 때로 문이 아니라 열린 하늘이다.",
        ],
      },

      endingWaiting: {
        id: "endingWaiting",
        type: "ending",
        title: "기다림의 시작",
        text: [
          "새는 사라졌다.",
          "하지만 그 새가 있던 자리에 방향 하나가 남았다.",
          "기다림도 결국 아주 느린 출발이었다.",
        ],
      },

      endingPossibility: {
        id: "endingPossibility",
        type: "ending",
        title: "비어 있는 짐",
        text: [
          "당신은 빈 보따리를 다시 멨다.",
          "그 안에는 아직 아무것도 없었다.",
          "그래서 무엇이든 들어갈 수 있었다.",
        ],
      },

      endingLightness: {
        id: "endingLightness",
        type: "ending",
        title: "가벼워진 이름",
        text: [
          "보따리는 떨어지지 않았다.",
          "바람에 풀리더니 흰 천처럼 하늘에 걸렸다.",
          "버린 것은 짐이 아니라, 짐이라고 믿었던 이름이었다.",
        ],
      },
    },
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "0 · THE FOOL · REVERSED",
      title: "돌아오지 않는 첫걸음",
      text: [
        "당신은 절벽 끝에서 눈을 떴다.",
        "하지만 이번에는 바람이 등을 떠밀고 있었다.",
        "아직 선택하지 않았는데, 이미 출발한 것 같았다.",
      ],
      choices: [
        { text: "떠밀리는 대로 떨어진다", next: "reversedFall" },
        { text: "제자리에 버티고 선다", next: "reversedRefusal" },
        { text: "누가 등을 밀었는지 돌아본다", next: "reversedBehind" },
        { text: "길이 아닌 곳으로 도망친다", next: "reversedEscape" },
      ],
    },

    nodes: {
      reversedFall: {
        id: "reversedFall",
        type: "story",
        label: "THE FALL",
        title: "선택 없는 추락",
        text: [
          "당신은 떨어졌다.",
          "하지만 추락은 생각보다 조용했다.",
          "가장 무서운 것은 아래가 아니라, 당신이 놀라지 않았다는 사실이었다.",
        ],
        choices: [
          { text: "추락을 인정한다", next: "endingFalling" },
          { text: "날고 있다고 우긴다", next: "endingDenial" },
        ],
      },

      reversedRefusal: {
        id: "reversedRefusal",
        type: "story",
        label: "REFUSAL",
        title: "움직이지 않는 발",
        text: [
          "당신은 움직이지 않았다.",
          "그러자 절벽이 조금씩 당신 쪽으로 다가왔다.",
          "멈춰 있는 것과 안전한 것은 같은 말이 아니었다.",
        ],
        choices: [
          { text: "끝까지 버틴다", next: "endingStill" },
          { text: "마지막 순간에 뛴다", next: "endingLateLeap" },
        ],
      },

      reversedBehind: {
        id: "reversedBehind",
        type: "story",
        label: "BEHIND",
        title: "뒤에 있던 것",
        text: [
          "당신은 뒤돌아보았다.",
          "그곳에는 아무도 없었다.",
          "다만 당신의 그림자가 한 걸음 앞서 있었다.",
        ],
        choices: [
          { text: "그림자를 따라간다", next: "endingShadow" },
          { text: "그림자에게 길을 묻는다", next: "endingQuestion" },
        ],
      },

      reversedEscape: {
        id: "reversedEscape",
        type: "story",
        label: "ESCAPE",
        title: "길 아닌 길",
        text: [
          "당신은 길을 피했다.",
          "그러나 길은 피한 방향마다 먼저 도착해 있었다.",
          "도망은 때때로 가장 긴 순환이다.",
        ],
        choices: [
          { text: "계속 도망친다", next: "endingLoop" },
          { text: "멈춰서 길의 이름을 부른다", next: "endingNamedRoad" },
        ],
      },
    },

    endings: {
      endingFalling: {
        id: "endingFalling",
        type: "ending",
        title: "인정된 추락",
        text: [
          "당신은 떨어지고 있음을 인정했다.",
          "그러자 추락은 방향을 얻었다.",
          "때로 무너짐은 가장 정직한 이동이다.",
        ],
      },

      endingDenial: {
        id: "endingDenial",
        type: "ending",
        title: "날개 없는 비행",
        text: [
          "당신은 이것이 비행이라고 말했다.",
          "세계는 반박하지 않았다.",
          "거짓말도 충분히 오래 지속되면 풍경이 된다.",
        ],
      },

      endingStill: {
        id: "endingStill",
        type: "ending",
        title: "멈춘 출발",
        text: [
          "당신은 끝까지 움직이지 않았다.",
          "그 대신 세계가 당신을 지나갔다.",
          "남겨진 것은 사람이 아니라 출발하지 못한 방향이었다.",
        ],
      },

      endingLateLeap: {
        id: "endingLateLeap",
        type: "ending",
        title: "늦은 도약",
        text: [
          "당신은 마지막 순간에 뛰었다.",
          "늦었다고 생각한 순간이 유일하게 정확한 시간이 되었다.",
          "모든 시작은 조금씩 늦게 온다.",
        ],
      },

      endingShadow: {
        id: "endingShadow",
        type: "ending",
        title: "앞서 걷는 그림자",
        text: [
          "당신은 그림자를 따라갔다.",
          "그림자는 당신보다 당신의 길을 잘 알고 있었다.",
          "자신을 앞서 보낸 사람만이 미지를 견딜 수 있다.",
        ],
      },

      endingQuestion: {
        id: "endingQuestion",
        type: "ending",
        title: "대답 없는 안내자",
        text: [
          "당신은 그림자에게 길을 물었다.",
          "그림자는 대답하지 않았다.",
          "하지만 침묵이 가리킨 쪽으로 발이 먼저 움직였다.",
        ],
      },

      endingLoop: {
        id: "endingLoop",
        type: "ending",
        title: "도망의 원",
        text: [
          "당신은 계속 도망쳤다.",
          "그리고 처음의 절벽으로 돌아왔다.",
          "도망은 때때로 가장 충실한 귀환이다.",
        ],
      },

      endingNamedRoad: {
        id: "endingNamedRoad",
        type: "ending",
        title: "불러낸 길",
        text: [
          "당신은 길의 이름을 불렀다.",
          "길은 그제야 당신을 바라보았다.",
          "이름 붙인 것들은 더 이상 완전히 낯설 수 없다.",
        ],
      },
    },
  },
};