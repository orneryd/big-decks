
import cheerio from 'cheerio';
import {toDeckFormat} from './parse';
import {request} from './request';

request({}, (html) => {
  let $ = cheerio.load(html);
  console.log($);
  let deckObj = {};
  toDeckFormat(deckObj);
});