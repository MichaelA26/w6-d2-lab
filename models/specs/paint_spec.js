const assert = require('assert')
const Paint = require('../paint.js')

describe('Paint', function(){

  let paint
  beforeEach(function(){
    paint = new Paint(15)
  })

  it('should have paint', function(){
    const paint = new Paint(15)
    const actual = paint.volume
    assert.strictEqual(actual, 15)
  })

  it('should check if it is not empty', function(){
    const actual = paint.volume > 0
    assert.strictEqual(actual, true )
    })

  it('should be able to empty itself', function(){
    const actual = paint.volume === 0
    assert.strictEqual(actual, false)
  })
})
