import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() deleteit = new EventEmitter<boolean>();

  quoteDeleting(deleting: boolean) {
    this.deleteit.emit(deleting);
  }


  constructor() { }

  ngOnInit() {
  }

}