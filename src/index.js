exports.min = function min (array) {
    if (array === undefined) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 || array[i] <= 0) {
            return Math.min.apply(null, array);
        }else {
            return 0;
        }
    }
    if (array = []) {
        return 0;
    }
  }
  
  exports.max = function max (array) {
    if (array === undefined) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 || array[i] <= 0) {
            return Math.max.apply(null, array);
        }else {
            return 0;
        }
    }
    if (array = []) {
        return 0;
    }
  }
  
  exports.avg = function avg (array) {
    if (array === undefined) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0 || array[i] <= 0) {
            let result = array.reduce(function(sum, current) {
                return sum + current
              });
            return (result / array.length);
        }else {
            return 0;
        }
    }
    if (array = []) {
        return 0;
    }
  }