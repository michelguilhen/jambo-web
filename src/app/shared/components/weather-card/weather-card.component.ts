import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { DisplayTemperaturePipe } from '../../pipes/display-temperature.pipe';
import { Weather } from '../../../core/weather/interfaces/Weather';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, DisplayTemperaturePipe],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent implements OnInit {
  @Input() forecast!: Weather;
  @Output() test: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.test.emit('asdadas');
  }

  getWeatherDetails() {
    throw new Error('Method not implemented.');
  }
}
