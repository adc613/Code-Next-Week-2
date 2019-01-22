// 1) For each multiple of 3 return "Code"
// 2) For each multiple of 5 return "Next"
// 3) For numbers which are multiples of both 3 and 5 return "CodeNext"
// 4) For numbers which are neither multiples of 3 or 5 return ""
function fizzBuzz(number) {
  // TODO code here
}







// Code to display results
for(let i = 1; i <= 100; i++) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`Number ${i} => ${fizzBuzz(i)}`));
  document.getElementById('list').appendChild(li)
}
