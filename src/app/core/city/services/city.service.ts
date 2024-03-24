import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityOption } from '../interfaces/CityOption';
import { environment } from '../../../../environments/environment.dev';
import { City } from '../interfaces/City';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  protected baseUrl = `${environment.apiUrl}/cities`;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CityOption[]>(this.baseUrl);
  }

  getByName(name: string) {
    return this.http.get<City>(`${this.baseUrl}/${name}`);
  }
}
