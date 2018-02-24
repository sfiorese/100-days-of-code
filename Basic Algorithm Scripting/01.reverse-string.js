function reverseString(str) {
   
    var myTextToArray =     Array.from(str);           // string to array
    var myReverse = myTextToArray.reverse();           // reverse array content
    var myText =        myReverse.toString();          // array to string
    var expression =       myText.replace(/[,]+/g,''); // replace commas
    
    return expression; // reverse string
  }
  
  reverseString("hello");
  