module.exports = (data, distance) => {
  if(!distance) {
    distance = (a,b) => b-a;
  };

  var memory = {};
  var maxDiff = -1;

  var maxRight = data.length-1 > -1 ? data[data.length-1] : undefined;

  memory.indices = {
    min: -1,
    max: data.length -1
  };

  memory.max = maxRight;
  for (var i = data.length-2; i >= 0; i--) {
    var diff = distance(data[i], maxRight);
    if (diff <= 0) {
      maxRight = data[i];
      memory.max = maxRight;
      memory.indices.max = i;
    } else {
      if (diff > maxDiff) {
        memory.min = data[i];
        memory.indices.min = i;
        maxDiff = diff;
      }
    }
  }
  memory.diff = maxDiff;
  return memory;
}
