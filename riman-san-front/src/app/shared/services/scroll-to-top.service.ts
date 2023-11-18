import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollToTopService {
  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  setScrollTopOnRouteChange() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }
}
