import { Component, OnInit } from '@angular/core';
import {Hajo} from '../Hajo';

@Component({
  selector: 'app-hajo',
  templateUrl: './hajo.component.html',
  styleUrls: ['./hajo.component.css']
})
export class HajoComponent implements OnInit {
    hajo: Hajo = {
        fname: 'Hatem',
        lname: 'Zreek'
    };

  constructor() { }

  ngOnInit() {
  }

}
