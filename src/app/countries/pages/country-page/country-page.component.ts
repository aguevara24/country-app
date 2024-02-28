import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CountriesService } from "../../services/countries.service";
import { switchMap } from "rxjs";
import { Country } from "../../interfaces/country";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  private countryService = inject( CountriesService );

  private activatedRoute = inject( ActivatedRoute );

  private router = inject( Router );

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id ))
      )
      .subscribe( country => {

            if ( !country ) {
              return this.router.navigateByUrl( '' );
            }
            return this.country = country;

      });
  }

}
