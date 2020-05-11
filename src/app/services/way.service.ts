import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Constants } from '../constants';
import { Way } from '../models/way';

@Injectable({
  providedIn: 'root'
})
export class WayService {

  constructor(private http: HttpClient) { }

  getWays(routeId: string): Observable<Way[]> {
    return this.http.get<Way[]>(Constants.WAYS_URL + routeId);
  }
}
