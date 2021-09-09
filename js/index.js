"use strict";
// fetch("./js/data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//   //Then принимает две функции , или catch в конце
// fetch("./js/dddata.json")
//   .then((response) => response.json(), (err) => {console.log("обработка ошибок в then")})
//   .then((data) => {
//     console.log(data);
//   }).catch((err) => {
//     console.log("error");
//   });

// const promise = new Promise((resolve, reject) => {
// resolve('Hello from promise');
//   reject(new Error('error'));
// }).then(
//   (data) => {
//     console.log(data);
//     return 1;
//   },
//   (error) => {
//     console.error();(error);
//   }
// )

const loadDiv = document.getElementById("load");

const result = fetch("./js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const jsonString = JSON.stringify(data, null, 4);
    document.body.append(jsonString);
  })
  .catch((err) => {
    document.body.append("ERROR HAPPEND");
  })
  .finally(() => {
    loadDiv.remove();
  });
