export const theFool = {
  id: "theFool",
  number: "0",
  name: "The Fool",

  upright: {
    orientationText: "정방향",
    start: {
      id: "start",
      type: "story",
      label: "THE_FOOL",
      title: "준비 중",
      text: [
        "이 카드는 아직 제작 중입니다."
      ],
      choices: [
        {
          text: "처음으로 돌아간다",
          next: "ending"
        }
      ]
    },

    nodes: {},

    endings: {
      ending: {
        id: "ending",
        type: "ending",
        title: "Coming Soon",
        text: [
          "곧 이 카드의 세계가 열립니다."
        ]
      }
    }
  },

  reversed: {
    orientationText: "역방향",
    start: {
      id: "start",
      type: "story",
      label: "THE_FOOL",
      title: "준비 중",
      text: [
        "이 카드는 아직 제작 중입니다."
      ],
      choices: [
        {
          text: "처음으로 돌아간다",
          next: "ending"
        }
      ]
    },

    nodes: {},

    endings: {
      ending: {
        id: "ending",
        type: "ending",
        title: "Coming Soon",
        text: [
          "곧 이 카드의 세계가 열립니다."
        ]
      }
    }
  }
};