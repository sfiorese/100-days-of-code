function findLongestWord(str) {
    
    var words = str.split(' ');
    var maxWord = 0;
  
    for (var i = 0; i < words.length; i++) {
      
      if (words[i].length > maxWord) {maxWord = words[i].length;}
    
    }
  
    return maxWord;
    //return str.length;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  