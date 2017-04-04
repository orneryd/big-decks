import cheerio from 'cheerio';
import {getEvents} from './events';
import {getDecks, getDeck} from './decks';
import {saveDeck} from './save';
import {mtgtop8} from './mtgtop8';

const formats = [
  {path: '/format?f=ST', name: 'standard'},
  {path: '/format?f=MO', name: 'modern'},
  {path: '/format?f=LE', name: 'legacy'},
  {path: '/format?f=VI', name: 'vintage'},
  {path: '/format?f=EDH', name: 'commander'},
];

formats.forEach((format) => {
  mtgtop8({path: format.path}, (formatPage) => {
    let $ = cheerio.load(formatPage);
    let events = getEvents($);
    events.forEach(eventPath => mtgtop8({
      path: eventPath
    }, (eventPage) => {
      let $eventPage = cheerio.load(eventPage);
      let decks = getDecks($eventPage);
      decks.forEach(deckPath => {
        mtgtop8({
          path: deckPath
        }, (deckPage) => mtgtop8({
          path: getDeck(cheerio.load(deckPage))
        }, (deckFile) => saveDeck(deckFile, $eventPage, format)));
      });
    }));
  });
});
