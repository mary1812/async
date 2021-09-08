fetch("./js/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
 
  //Then принимает два , или catch в конце
fetch("./js/dddata.json")
  .then((response) => response.json(), (err) => {console.log("обработка ошибок в then")})
  .then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log("error");
  });

