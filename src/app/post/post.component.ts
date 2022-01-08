import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // receive post object from post-list component
  @Input() post?: Post;

  constructor() {}

  ngOnInit(): void {
    console.log(this.post);
  }
}
