import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, ObservableLike } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Constants } from '../constants';
import { TransportArrival } from '../models/transport-arrival';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  constructor(private http: HttpClient) { }

  getTransportArrival(stopId: number, routeId: string): Observable<TransportArrival[]> {

    let body = {
      'stopId': stopId,
      'routeId': routeId
    }

    return this.http.post<TransportArrival[]>(Constants.STOPS_URL, body)
  }
}
