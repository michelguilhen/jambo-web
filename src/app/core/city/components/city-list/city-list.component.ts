import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { CityOption } from '../../interfaces/CityOption';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss',
})
export class CityListComponent implements OnInit {
  citiesOptions: CityOption[] = [];
  constructor(private cityService: CityService, private router: Router) {}

  ngOnInit(): void {
    this.getCitiesOptions();
  }

  getCitiesOptions() {
    this.cityService.getAll().subscribe((response) => {
      this.citiesOptions = response;
      console.log(this.citiesOptions);
    });
  }

  goToCityDetails(name: string) {
    this.router.navigate([`/cities/${name}`]);
  }
}
