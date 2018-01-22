import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()


export class SweatherProvider {
  
  url: string;
apikey ='59d61e5d23ee4b65';
  constructor(public http: Http) {
    this.url='http://api.wunderground.com/api/'+this.apikey+'/conditions/q/';
    console.log(this.url);
  }
getWeather(city, state)
{
  return this.http.get(this.url + '/'+state +'/' +city +'.json')
  .map(res => res.json());
}
}
