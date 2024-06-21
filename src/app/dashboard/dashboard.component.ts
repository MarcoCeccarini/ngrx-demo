import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service.';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user: any;

  constructor(private authService: AuthService) {
    this.user = authService.getDecodedToken();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
