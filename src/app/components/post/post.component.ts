import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  surfacing = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  getPostInfo(post: Post): void {
    this.surfacing.emit(post);
  }


}
