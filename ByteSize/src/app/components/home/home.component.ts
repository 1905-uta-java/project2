import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

//import { TriviaApiService } from './../../services/trivia-api.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../../models/user.model';
//import { Response } from './../../models/response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //dataSource = new UserDataSource(this.TriviaApiService);
  //private serviceUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  //results: [];
  private serviceUrl = 'https://opentdb.com/api.php?amount=1';

  response: any;

  public category: string;
  public correctAnswer: string;
  public difficulty: string;
  public incorrectAnswers: [];
  public question: string;


  //displayedColumns = ['name', 'email', 'phone', 'company'];
  //displayedColumns = ['category', 'type', 'difficulty', 'question', 'correct_answer', 'incorrect_answers'];
  //displayedColumns = ['category', 'type', 'difficulty', 'question', 'correct_answer'];
  //displayedColumns = ['response_code', 'results'];

  // private TriviaApiService: TriviaApiService,
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    let obs = this.http.get(this.serviceUrl);
    obs.subscribe((res: Response) => {
      this.response = res['results'][0];
      console.log(this.response);
      // console.log(this.response[0]);

      for (let key in this.response) {
        if (key == 'category') {
          this.category = this.response[key];
        } else if (key == 'correct_answer') {
          this.correctAnswer = this.response[key];
        } else if (key == 'difficulty') {
          this.category = this.response[key];
        } else if (key == 'incorrect_answers') {
          this.incorrectAnswers = this.response[key];
        } else if (key == 'question') {
          this.question = this.response[key];
        }
      }






    });
  }

  // showResponse() {
  //   console.log('Here is what we got: ' + this.category + ' ' + this.correctAnswer + ' ' + this.difficulty + ' ' + this.incorrectAnswers + ' ' + this.question);
  // }


  /*
      // console.log(this.response[0]);

      for (let key in this.response) {
        if (key == 'category') {
          this.category = this.response[key];
        } else if (key == 'correct_answer') {
          this.correctAnswer = this.response[key];
        } else if (key == 'difficulty') {
          this.category = this.response[key];
        } else if (key == 'incorrect_answers') {
          this.incorrectAnswers = this.response[key];
        } else if (key == 'question') {
          this.question = this.response[key];
        }
      }
  */

}

// export class UserDataSource extends DataSource<any> {
//   constructor(private TriviaApiService: TriviaApiService) {
//     super();
//   }
//   connect(): Observable<Response[]> {
//     //console.log(this.TriviaApiService.getUser())
//     return this.TriviaApiService.getResponse();
//   }
//   disconnect() { }
// }


