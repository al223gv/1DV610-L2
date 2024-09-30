import { TextAnalyzer } from "./TextAnalyzer.js";

const textAnalyzer = new TextAnalyzer()

console.log(textAnalyzer.count.numberOfWords('hello, hello, hello'))
console.log(textAnalyzer.count.numberOfWords('low!high croocodile,,,,KepS.,.,.!!Gris'))
console.log(textAnalyzer.count.numberOfPeriods('low!high croocodile,,,,KepS.,.,.!!Gris'))
console.log(textAnalyzer.count.numberOfPeriods('...gdf..df.'))