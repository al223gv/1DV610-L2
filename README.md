# 1DV610-L1
Laboration 1 in course 1dv610.

# Text Analyzer
The Text Analyzer module offers a set of tools for basic text analysis. It includes functions to count words, periods, sentences, and other textual elements. A list of the available public methods is provided below.

## Dependencies

There is currently no external dependencies needed to use this module.

## How to use the module

To use Text Analyzer, import the library as a named import:
``` javascript
import { TextAnalyzer } from 'textAnalyzer'
```
then, instantiate a new instance of the Text analyzer:
``` javascript
const textAnalyzer = new TextAnalyzer()
```

## List of Available Methods

| Method     | Arguments   | Description   |
|------------|-------------|---------------|
| count.words | text: string | Counts the number of words in a string. Non-Latin characters are removed before counting. Returns an integer representing the total amount of words. |
| count.periods | text: string | Counts the number of periods in a string. Returns an integer representing the total amount of periods. |
| count.charactersIncludingSpaces | text: string | Counts the number of characters in a string. Includes spaces. Returns an integer representing the total amount of characters. |
| count.charactersExcludingSpaces | text: string | Counts the number of characters in a string. Excluding spaces. Returns an integer representing the total amount of characters. |
| count.vowels | text: string | Counts the number of vowels in a string. Only latin characters without accents are included. Returns an integer representing the total amount of vowels. |
| count.sentences | text: string, customAbbreviations: string[] | Counts the number of sentences in a string. Excluding custom abbreviations. |
| frequency.words | text: string | Calculates the frequency of words in the text. Return a Map representing the frequency words.|
| frequency.characters | text: string | Calculates the frequency of characters in the text. Returns a Map representing the frequency of characters |
| frequency.mostCommonWords | text: string, amount: number | Calculates the frequency of the most common words. Returns a Map representing the frequency of the most common words. Amount of words that are returned are determined by the amount value. If no value is provided, all words will be returned. |
| average.wordLength | text: string | Calculates the average length of words of a text. Returns a decimal number with one decimal, representing the average word length. |