import { Component, OnInit, Input } from '@angular/core';
import { StopMarker } from '../../models/stop-marker';
import {MatTableDataSource} from '@angular/material/table';
import { Subject } from 'rxjs';
import { StopService } from 'src/app/services/stop.service';
import { TransportArrival } from 'src/app/models/transport-arrival';

@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.scss']
})
export class StatisticsViewComponent implements OnInit {
  @Input() stopSubject: Subject<[StopMarker, string]>

  displayedColumns = ['transportId', 'timestamp']
  transportArrivalSource: MatTableDataSource<TransportArrival>
  selectedStop: StopMarker

  constructor(private stopService: StopService) { }

  ngOnInit(): void {
    this.stopSubject.subscribe(val => { 
      this.selectedStop = val[0]
      console.log(this.selectedStop.id)
      this.stopService.getTransportArrival(this.selectedStop.id, val[1]).subscribe(r => {
        this.transportArrivalSource = new MatTableDataSource(r);
        console.log('Result: ')
        console.log(r)
      })
    });
  }
}
