const getDecks = ($) => {
  let decks = [];
  let elements = $('.hover_tr a');
  for (let i = 0; i < elements.length; i++) {
    let href = $(elements[i]).attr('href');
    if (href.indexOf('&d=') !== -1) {
      decks.push('/event' + href);
    }
  }
  return decks;
};


const getDeck = ($) => {
  let element = $('.Nav_link a:nth-child(2)');
  return '/' + element.attr('href');
};

export {getDecks, getDeck}