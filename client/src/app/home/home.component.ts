import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('http://localhost:5094/api/users').subscribe({
      next: (res) => ((this.users = res), console.log(this.users)),
      error: (err) => console.log(err),
    });
    console.log(this.users);
  }

  toggleRegister(event: boolean) {
    this.registerMode = event;
  }
}
