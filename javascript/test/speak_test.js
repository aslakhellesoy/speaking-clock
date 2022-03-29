import assert from 'assert'
import { speak } from '../lib/speak.js'

describe('speak', () => {
  it("translates 1:00 to one o'clock", () => {
    assert.strictEqual(speak('1:00'), "one o'clock")
  })
})
