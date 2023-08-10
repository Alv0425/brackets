module.exports = function check(expr, bracketsConfig) {
  //construct regexps for brackets configurations
  let brackets = bracketsConfig.map(bracket => {
    if (/\d/.test(bracket[0])) {
      return `${bracket[0]}${bracket[1]}`;
    }
    return `\\${bracket[0]}\\${bracket[1]}`;
  });
  let regexps = brackets.map(brackettype => new RegExp(brackettype,'g'));
  //check all configuration while exp contains '()', '{}', '[]', ...
  let test = [];
  do {
    for (let i = 0; i < regexps.length; i++){
      test[i] = regexps[i].test(expr);
      if (test[i]) {
        expr = expr.replace(regexps[i],'');
      }
    }
  } while (test.includes(true)) 
  //return true when exp is empty and false otherwise
  return expr == '';
}
