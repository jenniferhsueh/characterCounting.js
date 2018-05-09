// //EXPECTED OUTPUT
// {
//     l: [0]
//     i: [1, 10]
//     g: [2]
//     h: [3, 5, 13, 15]
//     t: [4, 12]
//     o: [6, 16]
//     u: [7, 17]
//     s: [8, 18]
//     e: [9, 14, 19]
//     n: [11]
//    }
  function countLetters(string) {
    var noSpaces = string.split(' ').join('');
    var result = {};
   
    for (var i = 0; i < noSpaces.length; i++) {
      var currentLetter = noSpaces[i];
      if (result[currentLetter]) {
        result[currentLetter].push(i);
      } else {
        result[currentLetter] = [i];
      }
    }
    return result;
   }
  console.log(countLetters('lighthouse in the house'));



//    for (var i = 0; i < noSpaces.length; i++) {
//     var currentLetter = noSpaces[i];
//   //   var res_curr_letter = result[currentLetter];
//     if (result[currentLetter]) {
//       result[currentLetter].push(i);
//     } else {
//       result[currentLetter] = [i];
//     }
//   //   res_curr_letter = result[currentLetter];
//     console.log("end of one pass of the loop", result);
//   }
//   return result;
//  }
//  countLetters('xyxxyz');