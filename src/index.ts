import { Validator } from './lib/validator.js'

export const validator = new Validator()

console.log(validator.isArray.isAlphaNumericOnly([ 'AlphaNumeric', '0123910' ]))
