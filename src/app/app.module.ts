import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Copie1Component } from './dashboard/copie1/copie1.component';
import { Copie2Component } from './dashboard/copie2/copie2.component';
import { Copie3Component } from './dashboard/copie3/copie3.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

export const appConfig = {
  imports: [
    RouterModule.forRoot(routes),
    LoginComponent,
    Copie1Component,
    Copie2Component,
    Copie3Component
  ]
};
