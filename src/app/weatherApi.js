//API usada: https://openweathermap.org/
export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "668072c49d94d7d0735ce2d8f37c3c3c";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
