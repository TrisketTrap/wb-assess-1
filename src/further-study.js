// EXTRA CREDIT 

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    tempArr = [];
    for (const x of array1) { //goes through every item in array 1
        for (const y of array2) { //goes through items in array 2
            if(y === x){
                tempArr.push(y); //if an item in y matches x push it to tempArr
            }
        }
        
    }
    return tempArr
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) { /*loops through and holds the first value of i in x then i keeps looping and checking if it == x. 
if i == x then add one to the counter(y). when the loop goes through each letter in commonStrings reset counters and update x to the new I lette value*/
    z = 0;//will ++ when i === the held value of x
    let x = i;//holds the letter value of i
    for (const i of commonStrings) { //each loop i goes through commonStrings
        i++;
        if(i != x){

        }
        
    }   
    



}

export { commonStrings, compressString, divisibleByEither };
