import { ArrayValidator } from './lib/arrayValidator.js'

export const arrayValidator = new ArrayValidator()

console.log(arrayValidator.isAlphaNumericOnly(['helloHowAreYouToday0235239']))
