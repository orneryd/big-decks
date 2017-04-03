
import {Selectors} from './selectors';

const $selectors = new Selectors();
import cheerio from 'cheerio';

const getDecks = (dom) => {
  let decks = [];
  let elements = $selectors.$deckLink(dom);
  for (let i = 0; i < elements.length; i++) {
    let href = cheerio(elements[i]).attr('href');
    if (href.indexOf('&d=') !== -1) {
      decks.push('/event' + href);
    }
  }
  return decks;
};


const getDeck = (dom) => {
  let element = $selectors.$deckFileLink(dom);
  return '/' + element.attr('href');
};

export {getDecks, getDeck}