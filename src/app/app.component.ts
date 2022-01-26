import { Component, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'paycard';
  cardNum = "XXXX XXXX XXXX XXXX"
  cardName = "FULL NAME"
  cardDate = "MM / YYYY"
  enteredCardNumber: any
  years: number[] = []
  expiry: any
  mmString: string = "";
  cvv: any;
  cvvEntering: any;


  
  // catching card number from func
  public enteredCardNum(x: any) {
    this.enteredCardNumber = x.target.value
    if (this.enteredCardNumber) {
      this.enteredCardNumber = this.stringSplitter(this.enteredCardNumber, x)
      x.target.value = this.enteredCardNumber
      this.cardNum = this.enteredCardNumber
    }
    if (!this.enteredCardNumber) {
      this.cardNum = "XXXX XXXX XXXX XXXX"
    }
  }

  // 4 digits seperation for card number
  public stringSplitter(cardNumber: any, x: any): any {
    console.log(x.keyCode)
    if (x.keyCode === 8) {
      return cardNumber
    }
    else {
      if (cardNumber.length === 4) {
        cardNumber = cardNumber + " "
        return cardNumber
      }
      else if (cardNumber.length === 9) {
        cardNumber = cardNumber + " "
        return cardNumber
      }
      else if (cardNumber.length === 14) {
        cardNumber = cardNumber + " "
        return cardNumber
      }
      else {
        return cardNumber
      }
    }

  }

  // card name binding
  public enteredCardName(name: any) {
    if (name.target.value) {
      this.cardName = name.target.value
    }
    if (!name.target.value) {
      this.cardName = "FULL NAME"
    }
  }

  // expiry date binding and conversion
  public expiryDate() {
    let date = new Date(this.expiry);
    let mm = date.getMonth() + 1;
    if (mm <= 9) {
      this.mmString = "0" + mm.toString()
    } else {
      this.mmString = mm.toString()
    }
    let yyyy = date.getFullYear();
    this.cardDate = this.mmString + " / " + yyyy.toString()
  }
}
