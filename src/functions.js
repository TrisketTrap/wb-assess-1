// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);

import { commonStrings, compressString } from "./further-study";

//   => 5
function divide(x, y) {
 return parseInt(x)/parseInt(y);
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  x = parseInt(x)+parseInt(y);
  return parseInt(x)/2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if(x-y < 0.001){
    approximatelyEqual = true;
    return approximatelyEqual;
  }
}




// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
fullName = firstName + ` ` + lastName;

return fullName;
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'

// let generateSentence = (person, beverage, location) => person + ` was drinking ` + beverage + ` at ` + location

function generateSentence(person, beverage, location) {
  // per = person;
  // bev = beverage;
  // loc = location;
  // generate = per + ` was drinking ` +  bev + ` at ` + loc;
  // return generate;

  // generateSentence = person + ` was drinking ` + beverage + ` at ` + location`.`;
  // return generateSentence;

  generateSentence = person + ` was drinking ` + beverage + ` at ` + location +  `.`;
   
  return generateSentence;

  // generateSentence = `${person} was drinking ${beverage} at ${location}.`
  // return generateSentence
}  


// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');  
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let x = 0;
  while(x < censorVowels.length()){//was () the fix
    if(censorVowels[x] === `a`){
      censorVowels[x] = `*`;
      x++;
    }
    else if(censorVowels[x] === `e`){
      censorVowels[x] = `*`;
      x++;
    }
    else if(censorVowels[x] === `i`){
      censorVowels[x] = `*`;
      x++;
    }
    else if(censorVowels[x] === `o`){
      censorVowels[x] = `*`;
      x++;
    }
    else if(censorVowels[x] === `u`){
      censorVowels[x] = `*`;
      x++;
    }
    else if(censorVowels[x] === `y`){
      censorVowels[x] = `*`;
      x++;
    }
    else{
      x++;
      return;
    }

  }
  return censorVowels();
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {

}
 


// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  // while(x != leetspeak.length)
  //   if(leetspeak[`a`]){
  //   leetspeak[x] = 4;
  // }
  // else if(leetspeak[`e`]){
  //   leetspeak[x] = 3;
  // }
  // else if(leetspeak[`i`]){
  //   leetspeak[x] = 1;
  // }
  // else if(leetspeak[`o`]){
  //   leetspeak[x] = 0;
  // }
  // else if(leetspeak[`s`]){
  //   leetspeak[x] = 5;
  // }
  // else if(leetspeak[`t`]){
  //   leetspeak[x] = 7;

  // }
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
