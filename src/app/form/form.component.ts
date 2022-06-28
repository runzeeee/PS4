import {Component, Input, OnInit} from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../services/weather.service';
import {ChildComponent} from "../child/child.component";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() weatherData?: WeatherData
  constructor() { }
  ngOnInit(): void {

  }

  // constructor(private weatherService: WeatherService) { }
  // cityName: string = 'Beijing';
  // weatherData?: WeatherData;
  // ngOnInit(): void {
  //   this.getWeatherData(this.cityName);
  //   this.cityName = '';
  // }
  // onSubmit() {
  //   this.getWeatherData(this.cityName);
  //   this.cityName = '';
  // }
  // private getWeatherData(cityName: string) {
  //   this.weatherService.getWeatherData(cityName)
  //     .subscribe({
  //       next: (response) => {
  //         this.weatherData = response;
  //         console.log(response);
  //       }
  //     });
  // }



}
