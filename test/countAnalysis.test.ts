import { CountAnalysis } from './../src/lib/CountAnalysis.js'

const countAnalysis = new CountAnalysis()

describe('count.words', () => {
  describe('Should correctly count words and handle different input', () => {
    test('Should correctly count 0 words in an empty string', () => {
      expect(countAnalysis.words('')).toBe(0)
    })
    
    test('Should correctly count 1 word', () => {
      expect(countAnalysis.words('Single')).toBe(1)
    })
    
    test('Should correctly count 6 words', () => {
      expect(countAnalysis.words('This is a sentence to test.')).toBe(6)
    })

    test('Should correctly count 0 words, ignore non latin characters', () => {
      expect(countAnalysis.words('!"##¤)=/%& (&%#£{£€}]€${`` ´``\'   **+*-/ ,')).toBe(0)
    })

    test('Should correctly count 7 words, ignore non latin characters', () => {
      expect(countAnalysis.words('Hello!¤=(#,this is! a good    sentence!!! booooh.')).toBe(7)
    })

    test('Should correctly count 5 words, mixed uppercase and lowercase', () => {
      expect(countAnalysis.words('THIS is A mixED SENTENCE')).toBe(5)
    })
  })

  describe('Should throw an error when something other than a string is supplied', () => {
    test('Throw a TypeError when a number is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.words(456))
        .toThrow(new TypeError('Value is not a string.'))
    })

    test('Throw a TypeError when a boolean is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.words(true))
        .toThrow(new TypeError('Value is not a string.'))
    })

    test('Throw a TypeError error when an array is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.words([ 456 ]))
        .toThrow(new TypeError('Value is not a string.'))
    })

    test('Throw a TypeError when an object is supplied', () => {
      // @ts-expect-error Only string is allowed as input text.
      expect(() => countAnalysis.words({ name: 'Musse Pigg'}))
        .toThrow(new TypeError('Value is not a string.'))
    })
  })
})
