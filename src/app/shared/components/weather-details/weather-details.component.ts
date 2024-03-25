import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DisplayTemperaturePipe } from '../../pipes/display-temperature.pipe';
import { Weather } from '../../../core/weather/interfaces/Weather';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, DisplayTemperaturePipe],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent implements OnInit {
  @Input() forecast!: Weather;

  ngOnInit(): void {
    console.log(this.forecast);
  }
}
