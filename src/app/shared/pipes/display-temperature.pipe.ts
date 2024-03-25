import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTemperature',
  standalone: true,
})
export class DisplayTemperaturePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return `${Math.round(value)}°C`;
  }
}
