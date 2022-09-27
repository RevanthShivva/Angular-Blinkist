import { Component, Input, OnInit } from '@angular/core';
interface navData{
  icon: string;
  title: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() navData: navData;
  constructor() { }

  ngOnInit(): void {
  }

}
