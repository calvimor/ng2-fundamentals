import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"
import { Injectable } from '@angular/core'
import { EventService } from '../share/event.service'

@Injectable()
export class EventRouterActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route:ActivatedRouteSnapshot):boolean {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if(!eventExists)
            this.router.navigate(['/404'])
        
        return eventExists
    }
}