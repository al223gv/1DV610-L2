export class TextAnalyzerUtils {
  public assertIsString (value: unknown): void {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not a string.')
    }
  }

  public assertIsPositiveNumber (value: unknown): void {
    if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) {
      throw new TypeError('Value is not a positive number.')
    }
  }

  public removeNonLatinExceptAllowed (text: string, allowed?: string): string {
    const allowedCharacters = allowed ?? ''

    const disallowedCharactersRegex = new RegExp(`[^a-zA-Z${allowedCharacters}]`, 'g')

    const cleanedText = text.replace(disallowedCharactersRegex, ' ')

    return cleanedText
  }

  public removeMultipleSpaces (text: string): string {
    const multipleSpaces = new RegExp('\\s+', 'g')

    const singleSpaced = text.replace(multipleSpaces, ' ')
      .trim()
    
    return singleSpaced
  }

  public extractWordsFrom (text: string): string[] {
    const textWithoutNonLatinCharacters = this.removeNonLatinExceptAllowed(text, ' ')

    const textWithSingleSpaces = this.removeMultipleSpaces(textWithoutNonLatinCharacters)

    return textWithSingleSpaces.split(' ')
  }

  public toLowercase(tokens: string[]): string[] {
    return tokens.map(token => token.toLowerCase())
  }
}