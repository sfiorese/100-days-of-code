function titleCase(str) {
    var myTextToArray = str.toLowerCase().split(' ');  //[i'm, a, little, tea, pot];
  
    var myTextFirstCap = myTextToArray.map(function(val)
    {return val.replace(val.charAt(0), val.charAt(0).toUpperCase());});
    
  
   return myTextFirstCap.join(" ");
  }
  
  titleCase("I'm a little tea pot");