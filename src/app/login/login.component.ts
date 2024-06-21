import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service.';

@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  frm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.frm = this.fb.group({
      username: ['john@home.com', Validators.required],
      password: ['qwerty', Validators.required],
      message: ''
    });
  }


  onSubmit(){
    console.log("submit")

    this.authService.login(this.frm.controls['username'].value, this.frm.controls['password'].value).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to the dashboard after successful login
      },
      (error) => {
        console.error(error);
        // Handle error (e.g., display a message to the user)
      }
    );
  }

}
