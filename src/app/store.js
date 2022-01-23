//  Almacenar y obtener los datos desde el localStorage
export class Store {
  constructor() {
    this.city;
    this.countryCode;
    this.defaultCity = "Bogota";
    this.defaultCountry = "co";
  }

  //Obengo los datos almacenados en el localStorage
  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("countryCode") === null) {
      this.countryCode = this.defaultCountry;
    } else {
      this.countryCode = localStorage.getItem("countryCode");
    }

    return {
      city: this.city,
      countryCode: this.countryCode,
    };
  }

  // Guardo los datos
  setLocationData(city, countryCode) {
    localStorage.setItem("city", city);
    localStorage.setItem("countryCode", countryCode);
  }
}
