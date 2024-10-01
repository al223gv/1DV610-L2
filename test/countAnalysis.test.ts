import { CountAnalysis } from './../src/lib/CountAnalysis'

const countAnalysis = new CountAnalysis()

describe('NumberOfWords ()', () => {
  describe('Should correctly count words and handle different input', () => {
    test('Should correctly count 0 words in an empty string', () => {
      expect(countAnalysis.numberOfWords('')).toBe(0)
    })
    
    test('Should correctly count 1 word', () => {
      expect(countAnalysis.numberOfWords('Single')).toBe(1)
    })
    
    test('Should correctly count 6 words', () => {
      expect(countAnalysis.numberOfWords('This is a sentence to test.')).toBe(6)
    })

    test('Should correctly count 0 words and ignore non latin characters', () => {
      expect(countAnalysis.numberOfWords('!"##¤)=/%& (&%#£{£€}]€${`` ´``\'   **+*-/ ,')).toBe(0)
    })

    test('Should correctly count 7 words and ignore non latin characters', () => {
      expect(countAnalysis.numberOfWords('Hello!¤=(#,this is! a good    sentence!!! booooh.')).toBe(7)
    })

    test('Should correctly count 5 words, mixed uppercase and lowercase', () => {
      expect(countAnalysis.numberOfWords('THIS is A mixED SENTENCE')).toBe(5)
    })
  })

  describe('Should throw an error when something other than a string is supplied', () => {
    test('Throw an error when a number is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.numberOfWords(456))
        .toThrow(new TypeError('Text is not of type string.'))
    })

    test('Throw an error when a boolean is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.numberOfWords(true))
        .toThrow(new TypeError('Text is not of type string.'))
    })

    test('Throw an error when an array is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.numberOfWords([ 456 ]))
        .toThrow(new TypeError('Text is not of type string.'))
    })

    test('Throw an error when an object is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.numberOfWords({ name: 'Musse Pigg'}))
        .toThrow(new TypeError('Text is not of type string.'))
    })
  })
})
