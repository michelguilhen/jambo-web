import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';

const routes: Routes = [
  {
    path: '',
    component: CityListComponent,
  },
  {
    path: ':name',
    component: CityDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRoutingModule {}
