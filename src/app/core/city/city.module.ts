import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CityListComponent } from './components/city-list/city-list.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { DisplayTemperaturePipe } from '../../shared/pipes/display-temperature.pipe';
import { CityRoutingModule } from './city-routing.module';
import { WeatherCardComponent } from '../../shared/components/weather-card/weather-card.component';
import { WeatherDetailsComponent } from '../../shared/components/weather-details/weather-details.component';

@NgModule({
  declarations: [CityListComponent, CityDetailsComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    MatCardModule,
    MatButtonModule,
    DisplayTemperaturePipe,
    WeatherCardComponent,
    WeatherDetailsComponent,
  ],
})
export class CityModule {}
