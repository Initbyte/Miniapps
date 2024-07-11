const addItem = (character, item) => {
    if (!character.inventory) character.inventory = [];
    if (character.inventory.length < 5) { // Limit to 5 items
      const updatedInventory = [...character.inventory, item];
      const updatedAttributes = {
        ...character.attributes,
        [item.attribute]: character.attributes[item.attribute] + item.value,
      };
      return {
        ...character,
        inventory: updatedInventory,
        attributes: updatedAttributes,
      };
    }
    return character;
  };
  
  const removeItem = (character, itemName) => {
    const itemIndex = character.inventory.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      const item = character.inventory[itemIndex];
      const updatedInventory = character.inventory.filter((_, index) => index !== itemIndex);
      const updatedAttributes = {
        ...character.attributes,
        [item.attribute]: character.attributes[item.attribute] - item.value,
      };
      return {
        ...character,
        inventory: updatedInventory,
        attributes: updatedAttributes,
      };
    }
    return character;
  };
  
  module.exports = { addItem, removeItem };