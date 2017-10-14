var Hero = function(name, health, favouriteFood, tasks){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function () {
  return "Hi, I'm " + this.name;
};

module.exports = Hero;
