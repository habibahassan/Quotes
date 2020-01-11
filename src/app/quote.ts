export class Quotes {
  public showInformation: boolean;
  
  constructor(public name: string, public information: string, public author: string,
    public postDate: Date, ) {

    this.showInformation = false;

    
  }
}