import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  breakpoint: number;

  constructor() {
    this.breakpoint  = 2
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event : any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

}
