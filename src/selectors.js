class Selectors {
  constructor(){}
  $eventName($) { return $('title')}
  $deckFileLink($) { return $('.Nav_link a:nth-child(2)')}
  $deckLink($) { return $('.hover_tr a, .chosen_tr a')}
  $eventLink($) { return $('td:nth-child(2) .hover_tr a')}
}


export {Selectors}