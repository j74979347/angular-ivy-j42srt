import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as expenseData from '../expense_sample.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Jayant Tadiparthi';
  expenseDetails: any;
  whoIndex: number;
  whereIndex: number;
  overlayOpen = false;
  overlayData = [];

  constructor(private _httpClient: HttpClient) {
    this.importJSON();
  }

  private importJSON() {
    this.expenseDetails = expenseData["default"];
    // this._httpClient.get('./expense_sample.json').subscribe(
    //   (data) => {
    //     this.expenseDetails = data;
    //   },
    //   (err) => {
    //     console.log(err);

    //   }
    // );
  }

  public populateOverlay(whoIndex, whereIndex) {
    this.overlayOpen = !this.overlayOpen;
    this.whoIndex = whoIndex;
    this.whereIndex = whereIndex;
    this.overlayData = this.expenseDetails[whoIndex].WEEK[whereIndex].EXPENSE;
  }
}

// Read from a JSON file [expense_sample.json] and show output as a table.
// Manage/click on the individual table line items [Add a link / button / click on a row]
// Display individual item on an overlay or a different page.
