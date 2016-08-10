var test = require('../index.js');

describe('Group 1', function () {

  it('test takes arg and returns test arg', function(){
  	expect(test('test')).toEqual('test test');
  });

}