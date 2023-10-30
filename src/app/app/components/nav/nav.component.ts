import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isPhone = false;
  routes = [
    { url: '/', label: 'Welcome'},
    { url: '/accommodation', label: 'Accommodation'},
    { url: '/photo-gallery', label: 'Photo Gallery'},
    { url: '/location', label: 'Attractions'},
    { url: '/activities', label: 'Activities'},
  ]

  constructor(
    private responsive: BreakpointObserver,
    private router: Router
  ) {}

  navClick (url: string) {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.responsive.observe([   
      Breakpoints.HandsetPortrait,
      ])
      .subscribe(result => {

        this.isPhone = false; 

        if (result.matches) {
          this.isPhone = true;
        }
      })
    }
}
