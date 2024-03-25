import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.dev';
import { Weather } from '../interfaces/Weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  protected baseUrl = `${environment.apiUrl}/weather`;
  constructor(private http: HttpClient) {}

  getCurrent(latitude: number, longitude: number) {
    return this.http.get<Weather>(`${this.baseUrl}/current`, {
      params: { latitude, longitude },
    });
  }

  getForecast(latitude: number, longitude: number) {
    return this.http.get<Weather[]>(`${this.baseUrl}/forecast`, {
      params: { latitude, longitude },
    });
  }
}
