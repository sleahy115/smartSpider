import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { JoinComponent } from './join/join.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path: 'Contact',
        component: ContactComponent
    },
    {
        path: 'Search',
        component: SearchComponent
    },
        {
        path: 'Join',
        component: JoinComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);