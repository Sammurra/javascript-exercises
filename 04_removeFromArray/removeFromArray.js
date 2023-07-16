const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const index = arr.indexOf(arg);
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
    return arr;
  };
  
// Do not edit below this line
module.exports = removeFromArray;
