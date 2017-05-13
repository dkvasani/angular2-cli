import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

const headerComp = {
            path: '',
            component: HeaderComponent,
            outlet: 'header'
        };
        
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [headerComp]
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [headerComp]
    },
    {
        path: 'about',
        component: AboutusComponent,
        children: [headerComp]
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
    {
        path: 'user',
        component: UserComponent,
        children: [headerComp]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [headerComp]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);