import { Component } from '@angular/core';
import { AuthService } from '../../services/authservice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService, private router: Router) {}

  async goTo(link) {
    await this.router.navigate([link]);
  }

  async logOut() {
    await this.authService.logoutUser();
    await this.router.navigate(['login']);
  }

}
