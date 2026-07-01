export function StoryScreen(node) {
  return `
    <main class="screen story-screen">
      <section class="story-panel">
        <p class="eyebrow">${node.label}</p>
        <h1>${node.title}</h1>

        <div class="story-text">
          ${node.text.map((line) => `<p>${line}</p>`).join("")}
        </div>

        <div class="choices">
          ${node.choices
            .map(
              (choice) => `
                <button class="choice-button" data-next="${choice.next}">
                  ${choice.text}
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    </main>
  `;
}