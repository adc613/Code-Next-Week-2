// 1) If number is a multiple of 3 set result equal to "Code"
// 2) If number is a multiple of 5 set result equal to "Next"
// 3) If number is a multiple of 3 and a multiple of 5 set result equal to "CodeNext"
// 4) If number is a not a multiple of 3 and not a multiple of 5 set result equal to ""
function fizzBuzz(number) {
  // ---- TODO Follow instructions above -----
  let result;

  // =========================================
  return result;
}







// Code to display results
for(let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`Number ${i} => ${fizzBuzz(i)}`));
  document.getElementById('list').appendChild(li)
}
