import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
private _places: Place[] = [
  new Place(
    'p1',
    'aaaaaaaa',
    'bbbbbbbbbb',
    'https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg',
    149.99
  ),
  new Place(
    'p2',
    'aaaaaaaa',
    'bbbbbbbbbb',
    'https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg',
    149.99
  ),
  new Place(
    'p3',
    'aaaaaaaa',
    'bbbbbbbbbb',
    'https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg',
    149.99
  )
];
get places() {
  return [...this._places];
}
  constructor() { }
}
