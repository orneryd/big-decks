import _ from 'lodash';
import {getCardInfo} from './mtgdata';

const cardRegexString = '^\\s*(SB:)?\\s*(\\d)\\s*\\[(\\w*)]\\s*([\\w\\s,-_\']+?)$';

const toDeckFormat = (deckFile, deckName) => {
  console.log(`Processing Deck: ${deckName}`);

  let cards = [`NAME:${deckName}`];
  let match;
  let regexp = new RegExp(cardRegexString, 'gmi');
  while ((match = regexp.exec(deckFile)) !== null) {
    let card = _.last(getCardInfo(match[4]));
    if (!card) {
      console.log(`Card not found! \n${match[4]} in: \n${deckName}\n${deckFile}\n`);
      continue;
    }
    let quantity = match[2],
      sideboard = match[1];

    let cardName = card.name;
    if (card.layout === 'split') {
      cardName = card.names.join('/');
    }
    cards.push(`${sideboard ? sideboard + ' ' : ''}${quantity} [${card.setCode}:${card.number}] ${cardName}`);
  }
  return cards.join('\n');
};

export {toDeckFormat}
