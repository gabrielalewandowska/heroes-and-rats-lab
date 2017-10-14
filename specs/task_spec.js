var assert = require('assert');
var Task = require('../task.js');

describe("Task Test", function(){

  beforeEach(function(){
    slayADragon = new Task(95, 60, "princess", false);
  })

  it("has a difficulty level", function(){
    assert.strictEqual(slayADragon.difficultyLevel, 95);
  })
})
