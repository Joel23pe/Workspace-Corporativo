import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    // Aquí puedes simular la autenticación
    console.log('Login exitoso, redirigiendo...');
    this.router.navigate(['/dashboard']);
  }
}