var assert = require('assert');
var Hero = require('../hero.js');


describe("Hero Test", function(){

  beforeEach(function(){
    hero1 = new Hero("Steve", 100, "chocolate",[]);
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
    assert.deepEqual(hero1.tasks, []);
  })

  it("can talk", function(){
    assert.strictEqual(hero1.talk(), "Hi, I'm Steve");
  })
})
