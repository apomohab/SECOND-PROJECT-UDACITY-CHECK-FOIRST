// const baseURL ="http://api.openweathermap.org/data/2.5/weather?zip="; 

// const apiKey = "f5a8179b67e4f9a0cb162f5a2f9b6345";

// const zip = document.getElementById("zip");
// const buton = document.getElementById("my-button");
// const res = document.getElementById("result");

// const getData = async (url, zip, api) => {
//   const data = await fetch(url + `${zip}&units=metric&APPID=` + api);
//   const response = await data.json();
//   return response;
// };

// const postData = async (url, data) => {
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     cache: "no-cache",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response;
// };

// buton.addEventListener("click", () => {
//   let zipval = zip.value;
//   if (!zipval) {
//     zipval = 75189;
//   }
//   getData(baseURL, zipval, apiKey).then(result => {
//     console.log(result);
//     res.textContent = `${result.name} is ${result.main.temp} C`;
//     postData("http://localhost:2000/app", {
//       name: result.name,
//       temperature: result.main.temp
//     });
//   });
// });




 /* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
//URL = 'api.openweathermap.org/data/2.5/weather?zip=94040&APPID=06bb0ad71a9caa1520f4937937378e3f';
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "f5a8179b67e4f9a0cb162f5a2f9b6345";
let zipOfRegion = document.getElementById("zip"); //75189;
let userInput = document.getElementById("feelings");
const generateData = document.getElementById("generate");
let mdate = document.getElementById("date");
let mtemp = document.getElementById("temp");
let mcont = document.getElementById("content");

const getData = async (t_url, t_zip, t_api) => {
  const data = await fetch(t_url + `${t_zip}&units=metric&APPID=` + t_api);
  const response = await data.json();
  return response;
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response;
};

generateData.addEventListener("click", () => {
  valueOfZip = zipOfRegion.value; //75189, 33101;
  console.log(valueOfZip);
  valueOfUI = userInput.value;
  console.log(valueOfUI);

  getData(baseURL, valueOfZip, apiKey)
    .then(result => {
      postData("http://localhost:2000/pro", {
        temperature: result.main.temp,
        date: newDate,
        userInput: valueOfUI
      });
      mdate.textContent = newDate;
      mtemp.textContent = result.main.temp;
      mcont.textContent = valueOfUI + " " + result.name;
    })
    .then(() => {
      console.log("success");
    });
});