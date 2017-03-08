import { Routes } from '@angular/router'
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver
} from './events/index'
import { Error404Component } from './errors/404.component'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, //using function for preventing to leave page before saving data
    { path: 'events', component: EventsListComponent, resolve: { events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] }, //using a service for preventing access a page with no data
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]