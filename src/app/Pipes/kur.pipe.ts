import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kur',
  
})
export class KurPipe implements PipeTransform {

  transform(n:number,kur:string=" Türk Lirası"){
   return (n*8).toFixed(2)+kur}

}


