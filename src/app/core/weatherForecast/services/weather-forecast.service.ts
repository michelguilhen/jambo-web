import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.dev';
import { WeatherForecast } from '../interfaces/WeatherForecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  protected baseUrl = `${environment.apiUrl}/weather`;
  constructor(private http: HttpClient) {}

  getCurrent(latitude: number, longitude: number) {
    return this.http.get<WeatherForecast>(`${this.baseUrl}/current`, {
      params: { latitude, longitude },
    });
  }

  getForecast(latitude: number, longitude: number) {
    return this.http.get<WeatherForecast[]>(`${this.baseUrl}/forecast`, {
      params: { latitude, longitude },
    });
  }
}
