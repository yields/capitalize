
/**
 * Capitalize the provided `str`.
 *
 * example:
 *
 *        capitalize('foo');
 *        // > Foo
 *
 * @param {String} str
 * @return {String}
 */

exports = module.exports = function (str) {
  return str.charAt(0).toUpperCase()
    + str.slice(1);
};

/**
 * Capitalize words.
 *
 * @param {String} str
 * @return {String}
 */

exports.words = function(str){
  return str.replace(/\w+/g, exports);
};
