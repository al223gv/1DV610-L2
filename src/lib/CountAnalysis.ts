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

    let numberOfWords = 0
    for (const word of words) {
      if (word.length > 0) {
        numberOfWords++
      }
    }

    return numberOfWords
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
   * @returns {number} Number of characters.
   */
  charactersIncludingSpaces (text: string): number {
    this.#utils.assertIsString(text)

    return text.length
  }

  /**
   * Calculate number of characters, excluding spaces, from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of characters.
   */
  charactersExcludingSpaces (text: string): number {
    this.#utils.assertIsString(text)

    const textWithoutSpace = text.replaceAll(' ', '')

    return textWithoutSpace.length
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
   * @param {string[]} customAbbreviations List of custom abbrevations that will be 
   *                                       omitted and not calculated as a sentence.
   * @returns {number} Number of sentences.
   */
  sentences (text: string, customAbbreviations: string[]): number {
    this.#utils.assertIsString(text)

    const sentenceEndingPattern = new RegExp('[a-zA-Z ]+[.!?]', 'g')

    const cleanedText = this.#utils.removeNonLatinExceptAllowed(text, ' .!?')

    const abbreviationStrippedText = this._stripCustomAbbreviation(
      cleanedText, customAbbreviations)

    const numberOfSentences = abbreviationStrippedText
      .match(sentenceEndingPattern) ?? []

    return numberOfSentences.length
  }

  _stripCustomAbbreviation (text: string, customAbbreviations: string[]): string {
    let result = text
    for (const abbreviation of customAbbreviations) {
      result = result.replaceAll(abbreviation, ' ')
    }

    return result
  }
}
