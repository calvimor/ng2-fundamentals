import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './share/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
    /**
     *
     */
    constructor(private eventService: EventService) { }
    //make an asynchronous method call like an AJAX call and then
    // when it returns, it will return that data.
    resolve() {
        return this.eventService.getEvents().map(events => events)
    }
}