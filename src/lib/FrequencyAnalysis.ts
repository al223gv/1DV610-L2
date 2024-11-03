import { TextAnalyzerUtils } from "./TextAnalyzerUtils.js"

export class FrequencyAnalysis {
  private utils: TextAnalyzerUtils

  constructor () {
    this.utils = new TextAnalyzerUtils()
  }

  /**
   * Calculate frequency of words from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {Map<string, number>} Frequency map of words.
   */
  public words (text: string): Map<string, number> {
    const words = this.utils.extractWordsFrom(text)

    return this._createSortedTokenFrequencyMap(words)
  }

  /**
   * Calculate frequency of characters from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {Map<string, number>} Frequency map of characters.
   */
  public characters (text: string): Map<string, number> {
    const characters = this._extractCharactersFrom(text)

    return this._createSortedTokenFrequencyMap(characters)
  }

  /**
   * Calculate frequency of most common words from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @param {number} amount Number of words to include in the frequency map.
   * @returns {Map<string, number>} Frequency map of most common words.
   */
  public mostCommonWords (text: string, amount: number): Map<string, number> {
    this.utils.assertIsString(text)
    this.utils.assertIsPositiveNumber(amount)

    const words = this.utils.extractWordsFrom(text)

    const wordFrequencyMap = this._createSortedTokenFrequencyMap(words)

    return this._sliceWordFrequencyMap(wordFrequencyMap, amount)
  }

  private _createSortedTokenFrequencyMap (tokens: string[]): Map<string, number> {
    const tokenFrequencyMap = this._createTokenFrequencyMap(tokens)

    return this._sortTokenFrequencyMap(tokenFrequencyMap)
  }

  private _sliceWordFrequencyMap (wordMap: Map<string, number>, amount: number): Map<string, number> {
    this.utils.assertIsPositiveNumber(amount)

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

  private _extractCharactersFrom (text: string): string[] {
    const characters = text.split('')
    
    return characters
  }

  private _createTokenFrequencyMap (words: string[]): Map<string, number> {
    const wordMap: Map<string, number> = new Map<string, number>()

    for (const word of words) {
      const wordFrequency = wordMap.get(word) ?? 0
      wordMap.set(word, wordFrequency + 1)
    }

    return wordMap
  }

  private _sortTokenFrequencyMap (wordFrequencyMap: Map<string, number>): Map<string, number> {
    const sortedWordFrequencyMap = new Map([ ...wordFrequencyMap.entries() ]
      .sort((a, b) => b[1] - a[1]))
    
    return sortedWordFrequencyMap
  }
}
