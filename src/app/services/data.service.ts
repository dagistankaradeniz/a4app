import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public httpCall:Http) {
    console.log('DataService connected...')
  }

  getPosts(){
    return this.httpCall.get('http://jsonplaceholder.typicode.com/posts')
    .map(res=>res.json());
  }

}
