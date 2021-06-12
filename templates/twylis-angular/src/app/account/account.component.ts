import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private _accountUrl = 'http://localhost:3000/api/account';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getEvents() {
    return this.http.get<any>(this._accountUrl)
  }
}