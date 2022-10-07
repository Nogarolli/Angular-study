import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroReceitaComponent } from './cadastro-receita-component/cadastro-receita.component';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { LoginComponent } from './login-component/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario-component/cadastro-usuario.component';


const routes: Routes =[
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'usuario', component: CadastroUsuarioComponent},
  {path: 'receita', component: CadastroReceitaComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CadastroReceitaComponent,
    CadastroUsuarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
