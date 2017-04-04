import fs from 'fs';

const setsFileFile = 'mtg-cards-data.txt';
const allCardsInfo = {};

let fileData = fs.readFileSync(setsFileFile).toString();
fileData.split('\n').forEach((string) => {
  let parts = string.split('|');

  allCardsInfo[parts[0].toLowerCase()] = {
    name: parts[0],
    setName: parts[1],
    number: parts[2]
  };
});

const getCard = (cardName) => {
  if (cardName.indexOf('/')){
    let halves = cardName.trim().toLowerCase().split('/');
    let left = allCardsInfo[halves[0]] || allCardsInfo[halves[1]];
    return {
      name: cardName,
      setName: left.setName,
      number: left.number.replace(/\D/g,'')
    }
  } else {
    return allCardsInfo[cardName.toLowerCase()];

  }
};


export {getCard}