var Hero = function(name, health, favouriteFood, tasks){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function () {
  return "Hi, I'm " + this.name;
};

Hero.prototype.eat = function (food) {
  if(food.name === this.favouriteFood){
    this.health += (food.replenishmentValue * 1.5);
  } else {
    this.health += food.replenishmentValue;
  }
};

Hero.prototype.sortTasksByDifficulty = function (critrion) {
  var sortedTasks = [];
  sortedTasks = this.tasks.sort(function(a, b){
    return b.difficultyLevel - a.difficultyLevel;
  })
  return sortedTasks;
};

Hero.prototype.sortTasksByUrgency = function () {
  var sortedTasks = [];
  sortedTasks = this.tasks.sort(function(a, b){
    return b.urgencyLevel - a.urgencyLevel;
  })
  return sortedTasks;
};

Hero.prototype.filterTasksByReward = function (reward) {
  return tasks = this.tasks.filter(function(item){
    return item.reward === reward;
  })
};

Hero.prototype.viewTasksByCompletion = function (value) {
  return tasks = this.tasks.filter(function(item){
    return item.completed === value;
  })

};
module.exports = Hero;
