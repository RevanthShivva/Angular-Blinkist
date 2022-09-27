import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { DataStorageService } from '../datastorage.service';
import { HeaderComponent } from '../header/header.component';
import { HeaderService } from '../header/header.service';

interface bookType {
  id: number;
  title: string;
  author: string;
  image: string;
  timeToRead: string;
  numberOfReads: string;
  isFinished: boolean;
  isReading: boolean;
}

import { Book } from './bookData';
import { MyLibraryService } from './myLibrary.service';
@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MyLibraryComponent implements OnInit, OnDestroy {
  bookData = Book.booksStore;
  booksData;
  data: bookType[];
  d: bookType[];

  isExploreEnabled : boolean= false;
  isSearchEnabled: boolean = false;
  private igChangedSub: Subscription;
  private igExploredSub: Subscription;
  constructor(private header: HeaderService, private dService: DataStorageService, private http: HttpClient, private lService: MyLibraryService) {

  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.igChangedSub.unsubscribe();
  }

  ngOnInit() {
    this.dService.setBooks().subscribe();
    this.igChangedSub = this.header.searchSelected.subscribe((val: boolean) => {

      this.isSearchEnabled = val;
    });
   this.igExploredSub = this.header.exploreSelected.subscribe((val: boolean) =>{
    this.isExploreEnabled = val;
   })
    // this.dService.setBooks();
    // // this.booksData = this.lService.getBooks();
    // //   this.booksData = this.lService.getBooks();
    // // this.dService.setBooks().subscribe((res)=>{
    // //   console.log(res);
    // //   this.booksData = res;
    // // });
    // // console.log(this.booksData);
    // this.dService.setBooks().subscribe(halls => this.booksData = halls.json())
    // console.log(this.booksData);
  }

  filteredStatus = '';


}
