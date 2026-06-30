import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./menu/public/home/home').then(m => m.Home) },
    { path: 'home', loadComponent: () => import('./menu/public/home/home').then(m => m.Home) },
    { path: 'login', loadComponent: () => import('./menu/public/login/login').then(m => m.Login) },
    { path: 'about', loadComponent: () => import('./menu/public/about/about').then(m => m.About) },
    { path: 'dashboard', loadComponent: () => import('./menu/private/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'gallery', loadComponent: () => import('./menu/private/gallery/gallery').then(m => m.Gallery) },
    { path: 'profile', loadComponent: () => import('./menu/private/profile/profile').then(m => m.Profile) },
    { path: 'crud', loadComponent: () => import('./menu/private/crud/crud').then(m => m.Crud) },
];
