import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bny';
  constructor(private r:Router){
    this.r.navigate(['']);
  }
}
