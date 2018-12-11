import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SweatherProvider}  from  '../../providers/sweather/sweather'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
weather:any;
  constructor(public navCtrl: NavController, 
    private weatherProvider : SweatherProvider, private navParams:NavParams,
  ) {

  }

ionViewWillEnter(){
 this.weatherProvider.getWeather(
                  this.navParams.get("city")  ,  
                  this.navParams.get("state"))
   .subscribe(
    weather=> {
      this.weather=weather.current_observation;
      console.log(weather)
    }
    
  )
  }
}
