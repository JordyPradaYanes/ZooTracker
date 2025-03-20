import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink, FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corregido: styleUrl -> styleUrls
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    // Aquí iría tu lógica de autenticación
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);

    // Ejemplo: Navegar a otra página después del login
    // this.router.navigate(['/dashboard']);
  }

  loginWithGoogle(): void {
    // Aquí iría la lógica para autenticación con Google
    console.log('Iniciando sesión con Google');

    // Ejemplo: Integración con Firebase Authentication u otro servicio
    // this.authService.signInWithGoogle().then(...);
  }
}