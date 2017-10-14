var assert = require('assert');
var Task = require('../task.js');

describe("Task Test", function(){

  beforeEach(function(){
    slayADragon = new Task(95, 60, "princess", false);
  })

  it("has a difficulty level", function(){
    assert.strictEqual(slayADragon.difficultyLevel, 95);
  })

  it("has an urgency level", function(){
    assert.strictEqual(slayADragon.urgencyLevel, 60);
  })

  it("has a reward", function(){
    assert.strictEqual(slayADragon.reward, "princess");
  })

  it("can be completed", function(){
    assert.strictEqual(slayADragon.completed, false);
  })
})
