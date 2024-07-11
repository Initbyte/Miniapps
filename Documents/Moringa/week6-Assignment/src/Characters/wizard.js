const createCharacter = require('./characterFactory');

const wizard = (name, level) => createCharacter(name, level, {
  intelligence: level * 5,
  mana: level * 4,
  health: level * 8,
});

module.exports = wizard;