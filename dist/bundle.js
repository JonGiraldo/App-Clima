(()=>{"use strict";const t=new class{constructor(t,e){this.apiKey="668072c49d94d7d0735ce2d8f37c3c3c",this.city=t,this.countryCode=e}async getWeather(){const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`,e=await fetch(t);return await e.json()}}("London","uk");document.addEventListener("DOMContentLoaded",(async function(){const e=await t.getWeather();console.log(e)})),console.log("hola, este es un saludo de prueba")})();