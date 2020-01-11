import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote'

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuotes = new Quotes('', '', '', new Date());
  @Output() addQuotes = new EventEmitter<Quotes>();

  submitQuotes() {
    let quoteLength = this.newQuotes.name.length;
    if (quoteLength < 6) {
      alert("Hey, submit a quote");
    } else {
      this.addQuotes.emit(this.newQuotes);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}