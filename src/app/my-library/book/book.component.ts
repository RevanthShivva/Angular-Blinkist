import { Component, Input, OnInit } from '@angular/core';
interface bookType{
  id: number;
  title:string;
  author: string;
  image: string;
  timeToRead:string;
  numberOfReads: string;
  isFinished: boolean;
  isReading: boolean;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 @Input() singleBook: bookType ;
  constructor() { }

  ngOnInit(): void {
  }
  onReading(){
    this.singleBook.isFinished= false;
    this.singleBook.isReading = true;
  }

  onFinished(){
    this.singleBook.isFinished= true;
    this.singleBook.isReading = false;
  }
 
}
