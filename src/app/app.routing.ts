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
import { LinkComponent } from './link/link.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { ExamComponent } from './exam/exam.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { StockmarketComponent } from './stockmarket/stockmarket.component';

const headerComp = {
    path: '',
    component: HeaderComponent,
    outlet: 'header'
};

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [headerComp],
        data: {
            title: 'Some Page'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        children: [headerComp],
        data: { title: 'My Calendar' } 
    },
    {
        path: 'about',
        component: AboutusComponent,
        children: [headerComp],
        data: { title: 'My Calendar' } 
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
    {
        path: 'link',
        component: LinkComponent,
        children: [headerComp]
    },
    {
        path: 'category',
        component: CategoryComponent,
        children: [headerComp]
    },
    {
        path: 'tag',
        component: TagComponent,
        children: [headerComp]
    },
    {
        path: 'exam',
        component: ExamComponent,
        children: [headerComp]
    },
    {
        path: 'result',
        component: ResultComponent,
        children: [headerComp]
    },

    {
        path: 'stockmarket',
        component: StockmarketComponent,
        children: [headerComp]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);