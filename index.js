function Clock() {
}

Clock.prototype.getTime = function() {
  var result = this.now || moment();
  return moment(result);
};

Clock.prototype.setTime = function(t) {
  this.now = moment(t);
};

Clock.prototype.reset = function() {
  this.now = undefined;
};

exports = module.exports = new Clock();
