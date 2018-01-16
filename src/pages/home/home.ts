import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SweatherProvider}  from  '../../providers/sweather/sweather'
import { Storage }  from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
weather:any;
location:{
  city:string,
  state:string
}
  constructor(public navCtrl: NavController, 
    private weatherProvider : SweatherProvider,
  private storage:Storage) {

  }

ionViewWillEnter(){
  this.storage.get('location').then((val)=>{
 if (val !=null){
   this.location=JSON.parse(val);
  
 }else {
   this.location ={
    city:'Miami',
    state:'FL'
  }
 }
 this.weatherProvider.getWeather(this.location.city  ,  this.location.state).subscribe(
    
    weather=> {
      this.weather=weather.current_observation;
      console.log(weather)
    }
    
  )
  });
  
  
}
}
