import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ServicesComponent } from './services.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'service',
        component: ServicesComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);