function streamOfLetters (input) {
        // прочитаме входните данни (масив от стрингове)
        let str = input
          .filter(line => line.match(/^[a-z]$/i)) // оставяме само тези, които са еднобуквени (a-z, A-Z)
          .join(""); // сливаме ги в един стринг, напр. "Hnellooctchoerene"
      
        // функция, намираща първият индекс, на който се намира всеки от тези символи 'n', 'o' и 'c'
        // ако някой го няма, вместо индекс ще има -1
        // връща масив от индекси, напр. [1, 5, 7] за "Hnellooctchoerene"
        const getIndexes = (text) => [text.search(/n/), text.search(/o/), text.search(/c/)];
        
        let message = '';
      
        let indexes;
        while (Math.min(...(indexes = getIndexes(str))) >= 0) { // Math.min връща най-малкото число, 
                                            // ако е по-голямо от -1, значи и трите символа са намерени
          let chars = Math.max(...indexes) + 1; // вземаме най-големия индекс и го увеличаваме с 1 
                                                // за да получим броя символи, които да отрежем от началото
                                                // напр. Math.min(1, 5, 7) -> 7; 7 + 1 = 8 символа;
       
          let word = str.substring(0, chars) // отрязваме думата - напр. "Hnellooc"
            .replace(/n/, "") // заменяме първото срещане на 'n' с '' -> "Hellooc"
            .replace(/o/, "") // заменяме първото срещане на 'o' с '' -> "Helloc"
            .replace(/c/, "");// заменяме първото срещане на 'c' с '' -> "Hello"
                              // и получаваме декриптираната дуma
      
          message += word + ' '; // добавяме я към message + спейс -> message = "Hello "
      
          str = str.substring(chars); // премахваме вече обработените символи от str
                                      // "Hnellooctchoerene" -> "tchoerene"
        }
      
        console.log(message); // принтираме резултата, след като сме приключили с извличането на всички думи
}

streamOfLetters(["H","n","e","l","l","o","o","c","t","c","h","o","e","r","e","n","e","End"]);


function StreamOfLetters(input) {
    let letter = input.shift();
 
    let nIsAppeared = false;
    let cIsAppeared = false;
    let oIsAppeared = false;
    let printLine = '';
    let newWord = '';
 
    while (letter !== 'End') {
        let firstCondition = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
        let secondCondition = letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;
 
        if (firstCondition || secondCondition) {
            if (letter === 'n') {
                if (nIsAppeared) {
                    newWord += letter;
                }
                nIsAppeared = true;
            } else if (letter === 'c') {
                if (cIsAppeared) {
                    newWord += letter;
                }
                cIsAppeared = true;
            } else if (letter === 'o') {
                if (oIsAppeared) {
                    newWord += letter;
                }
                oIsAppeared = true;
            } else {
                newWord += letter;
            }
 
            if (nIsAppeared && cIsAppeared && oIsAppeared) {
                printLine += `${newWord} `;
                newWord = '';
                nIsAppeared = false;
                cIsAppeared = false;
                oIsAppeared = false;
            }
        }
 
        letter = input.shift();
}