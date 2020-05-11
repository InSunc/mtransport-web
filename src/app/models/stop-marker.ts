import {Stop} from './stop';

export class StopMarker {
	id: number
	name: string
	icon: object
	position: object

	public static convert(stop: Stop): StopMarker {
		let result = new StopMarker
		result.id = stop.id
		result.name = stop.name
		result.position = { lat: stop.location.latitude, lng: stop.location.longitude }

		return result
	}
}