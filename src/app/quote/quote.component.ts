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
      ' zulfa', new Date(2019,2,2)),
    new Quotes('Happiness is not something ready-made. It comes from your own actions.', 'Nurdin', ' Belinda',
      new Date(2019,2,2)),
    new Quotes('Use your smile to change the world; don’t let the world change your smile.',
      'pheli', ' andrew', new Date(2019,2,2)),
  ]

  mostLikedQuote: string;
  mostLikedAuthor: string;
  mostLikedPoster : string;

  mostVotes = 0;

  deleteQuote(deleteit: any, index: any) {
    if (deleteit) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
 
    }
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

  counter1 = 0;
  counter2 = 0;

  upvote(quote) {
    quote.counter1 = quote.counter1 + 1;
  }
  downvote(quote) {
    quote.counter2 = quote.counter2 + 1;
  }

  getMostLikedQuote(){
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].counter1 > this.mostVotes){
        this.mostVotes = this.quotes[i].counter1;
        this.mostLikedQuote = this.quotes[i].information;
        this.mostLikedPoster = this.quotes[i].name;
        this.mostLikedAuthor = this.quotes[i].author;

      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}