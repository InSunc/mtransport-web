import {Coordinate} from './coordinate';

export class Way {
	name: string;
	points: Coordinate[]

	public static toPath(points: Coordinate[]): Array<google.maps.LatLng> {
		let path = new Array
		points.forEach(point => path.push(new google.maps.LatLng(point.latitude, point.longitude)))
		return path
	}
}