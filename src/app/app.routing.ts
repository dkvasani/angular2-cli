import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';

const headerComp = {
            path: '',
            component: HeaderComponent,
            outlet: 'header'
        };
const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [headerComp]
    },
    {
        path: 'about',
        component: AboutusComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [headerComp]
    },
    {
        path: 'register',
        component: RegisterComponent,
        children: [headerComp]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);