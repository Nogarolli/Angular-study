import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private _storage: LocalStorageService
  ) {}

  usuario: string = '';
  senha: string = '';

  usuarioCorreto: string = 'Overwatch';
  senhaCorreta: string = 'gameoftheyear';

  usuarioLogado: boolean = false;
  manterLogado: boolean = false;

  userData: any = {};

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.manterLogado = this._storage.getStorage('manterLogado');
    this.userData = JSON.parse(
      JSON.stringify(this._storage.getStorage('dadosUser'))
    );
    console.log(this.userData);
    if (this.manterLogado) {
      if (this.userData) {
        this.usuario = this.userData.usuario;
        this.senha = this.userData.senha;
      }
    }
  }

  keepLogado() {
    //this.manterLogado = !this.manterLogado;
    this._storage.setStorage('manterLogado', this.manterLogado);
    if (this.usuario && this.senha !== '') {
      let xpto: any = {
        usuario: this.usuario,
        senha: this.senha,
      };
      this._storage.setStorage('dadosUser', xpto);
    }
  }

  logar() {
    console.log('¶¶');
    //this.manterLogado = this._storage.getStorage('manterLogado')
    if (
      this.usuario === this.usuarioCorreto &&
      this.senha === this.senhaCorreta
    ) {
      this.keepLogado();
      this.route.navigate(['/dashboard']);
      this.usuarioLogado = true;
    } else if (
      this.usuario === this.usuarioCorreto &&
      this.senha !== this.senhaCorreta
    ) {
      this.toastr.info('senha incorreta');
    } else {
      this.toastr.error('Usuario e senha incorretos');
    }
  }
}
