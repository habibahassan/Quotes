import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'votes-box',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  likes: number = 0;
  dislikes: number = 0;

  likeBtn() {
    this.likes++;
  }
  dislikeBtn() {
    this.dislikes--;
  }
  constructor() { }

  ngOnInit() {
  }

}