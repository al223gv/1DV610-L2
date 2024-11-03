import { CountAnalysis } from './../src/lib/CountAnalysis.js'

describe('CountAnalysis', () => {
  let countAnalysis = new CountAnalysis()

  beforeEach(() => {
    countAnalysis = new CountAnalysis()
  })

  test('Words method should return correct number of words', () => {
    const text = 'Hello world hello hello'
    const results = countAnalysis.words(text)

    expect(results).toBe(4)
  })
})
