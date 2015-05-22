# moment-clock [![Build Status](https://travis-ci.org/karneyli/moment-clock.svg?branch=master)](https://travis-ci.org/karneyli/moment-clock)

Factory for moment(), that allows setting now to a static time.

Often times we would like to test our code with a specific time in mind to verify that the behavior is correct when the time has moved forward, backwards, or kept the same.  This can be often challenging if you're using the constructors in momentjs straight up because there's no way to tell momentjs what the current time is and for time to not march forward on it's own.

## Installation

    npm install moment-clock --save

## Usage

Require moment-clock whenever you need to get the current time instead of using the moment() constructor.  

    var clock = require('moment-clock');
    var now = clock.getTime();

If in your tests you want to set the time that is returned by moment-clock:
		
    var clock = require('moment-clock');
    var moment = require('moment');

    clock.setTime(moment('2014-05-02'));

    var now = clock.getTime();  
    // now is 2014-05-02, wherever #getTime is called from it will return 2014-05-02 

To reset the clock to the actual time:

    clock.reset();

## License

Released under the terms of the [MIT License](https://github.com/karneyli/moment-clock/blob/master/LICENSE-MIT)
