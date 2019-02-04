const assert = require('assert')
const speak = require('../lib/speak')

describe('speak', () => {
  it("translates 1:00 to one o'clock", () => {
    assert.strictEqual(speak("1:00"), "one o'clock")
  })
})
