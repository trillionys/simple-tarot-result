import { TitleScreen } from "./components/TitleScreen.js";
import { CardReveal } from "./components/CardReveal.js";
import { StoryScreen } from "./components/StoryScreen.js";
import { EndingScreen } from "./components/EndingScreen.js";

import { drawCard } from "./tarot/drawCard.js";
import { getNextNode } from "./story/storyEngine.js";

let currentResult = null;
let currentNode = null;

export function App() {
  const app = document.getElementById("app");

  function render(screenHtml) {
    app.innerHTML = screenHtml;
  }

  function showTitle() {
    currentResult = null;
    currentNode = null;

    render(TitleScreen());

    document.getElementById("drawBtn").addEventListener("click", () => {
      currentResult = drawCard();

      render(CardReveal(currentResult));

      setTimeout(() => {
        currentNode = currentResult.data.start;
        showStory();
      }, 1800);
    });
  }

  function showStory() {
    render(StoryScreen(currentNode));

    document.querySelectorAll("[data-next]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextId = button.dataset.next;
        const nextNode = getNextNode(currentResult.data, nextId);

        if (nextNode.type === "story") {
          currentNode = nextNode;
          showStory();
          return;
        }

        if (nextNode.type === "ending") {
          showEnding(nextNode);
          return;
        }

        throw new Error(`Unknown node type: ${nextNode.type}`);
      });
    });
  }

  function showEnding(ending) {
    render(EndingScreen(ending));

    document.getElementById("restartBtn").addEventListener("click", () => {
      showTitle();
    });
  }

  showTitle();
}