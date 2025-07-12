import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/autenticacao/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMenu = false;
  isMobile = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.checkIfMobile();
    window.onresize = () => this.checkIfMobile();
  }

  user$ = this.userService.retornarUser();

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'])
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
  }
}
