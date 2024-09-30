export class CountAnalysis {
  #nonLatinCharacters: RegExp

  constructor () {
    this.#nonLatinCharacters = new RegExp('[^a-zA-Z ]', 'g')
  }

  assertIsString (text: unknown) {
    if (typeof text !== 'string') {
      throw new TypeError('Text is not of type string.')
    }
  }

  numberOfWords (text: string): number {
    this.assertIsString(text)

    const cleanedText = text.replaceAll(this.#nonLatinCharacters, ' ').trim()
    const words = cleanedText.split(/\s+/)

    let numberOfWords = 0
    for (const word of words) {
      if (word.length > 0) {
        numberOfWords++
      }
    }

    return numberOfWords
  }

  numberOfPeriods (text: string): number {
    this.assertIsString(text)

    let numberOfPeriods = 0

    for (const character of text) {
      if (character === '.') {
        numberOfPeriods++
      }
    }

    return numberOfPeriods
  }
}
