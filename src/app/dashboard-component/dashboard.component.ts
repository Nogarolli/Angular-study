import { Component, Input } from '@angular/core';
import { ApiService } from '../app.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'dash-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  items: any = [];
  @Input() usuarioIn: string = '';
  userData: any;

  constructor(
    private apiService: ApiService,
    private route: Router,
    private _storage: LocalStorageService
  ) {}

  ngOnInit() {
    this.chamaApi();
    this.userData = JSON.parse(
      JSON.stringify(this._storage.getStorage('dadosUser'))
    );
    if (this.userData) {
      this.usuarioIn = this.userData.usuario;
    }
  }

  chamaApi() {
    this.apiService.getValues().subscribe((items) => {
      this.items = items;
      console.log(items);
    });
  }

  goToCadastroUsuario() {
    this.route.navigate(['/usuario']);
  }
  goToCadastroReceita() {
    this.route.navigate(['/receita']);
  }

  logout() {
    this.route.navigate(['/login']);
  }
}
