import { ArrayValidator } from "./arrayValidator";

export class Validator {
  #arrayValidator: ArrayValidator

  constructor () {
    this.#arrayValidator = new ArrayValidator()
  }

  get isArray() {
    return this.#arrayValidator
  }
}