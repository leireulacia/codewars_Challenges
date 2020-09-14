var tvRemote = function (word) {

    //javascript MDN array methods
    //Array.includes();
    //Array.findIndex();
    //Get the strating position in rows and columns
    //look at the first character of the word, and get the rows and columns
    //Caluclate how many moves across (horizontal)
    //Caluclate how many moves up and down (vertical)
    //  const rowCount = keyboard.findIndex(array => array.includes("a"))
    //  const columnCount = keyboard[rowCount].findIndex(item => item === "a")
    //  console.log(rowCount, columnCount);

    const keyboard = [
        ["a", "b", "c", "d", "e", "1", "2", "3"],
        ["f", "g", "h", "i", "j", "4", "5", "6"],
        ["k", "l", "m", "n", "o", "7", "8", "9"],
        ["p", "q", "r", "s", "t", ".", "@", "0"],
        ["u", "v", "w", "x", "y", "z", "_", "/"]
    ];

    const charArray = word.split(''); //Return the array of letters. It is const because I have never need to refined againb.
    console.log(charArray);
    let count = 0;
    let currentRow = 0;
    let currentColumn = 0;

 
    for (let indexChar = 0; indexChar < charArray.length; indexChar++) {
        let actualChar = charArray[indexChar];
        console.log("Current letter: " + actualChar);

        for (let indexRow = 0; indexRow < keyboard.length; indexRow++) {
            indexColumn = keyboard[indexRow].findIndex(item => item === actualChar); // findIndex return the index of the value define inside the function

            if (indexColumn != -1) {
                count = count + Math.abs(currentRow - indexRow) + Math.abs(currentColumn - indexColumn); // Math.abs return the absolute value of the number
                currentRow = indexRow;
                currentColumn = indexColumn;
                console.log("Current sum: " + count);
            }
        }
    }

    count +=charArray.length;
    console.log("Final result" + count);

    return count;
}

tvRemote("codewars");