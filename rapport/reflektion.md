## Clean Code Kapitel 2
| Metod | Förklaring | Reflektion |         
|-|-|-|
|**count.Words(text: string)**| Denna metoden har som uppgift att beräkna de ord i textsträngen som skickas in som argument till metoden. | En av de viktigaste principerna för clean code är att metodnamn ska avslöja dess syfte **(Intention-revealing Names sidan. 18)**. Namnet för denna metod förklarar inte vad dess syfte är, utan är beroende av att den omkringliggade koden lägger till `count` som en getter, varpå det blir tydligare vad metodens funktion är, då man använder `count.words` istället för enbart `words`. |
|**count.charactersIncludingSpaces (text: string)**| Denna metoden har som uppgift att räkna alla tecken som återfinns i textsträngen som skickas in som argument. | Enligt Clean code ska man undvika att sprida desinformation **(Avoid disinformation sidan. 19)**. Genom att inkludera `includingSpaces` som postfix för metodnamnet så blir det väldigt tydligt att det är just tecknen som beräknas och att mellanslag är inkluderat i de tecknen som beräknas. Utan denna postfix hade det varit otydligt för användaren av metoden, om metoden inkluderar mellanslag eller inte. En annan princip enligt Clean Code är att man vill att namn ska ha en meningsfull distinktion **(Meaningful Distinction sidan. 20)**. Här förmedlar `IncludingSpaces` med tydlighet att mellanslag är inkluderat i det returnerade värdet. Detta göra också metoden unik och skiljer den från den andra metoden som heter `charactersExcludingSpaces` som exkluderar mellanslag. Men man kan också tänka sig att man använder sig av en boolean argument för att bestämma om mellanslag ska inkluderas eller ej.|
|**count.sentences (text: string, customAbbreviations: string[] = [])**| Denna metoden används för att beräkna antalet meningar i en sträng. För att exkludera förkortningar som ofta slutar på en punkt kan man här skicka med en lista som argument över de förkortningar som man använder i texten.| Att använda sig av sökbara namn är något som Clean Code förespråkar **(Use Searchable Names sidan. 22)**. Metodnamnet `count.sentences` visar prov på denna princip genom användningen av de två distinkta termerna `count` och `sentences` som tillsammans bildar ett tydligt och unikt namn som är lätt att söka efter och förstå. Genom att använda ett beskrivande namn kan utvecklare snabbt identifiera metodens syfte utan att behöva gräva sig djupare ner i koden. En annan princip inom Clean Code är att man vill undvika förkortningar **(Avoid Encodings sidan. 23)**. I fallet med `count.sentences` finns inga förkortningar eller kodord, vilket är positivt i denna bemärkelsen. Man skulle dock kunna argumentera att metodnamnet kan leda till viss förvirring, då `count.sentences` består utav en getter som returnerar ett annat objekt som man sedan anropar. Då kommer vi osökt in på principen att man bör undvika mental kartläggning **(Avoid Mental Mapping sidan. 25)**. Även om `count.sentences` är ett tydligt namn, Kan det kräva en kognitiv ansträngning av utvecklaren, eftersom det förmodligen inte är ett vanligt förekommande mönster och kräver en förståelse om hur anropet är uppbyggt. |
|**frequency.mostCommonWords (text: string, amount: number)**| Denna metoden används för att beräkna hur många gånger de olika orden i textsträngen förekommer individuellt och sedan plocka ut de ord som förekommer mest frekvent. `amount` beskriver hur många ord som returneras | Namnet `frequency.mostCommonWords` förmedlar en meningsfull distinktion **(Meaningful Distinction sidan. 20)**. Metoden returnerar inte bara en frekvenskarta över hur ofta ord forekommer, utan specifikt de ord som förekommer mest. Detta gör att metoden är lätt att särskilja från metoden `frequency.words` som returnerar en frekvenskarta över samtliga ord. Genom att ge metoden ett distinkt namn minskar risken för att missförstånd uppstår och underlättar för utvecklaren att snabbt identifiera korrekt metod för sitt behov. |
|**CountAnalysis**| Detta objekt är en samling av metoder som utför beräkningar av antal. Exempelvis: antalet ord eller meningar i en textsträng. |Namnet `CountAnalysis` är abstrakt och avslöjar inte direkt sitt syfte, vilket går emot principen i Clean Code **(Intention-revealing names sidan 18)**. Vid en första anblick förstår man att något beräknas, men det är otydligt vad som faktiskt analyseras eller räknas. Problemet är att objektet är stort och innehåller många olika typer av beräkningar, vilket gör det svårt att specificera syftet mer än på ett abstrakt plan. För att göra det tydligare kan det vara bättre att dela upp `CountAnalysis` i mindre, mer specifika objekt där varje objekt hanterar en viss typ av beräkning, istället för att samla allt i ett stort objekt.|

### Reflektion kapitel 2

Jag tycker att kapitel 2 har varit mycket intressant och gett mig en djupare förståelse för hur man kan undvika överflödiga typer i kod. En insikt är att man inte alltid behöver specificera vilken typ av objekt en metod hanterar, så länge metodnamnet är tydligt i förhållande till objektet. Ett exempel på detta är användningen av samma metodnamn för samma koncept på olika objekt. Om man vill lägga till något i objekt X kan man använda en metod som heter add, och om man vill utföra samma koncept på objekt Y kan man också använda add där. Genom att hålla namnen konsekventa och fokusera på metodens syfte, blir koden tydlig och lättläst, utan att man behöver förklara i metodnamnet vilken typ som adderas.

## Clean Code Kapitel 3
| Metod | Antal rader | Reflektion |         
|-|:-:|-|
|**_createSortedTokenFrequencyMap (tokens: string[])**| 5 | Metoden `_createSortedTokenFrequencyMap` anropar flera andra metoder, vilket innebär att den utför mer än en uppgift, och därmed går emot principen **(Do One Thing sidan. 35)**. Den skapar en frekvenskarta genom att anropa `_createTokenFrequencyMap`, sorterar den med `_sortTokenFrequencyMap`, och returnerar resultatet. Anledningen till denna design är att flera metoder använder den för att skapa frekvenskartor över olika typer av strängar och tokens.<br>Även om man skulle kunna använda de ingående metoderna separat, är det bättre att samla dem i en metod för att undvika **(Don't Repeat Yourself sidan. 48)**, särskilt när samma logik tillämpas på flera ställen, som i mitt fall.<br>Metoden håller sig på en nivå av abstraktion **(One Level of Abstraction per Function sidan. 36)** som gör den begriplig och användbar. Därför anser jag inte att det är fel att behålla den som den är, men det är definitivt möjligt att använda metoderna separat om man önskar en mer modulär struktur. |
|**_calculateTotalLengthOfWords (words: string[])**| 8 | Metoden `_calculateTotalLengthOfWords` utför en klart definierad uppgift: Den beräknar det total antalet tecken av samtliga ord i den medföljande listan och returnerar resultatet. Detta följer principen att en metod endast ska ha ett ansvar **(Do One Thing sidan. 35)**.<br>Metoden håller sig på en och samma nivå av abstraktion **(One Level of Abstraction per Function sidan. 36)** och har inga sidoeffekter, allting som sker, sker inuti metoden. **(Avoid Side Effects sidan. 44)**. |
|**_removeCustomAbbreviations (text: string, customAbbreviations: string[])**| 8 |Metoden `_removeCustomAbbreviations` har ett klart definierat syfte: den tar bort anpassade förkortningar från en given text och returnerar den modifierade strängen **(Do One Thing sidan. 35)**. Den påverkar inte den ursprungliga texten utan genererar istället en ny sträng som representerar texten utan de angivna förkortningarna. Metoden har inga sidoeffekter, vilket bidrar till dess tydlighet och enkelhet **(Avoid Side Effects sidan. 44)**.<br>Däremot har metoden två argument, vilket står i kontrast till principen om dyadiska funktioner. Denna princip hävdar att metoder med flera argument är svårare att förstå och använda än de med endast ett argument **(Dyadic Functions sidan. 42)**. Även om det mest optimala är att undvika argument helt, anser jag att det i detta fall är berättigat med två argument. Metoden behöver både texten som ska bearbetas och en lista över de förkortningar som ska tas bort för att fungera korrekt, även om den för närvarande har en bugg som påverkar dess funktionalitet.<br>Man skulle dock kunna överväga att skicka in dessa som ett samlingsobjekt, vilket skulle kunna bidra till att hålla sig närmare Clean Code-principerna.|
|**_sliceWordFrequencyMap (wordMap: Map<string, number>, amount: number)**| 16 |Metoden `_sliceWordFrequencyMap` har ett klart definierat syfte: att skära ut en delmängd av en frekvenskarta baserat på ett angivet antal och returnera resultatet **(Do One Thing sidan. 35)**. Den modifierar inte den ursprungliga frekvenskartan, utan skapar istället en ny frekvenskarta som den fyller med den utskurna datan **(Avoid Side Effects sidan. 44)**.<br>Metoden håller sig konsekvent på en nivå av abstraktion **(One Level of Abstraction per Function sidan. 36)**, vilket gör dess syfte och struktur lätt att förstå. Namnet `_sliceWordFrequencyMap` är också beskrivande och tydligt, vilket gör det enkelt att förstå vad metoden gör **(Use Descriptive Names sidan. 39)**. Dessutom används termen `slice`, ett tekniskt begrepp som är allmänt vedertaget inom programmering **(Use Solution Domain Names sidan. 27)**, vilket ytterligare understryker metodens syfte och bidrar till läsbarheten.<br>Metoden har två argument, vilket gör den till en dyadisk funktion **(Dyadic Functions sidan. 42)**. Även om båda argumenten (frekvenskartan och antalet element som ska skäras ut) är nödvändiga för metodens funktionalitet, skulle man kunna överväga att använda ett samlingsobjekt för dessa argument. Detta skulle kunna omvandla metoden till en monadisk form **(Common Monadic Forms sidan. 41)** och därmed förbättra läsbarheten enligt Clean Code-principerna.|
|**assertIsPositiveNumber (value: unknown)**| 5 |Metoden `assertIsPositiveNumber` har ett tydligt syfte: att säkerställa att det inmatade värdet är ett positivt tal. Om värdet inte uppfyller kraven kastas ett undantag, vilket följer Clean Code-principen att en metod ska göra endast en sak **(Do One Thing sidan 35)**, i detta fall validera att värdet är positivt.<br>Metoden håller sig konsekvent på samma abstraktionsnivå **(One Level of Abstraction per Function sidan 36)** och har inga sidoeffekter **(Avoid Side Effects sidan 44)**, eftersom den varken ändrar eller påverkar något utanför sin egen kontext. Den godkänner tyst värdet om det är korrekt, eller kastar ett undantag om det inte är det.<br>Metoden är lätt att förstå och använder bara ett argument, vilket följer Clean Code-rekommendationen om att minimera antalet argument för enkelhetens skull **(Common Monadic Forms sidan 41)**.|

### Reflektion Kapitel 3

En brist som kapitel 3 specifik har lärt mig är att dela upp metoderna i mindre metoder **(Small sidan. 34)** och att låta metoderna enbart ha ett ansvar **(Do One Thing sidan. 35)**. Det är nog den viktigaste lärdomen, samt att använda objekt istället för argument **(Argument Objects sidan 43)**.

### Reflektion egen kodkvalitet

I tabellerna har jag beskrivit ett mönster jag använde i huvudmodulen `TextAnalyzer`. Mönstret bygger på att `TextAnalyzer` använder getters för att hämta specifika objekt, vilket innebär att ett anrop kan se ut så här: `TextAnalyzer.count.words(words: string)`. Jag har dock insett att detta mönster inte är optimalt. Varje anrop till gettern skapar ett nytt objekt, vilket kan vara ineffektivt. Dessutom riskerar det här mönstret att skapa otydlig kod om användaren sparar objektet som en variabel — då är det inte omedelbart klart vad metoden `words()` egentligen gör.

Om jag skulle skriva om modulen skulle jag istället dela upp funktionaliteten i separata moduler och låta användaren importera enbart de moduler som behövs. På så sätt blir koden både mer effektiv och tydligare att använda. Jag skulle också namnge publika metoder mer beskrivande, enligt rekommendationen att använda verb och nyckelord för att klargöra metodens syfte **(Verbs and Keywords, sidan 43)**. Exempelvis skulle jag byta namn från `words(text: string)` till `countWords(text: string)`, vilket är mycket tydligare för användaren.

Sammanfattningsvis var det ett mindre bra designval. Jag borde ha varit mer kritisk till konsekvenserna av det här "mönstret" redan från början, men det har varit en lärorik erfarenhet.

Utöver denna insikt har jag också förbättrat min förmåga att bryta ner koden i mindre delar och att hålla metoderna på en enhetlig abstraktionsnivå, i enlighet med principen om en nivå av abstraktion per funktion **(One Level of Abstraction per Function, sidan 36)**. Dessutom har jag börjat skriva kortare metoder än tidigare, vilket följer principen om små funktioner **(Small, sidan 34)**. Även om det inte alltid är nödvändigt att göra varje metod extremt liten, har jag märkt att det ofta gör koden betydligt mer lättförståelig.

Jag har även minskat användandet av många argument **(Dyadic Functions, Triads, sidan 42)** och börjat överväga att skapa objekt även för enklare data snarare än att förlita mig på flera parametrar, i enlighet med principen om att använda **(Argument Objects sidan 43)** för tydligare kodstruktur.