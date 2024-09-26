export class ArrayValidator {
  #alphaNumericRegex: RegExp

  constructor () {
    this.#alphaNumericRegex = /^[a-zA-Z0-9]+$/
  }

  private assertIsArray(inputArray: unknown[]): void {
    if (!Array.isArray(inputArray)) {
      throw new Error('Argument is not an array')
    }
  }

  isAlphaNumericOnly(inputArray: string[]): boolean {
    this.assertIsArray(inputArray)

    for (const arrayValue of inputArray) {
      if (typeof arrayValue !== 'string' || !this.#alphaNumericRegex.test(arrayValue)) {
        return false
      }
    }

    return true
  }
}
