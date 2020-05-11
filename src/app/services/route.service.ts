import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Constants } from '../constants';
import { Route } from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  public getRoutes(): Observable<Route[]>{
    return this.http.get<Route[]>(Constants.ROUTES_URL);
  }

  public getRoute(routeId: string): Observable<Route>{
    return this.http.get<Route>(Constants.ROUTES_URL + routeId);
  }
}
