import { Component, OnInit, Input, Output } from '@angular/core';
import { Route } from '../../models/route';
import {MatTableDataSource} from '@angular/material/table';
import { RouteService } from '../../services/route.service'
import { RouteDataSource } from 'src/app/models/route-data-source';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss']
})
export class RoutesListComponent implements OnInit {
  @Output() selectedRoute = new EventEmitter<Route>();

  routesList = []
  routesDataSource = []
  constructor(private routeService: RouteService) { }

  displayedColumns: string[] = ['route']
  dataSource: any;

  ngOnInit(): void {
    this.routeService.getRoutes().subscribe(
    x => {
      this.routesList = x;
      this.routesDataSource = RouteDataSource.convert(this.routesList);
      console.log(this.routesDataSource)
      this.dataSource = new MatTableDataSource(this.routesDataSource);
    })
    // console.log(this.routesList.length)
    // this.dataSource = new MatTableDataSource(this.routesList);
    console.log('done')
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRoute(route: RouteDataSource) {
    let result = this.routesList.find(r => r.id == route.id)
    this.selectedRoute.emit(result)
  }
}
