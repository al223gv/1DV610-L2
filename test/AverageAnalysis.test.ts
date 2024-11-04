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

  test('WordLength method should handle text with varying word lengths', () => {
    const text = 'I could be a fox.'
    const result = averageAnalysis.wordLength(text)

    expect(result).toBe(2.4)
  })

  test('WordLength method should correctly handle punctuation', () => {
    const text = 'I could be a fox.'
    const result = averageAnalysis.wordLength(text)

    expect(result).toBe(2.4)
  })

  test('WordLength method should return 0 for empty string', () =>{
    const text = ''
    const result = averageAnalysis.wordLength(text)
    
    expect(result).toBe(0)
  })
})
