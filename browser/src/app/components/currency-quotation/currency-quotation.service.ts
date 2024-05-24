import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import example from './currency-quotation.example.json'

@Injectable({
  providedIn: 'root'
})
export class CurrencyQuotationService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrencyQuotation(currency: string): Observable<object> {
    return this.http.get(`https://economia.awesomeapi.com.br/last/${currency}`);
  }

  public getCurrencyQuotationExample(): object {
    // const get = this.http.get(`http://localhost:4001/currency-quotation/get-example`);

    // get.subscribe({
    //   next: (data: object) => {
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     console.error(error);
    // }})

    // return this.http.get(`http://localhost:4001/currency-quotation/get-example`);
    return example
  }
}
