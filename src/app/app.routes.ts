import { Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
	{path: '', component: MainPageComponent},
	{path: 'regresar', component: MainPageComponent},
	{path: 'login', component: LoginComponent},
	{ path: '**', redirectTo: '' }
];
