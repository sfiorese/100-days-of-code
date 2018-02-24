function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
   /* my code:
                 var exp = str.substr(-1, 1);
                 var exp2 = str.split(" ").pop();
  
                 if( exp === target || exp2 === target) {
                    str = true;
                  } else {
                    str = false;
                  }
   */
    return str.substr(-target.length) === target;
  
    
    return str;
  }
  
  confirmEnding("My friend Bastian", "vfgtbastian");