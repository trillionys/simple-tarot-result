export function CardReveal(result) {
  return `
    <main class="screen reveal-screen">
      <article class="reveal-card ${result.orientation === "reversed" ? "is-reversed" : ""}">
        <p class="card-number">${result.card.number}</p>
        <h2>${result.card.name}</h2>
        <p>${result.data.orientationText}</p>
      </article>
    </main>
  `;
}