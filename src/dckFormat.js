import {getSetCode} from './sets';
import {getCard} from './cards';

const cardRegexString = '^\\s*(SB:)?\\s*(\\d)\\s*\\[(\\w*)]\\s*([\\w\\s,-_\']+?)$';

const toDeckFormat = (deckFile, deckName) => {

  let cards = [`NAME:${deckName}`];
  let match;
  let regexp = new RegExp(cardRegexString, 'gmi');
  while ((match = regexp.exec(deckFile)) !== null) {
    let card = getCard(match[4]);
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
