import { Component, inject } from '@angular/core';
import { CountriesService } from "../../services/countries.service";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  private countryService = inject( CountriesService );
  searchByCapital( term: string ) {
    this.countryService.searchByCapital( term )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }
}
