import { Component, OnInit } from '@angular/core';
import { ExploreData } from './data';

@Component({
  selector: 'app-explorenav',
  templateUrl: './explorenav.component.html',
  styleUrls: ['./explorenav.component.css']
})
export class ExplorenavComponent implements OnInit {
  navData = ExploreData;
  constructor() { }

  ngOnInit(): void {
  }

}
