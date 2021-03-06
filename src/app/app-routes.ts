import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {UserComponent} from './components/user/user.component';

// import {NewUserComponent} from './components/user/new-user.component';
// import {EditUserComponent} from './components/user/edit-user.component';
// import {UserDetailsComponent} from './components/user/user-details.component';

import {USER_ROUTES} from './components/user/user.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    children: USER_ROUTES
    // children: [
      // { path: 'new', component: NewUserComponent },
      // { path: 'edit', component: EditUserComponent },
      // { path: 'details', component: UserDetailsComponent },
      // { path: '**', pathMatch: 'full', redirectTo: 'new' }
    // ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
