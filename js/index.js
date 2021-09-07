// let i = 0;
// const id = setInterval(function callback() {
//   if (i <= 20) {
//     console.log(i++)
//   }
// }, 100)


// let j = 0;
// let timerId = setTimeout(function timer() {
//   if (j<=20) {
//     console.log(j++);
//   }
//   timerId = setTimeout(timer, 100); 
// }, 100);

const obj = {
  id: 1,
  name: 'test',
  lastname: 'test',
  age: 100,
  location: undefined,
  test() {
    
  },
  [Symbol()]: 'test'
};

const arr = [1, 2, 3]
const jsonifiedObj = JSON.stringify(arr); //сериализация

const rebuildedObj = JSON.parse(jsonifiedObj); //десериализация