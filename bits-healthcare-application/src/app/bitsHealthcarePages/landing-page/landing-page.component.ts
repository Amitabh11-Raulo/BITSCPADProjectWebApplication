import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public isButtonEnable = false;
  public isLoggedIn = true;

  constructor() { }

  ngOnInit(): void {
  }

  enableButtons() {
    this.isButtonEnable = true;
    this.isLoggedIn = !this.isLoggedIn;
  }

  logOut() {
    this.isLoggedIn = true;
    this.isButtonEnable = false;
  }

}
