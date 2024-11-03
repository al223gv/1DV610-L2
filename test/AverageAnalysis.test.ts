import { AverageAnalysis } from '../src/lib/AverageAnalysis.js'

describe('AverageAnalysis', () => {
  let averageAnalysis: AverageAnalysis

  beforeEach(() => {
    averageAnalysis = new AverageAnalysis()
  })
  
  test('WordLength method should return correct average word length', () => {
    const text = 'hello world'
    const result = averageAnalysis.wordLength(text)
    expect(result).toBe(5.0)
  })
})