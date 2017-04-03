import cheerio from 'cheerio';
import {Selectors} from './selectors';

const $selectors = new Selectors();

const getEvents = (dom) => {
  let events = [];
  let elements = $selectors.$eventLink(dom);
  for (let i = 0; i < elements.length; i++) {
    events.push('/' + cheerio(elements[i]).attr('href'));
  }
  return events;
};

export {getEvents}