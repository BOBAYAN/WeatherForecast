import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()


export class SweatherProvider {
  city:any;
  state:any;
  
  constructor(public http:HttpClient) {

  }

getWeather(city, state)
{
  return this.http.get('http://api.wunderground.com/api/59d61e5d23ee4b65/conditions/q/'+ '/'+state +'/' +city +'.json');
}
}
