import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import{LoginComponent} from './login/login.component';
import{AboutusComponent} from './aboutus/aboutus.component';


const appRoutes : Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutusComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);