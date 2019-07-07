import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Response } from './../models/response.model';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class TriviaApiService implements OnInit {

  //private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  private serviceUrl = 'https://opentdb.com/api.php?amount=1';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    let obs = this.httpClient.get(this.serviceUrl);
    obs.subscribe(() => console.log('response'));
  }

  // getResponse(): Observable<Response[]> {
  //   let obs = this.httpClient.get(this.serviceUrl);
  //   obs.subscribe((response) => console.log('response'));
  //   return obs;

  //   //return this.http.get<User[]>(this.serviceUrl);
  // }
}


