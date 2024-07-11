const levelUp = (character) => {
    const updatedAttributes = Object.keys(character.attributes).reduce((acc, attr) => {
      acc[attr] = character.attributes[attr] + 2;
      return acc;
    }, {});
  
    return {
      ...character,
      level: character.level + 1,
      attributes: updatedAttributes,
    };
  };
  
  module.exports = levelUp;