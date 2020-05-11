import {Route} from './route';

export class RouteDataSource {
	id: string;
	name: string;
	stops: string[];

	constructor(id: string, name: string, stops: string[]) {
		this.id = id;
		this.name = name;
		this.stops = stops;
	}

	public static convert(routesList: Route[]): RouteDataSource[] {
		let routeDataSource = []

		routesList.forEach(route => {
			let stops = []
			route.stops.forEach(stop => stops.push(stop.name))
			routeDataSource.push(new RouteDataSource(route.id, route.name, stops))
		})

		return routeDataSource;
	}
}