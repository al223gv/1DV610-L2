import { TextAnalyzerUtils } from "./TextAnalyzerUtils.js"

export class CountAnalysis {
  private utils: TextAnalyzerUtils

  constructor () {
    this.utils = new TextAnalyzerUtils()
  }

  /**
   * Calculate number of words from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of words.
   */
  public words (text: string): number {
    this.utils.assertIsString(text)

    const words = this.utils.extractWordsFrom(text)

    return this._countNonEmpty(words)
  }

  /**
   * Calculate number of periods from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of periods.
   */
  public periods (text: string): number {
    this.utils.assertIsString(text)

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
  public charactersIncludingSpaces (text: string): number {
    this.utils.assertIsString(text)

    return text.length
  }

  /**
   * Calculate number of characters, excluding spaces, from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of characters, excluding spaces.
   */
  public charactersExcludingSpaces (text: string): number {
    this.utils.assertIsString(text)

    const textWithoutSpaces = text.replaceAll(' ', '')

    return textWithoutSpaces.length
  }

  /**
   * Calculate number of vowels from a given text input.
   *
   * @param {string} text The input text to analyze.
   * @returns {number} Number of vowels.
   */
  public vowels (text: string): number {
    this.utils.assertIsString(text)

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
  public sentences (text: string, customAbbreviations: string[] = []): number {
    this.utils.assertIsString(text)

    const cleanedText = this.utils.removeNonLatinExceptAllowed(text, ' .!?')

    const textWithoutAbbreviations = this._removeCustomAbbreviations(
      cleanedText, customAbbreviations)

    return this._countSentenceEndings(textWithoutAbbreviations)
  }

  private _countNonEmpty (words: string[]): number {
    let numberOfWords = 0
    for (const word of words) {
      if (word.length > 0) {
        numberOfWords++
      }
    }

    return numberOfWords
  }

  private _countSentenceEndings (text: string): number {
    const sentenceEndingRegex = new RegExp('[a-zA-Z ]+[.!?]', 'g')

    const sentences = text.match(sentenceEndingRegex) ?? []

    return sentences.length
  }

  private _removeCustomAbbreviations (text: string, customAbbreviations: string[]): string {
    if (customAbbreviations.length === 0) {
      return text
    }

    const abbreviationsRegex = new RegExp(`\\b(${customAbbreviations.join('|')})\\b`, 'g')

    return text.replace(abbreviationsRegex, ' ')
  }
}
