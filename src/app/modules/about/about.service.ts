import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private contentUrl = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text';

  constructor(private http: HttpClient) { }

  getText(): Observable<string> {
    return this.http.get<string>(this.contentUrl, httpOptions)
      .pipe(
        catchError(this.handleError<string>('getText', 'no content'))
      );
  }

  /**
   * https://angular.io/tutorial/toh-pt6#handleerror
   *
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
