import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/events-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouterActivator } from './events/events-details/event-route-activator.service'

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, //using function for preventing to leave page before saving data
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] }, //using a service for preventing access a page with no data
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]