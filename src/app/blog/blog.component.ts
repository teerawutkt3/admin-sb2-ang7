import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  formGroup: FormGroup
  blogs: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.createFromGroup();
  }

  ngOnInit() {
    this.getBlog();
  }

  createFromGroup() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  submit() {
    console.log('submit:', this.formGroup.value)
    const url = '/api/blog'
    this.http.post(url, this.formGroup.value).subscribe(res => {
      console.log('res submit: ', res)
      this.getBlog();
    })
  }
  getBlog() {
    console.log('getBlog')
    const url = '/api/blog'
    this.http.get(url).subscribe(res => {
      console.log('res submit: ', res)
      this.blogs = res;
    })
  }
  cancel() {
    console.log('cancel :', this.formGroup.reset())
  }

  view(id) {
    console.log('view id : ', id)
    $('#view').modal('show');
  }
  edit(id) {
    console.log('edit id : ', id)

  }
  delete(id) {
    console.log('delete id : ', id)
    let url = `/api/blog/${id}`;
    this.http.delete(url).subscribe(res => {
      this.getBlog();
    })
  }
}
