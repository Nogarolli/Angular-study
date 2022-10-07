import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'trabalho-noga';
  inscricao?: boolean;
  usuarioLogado: boolean = false;
  usuarioIn: string = ''

  onLogin(value: boolean) {
    this.inscricao = value;
    this.usuarioLogado = true;
  }

  onLogin2(user: string){
    this.usuarioIn = user
  }
}
