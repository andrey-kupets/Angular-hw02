import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;

  @Output()
  surfacing = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  getCommentInfo(comment: Comment): void {
    this.surfacing.emit(comment);
  }
}
