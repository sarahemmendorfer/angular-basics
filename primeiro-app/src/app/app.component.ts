import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-app';
  nome!: string;
  emailuser!: string;
  diaNascimento!: string;
  telefone!: number;
  senha!: number;
}
