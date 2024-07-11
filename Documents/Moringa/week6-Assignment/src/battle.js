const attack = (attacker, defender) => {
    const damage = Math.max(0, attacker.attributes.strength - defender.attributes.defense);
    const updatedDefender = {
      ...defender,
      attributes: {
        ...defender.attributes,
        health: defender.attributes.health - damage,
      }
    };
    return {
      updatedDefender,
      result: updatedDefender.attributes.health <= 0 ? `${attacker.name} wins!` : `${defender.name} has ${updatedDefender.attributes.health} health left.`
    };
  };
  
  module.exports = attack;