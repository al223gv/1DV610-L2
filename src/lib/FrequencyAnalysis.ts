export class FrequencyAnalysis {
  words (text: string): Map<string, number> {
    const words = this._extractWordsFromText(text)

    const wordFrequencyMap = this._createWordFrequencyMap(words)

    const sortedWordFrequencyMap = this._sortWordFrequencyMap(wordFrequencyMap)

    return sortedWordFrequencyMap
  }

  mostCommonWords (text: string, n: number): string[] {
    const words = this.words(text)

    const mostCommonWords = Array.from(words.keys()).slice(0, n)

    return mostCommonWords
  }

  _stripNonLatinCharacters (text: string) {
    const nonLatinCharacters = new RegExp('[^a-zA-Z ]', 'g')

    const latinCharactersAndSpaces = text.replaceAll(nonLatinCharacters, '')

    return latinCharactersAndSpaces
  }

  _stripMultipleSpaces (text: string) {
    const multipleSpaces = new RegExp('\\s+', 'g')

    const singleSpaced = text.replaceAll(multipleSpaces, ' ')
      .trim()
    
    return singleSpaced
  }

  _extractWordsFromText (text: string): string[] {
    const textWithoutNonLatinCharacters = this._stripNonLatinCharacters(text)

    const textWithSingleSpaces = this._stripMultipleSpaces(textWithoutNonLatinCharacters)

    const words = textWithSingleSpaces.split(' ')

    return words
  }

  _createWordFrequencyMap(words: string[]): Map<string, number> {
    const wordMap: Map<string, number> = new Map<string, number>()

    for (const word of words) {
      const wordFrequency = wordMap.get(word) ?? 0
      wordMap.set(word, wordFrequency + 1)
    }

    return wordMap
  }

  _sortWordFrequencyMap (wordFrequencyMap: Map<string, number>): Map<string, number> {
    const sortedWordFrequencyMap = new Map([ ...wordFrequencyMap.entries() ]
      .sort((a, b) => b[1] - a[1]))
    
    return sortedWordFrequencyMap
  }
}
