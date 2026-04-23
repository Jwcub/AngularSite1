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

  convertValue():void {
    if(this.method === "MtoI"){
      this.result = meterToInches(this.value);
    }

    if(this.method === "CtoF") {
      this.result = celsiusToFahrenheit(this.value);
    }
    else return
  }
}

function meterToInches(meters: number):string {
  const inches = meters * 39.3701;
  const message = `${meters} meter är ${inches} inches`;
  return message
}

function celsiusToFahrenheit(celsius: number):string {
  const fahrenheit = celsius * 1.8 + 32;
  const message = `${celsius} Celsius är ${fahrenheit} Fahrenheit`
  return message
}