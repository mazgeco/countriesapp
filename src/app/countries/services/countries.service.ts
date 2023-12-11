import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiURL: string  = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(type: string, term: string): Observable<Country[]>{
    const url = `${this.apiURL}/${type}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([]))
      );
  }

}
