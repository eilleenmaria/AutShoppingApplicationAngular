import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3)return value
    const resultPosts = [];
    for(const car of value){
      if(car.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(car);
      };
    };
    return resultPosts;
  }


}
