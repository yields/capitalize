
/**
 * Capitalize the provided `str`.
 *
 * example:
 *
 *        capitalize('foo');
 *        // > Foo
 *
 * @param {String} foo
 * @return {String}
 */

module.exports = function (str) {
  return str.charAt(0).toUpperCase()
    + str.slice(1);
};
