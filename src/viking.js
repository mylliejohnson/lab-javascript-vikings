// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack = () =>{
    return this.strength
  }
  receiveDamage = (damage) => {
    this.health -= damage // should remove recieved damage from health property ??
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage = (damage) => {
    this.health -= damage

    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
    
  battleCry = () => {
    return "Odin Owns You All!"
  }
}
}

// Saxon
class Saxon extends Soldier {
  receiveDamage = (damage) => {

      this.health -= damage

    if(health > 0) {
      return `A Saxon has recieived ${damage} points of damage`
     } else{ 
    return 'A saxon has died in combat'}
  }
}

// War
class War {
  constructor(vikingArmy, saxonArmy){   // ????
    this.vikingArmy = []
    this.saxonArmy = []
  }
  
  addViking = (vike) => {
    this.vikingArmy.push(vike)
  } 

  addSaxon = (sax) => {
    this.saxonArmy.push(sax)
  }

  vikingAttack = () => {
    receiveDamage(Saxon) === strength(Viking)

    if(Saxon.health <= 0){
        this.saxonArmy.splice(Math.floor(Math.random() * array.length), 1)
      }
  }
  
  saxonAttack = () => {
    receiveDamage(Viking) = strength(Saxon)

    if(health <=0){
      this.vikingArmy.splice(Math.floor(Math.random() * array.length), 1)
      }
  }
  
  // showStatus()
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
