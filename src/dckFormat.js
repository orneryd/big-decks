import {getSetCode} from './sets';
import {getCard} from './cards';

const cardRegexString = '^\\s*(SB:)?\\s*(\\d)\\s*\\[(\\w*)]\\s*([\\w\\s,-_\']+?)$';

const toDeckFormat = (deckFile, deckName) => {
  console.log(`Processing Deck: ${deckName}`);

  let cards = [`NAME:${deckName}`];
  let match;
  let regexp = new RegExp(cardRegexString, 'gmi');
  while ((match = regexp.exec(deckFile)) !== null) {
    console.log(`Processing Card ${match[4]}`);
    let card = getCard(match[4]);
    if (!card) {
      console.log(`Card not found! \n${match[4]} in: \n${deckName}\n${deckFile}\n`);
      continue;
    }
    let setCode = match[3],
      quantity = match[2],
      sideboard = match[1];

    if (!setCode.length) {
      setCode = getSetCode(card.setName);
    }

    cards.push(`${sideboard ? sideboard + ' ' : ''}${quantity} [${setCode}:${card.number}] ${card.name}`);
  }
  return cards.join('\n');
};

export {toDeckFormat}
