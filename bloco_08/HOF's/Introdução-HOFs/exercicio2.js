const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const damageWarrior = (sword) => {
let totalDamage = sword.strength * sword.weaponDmg;
sword.damage = Math.floor(Math.random() * (totalDamage - sword.strength)) + sword.strength;
return sword;
};

console.log(damageWarrior(warrior));
