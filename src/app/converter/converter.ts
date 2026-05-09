import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})

export class Converter {
  value: number = 0;
  method: string = "";
  result: string = "";

  convertMethod():void {
    if(this.method === "MtoF"){
      this.result = this.meterToFeet(this.value);
    }

    if(this.method === "FtoM"){
      this.result = this.feetToMeter(this.value);
    }

    if(this.method === "CtoF") {
      this.result = this.celsiusToFahrenheit(this.value);
    }

    if(this.method === "FtoC") {
      this.result = this.fahrenheitToCelsius(this.value);
    }

    else return
  }

  meterToFeet(meters: number):string {
    const feet = meters * 3.28084;
    const message = `${meters} meter är ${feet} fot`;
    return message
  }

  feetToMeter(feet: number):string {
    const meters = feet * 0.3048;
    const message = `${feet} meter är ${meters} fot`;
    return message
  }

  // Funktion för omvandling till fahrenheit
  celsiusToFahrenheit(celsius: number):string {
    const fahrenheit = celsius * 1.8 + 32;
    const message = `${celsius} Celsius är ${fahrenheit} Fahrenheit`;
    return message
  }

  // Funktion för omvandling till fahrenheit
  fahrenheitToCelsius(fahrenheit: number):string {
    const celsius = (fahrenheit - 32) * 5/9;
    const message = `${fahrenheit} Fahrenheit är ${celsius} Celsius`;
    return message
  }
}


