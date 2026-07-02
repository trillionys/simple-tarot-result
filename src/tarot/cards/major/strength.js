export const strength = {
  id: "strength",
  number: "VIII",
  name: "Strength",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "VIII · STRENGTH · UPRIGHT",
      title: "사자의 정원",
      text: [
        "당신은 오래된 정원에서 눈을 떴다.",
        "정원 한가운데에는 사자가 앉아 있었고, 그 눈은 굶주림보다 깊은 피로를 담고 있었다.",
        "멀리서 누군가 속삭였다. 힘은 이기는 것이 아니라 다루는 것이라고.",
      ],
      choices: [
        { text: "사자에게 다가간다", next: "uprightLion" },
        { text: "떨리는 손을 바라본다", next: "uprightHand" },
        { text: "정원의 문을 닫는다", next: "uprightGate" },
        { text: "사자 앞에 무릎을 꿇는다", next: "uprightKneel" },
      ],
    },

    nodes: {
      uprightLion: {
        id: "uprightLion",
        type: "story",
        label: "THE LION",
        title: "입을 다문 사자",
        text: [
          "사자는 당신을 공격하지 않았다.",
          "오히려 당신이 먼저 두려움을 드러내기를 기다리는 듯했다.",
          "그 입은 열려 있었지만, 당신을 삼키려는 것이 아니었다.",
        ],
        choices: [
          { text: "사자의 입에 손을 얹는다", next: "endingTamed" },
          { text: "사자의 눈을 피하지 않는다", next: "endingGaze" },
        ],
      },

      uprightHand: {
        id: "uprightHand",
        type: "story",
        label: "THE HAND",
        title: "떨리는 손",
        text: [
          "당신의 손은 떨리고 있었다.",
          "하지만 그 떨림은 약함이 아니라 살아 있다는 증거였다.",
          "용기는 떨림이 사라진 뒤에 오는 것이 아니었다.",
        ],
        choices: [
          { text: "떨리는 손을 숨기지 않는다", next: "endingCourage" },
          { text: "그 손으로 사자를 쓰다듬는다", next: "endingGentleTouch" },
        ],
      },

      uprightGate: {
        id: "uprightGate",
        type: "story",
        label: "THE GATE",
        title: "닫힌 정원문",
        text: [
          "당신은 정원의 문을 닫았다.",
          "밖의 소음이 사라지자 사자의 숨소리가 더 선명해졌다.",
          "어떤 싸움은 세상과의 싸움이 아니라, 자신과 단둘이 남는 일이다.",
        ],
        choices: [
          { text: "정원 안에 남는다", next: "endingInnerGarden" },
          { text: "문 열쇠를 사자 앞에 둔다", next: "endingTrustKey" },
        ],
      },

      uprightKneel: {
        id: "uprightKneel",
        type: "story",
        label: "THE KNEELING",
        title: "무릎 꿇음",
        text: [
          "당신은 사자 앞에 무릎을 꿇었다.",
          "굴복처럼 보였지만, 이상하게도 당신의 등은 곧게 펴져 있었다.",
          "낮아지는 것이 항상 지는 것은 아니다.",
        ],
        choices: [
          { text: "고개를 숙인다", next: "endingHumility" },
          { text: "조용히 이름을 부른다", next: "endingNamedBeast" },
        ],
      },
    },

    endings: {
      endingTamed: {
        id: "endingTamed",
        type: "ending",
        title: "길들여진 입",
        text: [
          "당신은 사자의 입에 손을 얹었다.",
          "그 입은 닫혔고, 당신의 손은 다치지 않았다.",
          "진짜 힘은 닫을 수 있는 입을 억지로 열지 않는 데 있었다.",
        ],
      },

      endingGaze: {
        id: "endingGaze",
        type: "ending",
        title: "피하지 않은 눈",
        text: [
          "당신은 사자의 눈을 피하지 않았다.",
          "그 안에서 당신은 괴물이 아니라 두려워하던 자신을 보았다.",
          "마주 본 것들은 더 이상 뒤에서 쫓아오지 않는다.",
        ],
      },

      endingCourage: {
        id: "endingCourage",
        type: "ending",
        title: "떨림의 용기",
        text: [
          "당신은 떨리는 손을 숨기지 않았다.",
          "사자는 그 손을 물지 않았다.",
          "용기는 단단함이 아니라, 흔들리면서도 내미는 일이다.",
        ],
      },

      endingGentleTouch: {
        id: "endingGentleTouch",
        type: "ending",
        title: "부드러운 손",
        text: [
          "당신은 그 손으로 사자를 쓰다듬었다.",
          "사자의 갈기는 생각보다 따뜻했다.",
          "부드러움은 때로 가장 오래 버티는 힘이다.",
        ],
      },

      endingInnerGarden: {
        id: "endingInnerGarden",
        type: "ending",
        title: "안쪽의 정원",
        text: [
          "당신은 정원 안에 남았다.",
          "문 밖의 세계는 멀어졌고, 사자는 조용히 당신 곁에 누웠다.",
          "다스린다는 것은 내쫓는 일이 아니라 함께 머무는 일이었다.",
        ],
      },

      endingTrustKey: {
        id: "endingTrustKey",
        type: "ending",
        title: "맡겨둔 열쇠",
        text: [
          "당신은 열쇠를 사자 앞에 두었다.",
          "사자는 그것을 물지 않고 지켰다.",
          "믿음은 힘을 포기하는 것이 아니라, 힘이 쉬어갈 자리를 주는 것이다.",
        ],
      },

      endingHumility: {
        id: "endingHumility",
        type: "ending",
        title: "낮아진 등",
        text: [
          "당신은 고개를 숙였다.",
          "사자는 당신 위에 서지 않았다.",
          "겸손은 자신을 작게 만드는 것이 아니라, 두려움보다 넓어지는 일이었다.",
        ],
      },

      endingNamedBeast: {
        id: "endingNamedBeast",
        type: "ending",
        title: "이름 붙은 짐승",
        text: [
          "당신은 사자의 이름을 불렀다.",
          "그 순간 사자는 괴물이 아니라 존재가 되었다.",
          "이름 붙인 두려움은 더 이상 무한히 커지지 못한다.",
        ],
      },
    },
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "VIII · STRENGTH · REVERSED",
      title: "울타리 안의 짐승",
      text: [
        "당신은 무너진 울타리 안에서 눈을 떴다.",
        "사자는 보이지 않았지만, 낮은 으르렁거림이 당신의 가슴 안쪽에서 들려왔다.",
        "이번에는 정원이 당신을 가두고 있는 것 같았다.",
      ],
      choices: [
        { text: "으르렁거림의 근원을 찾는다", next: "reversedGrowl" },
        { text: "사라진 사자의 흔적을 따라간다", next: "reversedTracks" },
        { text: "울타리를 다시 세운다", next: "reversedFence" },
        { text: "소리를 억누른다", next: "reversedSuppress" },
      ],
    },

    nodes: {
      reversedGrowl: {
        id: "reversedGrowl",
        type: "story",
        label: "THE GROWL",
        title: "안쪽의 으르렁거림",
        text: [
          "소리는 밖에서 들리는 것이 아니었다.",
          "당신의 갈비뼈 사이에서 오래 참아온 짐승이 몸을 뒤척이고 있었다.",
          "억눌린 힘은 사라지지 않고, 어두운 곳에서 이를 간다.",
        ],
        choices: [
          { text: "그 소리를 듣는다", next: "endingHeardBeast" },
          { text: "더 깊이 밀어 넣는다", next: "endingBuriedRoar" },
        ],
      },

      reversedTracks: {
        id: "reversedTracks",
        type: "story",
        label: "THE TRACKS",
        title: "사라진 발자국",
        text: [
          "흙 위에는 사자의 발자국이 남아 있었다.",
          "그런데 발자국은 정원 밖이 아니라 당신이 서 있는 곳으로 향하고 있었다.",
          "도망친 것은 사자가 아니라, 당신의 힘이었을지도 모른다.",
        ],
        choices: [
          { text: "발자국을 따라 안쪽으로 간다", next: "endingReturnOfStrength" },
          { text: "발자국을 지운다", next: "endingErasedPower" },
        ],
      },

      reversedFence: {
        id: "reversedFence",
        type: "story",
        label: "THE FENCE",
        title: "다시 세운 울타리",
        text: [
          "당신은 무너진 울타리를 다시 세웠다.",
          "안전해진 것 같았지만, 공기는 더 좁아졌다.",
          "통제는 때때로 보호의 얼굴을 한 감옥이다.",
        ],
        choices: [
          { text: "울타리 안에 남는다", next: "endingCage" },
          { text: "울타리에 문을 만든다", next: "endingGateWithin" },
        ],
      },

      reversedSuppress: {
        id: "reversedSuppress",
        type: "story",
        label: "SUPPRESSION",
        title: "눌러둔 소리",
        text: [
          "당신은 소리를 억눌렀다.",
          "정원은 조용해졌지만, 땅 아래에서 뿌리들이 뒤틀렸다.",
          "침묵이 항상 평화는 아니었다.",
        ],
        choices: [
          { text: "끝까지 참는다", next: "endingCrackedGround" },
          { text: "작게라도 소리를 낸다", next: "endingSmallRoar" },
        ],
      },
    },

    endings: {
      endingHeardBeast: {
        id: "endingHeardBeast",
        type: "ending",
        title: "들어준 짐승",
        text: [
          "당신은 안쪽의 으르렁거림을 들었다.",
          "소리는 점점 낮아지더니 숨소리가 되었다.",
          "인정받은 분노는 더 이상 문을 부수지 않는다.",
        ],
      },

      endingBuriedRoar: {
        id: "endingBuriedRoar",
        type: "ending",
        title: "묻힌 포효",
        text: [
          "당신은 소리를 더 깊이 밀어 넣었다.",
          "정원은 조용해졌지만, 땅은 계속 떨렸다.",
          "묻힌 포효는 언젠가 지진의 언어로 돌아온다.",
        ],
      },

      endingReturnOfStrength: {
        id: "endingReturnOfStrength",
        type: "ending",
        title: "돌아온 힘",
        text: [
          "당신은 발자국을 따라 안쪽으로 걸었다.",
          "그 끝에서 사자는 사라진 것이 아니라 웅크리고 있었다.",
          "잃어버린 힘은 대개 너무 오래 기다린 힘이다.",
        ],
      },

      endingErasedPower: {
        id: "endingErasedPower",
        type: "ending",
        title: "지워진 발자국",
        text: [
          "당신은 발자국을 지웠다.",
          "흙은 깨끗해졌지만 길도 함께 사라졌다.",
          "힘을 부정하면, 힘이 가리키던 방향도 잃게 된다.",
        ],
      },

      endingCage: {
        id: "endingCage",
        type: "ending",
        title: "안전한 우리",
        text: [
          "당신은 울타리 안에 남았다.",
          "그곳은 안전했고, 그래서 점점 작아졌다.",
          "두려움이 만든 안전은 종종 성장이 들어올 문을 남기지 않는다.",
        ],
      },

      endingGateWithin: {
        id: "endingGateWithin",
        type: "ending",
        title: "울타리의 문",
        text: [
          "당신은 울타리에 문을 만들었다.",
          "통제는 사라지지 않았지만, 숨 쉴 틈이 생겼다.",
          "힘은 막는 것이 아니라 드나드는 법을 배울 때 성숙해진다.",
        ],
      },

      endingCrackedGround: {
        id: "endingCrackedGround",
        type: "ending",
        title: "갈라진 땅",
        text: [
          "당신은 끝까지 참았다.",
          "마침내 정원의 땅이 갈라졌다.",
          "밖으로 나오지 못한 감정은 결국 세계의 바닥을 찢는다.",
        ],
      },

      endingSmallRoar: {
        id: "endingSmallRoar",
        type: "ending",
        title: "작은 포효",
        text: [
          "당신은 아주 작게 소리를 냈다.",
          "그 소리는 포효라기보다 숨에 가까웠다.",
          "하지만 정원은 처음으로 당신이 여기 있음을 알았다.",
        ],
      },
    },
  },
};