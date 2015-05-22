function Clock() {
}

Clock.prototype.getTime = function() {
  return moment(this.now || moment());
};

Clock.prototype.setTime = function(t) {
  this.now = moment(t);
};

Clock.prototype.reset = function() {
  this.now = null;
};

exports = module.exports = new Clock();
