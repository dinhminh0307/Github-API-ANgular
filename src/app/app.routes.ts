import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', // if path is empty, we are at the root of the route  
        pathMatch: 'full', //ensures that the route is only matched when the URL is exactly the root path
        loadComponent: () => {
            return(
                import('./home/home.component').then(m => m.HomeComponent) // this mean it will render home component and no need to import in app.componetn
            )
        },
        },
        // define route for user-profile
        {
            path: 'user-profile',
            pathMatch: 'full',
            loadComponent() {
                return import('./user-profile/user-profile.component').then(m => m.UserProfileComponent); // will render user profile component
            },
        }
];
