import { util } from "./Util.js"

export class FrequencyAnalysis {
  words (text: string): Map<string, number> {
    const wordFrequencyMap = this._processWordFrequencies(text)

    return wordFrequencyMap
  }

  characters (text: string): Map<string, number> {
    const characters = this._extractCharactersFromText(text)

    const characterFrequencyMap = this._createTokenFrequencyMap(characters)

    const sortedCharacterFrequencyMap = this._sortTokenFrequencyMap(characterFrequencyMap)

    return sortedCharacterFrequencyMap
  }

  mostCommonWords (text: string, n: number): Map<string, number> {
    util.assertIsPositiveNumber(n)

    const wordFrequencyMap = this._processWordFrequencies(text)

    const mostCommonWords = this._sliceWordFrequencyMap(wordFrequencyMap, n)

    return mostCommonWords
  }

  _processWordFrequencies (text: string): Map<string, number> {
    const words = this._extractWordsFromText(text)

    const wordFrequencyMap = this._createTokenFrequencyMap(words)

    const sortedWordFrequencyMap = this._sortTokenFrequencyMap(wordFrequencyMap)

    return sortedWordFrequencyMap
  }

  _sliceWordFrequencyMap (wordMap: Map<string, number>, n: number): Map<string, number> {
    util.assertIsPositiveNumber(n)

    const slicedWordMap: Map<string, number> = new Map<string, number>()

    const frequencyMapAsArray = Array.from(wordMap)

    for (let i = 0; i < n; i++) {
      if (i >= frequencyMapAsArray.length) {
        break;
      }

      slicedWordMap.set(...frequencyMapAsArray[i])
    }

    return slicedWordMap
  }

  _stripNonLatinCharacters (text: string) {
    const nonLatinCharacters = new RegExp('[^a-zA-Z ]', 'g')

    const latinCharactersAndSpaces = text.replace(nonLatinCharacters, '')

    return latinCharactersAndSpaces
  }

  _stripMultipleSpaces (text: string) {
    const multipleSpaces = new RegExp('\\s+', 'g')

    const singleSpaced = text.replace(multipleSpaces, ' ')
      .trim()
    
    return singleSpaced
  }

  _extractWordsFromText (text: string): string[] {
    const textWithoutNonLatinCharacters = this._stripNonLatinCharacters(text)

    const textWithSingleSpaces = this._stripMultipleSpaces(textWithoutNonLatinCharacters)

    const words = textWithSingleSpaces.split(' ')

    return words
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
