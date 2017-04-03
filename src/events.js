import $ from 'cheerio';

const getEvents = (dom) => {
  let events = [];
  let elements = dom('td:nth-child(2) .hover_tr a');
  for (let i = 0; i < elements.length; i++) {
    events.push('/' + $(elements[i]).attr('href'));
  }
  return events;
};

export {getEvents}