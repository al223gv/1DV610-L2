export class TextAnalyzerUtils {
  assertIsString (value: unknown): void {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not a string.')
    }
  }

  assertIsPositiveNumber (value: unknown): void {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
      throw new TypeError('Value is not a positive number.')
    }
  }

  removeNonLatinExceptAllowed (text: string, allowed?: string): string {
    const allowedCharacters = allowed ?? ''

    const disallowedCharactersRegex = new RegExp(`[^a-zA-Z${allowedCharacters}]`, 'g')

    const cleanedText = text.replace(disallowedCharactersRegex, ' ')

    return cleanedText
  }

  stripMultipleSpaces (text: string): string {
    const multipleSpaces = new RegExp('\\s+', 'g')

    const singleSpaced = text.replace(multipleSpaces, ' ')
      .trim()
    
    return singleSpaced
  }

  extractWordsFromText (text: string): string[] {
    const textWithoutNonLatinCharacters = this.removeNonLatinExceptAllowed(text, ' ')

    const textWithSingleSpaces = this.stripMultipleSpaces(textWithoutNonLatinCharacters)

    const words = textWithSingleSpaces.split(' ')

    return words
  }
}