# Reflektion inlämning L3

## Kapitel 2, Meaningful Names
Vid namngivning har jag dels använt mig av "Solution Domain Names" som t.ex. ColorWrapper eller ScoreFactory. Dessa förmedlar dessutom "intention" eftersom namnen är så pass vedertagna att programmerar vet vad en wrapper eller factory är. Dessutom har jag försökt skapa "meaningful context" genom att ha dir ThemeToName. Tanken var att nya fråge-kategorier får egen dir men mer eller mindre har samma namn på filerna inuti dir. Detta gjorde också att jag kom run "dont add gratuitious context" eftersom jag annars t.ex. hade behövt prefixa alla filer som hörde samman. Vissa namn är jag medveten om att dom är bristande, t.ex. QuestionEnum. Att låta den sluta på Enum är ganska onödigt. När jag skapade filen så hade jag redan en klass som hette Question och jag valde då den lata vägen att kalla den nya filen för Enum men det är egentligen bara noise.

## Kapitel 3, Functions
Jag har försökt och tycker att jag lyckats hålla mig till majoriteten av alla regler i detta kapitel med vissa undantag. T.ex. så har metoden Score.addResult() en "flag argument". Detta valde jag att ha för att den anropande koden skulle bli så bra som möjligt. Detta gör dock att addResult inte följer "do one thing". Vissa metoder är också dyadic, detta blev så när jag skulle bryta ut metoder från befintliga metoder för att hålla dom korta och på en abstraktions nivå. Kanske kunde jag ha skapat medlemsvariabler för att undgå detta men då kanske dom enbart hade använts av ett fåtal metoder vilket innebär lägre cohesion.

## Kapitel 4, Comments
Jag valde att skriva relativt få kommentarer. Eftersom applikationen är skriven i javascript så har majoriteten av metoderna och egenskaperna jsdoc typer. Detta gjorde jag för att få bättre hjälp av IDE:n. Eftersom applikationen är relativt simpel så tycker jag att jag kunde förmedla det mesta genom namngivning. Jag tänkte även att eftersom applikationen är en konsol app så hade jag inget direkt publikt API som jag behövde förklara. Sammanfattningsvis gjorde jag bedömningen att lägga till fler kommentarer enbart hade skapat t.ex. redundant comments eller noise.

## Kapitel 5, Formatting
Reglerna i detta kapitel tycker jag också att jag följde relativt bra. Saker som hör samman är nära varandra, caller above callee och saker som är orelaterade har white space mellan. 

## Kapitel 6, Objects and Data Structures
Jag har försökt att särskilja objekt från data strukturer så mycket som möjligt för att undvika hybrids. Vissa klasser är rena data strukturer, t.ex. Rgb och Option. Andra klasser är objekt som abstraherar bort "the inner workings".

## Kapitel 7, Error Handling
Jag har väldigt lite error handling i min applikation. Det är troligtvis det jag hade gjort om mest i applikationen om jag skulle göra om den. Eftersom applikationen är relativt liten och inte tar "fri" user input så bestämde jag mig för att strunta i mycket av error handling. Det jag tror den skulle ha mest nytta av vore validering av argument, dessa skulle vara egna metoder som kastar undantag (ej undefined eller error codes).

## Kapitel 8, Boundaries
Eftersom jag använt tredje parts kod i min applikation, t.ex. @inquirer/prompts eller modulen jag skapat color-theme-generator så har jag tänkt mycket på "clean boundaries" och att inte överkomplicera min egen kod. Så till varje tredjeparts kod så har jag wrapper klasser som jag dels kunnat skapa signaturer som jag vill använda till denna applikation och det gör även att jag enbart "släpper igenom" den funktionalitet jag har nytta av. 

## Kapitel 9, Unit Tests
Denna applikation har inga enhets test utan enbart manuella testfall. 


## Kapitel 10, Classes
Jag tycker att jag följt reglerna i detta kapitel hyfsat bra. Jag har t.ex. följt den rekommenderade strukturen med varibaler, metoder, caller above callee. Klasserna är relativt små och jag har försökt följt SRP så att varje klass enbart har ett ansvar och är cohesive. Det jag funderade på hur jag skulle göra och som jag aldrig kom fram till var hur jag skulle hantera Dependency Inversion Principle. Eftersom javascript inte har interfaces och abstract klasser så kunde jag inte avnända det. Jag försökte lite grann med sub- och superklasser men tyckte jag inte lyckade så bra.

## Kapitel 11, Systems
Jag försökte att skilja på construction från use genom att ha factories och dependency injection. Jag skapade även en PlayerFactory som agerar som setup i index.js. Jag skulle inte säga att den är särskiljt bra eftersom den är full av hård-kodad construction men den är kanske okej eftersom den koden måste finnas någonstans. I index.js så har jag så minimalt med kod som möjligt där jag skapar det jag behöver (genom PlayerFactory) och sedan bara startar applikationen. Jag implementerade ju enbart ett par av kraven men hade då i åtanke hur jag skulle organisera allt för att på ett någorlunda enkelt sätt kunna skala upp applikationen. 