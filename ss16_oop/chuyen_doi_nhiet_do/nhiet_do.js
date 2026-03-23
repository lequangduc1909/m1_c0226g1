class Thermo {
    constructor(cValue) {
        if (cValue < -273) {
            this.cValue = -273;
        } else {
            this.cValue = cValue;
        }
    }

    getC() {
        return this.cValue;
    }

    toFahrenheit() {
        return this.cValue * (9 / 5) + 32;
    }

    toKelvin() {
        return this.cValue + 273.15;
    }
}

let tempObj = new Thermo(25);

console.log("Celsius:", tempObj.getC());
console.log("Fahrenheit:", tempObj.toFahrenheit());
console.log("Kelvin:", tempObj.toKelvin());