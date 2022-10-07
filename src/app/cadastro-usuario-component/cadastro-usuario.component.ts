import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../app.service';

@Component({
  selector: 'cadastro-usuario-component',
  templateUrl: './cadastro-usuario.component.html',
})
export class CadastroUsuarioComponent{
  constructor(private apiService: ApiService, private route: Router) {}

  goToDashboard() {
    this.route.navigate(['/dashboard']);
  }

}
