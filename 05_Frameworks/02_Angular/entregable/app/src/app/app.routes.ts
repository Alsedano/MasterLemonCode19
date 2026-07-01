import { Routes } from '@angular/router';
import { Home } from './components/menu/public/home/home';
import { Login } from './components/menu/public/login/login';
import { About } from './components/menu/public/about/about';
import { Dashboard } from './components/menu/private/dashboard/dashboard';
import { Gallery } from './components/menu/private/gallery/gallery';
import { Profile } from './components/menu/private/profile/profile';
import { Crud } from './components/menu/private/crud/crud';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'about', component: About },
    { path: 'dashboard', component: Dashboard },
    { path: 'gallery', component: Gallery },
    { path: 'profile', component: Profile },
    { path: 'crud', component: Crud },
];
