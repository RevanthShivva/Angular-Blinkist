import { EventEmitter, Injectable, Output } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  @Output() searchSelected = new EventEmitter<boolean>();
  @Output() exploreSelected = new EventEmitter<boolean>();

  isSearched(b: boolean) {
    this.searchSelected.emit(b);
  }

  isExplored(b: boolean){
    this.exploreSelected.emit(b);
  }

}
