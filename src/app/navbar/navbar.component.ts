import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @HostListener('window:scroll', [])

  onWindowScroll():void {
    let element = document.getElementById('navbarThingy') as HTMLElement;

    if (document.documentElement.scrollTop > 20) {
      element.classList.add('solid')
    }
    else {
      element.classList.remove('solid')
    }
  }
}
