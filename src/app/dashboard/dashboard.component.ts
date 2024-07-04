import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service.';
import { GenericService } from '../services/generic.service';
import { User } from '../model/user';
import { MatTableDataSource } from '@angular/material/table';

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

  displayedColumns: string[] = ['fullName','email'];
  dataSource = new MatTableDataSource(null);

  constructor(private authService: AuthService, private service: GenericService<User>) {
    this.user = authService.getDecodedToken();
  }
  ngOnInit(): void {
    /*this.service.getAll("http://localhost:4200/api/users/").subscribe(data => {
      this.users = data;
      this.dataSource.data = data;
    }
    );*/
  }

  onLogout(): void {
    this.authService.logout();
  }


  isVisible: boolean = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }


  handleNotification(message: string) {
    console.log(message);
  }
}
