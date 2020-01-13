import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { DateCountPipe } from './date-count.pipe'

import { AppComponent } from './app.component';
import { QuotesComponent } from './quote/quote.component';
import { QuotesDetailsComponent } from './quote-detail/quote-detail.component';
import { QuotesFormComponent } from './quote-form/quote-form.component';
import { quotesDirective } from './quotes.directive';
import { HighlightquoteDirective } from './highlightquote.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    DateCountPipe,
    quotesDirective,
    HighlightquoteDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }