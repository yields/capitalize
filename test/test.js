
var capitalize = require('capitalize')
  , assert = require('assert');

describe('capitalize', function(){
  it('should capitalize the first letter', function(){
    assert('Baz' == capitalize('baz'));
  })
})

describe('#words()', function(){
  it('should capitalize words', function(){
    assert('Foo Baz' == capitalize.words('foo baz'));
  })
})
