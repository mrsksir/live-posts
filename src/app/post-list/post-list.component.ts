import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      'Nature1',
      `1Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum 
      obcaecatiducimus nostrum laboriosam excepturi nisi quos beatae dolorum voluptatibus enim animi, 
      tenetur maximeut est expedita vero et cupiditate?`,
      `https://curlytales.com/wp-content/uploads/2020/08/featurenature1-1170x614.jpg`,
      `test@test.com`,
      new Date()
    ),

    new Post(
      'Nature2',
      `2Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum 
      obcaecatiducimus nostrum laboriosam excepturi nisi quos beatae dolorum voluptatibus enim animi, 
      tenetur maximeut est expedita vero et cupiditate?`,
      `https://curlytales.com/wp-content/uploads/2020/08/featurenature1-1170x614.jpg`,
      `test@test.com`,
      new Date()
    ),

    new Post(
      'Nature3',
      `3Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum 
      obcaecatiducimus nostrum laboriosam excepturi nisi quos beatae dolorum voluptatibus enim animi, 
      tenetur maximeut est expedita vero et cupiditate?`,
      `https://curlytales.com/wp-content/uploads/2020/08/featurenature1-1170x614.jpg`,
      `test@test.com`,
      new Date()
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
