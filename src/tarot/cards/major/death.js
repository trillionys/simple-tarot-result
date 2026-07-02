export const death = {
  id: "death",
  number: "XIII",
  name: "Death",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XIII · DEATH · UPRIGHT",
      title: "끝난 뒤의 방",
      text: [
        "당신은 문이 없는 방에서 눈을 떴다.",
        "바닥에는 마른 꽃잎들이 흩어져 있었고, 벽에는 오래된 이름들이 지워져 있었다.",
        "어딘가에서 무언가가 끝났지만, 이상하게도 공기는 처음처럼 차가웠다.",
      ],
      choices: [
        { text: "마른 꽃을 집어 든다", next: "uprightFlower" },
        { text: "지워진 이름들을 읽는다", next: "uprightNames" },
        { text: "방 가운데 놓인 검은 문을 바라본다", next: "uprightDoor" },
        { text: "손에 남은 먼지를 털어낸다", next: "uprightDust" },
      ],
    },

    nodes: {
      uprightFlower: {
        id: "uprightFlower",
        type: "story",
        label: "THE FLOWER",
        title: "마른 꽃",
        text: [
          "꽃은 이미 죽어 있었다.",
          "하지만 당신이 손에 쥐자 아주 잠깐, 향기 아닌 기억이 피어났다.",
          "시든 것은 사라진 것이 아니라 다른 형태로 말하고 있었다.",
        ],
        choices: [
          { text: "꽃을 내려놓는다", next: "endingRelease" },
          { text: "꽃잎을 하나 삼킨다", next: "endingSeed" },
        ],
      },

      uprightNames: {
        id: "uprightNames",
        type: "story",
        label: "THE NAMES",
        title: "지워진 이름들",
        text: [
          "벽의 이름들은 모두 흐릿했다.",
          "그러나 지워진 자리마다 이상하게 더 선명한 윤곽이 남아 있었다.",
          "잊힌 것들은 때로 가장 강하게 형태를 가진다.",
        ],
        choices: [
          { text: "가장 흐린 이름을 부른다", next: "endingCalledName" },
          { text: "당신의 이름도 지운다", next: "endingNoName" },
        ],
      },

      uprightDoor: {
        id: "uprightDoor",
        type: "story",
        label: "THE BLACK DOOR",
        title: "검은 문",
        text: [
          "문은 닫혀 있지 않았다.",
          "다만 문 너머에 있을 것이 이쪽보다 더 조용할 뿐이었다.",
          "당신은 그것이 끝이 아니라 통과라고 느꼈다.",
        ],
        choices: [
          { text: "문을 지나간다", next: "endingPassage" },
          { text: "문 앞에서 절한다", next: "endingRite" },
        ],
      },

      uprightDust: {
        id: "uprightDust",
        type: "story",
        label: "THE DUST",
        title: "손에 남은 먼지",
        text: [
          "먼지는 쉽게 떨어지지 않았다.",
          "당신의 손금 사이에 남아 오래된 길처럼 어두워졌다.",
          "무언가를 놓아도, 놓았다는 사실은 한동안 남는다.",
        ],
        choices: [
          { text: "끝까지 털어낸다", next: "endingCleanHands" },
          { text: "먼지를 그대로 둔다", next: "endingAshMark" },
        ],
      },
    },

    endings: {
      endingRelease: {
        id: "endingRelease",
        type: "ending",
        title: "놓아준 꽃",
        text: [
          "당신은 꽃을 내려놓았다.",
          "꽃은 더 이상 꽃이 아니었고, 당신도 더 이상 이전의 사람이 아니었다.",
          "놓아준 것들은 사라지지 않고 방향을 바꾼다.",
        ],
      },

      endingSeed: {
        id: "endingSeed",
        type: "ending",
        title: "몸 안의 씨앗",
        text: [
          "당신은 꽃잎을 삼켰다.",
          "마른 것은 목 안에서 아주 조용히 씨앗이 되었다.",
          "끝은 때때로 가장 깊은 곳에 심어진 시작이다.",
        ],
      },

      endingCalledName: {
        id: "endingCalledName",
        type: "ending",
        title: "다시 불린 이름",
        text: [
          "당신은 가장 흐린 이름을 불렀다.",
          "벽은 대답하지 않았지만, 방의 온도가 조금 달라졌다.",
          "사라진 것들은 누군가 불러줄 때 잠시 죽음을 멈춘다.",
        ],
      },

      endingNoName: {
        id: "endingNoName",
        type: "ending",
        title: "이름 없는 통과",
        text: [
          "당신은 자신의 이름을 지웠다.",
          "이상하게도 두려움은 줄어들었다.",
          "이름을 잃은 사람만이 어떤 문은 가볍게 지나간다.",
        ],
      },

      endingPassage: {
        id: "endingPassage",
        type: "ending",
        title: "끝을 통과한 자",
        text: [
          "당신은 검은 문을 지나갔다.",
          "문 너머에는 아무것도 없었다.",
          "그래서 모든 것이 다시 놓일 수 있었다.",
        ],
      },

      endingRite: {
        id: "endingRite",
        type: "ending",
        title: "조용한 의식",
        text: [
          "당신은 문 앞에서 절했다.",
          "죽음은 대답하지 않았지만 길을 비켜주었다.",
          "존중받은 끝은 언제나 조금 덜 잔인하다.",
        ],
      },

      endingCleanHands: {
        id: "endingCleanHands",
        type: "ending",
        title: "깨끗해진 손",
        text: [
          "당신은 손의 먼지를 끝까지 털어냈다.",
          "손은 깨끗해졌지만, 손금 하나가 사라져 있었다.",
          "모든 정리는 작은 상실을 남긴다.",
        ],
      },

      endingAshMark: {
        id: "endingAshMark",
        type: "ending",
        title: "재의 표시",
        text: [
          "당신은 먼지를 그대로 두었다.",
          "그것은 곧 손등 위에 작은 문양이 되었다.",
          "받아들인 끝은 상처가 아니라 표식이 된다.",
        ],
      },
    },
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XIII · DEATH · REVERSED",
      title: "끝나지 않으려는 방",
      text: [
        "당신은 오래전에 끝났어야 할 방에서 눈을 떴다.",
        "꽃은 시들다 말았고, 벽의 이름들은 지워지다 멈춰 있었다.",
        "무언가가 떠나야 했지만, 끝내 문턱을 넘지 못했다.",
      ],
      choices: [
        { text: "시들지 못한 꽃을 바라본다", next: "reversedFlower" },
        { text: "멈춘 이름을 손으로 문지른다", next: "reversedNames" },
        { text: "닫히지 않는 문을 붙잡는다", next: "reversedDoor" },
        { text: "방 안의 정적을 깨뜨린다", next: "reversedSilence" },
      ],
    },

    nodes: {
      reversedFlower: {
        id: "reversedFlower",
        type: "story",
        label: "UNWILTED FLOWER",
        title: "시들지 못한 꽃",
        text: [
          "꽃은 살아 있지도 죽어 있지도 않았다.",
          "그 애매한 상태가 방 전체를 천천히 썩게 만들고 있었다.",
          "끝나지 못한 것은 때로 사라진 것보다 오래 아프다.",
        ],
        choices: [
          { text: "꽃을 꺾는다", next: "endingMercy" },
          { text: "꽃을 살려두려 한다", next: "endingRot" },
        ],
      },

      reversedNames: {
        id: "reversedNames",
        type: "story",
        label: "HALF ERASED",
        title: "반쯤 지워진 이름",
        text: [
          "이름은 절반만 남아 있었다.",
          "남은 절반은 당신에게 자신을 완성해 달라는 듯 흔들렸다.",
          "그러나 모든 것을 되살리는 일이 자비인 것은 아니다.",
        ],
        choices: [
          { text: "이름을 완성한다", next: "endingReturn" },
          { text: "나머지도 지운다", next: "endingMercy" },
        ],
      },

      reversedDoor: {
        id: "reversedDoor",
        type: "story",
        label: "THE UNFINISHED DOOR",
        title: "닫히지 않는 문",
        text: [
          "문은 열리지도 닫히지도 않았다.",
          "당신이 붙잡자 문은 사람처럼 떨었다.",
          "보내지 못한 것들은 대개 이렇게 문이 된다.",
        ],
        choices: [
          { text: "문을 억지로 닫는다", next: "endingLockedEnd" },
          { text: "문을 열어둔다", next: "endingOpenWound" },
        ],
      },

      reversedSilence: {
        id: "reversedSilence",
        type: "story",
        label: "BROKEN SILENCE",
        title: "깨진 정적",
        text: [
          "당신은 정적을 깨뜨렸다.",
          "소리는 방 안을 돌다가 다시 당신에게 돌아왔다.",
          "말해지지 않은 끝은 말해질 때까지 계속 반복된다.",
        ],
        choices: [
          { text: "돌아온 소리를 듣는다", next: "endingEcho" },
          { text: "다시 침묵한다", next: "endingStagnation" },
        ],
      },
    },

    endings: {
      endingMercy: {
        id: "endingMercy",
        type: "ending",
        title: "끝내주는 자비",
        text: [
          "당신은 끝나지 못한 것을 끝내주었다.",
          "방은 아주 잠깐 잔인해 보였다.",
          "그러나 그 뒤에 찾아온 고요는 분명히 구원에 가까웠다.",
        ],
      },

      endingRot: {
        id: "endingRot",
        type: "ending",
        title: "살려둔 부패",
        text: [
          "당신은 꽃을 살려두려 했다.",
          "꽃은 고맙다는 듯 썩어가기 시작했다.",
          "떠나야 할 것을 붙잡는 손은 결국 자신도 함께 붙잡힌다.",
        ],
      },

      endingReturn: {
        id: "endingReturn",
        type: "ending",
        title: "돌아온 이름",
        text: [
          "당신은 이름을 완성했다.",
          "그 이름은 돌아왔지만, 당신이 기억한 모습은 아니었다.",
          "되돌아온 것들은 언제나 조금 다른 죽음을 가지고 온다.",
        ],
      },

      endingLockedEnd: {
        id: "endingLockedEnd",
        type: "ending",
        title: "잠긴 끝",
        text: [
          "당신은 문을 억지로 닫았다.",
          "찰칵, 하고 작은 소리가 났다.",
          "끝은 닫혔지만 열쇠는 여전히 당신 손 안에 있었다.",
        ],
      },

      endingOpenWound: {
        id: "endingOpenWound",
        type: "ending",
        title: "열린 상처",
        text: [
          "당신은 문을 열어두었다.",
          "바람이 들어와 방의 먼지를 흔들었다.",
          "아물지 않은 것은 때로 살아 있다는 가장 솔직한 증거다.",
        ],
      },

      endingEcho: {
        id: "endingEcho",
        type: "ending",
        title: "되돌아온 소리",
        text: [
          "당신은 돌아온 소리를 들었다.",
          "그것은 당신의 목소리였지만, 당신보다 오래된 슬픔을 가지고 있었다.",
          "반복은 때때로 끝내지 못한 애도의 방식이다.",
        ],
      },

      endingStagnation: {
        id: "endingStagnation",
        type: "ending",
        title: "멈춘 애도",
        text: [
          "당신은 다시 침묵했다.",
          "방은 아무 일도 없었다는 듯 멈췄다.",
          "하지만 멈춘 것은 끝이 아니라, 끝을 받아들이는 시간이었다.",
        ],
      },
    },
  },
};