import { TextAnalyzerUtils } from "./TextAnalyzerUtils.js";

export class AverageAnalysis {
  #utils: TextAnalyzerUtils

  constructor () {
    this.#utils = new TextAnalyzerUtils()
  }

  /**
   * Calculate average word length from a given text input.
   *
   * @param text The input text to analyze.
   * @returns Average word length as a decimal. Rounded to one decimal places.
   */
  wordLength (text: string): number {
    const words = this.#utils.extractWordsFromText(text)

    const totalLength = this._calculateTotalLengthOfWords(words)

    const averageWordLength = this._calculateAverageWordLength(totalLength, words.length)

    return averageWordLength
  }

  _calculateAverageWordLength (totalLength: number, numberOfWords: number): number {
    const averageWordLength = Number.parseFloat((totalLength / numberOfWords).toFixed(1))

    return averageWordLength
  }

  _calculateTotalLengthOfWords (words: string[]): number {
    let lengthOfWords = 0

    for (const word of words) {
      lengthOfWords = lengthOfWords + word.length
    }

    return lengthOfWords
  }
}