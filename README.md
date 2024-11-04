# 1DV610-L1
Laboration 1 in course 1dv610.

# Text Analyzer
The Text Analyzer module provides a comprehensive set of tools for basic text analysis. This module includes functions for counting various elements in a text, such as words, periods, and sentences. Additionally, it features functions to create frequency maps for both words and characters.

## Features
- Count Words: Calculates the total number of words in the provided text.
- Count Sentences: Determines the number of sentences based on punctuation.
- Frequency Maps: Generates frequency maps to analyze the occurrence of words and characters within the text.

## Dependencies

There is currently no external dependencies needed to use this module.

## How to use the module

**To use Text Analyzer**, import the library as a named import:
``` javascript
import { TextAnalyzer } from 'textAnalyzer'
```
then, instantiate a new instance of the Text analyzer:
``` javascript
const textAnalyzer = new TextAnalyzer()
```

**To build the module** from typescript to javascript:
```
npm run build
```
The resulting files will reside in the dist folder, which contain the whole module. The index.js file is only used to import the module and then export it, so one can directly import the folder to use the module and not a specific file.

**To test the application:**
```
npm run test
```
This is an initial set of tests that are ready for use. While these tests provide a solid foundation for validation, there are plans to expand and enhance coverage in the future.

**Currently all tests except one is working as displayed in the screenshot:**<br><br>
![Tests in Jest](tests-running-in-jest.png)

## List of Available Methods

| Method     | Arguments   | Description   |
|------------|-------------|---------------|
| **count.words** | text: string | Counts the number of words in a string. Non-Latin characters are removed before counting. Returns an integer representing the total amount of words. |
| **count.periods** | text: string | Counts the number of periods in a string. Returns an integer representing the total amount of periods. |
| **count.charactersIncludingSpaces** | text: string | Counts the number of characters in a string. Includes spaces. Returns an integer representing the total amount of characters. |
| **count.charactersExcludingSpaces** | text: string | Counts the number of characters in a string. Excluding spaces. Returns an integer representing the total amount of characters. |
| **count.vowels** | text: string | Counts the number of vowels in a string. Only latin characters without accents are included. Returns an integer representing the total amount of vowels. |
| **count.sentences** | text: string, customAbbreviations: string[] | Counts the number of sentences in a string. Excluding custom abbreviations. **(Abbreviations does not currently work, so don't use that feature.)** |
| **frequency.words** | text: string | Calculates the frequency of words in the text. Return a Map representing the frequency words.|
| **frequency.characters** | text: string | Calculates the frequency of characters in the text. Returns a Map representing the frequency of characters |
| **frequency.mostCommonWords** | text: string, amount: number | Calculates the frequency of the most common words. Returns a Map representing the frequency of the most common words. Amount of words that are returned are determined by the amount value. If no value is provided, all words will be returned. |
| **average.wordLength** | text: string | Calculates the average length of words of a text. Returns a decimal number with one decimal, representing the average word length. |