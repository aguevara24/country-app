import { Component, inject } from '@angular/core';
import { Country } from "../../interfaces/country";
import { CountriesService } from "../../services/countries.service";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  private countryService = inject( CountriesService );
  searchByCountry( term: string ) {
    this.countryService.searchByCountry( term )
      .subscribe( countries => {
        this.countries = countries;
      } );
  }
}
