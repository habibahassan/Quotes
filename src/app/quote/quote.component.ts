import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes('We are shaped and fashioned by what we love.', 'salha',
      ' zulfa', new Date()),
    new Quotes('Happiness is not something ready-made. It comes from your own actions.', 'Nurdin', ' Belinda',
      new Date()),
    new Quotes('Use your smile to change the world; don’t let the world change your smile.',
      'pheli', ' andrew', new Date()),
  ]

  deleteQuote(deleteit: any, index: any) {
    if (deleteit) {
      this.quotes.splice(index, 1);
    }
  }

  toogleDetails(index: any) {
    this.quotes[index].showInformation = !
      this.quotes[index].showInformation;
  }

  addNewQuotes(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}