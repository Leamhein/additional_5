module.exports = function check(str, bracketsConfig) {
  var strLength = str.length,
  confLength = bracketsConfig.length,
  stack = []; // stack for open brackets
  for (let i = 0; i < strLength; i++) { //check every symbol of str
    for (let n = 0; n < confLength; n++) {
      if (str[i] == bracketsConfig[n][0]) { //if this symbol == open bracket
        stack.unshift(str[i]); // place it into stack
      };
      if (str[i] == bracketsConfig[n][1]) {
        if (stack[0] == bracketsConfig[n][0]) { //if this symbol - closed bracket the same type as last open bracket
          stack.shift(); //del first symbol from stack
        };
      };
    };
  };
  if (stack.length != 0) {
    return false; //if in the end there is any symbols in stack
  };
  return true; //else
};
