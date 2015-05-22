var clock = require('../');

describe("moment-clock", function() {


  beforeEach(function() {
    clock.reset();
    assert.isUndefined(clock.now);
  });

  it("#setTime then #getTime", function() {
    clock.setTime(moment('2015-05-20'));
    assert(moment('2015-05-20').isSame(clock.getTime()));
    assert(moment('2015-05-20').isSame(clock.getTime()));
  });

  it("#setTime then #reset", function() {
    clock.setTime(moment('2015-05-20'));
    assert(moment('2015-05-20').isSame(clock.getTime()));

    assert.isDefined(clock.now);
    clock.reset();
    assert.isUndefined(clock.now);

    assert(moment('2015-05-20').isBefore(clock.getTime()));
    assert.isUndefined(clock.now);
  });

  it("all clocks tell same time", function() {
    var anotherClock = require('../');
    var now = moment('2015-05-20');
    clock.setTime(now);

    assert(clock.getTime().isSame(now));
    assert(anotherClock.getTime().isSame(now));
    assert.notStrictEqual(clock.getTime(), anotherClock.getTime());

    var yesterday = moment('2015-05-19');
    clock.setTime(yesterday);
    assert(clock.getTime().isSame(yesterday));
    assert(anotherClock.getTime().isSame(yesterday));

  }); 


});
