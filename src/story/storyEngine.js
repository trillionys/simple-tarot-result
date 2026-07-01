export function getNextNode(cardData, nextId) {
  if (cardData.nodes && cardData.nodes[nextId]) {
    return cardData.nodes[nextId];
  }

  if (cardData.endings && cardData.endings[nextId]) {
    return cardData.endings[nextId];
  }

  throw new Error(`Story node not found: ${nextId}`);
}