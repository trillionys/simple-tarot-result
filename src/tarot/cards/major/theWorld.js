export const theWorld = {
  id: "the-world",
  number: "XXI",
  name: "The World",

  upright: {
    orientationText: "정방향",

    start: {
      id: "start",
      type: "story",
      label: "XXI · THE WORLD · UPRIGHT",
      title: "완성된 세계",
      text: [
        "당신은 이미 끝난 세계의 가장자리에서 눈을 떴다.",
        "모든 문은 열려 있었고, 모든 출구는 닫혀 있었다.",
        "누군가 마지막 페이지를 넘기고 있다.",
      ],
      choices: [
        { text: "문을 향해 걷는다", next: "uprightDoor" },
        { text: "바닥의 원을 바라본다", next: "uprightCircle" },
        { text: "마지막 페이지를 찾는다", next: "uprightPage" },
      ],
    },

    nodes: {
      uprightDoor: {
        id: "uprightDoor",
        type: "story",
        label: "THE DOOR",
        title: "열린 문",
        text: [
          "문은 잠겨 있지 않았다.",
          "다만 누구도 지나간 흔적이 없었다.",
          "문 너머에서는 바람 대신 종이 넘기는 소리가 들린다.",
        ],
        choices: [
          { text: "문을 통과한다", next: "endingInside" },
          { text: "문 앞에 멈춰 선다", next: "endingWitness" },
        ],
      },

      uprightCircle: {
        id: "uprightCircle",
        type: "story",
        label: "THE CIRCLE",
        title: "완성된 원",
        text: [
          "원은 처음과 끝을 구분하지 않았다.",
          "당신의 발자국은 이미 그 위에 있었다.",
          "아직 걷지 않은 길까지도.",
        ],
        choices: [
          { text: "원 안에 선다", next: "endingCircle" },
          { text: "원을 벗어난다", next: "endingOutside" },
        ],
      },

      uprightPage: {
        id: "uprightPage",
        type: "story",
        label: "THE PAGE",
        title: "마지막 페이지",
        text: [
          "마지막 페이지에는 아무것도 적혀 있지 않았다.",
          "하지만 빈칸은 이상하게도 당신을 닮아 있었다.",
          "글자가 없는 문장도 기록이 될 수 있을까.",
        ],
        choices: [
          { text: "이름을 적는다", next: "endingName" },
          { text: "페이지를 덮는다", next: "endingClosed" },
        ],
      },
    },

    endings: {
      endingInside: {
        id: "endingInside",
        type: "ending",
        title: "안쪽의 바깥",
        text: [
          "당신은 문을 통과했다.",
          "그러나 나간 것은 당신이 아니었다.",
          "세계가 조용히 당신 안으로 들어왔다.",
        ],
      },

      endingWitness: {
        id: "endingWitness",
        type: "ending",
        title: "마지막 목격자",
        text: [
          "당신은 아무것도 바꾸지 않았다.",
          "그래서 모든 것이 보존되었다.",
          "기록은 언제나 목격자를 필요로 한다.",
        ],
      },

      endingCircle: {
        id: "endingCircle",
        type: "ending",
        title: "완성된 원",
        text: [
          "처음으로 돌아왔다.",
          "하지만 처음은 더 이상 같은 장소가 아니었다.",
          "끝은 원래부터 기억의 다른 이름이었다.",
        ],
      },

      endingOutside: {
        id: "endingOutside",
        type: "ending",
        title: "원의 바깥",
        text: [
          "당신은 원 밖으로 나갔다.",
          "그 순간 세계는 완성되지 않은 부분을 드러냈다.",
          "완전함은 언제나 하나의 누락을 숨기고 있었다.",
        ],
      },

      endingName: {
        id: "endingName",
        type: "ending",
        title: "이름 없는 서명",
        text: [
          "당신은 이름을 적었다.",
          "잉크는 곧 사라졌다.",
          "그러나 빈칸은 더 이상 비어 있지 않았다.",
        ],
      },

      endingClosed: {
        id: "endingClosed",
        type: "ending",
        title: "닫힌 페이지",
        text: [
          "당신은 페이지를 덮었다.",
          "이야기는 끝나지 않았다.",
          "다만 더 이상 당신 앞에서 계속되지 않았다.",
        ],
      },
    },
  },

  reversed: {
    orientationText: "역방향",

    start: {
      id: "start",
      type: "story",
      label: "XXI · THE WORLD · REVERSED",
      title: "닫히지 못한 세계",
      text: [
        "세계는 끝나지 못한 채 접혀 있었다.",
        "문장들은 서로의 순서를 잃었고, 출구는 시작보다 먼저 도착했다.",
        "당신은 마지막 페이지에서 시작했다.",
      ],
      choices: [
        { text: "찢어진 문장을 줍는다", next: "reversedFragment" },
        { text: "거꾸로 열린 문을 본다", next: "reversedDoor" },
        { text: "아무것도 선택하지 않는다", next: "reversedStillness" },
      ],
    },

    nodes: {
      reversedFragment: {
        id: "reversedFragment",
        type: "story",
        label: "FRAGMENT",
        title: "찢어진 문장",
        text: [
          "문장은 완성되기를 거부했다.",
          "당신이 읽는 순간, 단어들은 다른 의미로 도망쳤다.",
          "끝은 있었지만, 그 끝에 도착할 주어가 없었다.",
        ],
        choices: [
          { text: "끝을 붙잡는다", next: "endingUnfinished" },
          { text: "처음을 버린다", next: "endingNoBeginning" },
        ],
      },

      reversedDoor: {
        id: "reversedDoor",
        type: "story",
        label: "REVERSED DOOR",
        title: "거꾸로 열린 문",
        text: [
          "문은 바깥을 향해 열려 있었다.",
          "하지만 손잡이는 안쪽이 아니라 과거에 붙어 있었다.",
          "문을 여는 일은 기억을 닫는 일과 닮아 있었다.",
        ],
        choices: [
          { text: "과거를 연다", next: "endingNoBeginning" },
          { text: "문을 닫는다", next: "endingUnfinished" },
        ],
      },

      reversedStillness: {
        id: "reversedStillness",
        type: "story",
        label: "STILLNESS",
        title: "선택하지 않음",
        text: [
          "당신은 아무것도 선택하지 않았다.",
          "그러자 세계는 처음으로 당신을 선택했다.",
          "정지한 것은 시간이 아니라 해석이었다.",
        ],
        choices: [
          { text: "선택당한다", next: "endingChosen" },
          { text: "끝까지 가만히 있는다", next: "endingBlank" },
        ],
      },
    },

    endings: {
      endingUnfinished: {
        id: "endingUnfinished",
        type: "ending",
        title: "끝나지 않은 끝",
        text: [
          "끝은 도착하지 않았다.",
          "그 대신 당신 곁에 앉았다.",
          "아직 말하지 않은 문장처럼.",
        ],
      },

      endingNoBeginning: {
        id: "endingNoBeginning",
        type: "ending",
        title: "시작 없는 기록",
        text: [
          "처음은 발견되지 않았다.",
          "하지만 기록은 이미 존재했다.",
          "누가 먼저였는지는 끝내 중요하지 않았다.",
        ],
      },

      endingChosen: {
        id: "endingChosen",
        type: "ending",
        title: "선택된 공백",
        text: [
          "당신은 아무것도 고르지 않았다.",
          "그래서 가장 오래된 선택지가 되었다.",
          "공백은 언제나 가장 많은 것을 말한다.",
        ],
      },

      endingBlank: {
        id: "endingBlank",
        type: "ending",
        title: "남겨진 여백",
        text: [
          "아무 일도 일어나지 않았다.",
          "그러나 아무 일도 일어나지 않았다는 사실만은 남았다.",
          "여백은 가장 조용한 형태의 결말이었다.",
        ],
      },
    },
  },
};