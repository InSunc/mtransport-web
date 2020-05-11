import { Component, OnInit } from '@angular/core';
import { Route } from './models/route';
import { Stop } from './models/stop';
import { Way } from './models/way';
import { StopMarker } from './models/stop-marker';
import { RouteService } from './services/route.service';
import { WayService } from './services/way.service';
import { Subject } from 'rxjs';
// import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  sidebarHidden: boolean
  title = 'mtransport-web'
  zoom = 13
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    streetViewControl: false,
    zoomControl: false,
    clickableIcons: false,
    scrollwheel: true,
    styles: [
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  }
  stopMarkers: StopMarker[]
  routeLines:  any
  polylineOptions = {
    strokeWeight: 8,
    strokeColor: '#039BE5'
  }
  
  selectedRoute: Route
  selectedStop: Subject<[StopMarker, string]> = new Subject

  // constructor(private mqttService: MqttService) { }
  constructor(private routeService: RouteService,
              private wayService: WayService) { }


  displayRoute(route: Route) {
    this.selectedRoute = route
    this.routeLines = []
    this.wayService.getWays(route.id).subscribe(w => {
      route.ways = w
      route.ways.forEach(way => {
        this.routeLines.push(Way.toPath(way.points))
      })

      this.stopMarkers = []
      route.stops.forEach(stop => {
        let stopMarker = StopMarker.convert(stop)
        var icon = {
          url: "../assets/stop_mark.png", // url
          scaledSize: new google.maps.Size(25, 25), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };
        stopMarker.icon = icon
        this.stopMarkers.push(stopMarker)
      })
    })
  }

  ngOnInit() {
      this.center = {
        lat: 47.0105,
        lng: 28.8638
      }

      // this.mqttService.observe('T2').subscribe((message: IMqttMessage) => {
      //   console.log('msg: ', message)
      // });
  }

  onMarkerClick(marker: StopMarker) {
    console.log(this.selectedRoute)
    this.selectedStop.next([marker, this.selectedRoute.id])
  }

  toggleSidebarState() {
    this.sidebarHidden = !this.sidebarHidden
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }
}
