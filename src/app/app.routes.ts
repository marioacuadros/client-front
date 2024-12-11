import { Routes } from '@angular/router';
import { SearchClientComponent } from './components/search-client/search-client.component'
import { ViewClientComponent } from './components/view-client/view-client.component'

export const routes: Routes = [
    {path: '', component: SearchClientComponent},
    {path: 'search', component: SearchClientComponent},
    {path: 'view', component: ViewClientComponent},
];
