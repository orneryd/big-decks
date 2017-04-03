import fs from 'fs';

const setsFileFile = 'mtg-cards-data.txt';
const allCardsInfo = {};

let fileData = fs.readFileSync(setsFileFile).toString();
fileData.split('\n').forEach((string) => {
  let parts = string.split('|');

  allCardsInfo[parts[0]] = {
    name: parts[0],
    setName: parts[1],
    number: parts[2]
  };
});

const getCard = (cardName) => {
  return allCardsInfo[cardName];
};


export {getCard}

/*
 Ardent Plea|Alara Reborn|1|U|{1}{W}{U}|Enchantment|||Exalted <i>(Whenever a creature you control attacks alone, that creature gets +1/+1 until end of turn.)</i>$Cascade <i>(When you cast this spell, exile cards from the top of your library until you exile a nonland card that costs less. You may cast it without paying its mana cost. Put the exiled cards on the bottom in a random order.)</i>|
 Aven Mimeomancer|Alara Reborn|2|R|{1}{W}{U}|Creature - Bird Wizard|3|1|Flying$At the beginning of your upkeep, you may put a feather counter on target creature. If you do, that creature is 3/1 and has flying for as long as it has a feather counter on it.|
 Ethercaste Knight|Alara Reborn|3|C|{W}{U}|Artifact Creature - Human Knight|1|3|Exalted <i>(Whenever a creature you control attacks alone, that creature gets +1/+1 until end of turn.)</i>|
 * */