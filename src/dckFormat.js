import {getCardInfo} from './mtgdata';

const cardRegexString = '^\\s*(SB:)?\\s*(\\d)\\s*\\[(\\w*)]\\s*([\\w\\s,-_\']+?)$';

const toDeckFormat = (deckFile, deckName) => {
  console.log(`Processing Deck: ${deckName}`);

  let cards = [`NAME:${deckName}`];
  let match;
  let regexp = new RegExp(cardRegexString, 'gmi');
  while ((match = regexp.exec(deckFile)) !== null) {
    let card = getCardInfo(match[4]);
    if (!card) {
      console.log(`Card not found! \n${match[4]} in: \n${deckName}\n${deckFile}\n`);
      continue;
    }
    let quantity = match[2],
      sideboard = match[1];

    cards.push(`${sideboard ? sideboard + ' ' : ''}${quantity} [${card.setCode}:${card.number}] ${card.name}`);
  }
  return cards.join('\n');
};

export {toDeckFormat}
