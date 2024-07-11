const createCharacter = require('./characterFactory');

const warrior = (name, level) => createCharacter(name, level, {
  strength: level * 5,
  defense: level * 4,
  health: level * 10,
});

module.exports = warrior;