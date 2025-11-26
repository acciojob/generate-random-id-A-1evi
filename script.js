function makeid(l) {
  // write your code here
  let string = "";
  while (string.length < l) {
    string += Math.random().toString(36).slice(2);
  }
  return string.slice(0, length);
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
