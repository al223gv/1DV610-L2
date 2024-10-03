import { TextAnalyzerUtils } from "./TextAnalyzerUtils.js"

export class CountAnalysis {
  #utils: TextAnalyzerUtils

  constructor () {
    this.#utils = new TextAnalyzerUtils()
  }

  numberOfWords (text: string): number {
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

  numberOfPeriods (text: string): number {
    this.#utils.assertIsString(text)

    let numberOfPeriods = 0
    for (const character of text) {
      if (character === '.') {
        numberOfPeriods++
      }
    }

    return numberOfPeriods
  }

  numberOfCharactersIncludingSpaces (text: string): number {
    this.#utils.assertIsString(text)

    return text.length
  }

  numberOfCharactersExcludingSpaces (text: string): number {
    this.#utils.assertIsString(text)

    const textWithoutSpace = text.replaceAll(' ', '')

    return textWithoutSpace.length
  }

  numberOfVowels (text: string): number {
    this.#utils.assertIsString(text)

    const vowelRegex = new RegExp('[eoaiu]', 'gi')

    const vowels = text.match(vowelRegex) ?? []

    return vowels.length
  }

  _removeNonLatinExceptAllowed (text: string, allowedCharacters: string): string {
    const disallowedCharactersRegex = new RegExp(`[^a-zA-Z${allowedCharacters}]`, 'g')

    const cleanedText = text.replace(disallowedCharactersRegex, '')

    return cleanedText
  }

  numberOfSentences (text: string, customAbbreviations: string[]): number {
    this.#utils.assertIsString(text)

    const sentenceEndingPattern = new RegExp('[a-zA-Z ]+[.!?]', 'g')

    const cleanedText = this._removeNonLatinExceptAllowed(text, ' .!?')

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
