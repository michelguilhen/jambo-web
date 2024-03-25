import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../interfaces/City';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../../weather/services/weather.service';
import { Weather } from '../../../weather/interfaces/Weather';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrl: './city-details.component.scss',
})
export class CityDetailsComponent implements OnInit {
  cityName!: string;
  city!: City;
  currentWeather!: Weather;
  selectedWeather!: Weather;
  forecasts: Weather[] = [];

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.cityName = param['name'];
      this.getCity();
    });
  }

  getCity() {
    this.cityService.getByName(this.cityName).subscribe((response) => {
      this.city = response;
      this.getCurrentWeather();
      this.getForecasts();
    });
  }

  getCurrentWeather() {
    this.weatherService
      .getCurrent(this.city.latitude, this.city.longitude)
      .subscribe((response) => {
        this.currentWeather = response;
      });
  }

  getForecasts() {
    this.weatherService
      .getForecast(this.city.latitude, this.city.longitude)
      .subscribe((response) => {
        console.log(response);
        this.forecasts = response;
      });
  }

  getWeatherDetails(forecast: Weather) {
    this.selectedWeather = forecast;
  }
}
