module.exports = (data) => {
  var memory = {};
  var maxDiff = -1;
  var maxRight = data[data.length-1];
  memory.max = maxRight;
  for (var i = data.length-2; i >= 0; i--) {
    if (data[i] > maxRight) {
      maxRight = data[i];
      memory.max = maxRight;
    } else {
      var diff = maxRight - data[i];
      if (diff > maxDiff) {
        memory.min = data[i];
        maxDiff = diff;
      }
    }
  }
  memory.diff = maxDiff;
  return memory;
};
