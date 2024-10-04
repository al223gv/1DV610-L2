import { TextAnalyzerUtils } from "./TextAnalyzerUtils.js"

export class FrequencyAnalysis {
  #utils: TextAnalyzerUtils

  constructor () {
    this.#utils = new TextAnalyzerUtils()
  }

  /**
   * Calculate frequency of words from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {Map<string, number>} Frequency map of words.
   */
  words (text: string): Map<string, number> {
    const wordFrequencyMap = this._processWordFrequencies(text)

    return wordFrequencyMap
  }

  /**
   * Calculate frequency of characters from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {Map<string, number>} Frequency map of characters.
   */
  characters (text: string): Map<string, number> {
    const characters = this._extractCharactersFromText(text)

    const characterFrequencyMap = this._createTokenFrequencyMap(characters)

    const sortedCharacterFrequencyMap = this._sortTokenFrequencyMap(characterFrequencyMap)

    return sortedCharacterFrequencyMap
  }

  /**
   * Calculate frequency of most common words from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @param {number} amount Number of words to include in the frequency map.
   * @returns {Map<string, number>} Frequency map of most common words.
   */
  mostCommonWords (text: string, amount: number): Map<string, number> {
    this.#utils.assertIsString(text)
    this.#utils.assertIsPositiveNumber(amount)

    const wordFrequencyMap = this._processWordFrequencies(text)

    const mostCommonWords = this._sliceWordFrequencyMap(wordFrequencyMap, amount)

    return mostCommonWords
  }

  _processWordFrequencies (text: string): Map<string, number> {
    const words = this.#utils.extractWordsFromText(text)

    const wordFrequencyMap = this._createTokenFrequencyMap(words)

    const sortedWordFrequencyMap = this._sortTokenFrequencyMap(wordFrequencyMap)

    return sortedWordFrequencyMap
  }

  _sliceWordFrequencyMap (wordMap: Map<string, number>, amount: number): Map<string, number> {
    this.#utils.assertIsPositiveNumber(amount)

    const slicedWordMap: Map<string, number> = new Map<string, number>()

    const frequencyMapAsArray = Array.from(wordMap)

    for (let i = 0; i < amount; i++) {
      if (i >= frequencyMapAsArray.length) {
        break;
      }

      slicedWordMap.set(...frequencyMapAsArray[i])
    }

    return slicedWordMap
  }

  _extractCharactersFromText (text: string): string[] {
    const characters = text.split('')
    
    return characters
  }

  _createTokenFrequencyMap (words: string[]): Map<string, number> {
    const wordMap: Map<string, number> = new Map<string, number>()

    for (const word of words) {
      const wordFrequency = wordMap.get(word) ?? 0
      wordMap.set(word, wordFrequency + 1)
    }

    return wordMap
  }

  _sortTokenFrequencyMap (wordFrequencyMap: Map<string, number>): Map<string, number> {
    const sortedWordFrequencyMap = new Map([ ...wordFrequencyMap.entries() ]
      .sort((a, b) => b[1] - a[1]))
    
    return sortedWordFrequencyMap
  }
}
