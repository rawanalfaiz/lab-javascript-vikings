// Soldier
function Soldier(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;


    //another way of defininga function inside a constructor
    // this.attack = function(){
    //     // return this.strength;
    // };
  }


  Soldier.prototype.attack = function(){
    return this.strength;
  }

  Soldier.prototype.receiveDamage = function(damage){
    this.health -= damage;
  }
  
  // Viking
  function Viking(nameArg, healthArg, strengthArg){
    Soldier.call(this, healthArg, strengthArg);
    this.name = nameArg;
  }
  
  Viking.prototype = Object.create(Soldier.prototype);
  Viking.prototype.constructor = Viking;
  
  
    
  Viking.prototype.receiveDamage = function(damage){
    this.health -=  damage;
    if(this.health > 0){
      return this.name + " has received " + damage + " points of damage";
    }
     else 
    {
      return this.name + " has died in act of combat";
    }
  }
  
  Viking.prototype.battleCry = function(){
      return ("Odin Owns You All!");
    }
  
  
  
  // Saxon
  function Saxon(healthArg, strengthArg){
    Soldier.call(this,healthArg, strengthArg);
  }
  
  Saxon.prototype = Object.create(Soldier.prototype);
  Saxon.prototype.constructor = Saxon;

  Saxon.prototype.receiveDamage = function(damage){
    this.health -=  damage;
    if(this.health > 0){
      return "A Saxon has received " + damage + " points of damage";
    }
     else 
    {
      return "A Saxon has died in combat";
    }
  }
 

  // War
  function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  War.prototype.addViking = function(Viking){
    this.Viking = Viking;
    this.vikingArmy.push(this.Viking);
  }

  War.prototype.addSaxon = function(Saxon){
    this.Saxon = Saxon;
    this.saxonArmy.push(this.Saxon);
  }  

  War.prototype.vikingAttack = function(){
    // var selectedSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    this.Saxon.receiveDamage = this.Viking.strength


  };

  War.prototype.saxonAttack = function(){};
  War.prototype.showStatus = function(){};