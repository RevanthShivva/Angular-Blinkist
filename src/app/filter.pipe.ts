import { Pipe, PipeTransform } from '@angular/core';
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

@Pipe({
  name: 'filter'
  //pure: 'false',
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterSTring : string, propName: string) {
     if(value.length === 0 || filterSTring === ""){
      return value;
     }
     let abc = filterSTring;
     const result: bookType[] =[];
     for(const item of value){
      console.log(item);
       if(item[propName].includes(filterSTring)){
        result.push(item);
       }
      
     }
     return result;
  }

}