import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from "rxjs";
import { Country } from "../interfaces/country";

@Injectable( {providedIn: 'root'} )
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor( private httpClient: HttpClient ) {
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    let url = `${ this.apiUrl }/alpha/${ code }`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( () => of(null ) ),
      );
  }
  searchByCapital( term: string ): Observable<Country[]> {
    let url = `${ this.apiUrl }/capital/${ term }`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchByCountry( term: string ): Observable<Country[]> {
    let url = `${ this.apiUrl }/name/${ term }`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

  searchByRegion( region: string ): Observable<Country[]> {
    let url = `${ this.apiUrl }/region/${ region }`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) )
      );
  }

}
