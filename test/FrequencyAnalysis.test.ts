import { FrequencyAnalysis } from '../src/lib/FrequencyAnalysis.js'

describe('FrequencyAnalysis', () => {
  let frequencyAnalysis: FrequencyAnalysis

  beforeEach(() => {
    frequencyAnalysis = new FrequencyAnalysis()
  })

  test('Words method should return correct frequency map', () => {
    const text = 'Hello world world hello bear hello'
    const result = frequencyAnalysis.words(text)

    console.log(result)

    expect(result.get('hello')).toBe(3)
    expect(result.get('world')).toBe(2)
    expect(result.get('bear')).toBe(1)
    expect(result.get('Zoinks!')).toBeUndefined()
  })

  test('Characters method should return correct frequency map', () => {
    const text = 'hello world'
    const result = frequencyAnalysis.characters(text)

    expect(result.get('h')).toBe(1)
    expect(result.get('e')).toBe(1)
    expect(result.get('l')).toBe(3)
    expect(result.get('o')).toBe(2)
    expect(result.get(' ')).toBe(1)
    expect(result.get('w')).toBe(1)
    expect(result.get('r')).toBe(1)
    expect(result.get('d')).toBe(1)
  })

  test('MostCommonWords method should return correct frequency map', () => {
    const text = 'April april mars january september september september'
    const amount = 2
    const result = frequencyAnalysis.mostCommonWords(text, amount)

    const expectedResult = new Map<string, number>([
      [ 'september', 3 ],
      [ 'april', 2 ]
    ])

    expect(result).toEqual(expectedResult)
  })
})