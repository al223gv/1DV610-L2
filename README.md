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
| count.numberOfWords | text: string | Counts the number of words in a string. Non-Latin characters are removed before counting. Returns an integer representing the total amount of words. |
| count.numberOfPeriods | text: string | Counts the number of periods in a string. Returns an integer representing the total amount of periods. |
| | | |
