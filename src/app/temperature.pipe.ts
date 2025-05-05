import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number) {
    let numberValue: number;
    
    if (typeof value === 'string') {
      numberValue = parseFloat(value);
    } else {
      numberValue = value;
    }
    const outputTemperature = numberValue * (9 / 5) + 32; // Convert to Fahrenheit

    return `${outputTemperature} °F`;
  }
}
