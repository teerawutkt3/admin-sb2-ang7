import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = '/api/';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  test() {
    console.log('originUrl : ')
    // const url = 'http://localhost:5000/api/blog'
    const url = BASE_URL + 'tutorial'
    this.http.get(url).subscribe(res => {
      console.log('originUrl : ', res)
    })
  }
}
