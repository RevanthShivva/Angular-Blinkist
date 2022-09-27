import { Injectable, OnInit } from "@angular/core";

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
@Injectable({providedIn: 'root'})
export class MyLibraryService {
   private books : bookType[] =[];
   constructor(){

   }
   
   setBooks(books: bookType[]){
    this.books = books;
   }

   getBooks(){
    return this.books;
   }
}