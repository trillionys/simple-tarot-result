export function EndingScreen(ending) {
  return `
    <main class="screen ending-screen">
      <section class="ending-panel">
        <p class="eyebrow">ENDING</p>
        <h1>${ending.title}</h1>

        <div class="story-text">
          ${ending.text.map((line) => `<p>${line}</p>`).join("")}
        </div>

        <button id="restartBtn" class="primary-button">다시 뽑기</button>
      </section>
    </main>
  `;
}