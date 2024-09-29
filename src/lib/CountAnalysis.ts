export class CountAnalysis {
  #nonLatinCharacters: RegExp

  constructor () {
    this.#nonLatinCharacters = new RegExp('[^a-zA-Z ]', 'g')
  }

  numberOfWords (text: string): number {
    if (typeof text !== 'string') {
      throw new TypeError('Text is not of type string.')
    }

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
}
