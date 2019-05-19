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
  blog: Blog;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.createFromGroup();

    this.blog = {
      description: '',
      id: '',
      title: ''
    }
  }

  ngOnInit() {
    this.getBlog();
  }

  createFromGroup() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      description: [''],
      id: ['']
    })
  }

  submit() {
    console.log('submit:', this.formGroup.value)
    const url = '/api/blog'
    if (this.formGroup.get('id').value == '') {
      //==>Insert
      this.http.post(url, this.formGroup.value).subscribe(res => {
        console.log('res Insert: ', res)
        this.getBlog();
      })
    } else {
      //==> Update
      this.http.put(url, this.formGroup.value).subscribe(res => {
        console.log('res Update: ', res);
        this.getBlog();
      })
    }

    //this.formGroup.reset();
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
    let blog = this.blogs.filter(e => {
      return e.id === id
    })
    this.blog = blog[0];

    $('#view').modal('show');
    console.log('view : ', this.blog)
  }
  edit(id) {
    console.log('edit id : ', id)
    let blog = this.blogs.filter(e => {
      return e.id === id
    })
    blog = blog[0];
    this.formGroup.patchValue({
      title: blog.title,
      description: blog.description,
      id: blog.id
    })
  }
  delete(id) {
    console.log('delete id : ', id)
    let url = `/api/blog/${id}`;
    this.http.delete(url).subscribe(res => {
      this.getBlog();
    })
  }
}
interface Blog {
  title: string;
  description: string;
  id: string;
}