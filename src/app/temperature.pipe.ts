import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'C' | 'F',
    outputType?: 'C' | 'F'
  ) {
    
    if(!value) {
      return value;
    }
    
    let numberValue: number;

    if (typeof value === 'string') {
      numberValue = parseFloat(value);
    } else {
      numberValue = value;
    }

    outputType = outputType || inputType;

    if (inputType === outputType) {
      return `${numberValue.toFixed(2)} °${outputType}`;
    }

    if (inputType === 'C' && outputType === 'F') {
      const outputTemperature = numberValue * (9 / 5) + 32; 
      return `${outputTemperature.toFixed(2)} °F`;
    } else {
      const outputTemperature = (numberValue - 32) * (5 / 9); 
      return `${outputTemperature.toFixed(2)} °C`;
    }
  }
}
