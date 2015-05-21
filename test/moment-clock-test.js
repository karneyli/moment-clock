var Clock = require('../');

describe("moment-clock", function() {


  beforeEach(function() {
    Clock.reset();
    assert.isUndefined(Clock.now);
  });

  it("#setTime then #getTime", function() {
    Clock.setTime(moment('2015-05-20'));
    assert(moment('2015-05-20').isSame(Clock.getTime()));
    assert(moment('2015-05-20').isSame(Clock.getTime()));
  });

  it("#setTime then #reset", function() {
    Clock.setTime(moment('2015-05-20'));
    assert(moment('2015-05-20').isSame(Clock.getTime()));

    assert.isDefined(Clock.now);
    Clock.reset();
    assert.isUndefined(Clock.now);

    assert(moment('2015-05-20').isBefore(Clock.getTime()));
    assert.isUndefined(Clock.now);
  });

  it("all clocks tell same time", function() {
    var AnotherClock = require('../');
    var now = moment('2015-05-20');
    Clock.setTime(now);

    assert(Clock.getTime().isSame(now));
    assert(AnotherClock.getTime().isSame(now));
    assert.notStrictEqual(Clock.getTime(), AnotherClock.getTime());

    var yesterday = moment('2015-05-19');
    Clock.setTime(yesterday);
    assert(Clock.getTime().isSame(yesterday));
    assert(AnotherClock.getTime().isSame(yesterday));

  }); 


});
