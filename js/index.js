let i = 0;
const id = setInterval(function callback() {
  if (i <= 20) {
    console.log(i++)
  }
}, 100)


let j = 0;
let timerId = setTimeout(function timer() {
  if (j<=20) {
    console.log(j++);
  }
  timerId = setTimeout(timer, 100); 
}, 100);


