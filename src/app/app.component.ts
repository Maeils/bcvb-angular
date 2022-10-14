import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bcvb-angular';
  router;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(router: Router) {
    this.router = router;
    this.navLinks = [
      {
        label: 'About',
        link: './about',
        index: 0
      }, {
        label: 'Second',
        link: './second',
        index: 1
      }, {
        label: 'Third',
        link: './third',
        index: 2
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
