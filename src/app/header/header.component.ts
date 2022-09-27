import {
  Component, EventEmitter, Injectable, OnInit, Output
} from '@angular/core';
import { DataStorageService } from '../datastorage.service';
import { HeaderService } from './header.service';
//import { Subject } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit  {
   isSelected : boolean = false;
   isExploreSelected: boolean = false;
   isLogoutSelected: boolean = false;
  constructor(private hService : HeaderService){}
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   
  }
  //@Output() searchSelected = new EventEmitter<boolean>();
  
  onSearch(){
  this.isSelected = !this.isSelected;
    
    this.hService.isSearched(this.isSelected);
   }
   onExploreSelect(){
    this.isExploreSelected = !this.isExploreSelected;
    this.hService.isExplored(this.isExploreSelected);
   }
   onClickIcon(){
    this.isLogoutSelected = !this.isLogoutSelected;
   }
}
