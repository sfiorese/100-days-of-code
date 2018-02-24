function largestOfFour(arr) {
    // You can do this!
    var result = [];
    
    for(var i=0; i < arr.length; i++) {
      
      var largeArrNum = arr[i][0];
      
      for(var j=1; j < arr[i].length; j++ ){
           
          if (arr[i][j]>largeArrNum){
               largeArrNum = arr[i][j];
           }
       }
      result[i] = largeArrNum;	
   }
   return result;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);