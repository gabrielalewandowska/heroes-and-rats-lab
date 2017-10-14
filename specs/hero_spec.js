var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');


describe("Hero Test", function(){

  beforeEach(function(){
    slayADragon = new Task(95, 60, "princess", false);
    stealGoldenApples = new Task(60, 40, "join the Argonauts", true);
    killChimaera = new Task(73, 87, "get to ride the Pegasus", false);
    hero1 = new Hero("Steve", 100, "chocolate",[slayADragon, stealGoldenApples, killChimaera]);
    food1 = new Food("chocolate", 80);
  })

  it("has a name", function(){
    assert.strictEqual(hero1.name, "Steve");
  })

  it("has  a health", function(){
    assert.strictEqual(hero1.health, 100);
  })

  it("has a favourite food", function(){
    assert.strictEqual(hero1.favouriteFood, "chocolate");
  })

  it("has tasks to complete", function(){
    assert.deepEqual(hero1.tasks, [slayADragon, stealGoldenApples, killChimaera]);
  })

  it("can talk", function(){
    assert.strictEqual(hero1.talk(), "Hi, I'm Steve");
  })

  it("can eat and replenish their health", function(){
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 220);
  })

  it("can sort tasks by difficulty", function(){
    assert.deepEqual(hero1.sortTasksByDifficulty(), [slayADragon, killChimaera, stealGoldenApples]);
  })

  it("can sort tasks by urgency", function(){
    assert.deepEqual(hero1.sortTasksByUrgency(), [killChimaera, slayADragon, stealGoldenApples]);
  })

  it("can sort tasks by reward", function(){
    assert.deepEqual(hero1.filterTasksByReward("princess"), [slayADragon]);
  })

  it("can view tasks by completion", function(){
    assert.deepEqual(hero1.viewTasksByCompletion(false), [slayADragon, killChimaera]);
  })
})
