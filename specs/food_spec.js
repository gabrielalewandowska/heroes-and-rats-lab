var assert = require('assert');
var Food = require('../food.js');

describe("Food Test", function(){

  beforeEach(function(){
    food1 = new Food("chocolate", 80);
  })

  it("has a name", function(){
    assert.strictEqual(food1.name, "chocolate");
  })

  it("has a replenishment value", function(){
    assert.strictEqual(food1.replenishmentValue, 80);
  })
})
