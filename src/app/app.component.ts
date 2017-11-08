import { Component } from '@angular/core';
import {Bla} from 'a-pure-typescript-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const bla = new Bla();
    bla.x = 5;
    bla.y = 6;
    console.log(bla);
  }

}
