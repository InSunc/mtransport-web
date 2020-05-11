import {Way} from './way';
import {Stop} from './stop';

export class Route {
	id: string;
	name: string;
	stops: Stop[];
	ways: Way[];
}