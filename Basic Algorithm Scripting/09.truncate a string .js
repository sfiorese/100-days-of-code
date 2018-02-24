/*
We need to reduce the length of the string or truncate it 
if it is longer than the given maximum lengths specified 
and add ... to the end. 
If it is not that long then we keep it as is.

Strings are immutable in JavaScript so we will need a new variable 
to store the truncated string.
You will need to use the slice() method and 
specify where to start and where to stop.
Do not forget that when we truncate the word,
we also must count the length added by "..."

Reference:
https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-truncate-a-string/16089

*/
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num && num > 3) {
      return str.slice(0, (num - 3)).concat("...");
    } else if (str.length > num && num <= 3) {
      return str.slice(0, num).concat("...");
    } else {
      return str;
    }
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 11);
