import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

var data: any;

@Injectable({
  providedIn: 'root'
})

export class MobileService {
  constructor(public http: HttpClient) { }

  getData() {
    fetch('../assets/data.json')
      .then(res => res.json())
      .then(json => {
        data = json;
        return data;
      })
  }
}
