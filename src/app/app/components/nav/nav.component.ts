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
    { url: '/accommodation', label: 'Accommodation'},
    { url: '/photo-gallery', label: 'Photo Gallery'},
    { url: '/location', label: 'Attractions'},
    { url: '/activities', label: 'Activities'},
    { url: '/booking', label: 'Reservations'},
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
      // Breakpoints.HandsetPortrait,
      // Breakpoints.Handset
      
      Breakpoints.XSmall
      ])
      .subscribe(result => {

        this.isPhone = false; 

        if (result.matches) {
          this.isPhone = true;
        }
      })
    }
}
