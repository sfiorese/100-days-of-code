//Chunky Monkey
/* Split arr into smaller chunks of arrays with the length provided by size. 
Objectives:

    (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]

    ([0, 1, 2, 3, 4, 5], 3)   is expected to be [[0, 1, 2], [3, 4, 5]]

    ([0, 1, 2, 3, 4, 5], 2)   is expected to be [[0, 1], [2, 3], [4, 5]]

    ([0, 1, 2, 3, 4, 5], 4)   is expected to be [[0, 1, 2, 3], [4, 5]]

    Reference:
    https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-chunky-monkey/16005
*/
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arrTemp = [];
    var myArray = [];
    
    for(i = 0; i < arr.length; i++) {
        if(i % size !== size-1) {
            arrTemp.push(arr[i]);
        }else{
            arrTemp.push(arr[i]);
            myArray.push(arrTemp);
            arrTemp = [];
        }
    }
     if(arrTemp.lenth !== 0) {
         myArray.push(arrTemp);
     }
    return myArray;
  }
chunkArrayInGroups(["a", "b", "c", "d"], 2);
