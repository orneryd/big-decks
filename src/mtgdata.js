import _ from 'lodash';
import mtgData from '../node_modules/mtgjson/data/allSets'

const toCamelCaseName = (val) => _.camelCase(val.name);
const cardData = _.reduce(mtgData, (all, set) => {
    _.each(set.cards, (card)=> {
      card.setCode = set.code;
      card.setName = set.name;
      let nameKey = toCamelCaseName(card);
      all[nameKey] = all[nameKey] || [];
      all[nameKey].push(card);
      return card;
    });
    return all;
  }, {});

const getCardInfo = (cardName) => cardData[_.camelCase(cardName)];

export {getCardInfo}