// 1) For each multiple of 3 set result to "Code"
// 2) For each multiple of 5 set result to "Next"
// 3) For numbers which are multiples of both 3 and 5 set result to "CodeNext"
// 4) For numbers which are neither multiples of 3 or 5 set result to ""
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
