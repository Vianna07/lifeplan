import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
