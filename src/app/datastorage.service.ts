import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { map, tap } from "rxjs";
import { Book } from "./my-library/bookData";
import { MyLibraryService } from "./my-library/myLibrary.service";
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
@Injectable({ providedIn: "root" })
export class DataStorageService  {
    constructor(
        private http: HttpClient,
        private lService: MyLibraryService
    ) { }
   

    postBooks() {
        const bookData = Book.booksStore;
        this.http.post('https://blinkistapp-6ed62-default-rtdb.firebaseio.com/books.json'
            , bookData).subscribe((response) => {
                console.log(response);
            })
    }
    setBooks() {
        return this.http.get<bookType[]>('https://blinkistapp-6ed62-default-rtdb.firebaseio.com/books.json');
        // .pipe(map((result)=>{
        //     return result
        // }),
        // tap((res) => {
        //     console.log(res);
        //    this.lService.setBooks(res);
        // }));
    }

}