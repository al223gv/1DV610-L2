import { TextAnalyzerUtils } from "./TextAnalyzerUtils.js"

export class CountAnalysis {
  #utils: TextAnalyzerUtils

  constructor () {
    this.#utils = new TextAnalyzerUtils()
  }

  /**
   * Calculate number of words from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of words.
   */
  words (text: string): number {
    this.#utils.assertIsString(text)

    const words = this.#utils.extractWordsFromText(text)

    return this._countNonEmptyWords(words)
  }

  /**
   * Calculate number of periods from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of periods.
   */
  periods (text: string): number {
    this.#utils.assertIsString(text)

    let numberOfPeriods = 0
    for (const character of text) {
      if (character === '.') {
        numberOfPeriods++
      }
    }

    return numberOfPeriods
  }

  /**
   * Calculate number of characters, including spaces, from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of characters, including spaces.
   */
  charactersIncludingSpaces (text: string): number {
    this.#utils.assertIsString(text)

    return text.length
  }

  /**
   * Calculate number of characters, excluding spaces, from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of characters, excluding spaces.
   */
  charactersExcludingSpaces (text: string): number {
    this.#utils.assertIsString(text)

    const textWithoutSpaces = text.replaceAll(' ', '')

    return textWithoutSpaces.length
  }

  /**
   * Calculate number of vowels from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of vowels.
   */
  vowels (text: string): number {
    this.#utils.assertIsString(text)

    const vowelRegex = new RegExp('[eoaiu]', 'gi')

    const vowels = text.match(vowelRegex) ?? []

    return vowels.length
  }

  /**
   * Calculate number of sentences from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @param {string[]} customAbbreviations List of abbrevations that will be 
   *                                       omitted and not calculated as a sentence.
   * @returns {number} Number of sentences.
   */
  sentences (text: string, customAbbreviations: string[] = []): number {
    this.#utils.assertIsString(text)

    const cleanedText = this.#utils.removeNonLatinExceptAllowed(text, ' .!?')

    const textWithoutAbbreviations = this._removeCustomAbbreviations(
      cleanedText, customAbbreviations)

    return this._countSentenceEndings(textWithoutAbbreviations)
  }

  _countNonEmptyWords(words: string[]): number {
    let numberOfWords = 0
    for (const word of words) {
      if (word.length > 0) {
        numberOfWords++
      }
    }

    return numberOfWords
  }

  _countSentenceEndings (text: string): number {
    const sentenceEndingRegex = new RegExp('[a-zA-Z ]+[.!?]', 'g')

    const sentences = text.match(sentenceEndingRegex) ?? []

    return sentences.length
  }

  _removeCustomAbbreviations (text: string, customAbbreviations: string[]): string {
    if (customAbbreviations.length === 0) {
      return text
    }

    const abbreviationsRegex = new RegExp(`\\b(${customAbbreviations.join('|')})\\b`, 'g')

    return text.replace(abbreviationsRegex, ' ')
  }
}
