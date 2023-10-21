const key = "740d761fec74e83a99cdc607e9da780b"

let btn = document.querySelector(".btn")
btn.addEventListener("click",myFunc)

function myFunc ()  {
    let city = document.querySelector(".search>input").value
    weather_info(city)
}

let w_info = document.querySelector(".w_info")
w_info.style.display = "none";


const weather_info = async(city) =>{
    try{
      let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      let res = await data.json()
      console.log(res)
      append(res)
    }catch(err){
        console.log(err.message)
    }

}

const append = (data) => {
console.log({1:data.cod})
 if(data.cod == 404){
    let w_info = document.querySelector(".w_info")
    w_info.style.display = "none";

 }else{
    let w_info = document.querySelector(".w_info")
    w_info.style.display = "inline";
   
    let name = document.querySelector(".weather-img>h2")
    name.textContent = data.name;

    let temp = document.querySelector(".weather-img>h1")
    temp.textContent = `${(data.main.temp-273).toFixed(0)} °C`

    let h_per = document.querySelector(".humide>h3")
    h_per.innerText = `${data.main.humidity} %`
    
    let w_speed = document.querySelector(".w_speed>h3")
    w_speed.innerText = `${data.wind.speed} km/h`
 }
}