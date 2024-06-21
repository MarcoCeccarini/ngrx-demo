import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service.';
import { CrudService } from '../services/crud.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  // imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  user: any;
  users: User[] ;

  constructor(private authService: AuthService, private crudService: CrudService<User>) {
    this.user = authService.getDecodedToken();
  }
  ngOnInit(): void {
    this.crudService.getAll("http://localhost:4200/api/users/").subscribe(data => 
      this.users = data
    );
  }

  onLogout(): void {
    this.authService.logout();
  }
}
