import { Pipe, PipeTransform } from '@angular/core';
import { Productt } from './productt';
@Pipe({
  name: 'productpipe'
})
export class ProductpipePipe implements PipeTransform {

  transform(value:Productt[], Arama?:string): Productt[]{
    /*Arama = Arama?Arama.toLocaleUpperCase():null
    
    return Arama?value.filter((p:Productt)=>p.name.toLocaleUpperCase().indexOf(Arama)!==-1):value;

    */
   Arama= Arama?Arama.toLocaleLowerCase():null
   return Arama?value.filter((p:Productt)=>p.name.toLocaleLowerCase().indexOf(Arama)!==-1):value;
  }

}
