export class Quotes {
  public showInformation: boolean;
  public counter1: number;
  public counter2: number;

  constructor(public name: string, public information: string, public author: string,
    public postDate: Date, ) {

    this.showInformation = false;

    this.counter1 = 0;
    this.counter2 = 0;
  }
}