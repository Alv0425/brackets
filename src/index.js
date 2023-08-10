module.exports = function check(str, bracketsConfig) {
  //construct regexps for brackets configurations
  let brackets = bracketsConfig.map(bracket => (`\\${bracket[0]}\\${bracket[1]}`));
  let regexps = brackets.map(brackettype => new RegExp(brackettype,'g'));
}
