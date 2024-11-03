import { CountAnalysis } from '../src/lib/CountAnalysis.js'

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

  test('Periods method should return correct number of periods', () => {
    const text = 'Hello. This is a test. With some periods.'
    const result = countAnalysis.periods(text)

    expect(result).toBe(3)
  })

  test('CharactersIncludingSpaces method should return correct number of characters including spaces', () => {
    const text = 'hello world'
    const result = countAnalysis.charactersIncludingSpaces(text)
    expect(result).toBe(11)
  })

  test('CharactersExcludingSpaces method should return correct number of characters excluding spaces', () => {
    const text = 'hello world'
    const result = countAnalysis.charactersExcludingSpaces(text)

    expect(result).toBe(10)
  })

  test('Vowels method should return correct number of vowels', () => {
    const text = 'hEllo world'
    const result = countAnalysis.vowels(text)
    
    expect(result).toBe(3)
  })
})
